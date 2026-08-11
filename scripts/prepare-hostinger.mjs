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
  await copyFile(source, target);
  copiedFiles.push(targetRelative);
}

await mkdir(dirname(manifestPath), { recursive: true });
await writeFile(manifestPath, `${JSON.stringify(copiedFiles.sort(), null, 2)}\n`);

console.log(`Prepared ${copiedFiles.length} static frontend files in backend/public.`);
