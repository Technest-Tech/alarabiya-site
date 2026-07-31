import { ArrowLeft, ArrowRight, CalendarCheck, Sparkles } from "lucide-react";
import type { Locale } from "./site-data";

export function SiteHeader({
  locale,
  alternateHref,
}: {
  locale: Locale;
  alternateHref: string;
}) {
  const ar = locale === "ar";
  const home = ar ? "/ar/" : "/";
  const Arrow = ar ? ArrowLeft : ArrowRight;

  return (
    <>
      <div className="topbar">
        <p><Sparkles size={14} aria-hidden="true" />{ar ? " التسجيل متاح الآن للأطفال والكبار" : "Enrollment is open for kids and adults"}</p>
        <a href={`${home}#enroll`}>{ar ? "احجز حصتك المجانية" : "Book your free trial"} <Arrow size={15} /></a>
      </div>
      <header className="site-header detail-site-header">
        <a className="brand" href={home} aria-label={ar ? "الصفحة الرئيسية لأكاديمية العربية" : "Alarabiya Academy home"}>
          <img className="brand-logo" src="/logo.png" alt="" width="64" height="64" />
          <span className="brand-copy">
            <strong>ALARABIYA</strong>
            <small>{ar ? "أكاديمية القرآن واللغة العربية" : "Quran & Arabic Academy"}</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label={ar ? "التنقل الرئيسي" : "Main navigation"}>
          <a href={`${home}#programs`}>{ar ? "البرامج" : "Programs"}</a>
          <a href={`${home}#teacher-profiles`}>{ar ? "المعلمون" : "Teachers"}</a>
          <a href={`${home}#how-it-works`}>{ar ? "كيف نبدأ؟" : "How it works"}</a>
          <a href={`${home}#faq`}>{ar ? "الأسئلة" : "FAQ"}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label={ar ? "اختر اللغة" : "Choose language"}>
            <a className={!ar ? "active" : ""} href={ar ? alternateHref : undefined} lang="en" aria-current={!ar ? "page" : undefined}>EN</a>
            <a className={ar ? "active" : ""} href={ar ? undefined : alternateHref} lang="ar" dir="rtl" aria-current={ar ? "page" : undefined}>العربية</a>
          </div>
          <a className="header-cta" href={`${home}#enroll`}><CalendarCheck size={17} />{ar ? "حصة تجريبية مجانية" : "Free trial lesson"}</a>
        </div>
        <details className="mobile-menu">
          <summary aria-label={ar ? "فتح قائمة التنقل" : "Open navigation menu"}><span></span><span></span><span></span></summary>
          <nav aria-label={ar ? "التنقل على الهاتف" : "Mobile navigation"}>
            <a href={`${home}#programs`}>{ar ? "البرامج" : "Programs"}</a>
            <a href={`${home}#teacher-profiles`}>{ar ? "المعلمون" : "Teachers"}</a>
            <a href={`${home}#how-it-works`}>{ar ? "كيف نبدأ؟" : "How it works"}</a>
            <a href={`${home}#faq`}>{ar ? "الأسئلة" : "FAQ"}</a>
            <div className="mobile-language-switch" aria-label={ar ? "اختر اللغة" : "Choose language"}>
              <a className={!ar ? "active" : ""} href={ar ? alternateHref : undefined} lang="en">English</a>
              <a className={ar ? "active" : ""} href={ar ? undefined : alternateHref} lang="ar" dir="rtl">العربية</a>
            </div>
            <a className="button button-gold" href={`${home}#enroll`}>{ar ? "احجز حصة مجانية" : "Book a free trial"}</a>
          </nav>
        </details>
      </header>
    </>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const home = ar ? "/ar/" : "/";

  return (
    <footer>
      <div className="footer-glow" aria-hidden="true"></div>
      <div className="footer-main">
        <div className="footer-brand">
          <a className="brand brand-light" href={home}>
            <img className="brand-logo" src="/logo.png" alt="" width="64" height="64" />
            <span className="brand-copy"><strong>ALARABIYA</strong><small>{ar ? "أكاديمية القرآن واللغة العربية" : "Quran & Arabic Academy"}</small></span>
          </a>
          <p>{ar ? <>تعلّم بوضوح.<br />وانمُ بالإيمان.</> : <>Learn with clarity.<br />Grow with faith.</>}</p>
        </div>
        <div>
          <strong>{ar ? "استكشف" : "Explore"}</strong>
          <a href={`${home}#programs`}>{ar ? "البرامج" : "Programs"}</a>
          <a href={`${home}#teacher-profiles`}>{ar ? "معلمونا" : "Our teachers"}</a>
          <a href={`${home}#how-it-works`}>{ar ? "كيف نبدأ؟" : "How it works"}</a>
        </div>
        <div>
          <strong>{ar ? "البرامج" : "Programs"}</strong>
          <a href={`${home}courses/quran-reading/`}>{ar ? "قراءة القرآن" : "Quran Reading"}</a>
          <a href={`${home}courses/tajweed-hifz/`}>{ar ? "التجويد والحفظ" : "Tajweed & Hifz"}</a>
          <a href={`${home}courses/arabic-language/`}>{ar ? "اللغة العربية" : "Arabic Language"}</a>
          <a href={`${home}courses/islamic-studies/`}>{ar ? "الدراسات الإسلامية" : "Islamic Studies"}</a>
        </div>
        <div>
          <strong>{ar ? "ابدأ الآن" : "Get started"}</strong>
          <a href={`${home}#enroll`}>{ar ? "احجز حصة مجانية" : "Book a free lesson"}</a>
          <a href={`${home}#faq`}>{ar ? "الأسئلة الشائعة" : "Common questions"}</a>
          <a href="mailto:hello@alarabiyaacademy.com" dir="ltr">hello@alarabiyaacademy.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {ar ? "أكاديمية العربية. جميع الحقوق محفوظة." : "Alarabiya Academy. All rights reserved."}</p>
        <div><a href="/privacy">{ar ? "سياسة الخصوصية" : "Privacy policy"}</a><a href="/terms">{ar ? "شروط الاستخدام" : "Terms of use"}</a></div>
      </div>
    </footer>
  );
}
