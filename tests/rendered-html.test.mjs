import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("production homepage contains the academy conversion journey", async () => {
  const html = await readFile(new URL("dist/client/index.html", root), "utf8");

  assert.match(html, /<title>Online Quran &amp; Arabic Classes \| Alarabiya Academy<\/title>/);
  assert.match(html, /\/logo-mark\.webp/);
  assert.match(html, /\/favicon-aa-v3\.ico/);
  assert.match(html, /\/favicon-aa-v3-32\.png/);
  assert.match(html, /\/favicon-aa-v3-16\.png/);
  assert.match(html, /\/og-arabic-quran\.png/);
  assert.match(html, /\/images\/hero-family\.webp/);
  assert.match(html, /\/images\/student-learning\.webp/);
  assert.match(html, /\/images\/female-tutor\.webp/);
  assert.match(html, /\/images\/course-quran-reading\.webp/);
  assert.match(html, /\/images\/course-tajweed-hifz\.webp/);
  assert.match(html, /\/images\/course-arabic-language\.webp/);
  assert.match(html, /\/images\/course-islamic-studies\.webp/);
  assert.match(html, /href="\/ar\/"/);
  assert.doesNotMatch(html, /\bNOUR\b|\bNour\b/);
  assert.match(html, /Learn Arabic/);
  assert.match(html, /Read Quran/);
  assert.match(html, /Arabic, Quran, or/);
  assert.match(html, /href="\/online-quran-classes\/"/);
  assert.match(html, /href="\/online-arabic-classes\/"/);
  assert.match(html, /href="\/online-arabic-and-quran-classes\/"/);
  assert.match(html, /Start your free lesson/);
  assert.match(html, /Live lesson preview/);
  assert.match(html, /Tap to bring it to life/);
  assert.match(html, /Quran Reading/);
  assert.match(html, /Tajweed &amp; Hifz/);
  assert.match(html, /Arabic Language/);
  assert.match(html, /Islamic Studies/);
  assert.match(html, /Meet some of our/);
  assert.match(html, /\/courses\/quran-reading\//);
  assert.doesNotMatch(html, /Mohamed Samy|Roqaya Badr|Mohamed Ebrahim|teacher-mohamed|teacher-ruqaya/);
  assert.match(html, /Loading teachers/);
  assert.match(html, /Test your knowledge/);
  assert.match(html, /Who would you like to assess/);
  assert.match(html, /Continue/);
  assert.match(html, /action="\/api\/enroll"/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /og:image/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Starter Project/);
});

test("Arabic homepage is localized, RTL, and linked to English", async () => {
  const [html, css] = await Promise.all([
    readFile(new URL("dist/client/ar/index.html", root), "utf8"),
    readFile(new URL("app/globals.css", root), "utf8"),
  ]);

  assert.match(html, /dir="rtl"/);
  assert.match(html, /lang="ar"/);
  assert.match(html, /دورات القرآن الكريم واللغة العربية أونلاين/);
  assert.match(html, /برامج صُممت من أجل/);
  assert.match(html, /احجز حصتك المجانية/);
  assert.match(html, /معاينة حصة مباشرة/);
  assert.match(html, /class="hero-copy"/);
  assert.match(html, /اضغط لتبدأ التجربة/);
  assert.match(html, /اختبر معلوماتك/);
  assert.match(html, /لمن تريد تحديد المستوى/);
  assert.match(html, /متابعة/);
  assert.match(html, /تعرّف إلى بعض/);
  assert.match(html, /\/ar\/courses\/quran-reading\//);
  assert.doesNotMatch(html, /محمد سامي|رقيه بدر|محمد إبراهيم|teacher-mohamed|teacher-ruqaya/);
  assert.match(html, /action="\/api\/enroll"/);
  assert.match(html, /href="\/"/);
  assert.match(html, /\/images\/course-quran-reading\.webp/);
  assert.match(css, /\.rtl-site \.hero-content\s*\{[^}]*direction: ltr/);
  assert.match(css, /\.rtl-site \.hero-copy\s*\{[^}]*direction: rtl/);
  assert.match(css, /\/images\/hero-family-ar\.webp/);
  assert.match(css, /html,\s*body\s*\{\s*overflow-x: clip/);
});

test("course pages use dashboard-managed teacher slots and placeholder profiles are not generated", async () => {
  const [courseEn, courseAr] = await Promise.all([
    readFile(new URL("dist/client/courses/quran-reading/index.html", root), "utf8"),
    readFile(new URL("dist/client/ar/courses/quran-reading/index.html", root), "utf8"),
  ]);

  assert.match(courseEn, /A clear path to/);
  assert.match(courseEn, /Inside the program/);
  assert.match(courseAr, /مسار واضح نحو/);
  assert.match(courseAr, /داخل البرنامج/);
  assert.match(courseEn, /Loading teachers/);
  assert.match(courseAr, /جارٍ تحميل المعلمين/);
  await assert.rejects(access(new URL("dist/client/teachers/mohamed-samy/index.html", root)));
  await assert.rejects(access(new URL("dist/client/ar/teachers/mohamed-samy/index.html", root)));
});

test("buyer-focused Quran, Arabic, and combined landing pages are generated", async () => {
  const pages = await Promise.all([
    "online-quran-classes",
    "online-quran-classes-for-kids",
    "online-quran-classes-for-adults",
    "female-quran-teacher-online",
    "online-arabic-classes",
    "online-arabic-and-quran-classes",
  ].map((slug) => readFile(new URL(`dist/client/${slug}/index.html`, root), "utf8")));

  for (const html of pages) {
    assert.match(html, /Request a free assessment/);
    assert.match(html, /name="program"/);
    assert.match(html, /action="\/api\/enroll"/);
    assert.match(html, /Choose the right study focus/);
    assert.match(html, /Personal tutor matching/);
    assert.match(html, /application\/ld\+json/);
  }

  assert.match(pages[0], /Online Quran classes that start at your level/);
  assert.match(pages[1], /Online Quran classes for kids that build confidence/);
  assert.match(pages[2], /Learn Quran online as an adult/);
  assert.match(pages[3], /Learn Quran online with a female teacher/);
  assert.match(pages[4], /Online Arabic classes for speaking, reading, and understanding/);
  assert.match(pages[5], /Learn Arabic and Quran online in one personal plan/);
});

test("placement quiz contains real Arabic, Islamic, and Tajweed questions", async () => {
  const quiz = await readFile(new URL("app/level-assessment.tsx", root), "utf8");

  assert.match(quiz, /Which Arabic word means/);
  assert.match(quiz, /How many pillars of Islam/);
  assert.match(quiz, /Madd Tabi/);
  assert.match(quiz, /أي كلمة عربية تعني/);
  assert.match(quiz, /كم عدد أركان الإسلام/);
  assert.match(quiz, /كم حركة يُمد المد الطبيعي/);
});

test("Hostinger build contains the Laravel entrypoint and static public files", async () => {
  await Promise.all([
    access(new URL("backend/.htaccess", root)),
    access(new URL("backend/public/.htaccess", root)),
    access(new URL("backend/public/index.php", root)),
    access(new URL("backend/routes/api.php", root)),
    access(new URL("backend/public/site/index.html", root)),
    access(new URL("backend/public/robots.txt", root)),
    access(new URL("backend/public/sitemap.xml", root)),
    access(new URL("backend/public/og-arabic-quran.png", root)),
    access(new URL("backend/public/logo.png", root)),
    access(new URL("backend/public/logo-mark.webp", root)),
    access(new URL("backend/public/images/hero-family.webp", root)),
    access(new URL("backend/public/images/hero-family-ar.webp", root)),
    access(new URL("backend/public/images/student-learning.webp", root)),
    access(new URL("backend/public/images/female-tutor.webp", root)),
    access(new URL("backend/public/images/course-quran-reading.webp", root)),
    access(new URL("backend/public/images/course-tajweed-hifz.webp", root)),
    access(new URL("backend/public/images/course-arabic-language.webp", root)),
    access(new URL("backend/public/images/course-islamic-studies.webp", root)),
    access(new URL("backend/public/favicon.png", root)),
    access(new URL("backend/public/favicon.ico", root)),
    access(new URL("backend/public/favicon-16x16.png", root)),
    access(new URL("backend/public/favicon-32x32.png", root)),
    access(new URL("backend/public/favicon-academy.ico", root)),
    access(new URL("backend/public/favicon-academy-16x16.png", root)),
    access(new URL("backend/public/favicon-academy-32x32.png", root)),
    access(new URL("backend/public/favicon-aa-v3.ico", root)),
    access(new URL("backend/public/favicon-aa-v3-16.png", root)),
    access(new URL("backend/public/favicon-aa-v3-32.png", root)),
    access(new URL("backend/public/apple-touch-icon.png", root)),
    access(new URL("backend/public/icon-192.png", root)),
    access(new URL("backend/public/icon-512.png", root)),
    access(new URL("backend/public/ar/index.html", root)),
    access(new URL("backend/public/online-quran-classes/index.html", root)),
    access(new URL("backend/public/online-quran-classes-for-kids/index.html", root)),
    access(new URL("backend/public/online-quran-classes-for-adults/index.html", root)),
    access(new URL("backend/public/female-quran-teacher-online/index.html", root)),
    access(new URL("backend/public/online-arabic-classes/index.html", root)),
    access(new URL("backend/public/online-arabic-and-quran-classes/index.html", root)),
    access(new URL("backend/public/privacy/index.html", root)),
    access(new URL("backend/public/terms/index.html", root)),
  ]);

  await assert.rejects(access(new URL("backend/public/images/teacher-mohamed-samy.webp", root)));
  await assert.rejects(access(new URL("backend/public/images/teacher-ruqaya-badr.webp", root)));
  await assert.rejects(access(new URL("backend/public/images/teacher-mohamed-ebrahim.webp", root)));

  const rootHtaccess = await readFile(new URL("backend/.htaccess", root), "utf8");
  const preparedHome = await readFile(new URL("backend/public/site/index.html", root), "utf8");
  assert.match(rootHtaccess, /public\/site\/index\.html/);
  assert.match(rootHtaccess, /public\/\$1\/index\.html/);
  assert.doesNotMatch(preparedHome, /rel="preload"[^>]+woff2/);
  assert.doesNotMatch(preparedHome, /rel="modulepreload"/);
  assert.doesNotMatch(preparedHome, /<script id="_R_">import\(/);
  assert.match(preparedHome, /requestIdleCallback/);
});

test("starter preview infrastructure is fully removed", async () => {
  const packageJson = await readFile(new URL("package.json", root), "utf8");
  const page = await readFile(new URL("app/page.tsx", root), "utf8");

  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(page, /SkeletonPreview|_sites-preview/);
  await assert.rejects(access(new URL("app/_sites-preview/SkeletonPreview.tsx", root)));
});

test("mobile navigation and enrollment stay touch-friendly", async () => {
  const [css, motionEffects] = await Promise.all([
    readFile(new URL("app/globals.css", root), "utf8"),
    readFile(new URL("app/motion-effects.tsx", root), "utf8"),
  ]);

  assert.match(css, /\.mobile-menu nav\s*\{[^}]*position: absolute/);
  assert.match(css, /\.site-header\s*\{[^}]*height: 68px/);
  assert.match(css, /\.enroll-benefits\s*\{[^}]*grid-template-columns: repeat\(3/);
  assert.match(css, /font-size: 16px/);
  assert.match(css, /scroll-behavior: auto/);
  assert.match(motionEffects, /mobileMenuLinks/);
  assert.match(motionEffects, /event\.key === "Escape"/);
});
