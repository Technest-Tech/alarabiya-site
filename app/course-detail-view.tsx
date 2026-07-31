import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarCheck,
  Check,
  Clock3,
  Heart,
  Languages,
  Mic2,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "./site-chrome";
import { getTeacher, type CourseProfile, type Locale } from "./site-data";

const icons = {
  book: BookOpen,
  mic: Mic2,
  languages: Languages,
  heart: Heart,
};

export default function CourseDetailView({ course, locale }: { course: CourseProfile; locale: Locale }) {
  const ar = locale === "ar";
  const Arrow = ar ? ArrowLeft : ArrowRight;
  const home = ar ? "/ar/" : "/";
  const teacherBase = ar ? "/ar/teachers" : "/teachers";
  const alternateHref = ar ? `/courses/${course.slug}/` : `/ar/courses/${course.slug}/`;
  const CourseIcon = icons[course.icon];
  const courseTeachers = course.teacherSlugs.map(getTeacher).filter(Boolean);

  return (
    <main className={ar ? "rtl-site" : ""} dir={ar ? "rtl" : "ltr"} lang={locale}>
      <SiteHeader locale={locale} alternateHref={alternateHref} />

      <section className="course-detail-hero">
        <div className="course-detail-photo">
          <img src={course.image} alt={course.title[locale]} width="1200" height="900" />
        </div>
        <div className="course-detail-overlay" aria-hidden="true"></div>
        <div className="course-detail-hero-content">
          <nav className="detail-breadcrumb" aria-label={ar ? "مسار التنقل" : "Breadcrumb"}>
            <a href={home}>{ar ? "الرئيسية" : "Home"}</a><span>/</span>
            <a href={`${home}#programs`}>{ar ? "البرامج" : "Programs"}</a><span>/</span>
            <strong>{course.title[locale]}</strong>
          </nav>
          <span className="detail-icon"><CourseIcon /></span>
          <p className="detail-eyebrow">{course.eyebrow[locale]}</p>
          <h1>{course.title[locale]}</h1>
          <p className="course-tagline">{course.tagline[locale]}</p>
          <div className="detail-hero-actions">
            <a className="button button-gold button-large" href={`${home}#enroll`}>{ar ? "احجز حصة تقييم مجانية" : "Book a free assessment"}<Arrow /></a>
            <a className="detail-secondary-link" href="#curriculum">{ar ? "شاهد تفاصيل المنهج" : "Explore the curriculum"}<Arrow /></a>
          </div>
        </div>
      </section>

      <section className="course-format-strip" aria-label={ar ? "تفاصيل البرنامج" : "Program details"}>
        {course.format[locale].map((item, index) => {
          const Icon = index === 0 ? UserRoundCheck : index === 1 ? Clock3 : index === 2 ? CalendarCheck : ShieldCheck;
          return <article key={item.label}><span><Icon /></span><div><small>{item.label}</small><strong>{item.value}</strong></div></article>;
        })}
      </section>

      <section className="course-intro-section">
        <div className="course-intro-copy">
          <p className="section-kicker left-kicker"><span></span>{ar ? "تعلم منظم وشخصي" : "Structured, personal learning"}</p>
          <h2>{ar ? <>مسار واضح نحو <em>تقدم حقيقي</em></> : <>A clear path to <em>real progress</em></>}</h2>
          <p>{course.description[locale]}</p>
          <a className="button button-blue" href={`${home}#enroll`}>{ar ? "ابدأ بخطة تناسبك" : "Start with a plan made for you"}<Arrow /></a>
        </div>
        <div className="course-outcome-card">
          <div className="outcome-card-title"><span><Sparkles /></span><div><small>{ar ? "بنهاية هذا المسار" : "By the end of this path"}</small><strong>{ar ? "ما الذي ستتمكن منه؟" : "What you will be able to do"}</strong></div></div>
          <div className="outcome-list">{course.outcomes[locale].map((outcome) => <span key={outcome}><Check />{outcome}</span>)}</div>
        </div>
      </section>

      <section className="curriculum-section" id="curriculum">
        <div className="section-heading heading-center">
          <p className="section-kicker"><span></span>{ar ? "داخل البرنامج" : "Inside the program"}<span></span></p>
          <h2>{ar ? <>منهج يتطور <em>معك</em></> : <>A curriculum that grows <em>with you</em></>}</h2>
          <p>{ar ? "تتغير السرعة والمواد بحسب نتيجة التقييم وتقدم المتعلم." : "Lesson pace and material adapt after assessment and continue changing with learner progress."}</p>
        </div>
        <div className="curriculum-grid">
          {course.curriculum[locale].map((module, index) => (
            <article key={module.title}>
              <span className="module-number">0{index + 1}</span>
              <div className="module-icon"><CourseIcon /></div>
              <h3>{module.title}</h3>
              <p>{module.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ideal-section">
        <div>
          <p className="section-kicker left-kicker gold-kicker"><span></span>{ar ? "هل يناسبك هذا البرنامج؟" : "Is this program right for you?"}</p>
          <h2>{ar ? <>صُمم للمتعلمين في <em>مراحل مختلفة</em></> : <>Made for learners at <em>different stages</em></>}</h2>
        </div>
        <div className="ideal-list">{course.idealFor[locale].map((item) => <span key={item}><Check />{item}</span>)}</div>
      </section>

      <section className="course-teachers-section">
        <div className="section-heading heading-center">
          <p className="section-kicker"><span></span>{ar ? "فريق أكاديمية العربية" : "The Alarabiya Academy team"}<span></span></p>
          <h2>{ar ? <>قابل فريق <em>معلمينا</em></> : <>Meet our <em>teaching team</em></>}</h2>
          <p>{ar ? "يتم تأكيد المعلم الأنسب لهذا المسار بعد تقييم المستوى والأهداف والمواعيد المتاحة." : "The best tutor match for this program is confirmed after reviewing the learner's level, goals, and availability."}</p>
        </div>
        <div className="course-teacher-grid">
          {courseTeachers.map((teacher) => teacher && (
            <article key={teacher.slug}>
              <img src={teacher.image} alt={teacher.name[locale]} width="960" height="1200" loading="lazy" />
              <div><small>{teacher.role[locale]}</small><h3>{teacher.name[locale]}</h3><p>{teacher.shortBio[locale]}</p><a href={`${teacherBase}/${teacher.slug}/`}>{ar ? "عرض الملف التعريفي" : "View teacher profile"}<Arrow /></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="course-faq-section">
        <div className="course-faq-title">
          <p className="section-kicker left-kicker"><span></span>{ar ? "أسئلة عن البرنامج" : "Course questions"}</p>
          <h2>{ar ? "قبل أن تبدأ" : "Before you begin"}</h2>
        </div>
        <div className="faq-list">
          {course.faqs[locale].map((faq, index) => <details key={faq.question} open={index === 0}><summary><span>{faq.question}</span><span>+</span></summary><p>{faq.answer}</p></details>)}
        </div>
      </section>

      <section className="detail-final-cta">
        <div><p><Sparkles />{ar ? "حصتك الأولى مجانية" : "Your first lesson is free"}</p><h2>{ar ? "اكتشف نقطة البداية المناسبة لك." : "Discover the right starting point for you."}</h2></div>
        <a className="button button-gold button-large" href={`${home}#enroll`}>{ar ? "احجز التقييم المجاني" : "Book the free assessment"}<Arrow /></a>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
