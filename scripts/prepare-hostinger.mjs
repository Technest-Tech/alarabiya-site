import { copyFile, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, isAbsolute, join, normalize, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = join(projectRoot, "dist", "client");
const publicRoot = join(projectRoot, "backend", "public");
const manifestPath = join(projectRoot, "backend", "storage", "app", "frontend-files.json");

const skippedPaths = new Set([
  ".assetsignore",
  ".htaccess",
  "_headers",
]);

const fontPreloadPattern = /<link rel="preload" href="\/assets\/_vinext_fonts\/[^"]+\.woff2" as="font" type="font\/woff2" crossorigin\s*\/?>(?:\r?\n)?/g;
const modulePreloadPattern = /<link rel="modulepreload"[^>]*\/?>(?:\r?\n)?/g;
const bootstrapPattern = /<script id="_R_">import\("([^"]+)"\)<\/script>/;

function optimizeHtml(html) {
  return html
    .replace(fontPreloadPattern, "")
    .replace(modulePreloadPattern, "")
    .replace(bootstrapPattern, (_, bootstrapPath) => (
      `<script id="_R_">addEventListener("load",()=>{const hydrate=()=>import("${bootstrapPath}");"requestIdleCallback"in self?requestIdleCallback(hydrate,{timeout:1200}):setTimeout(hydrate,250)},{once:true})</script>`
    ));
}

function isSafeRelativePath(file) {
  return Boolean(file) && !isAbsolute(file) && normalize(file) === file && !file.startsWith(`..${sep}`);
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = join(directory, entry.name);

    if (entry.isDirectory()) files.push(...(await walk(absolutePath)));
    if (entry.isFile()) files.push(absolutePath);
  }

  return files;
}

async function removePreviousFrontendBuild() {
  try {
    const previousFiles = JSON.parse(await readFile(manifestPath, "utf8"));

    if (!Array.isArray(previousFiles)) return;

    for (const file of previousFiles) {
      if (typeof file !== "string" || !isSafeRelativePath(file)) continue;

      const target = resolve(publicRoot, file);
      if (!target.startsWith(`${publicRoot}${sep}`)) continue;

      await rm(target, { force: true });
    }
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
  }
}

await removePreviousFrontendBuild();

const copiedFiles = [];
const sourceFiles = await walk(sourceRoot);

for (const source of sourceFiles) {
  const sourceRelative = relative(sourceRoot, source);

  if (
    skippedPaths.has(sourceRelative) ||
    sourceRelative.startsWith(`api${sep}`) ||
    sourceRelative.startsWith(`.vite${sep}`)
  ) {
    continue;
  }

  const targetRelative = sourceRelative === "index.html"
    ? join("site", "index.html")
    : sourceRelative;
  const target = join(publicRoot, targetRelative);

  await mkdir(dirname(target), { recursive: true });

  if (sourceRelative.endsWith(".html")) {
    const html = await readFile(source, "utf8");
    await writeFile(target, optimizeHtml(html));
  } else {
    await copyFile(source, target);
  }

  copiedFiles.push(targetRelative);
}

await mkdir(dirname(manifestPath), { recursive: true });
await writeFile(manifestPath, `${JSON.stringify(copiedFiles.sort(), null, 2)}\n`);

console.log(`Prepared ${copiedFiles.length} static frontend files in backend/public.`);
