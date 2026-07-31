import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("production homepage contains the academy conversion journey", async () => {
  const html = await readFile(new URL("dist/client/index.html", root), "utf8");

  assert.match(html, /<title>Online Quran &amp; Arabic Classes \| Alarabiya Academy<\/title>/);
  assert.match(html, /\/logo\.png/);
  assert.match(html, /\/og\.png/);
  assert.match(html, /\/images\/hero-family\.webp/);
  assert.match(html, /\/images\/student-learning\.webp/);
  assert.match(html, /\/images\/female-tutor\.webp/);
  assert.match(html, /\/images\/course-quran-reading\.webp/);
  assert.match(html, /\/images\/course-tajweed-hifz\.webp/);
  assert.match(html, /\/images\/course-arabic-language\.webp/);
  assert.match(html, /\/images\/course-islamic-studies\.webp/);
  assert.match(html, /href="\/ar\/"/);
  assert.doesNotMatch(html, /\bNOUR\b|\bNour\b/);
  assert.match(html, /Learn the Quran/);
  assert.match(html, /Start your free lesson/);
  assert.match(html, /Live lesson preview/);
  assert.match(html, /Tap to bring it to life/);
  assert.match(html, /Quran Reading/);
  assert.match(html, /Tajweed &amp; Hifz/);
  assert.match(html, /Arabic Language/);
  assert.match(html, /Islamic Studies/);
  assert.match(html, /Meet some of our/);
  assert.match(html, /\/teachers\/mohamed-samy\//);
  assert.match(html, /\/courses\/quran-reading\//);
  assert.match(html, /\/images\/teacher-mohamed-samy\.webp/);
  assert.match(html, /Test your knowledge/);
  assert.match(html, /Who would you like to assess/);
  assert.match(html, /Continue/);
  assert.match(html, /action="\/api\/enroll\.php"/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /og:image/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Starter Project/);
});

test("Arabic homepage is localized, RTL, and linked to English", async () => {
  const html = await readFile(new URL("dist/client/ar/index.html", root), "utf8");

  assert.match(html, /dir="rtl"/);
  assert.match(html, /lang="ar"/);
  assert.match(html, /دورات القرآن الكريم واللغة العربية أونلاين/);
  assert.match(html, /برامج صُممت من أجل/);
  assert.match(html, /احجز حصتك المجانية/);
  assert.match(html, /معاينة حصة مباشرة/);
  assert.match(html, /اضغط لتبدأ التجربة/);
  assert.match(html, /اختبر معلوماتك/);
  assert.match(html, /لمن تريد تحديد المستوى/);
  assert.match(html, /متابعة/);
  assert.match(html, /تعرّف إلى بعض/);
  assert.match(html, /\/ar\/teachers\/mohamed-samy\//);
  assert.match(html, /\/ar\/courses\/quran-reading\//);
  assert.match(html, /action="\/api\/enroll\.php"/);
  assert.match(html, /href="\/"/);
  assert.match(html, /\/images\/course-quran-reading\.webp/);
});

test("course and teacher detail pages are generated in both languages", async () => {
  const [courseEn, courseAr, teacherEn, teacherAr] = await Promise.all([
    readFile(new URL("dist/client/courses/quran-reading/index.html", root), "utf8"),
    readFile(new URL("dist/client/ar/courses/quran-reading/index.html", root), "utf8"),
    readFile(new URL("dist/client/teachers/mohamed-samy/index.html", root), "utf8"),
    readFile(new URL("dist/client/ar/teachers/mohamed-samy/index.html", root), "utf8"),
  ]);

  assert.match(courseEn, /A clear path to/);
  assert.match(courseEn, /Inside the program/);
  assert.match(courseAr, /مسار واضح نحو/);
  assert.match(courseAr, /داخل البرنامج/);
  assert.match(teacherEn, /Submit a genuine review/);
  assert.match(teacherEn, /action="\/api\/review\.php"/);
  assert.match(teacherEn, /Mohamed Samy/);
  assert.match(teacherEn, /Lesson standards/);
  assert.match(teacherEn, /Free personal assessment/);
  assert.doesNotMatch(teacherEn, /Demo profile|Demo tutor|Demo review|demo reviews|not verified testimonials/);
  assert.match(teacherAr, /أرسل تقييماً حقيقياً/);
  assert.match(teacherAr, /محمد سامي/);
  assert.doesNotMatch(teacherAr, /ملف تجريبي|تقييم تجريبي|تقييمات تجريبية|بيانات تجريبية/);
  assert.match(teacherAr, /dir="rtl"/);
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

test("Hostinger build contains required public files", async () => {
  await Promise.all([
    access(new URL("dist/client/.htaccess", root)),
    access(new URL("dist/client/api/enroll.php", root)),
    access(new URL("dist/client/api/review.php", root)),
    access(new URL("dist/client/robots.txt", root)),
    access(new URL("dist/client/sitemap.xml", root)),
    access(new URL("dist/client/og.png", root)),
    access(new URL("dist/client/logo.png", root)),
    access(new URL("dist/client/images/hero-family.webp", root)),
    access(new URL("dist/client/images/student-learning.webp", root)),
    access(new URL("dist/client/images/female-tutor.webp", root)),
    access(new URL("dist/client/images/course-quran-reading.webp", root)),
    access(new URL("dist/client/images/course-tajweed-hifz.webp", root)),
    access(new URL("dist/client/images/course-arabic-language.webp", root)),
    access(new URL("dist/client/images/course-islamic-studies.webp", root)),
    access(new URL("dist/client/images/teacher-mohamed-samy.webp", root)),
    access(new URL("dist/client/images/teacher-ruqaya-badr.webp", root)),
    access(new URL("dist/client/images/teacher-mohamed-ebrahim.webp", root)),
    access(new URL("dist/client/favicon.png", root)),
    access(new URL("dist/client/ar/index.html", root)),
    access(new URL("dist/client/privacy/index.html", root)),
    access(new URL("dist/client/terms/index.html", root)),
  ]);
});

test("starter preview infrastructure is fully removed", async () => {
  const packageJson = await readFile(new URL("package.json", root), "utf8");
  const page = await readFile(new URL("app/page.tsx", root), "utf8");

  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(page, /SkeletonPreview|_sites-preview/);
  await assert.rejects(access(new URL("app/_sites-preview/SkeletonPreview.tsx", root)));
});
