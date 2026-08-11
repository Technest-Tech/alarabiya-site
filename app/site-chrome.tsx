import { ArrowLeft, ArrowRight, CalendarCheck, Sparkles } from "lucide-react";
import type { Locale } from "./site-data";

export function SiteHeader({
  locale,
  alternateHref,
  ctaHref,
  ctaLabel,
}: {
  locale: Locale;
  alternateHref: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  const ar = locale === "ar";
  const home = ar ? "/ar/" : "/";
  const Arrow = ar ? ArrowLeft : ArrowRight;
  const actionHref = ctaHref || `${home}#enroll`;
  const actionLabel = ctaLabel || (ar ? "حصة تجريبية مجانية" : "Free trial lesson");

  return (
    <>
      <div className="topbar">
        <p><Sparkles size={14} aria-hidden="true" />{ar ? " التسجيل متاح الآن للأطفال والكبار" : "Enrollment is open for kids and adults"}</p>
        <a href={actionHref}>{ctaLabel || (ar ? "اطلب تقييمك المجاني" : "Request your free assessment")} <Arrow size={15} /></a>
      </div>
      <header className="site-header detail-site-header">
        <a className="brand" href={home} aria-label={ar ? "الصفحة الرئيسية لأكاديمية العربية" : "Alarabiya Academy home"}>
          <img className="brand-logo" src="/logo-mark.webp" alt="" width="64" height="64" />
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
          <a className="header-cta" href={actionHref}><CalendarCheck size={17} />{actionLabel}</a>
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
            <a className="button button-gold" href={actionHref}>{ctaLabel || (ar ? "اطلب تقييماً مجانياً" : "Request a free assessment")}</a>
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
            <img className="brand-logo" src="/logo-mark.webp" alt="" width="64" height="64" />
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
          {ar ? <>
            <a href={`${home}courses/quran-reading/`}>قراءة القرآن</a>
            <a href={`${home}courses/tajweed-hifz/`}>التجويد والحفظ</a>
            <a href={`${home}courses/arabic-language/`}>اللغة العربية</a>
            <a href={`${home}courses/islamic-studies/`}>الدراسات الإسلامية</a>
          </> : <>
            <a href="/online-quran-classes/">Online Quran Classes</a>
            <a href="/online-arabic-classes/">Online Arabic Classes</a>
            <a href="/online-arabic-and-quran-classes/">Arabic & Quran Classes</a>
            <a href="/courses/islamic-studies/">Islamic Studies</a>
          </>}
        </div>
        <div>
          <strong>{ar ? "ابدأ الآن" : "Get started"}</strong>
          <a href={`${home}#enroll`}>{ar ? "احجز حصة مجانية" : "Book a free lesson"}</a>
          <a href={`${home}#faq`}>{ar ? "الأسئلة الشائعة" : "Common questions"}</a>
          <a href="mailto:hello@alarabiyaacademy.com" data-site-setting="contact-email" dir="ltr">hello@alarabiyaacademy.com</a>
          <a href="#" data-site-setting="whatsapp" target="_blank" rel="noreferrer" dir="ltr" hidden>WhatsApp</a>
          <div className="managed-social-links" aria-label={ar ? "وسائل التواصل الاجتماعي" : "Social media"}>
            <a href="#" data-site-setting="facebook-url" target="_blank" rel="noreferrer" hidden>Facebook</a>
            <a href="#" data-site-setting="instagram-url" target="_blank" rel="noreferrer" hidden>Instagram</a>
            <a href="#" data-site-setting="youtube-url" target="_blank" rel="noreferrer" hidden>YouTube</a>
            <a href="#" data-site-setting="tiktok-url" target="_blank" rel="noreferrer" hidden>TikTok</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {ar ? "أكاديمية العربية. جميع الحقوق محفوظة." : "Alarabiya Academy. All rights reserved."}</p>
        <div><a href="/privacy">{ar ? "سياسة الخصوصية" : "Privacy policy"}</a><a href="/terms">{ar ? "شروط الاستخدام" : "Terms of use"}</a></div>
      </div>
    </footer>
  );
}
