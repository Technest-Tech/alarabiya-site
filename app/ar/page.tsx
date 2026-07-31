import type { Metadata } from "next";
import {
  ArrowLeft,
  BookOpen,
  CalendarCheck,
  ChartNoAxesCombined,
  Check,
  ChevronDown,
  Clock3,
  GraduationCap,
  Headphones,
  Heart,
  Languages,
  MessageCircle,
  Mic2,
  MonitorPlay,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  UserRoundCheck,
} from "lucide-react";
import Link from "next/link";
import MotionEffects from "../motion-effects";
import LevelAssessment from "../level-assessment";
import HeroLiveVectors from "../hero-live-vectors";
import TeacherCards from "../teacher-cards";

export const metadata: Metadata = {
  title: { absolute: "دورات القرآن الكريم واللغة العربية أونلاين | أكاديمية العربية" },
  description:
    "دروس فردية مباشرة في القرآن والتجويد والحفظ واللغة العربية والدراسات الإسلامية للأطفال والكبار مع معلمين ومعلمات مؤهلين.",
  keywords: [
    "دورات قرآن أونلاين",
    "تحفيظ القرآن للأطفال",
    "تعليم اللغة العربية عن بعد",
    "دروس تجويد أونلاين",
    "معلمة قرآن أونلاين",
  ],
  alternates: {
    canonical: "/ar/",
    languages: {
      en: "/",
      ar: "/ar/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_AR",
    url: "/ar/",
    siteName: "أكاديمية العربية",
    title: "تعلّم القرآن بوضوح، وانمُ بالإيمان",
    description: "دروس مباشرة وشخصية في القرآن واللغة العربية للأطفال والكبار أينما كانوا.",
    images: [
      {
        url: "/og-arabic-quran.png",
        width: 1200,
        height: 630,
        alt: "أكاديمية العربية لتعليم القرآن واللغة العربية",
      },
    ],
  },
};

const programs = [
  {
    icon: BookOpen,
    slug: "quran-reading",
    image: "/images/course-quran-reading.webp",
    imageAlt: "طالبة صغيرة تتعلم قراءة القرآن في حصة مباشرة أونلاين",
    title: "قراءة القرآن",
    eyebrow: "من الحروف إلى التلاوة",
    description: "من الحرف العربي الأول إلى تلاوة صحيحة وواثقة، بخطة هادئة مصممة حسب مستوى كل طالب.",
    color: "blue",
  },
  {
    icon: Mic2,
    slug: "tajweed-hifz",
    image: "/images/course-tajweed-hifz.webp",
    imageAlt: "طالب يتدرب على التجويد وحفظ القرآن مع معلم أونلاين",
    title: "التجويد والحفظ",
    eyebrow: "إتقان يثبت مع الوقت",
    description: "أتقن مخارج الحروف وأحكام التجويد، واحفظ القرآن بنظام مراجعة عملي يساعدك على الثبات.",
    color: "gold",
  },
  {
    icon: Languages,
    slug: "arabic-language",
    image: "/images/course-arabic-language.webp",
    imageAlt: "طالبة تتحدث العربية خلال درس تفاعلي مباشر",
    title: "اللغة العربية",
    eyebrow: "تحدّث واقرأ وافهم",
    description: "تعلّم التحدث والقراءة والفهم من خلال محادثات عملية وتدريبات مباشرة ممتعة.",
    color: "sky",
  },
  {
    icon: Heart,
    slug: "islamic-studies",
    image: "/images/course-islamic-studies.webp",
    imageAlt: "أسرة مسلمة تتعلم الدراسات الإسلامية في حصة مباشرة أونلاين",
    title: "الدراسات الإسلامية",
    eyebrow: "علم ينعكس على الحياة",
    description: "دروس مناسبة للعمر في العقيدة والعبادات والسيرة والأخلاق وجمال الإسلام في حياتنا اليومية.",
    color: "coral",
  },
];

const features = [
  {
    icon: UserRoundCheck,
    title: "المعلم المناسب لكل طالب",
    text: "اختر معلماً أو معلمة مؤهلة تناسب عمر الطالب وأهدافه وشخصيته وأسلوب تعلمه.",
  },
  {
    icon: CalendarCheck,
    title: "مواعيد تناسب حياتك",
    text: "جدول مرن عبر المناطق الزمنية، مع سهولة تغيير الموعد عند تبدّل خطط الأسرة.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "تقدّم واضح يمكنك متابعته",
    text: "أهداف تعليمية محددة، وملاحظات من المعلم، وتقارير دورية تبقي الطالب في تقدّم مستمر.",
  },
];

const steps = [
  {
    number: "٠١",
    icon: MessageCircle,
    title: "أخبرنا بهدفك",
    text: "شاركنا عمر الطالب ومستواه الحالي والبرنامج المفضل والأوقات المناسبة للدروس.",
  },
  {
    number: "٠٢",
    icon: MonitorPlay,
    title: "استمتع بحصة مجانية",
    text: "تعرّف إلى المعلم الأنسب في حصة تقييم مجانية بالكامل، من دون دفع أو التزام.",
  },
  {
    number: "٠٣",
    icon: GraduationCap,
    title: "ابدأ رحلة التعلم",
    text: "استلم خطة تعلم شخصية وابدأ دروساً مباشرة ومنتظمة أينما كنت.",
  },
];

const faqs = [
  {
    question: "هل أحتاج إلى خبرة سابقة في القرآن أو اللغة العربية؟",
    answer: "لا إطلاقاً. ندرّس المبتدئين تماماً وحتى المستويات المتقدمة، وتساعدنا حصة التقييم المجانية على البدء من النقطة المناسبة لك.",
  },
  {
    question: "هل يمكنني اختيار معلم أو معلمة؟",
    answer: "نعم. نطابق كل طالب مع معلم أو معلمة مناسبة حسب العمر والأهداف وأسلوب التعلم والمواعيد المتاحة.",
  },
  {
    question: "هل الدروس مناسبة للأطفال؟",
    answer: "نعم. تعتمد دروس الأطفال على أنشطة قصيرة وتشجيع وتعلّم بصري وتكرار وأهداف تناسب العمر ليبقى التعلم ممتعاً.",
  },
  {
    question: "ما مدة الحصة؟",
    answer: "تعتمد المدة على عمر الطالب والبرنامج. أغلب الحصص 30 أو 45 أو 60 دقيقة، ونساعدك على اختيار الأنسب بعد التقييم.",
  },
  {
    question: "ماذا أحتاج للانضمام؟",
    answer: "اتصالاً مستقراً بالإنترنت، وهاتفاً أو جهازاً لوحياً أو حاسوباً، ومكاناً هادئاً للتعلم. وسنرشدك في كل ما تبقى.",
  },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? "brand-light" : ""}`} href="#top" aria-label="الصفحة الرئيسية لأكاديمية العربية">
      <img className="brand-logo" src="/logo.png" alt="" width="64" height="64" />
      <span className="brand-copy">
        <strong>ALARABIYA</strong>
        <small>أكاديمية القرآن واللغة العربية</small>
      </span>
    </a>
  );
}

export default function ArabicHome() {
  return (
    <main className="rtl-site" dir="rtl" lang="ar">
      <MotionEffects />
      <div className="topbar">
        <p><Sparkles size={14} aria-hidden="true" /> التسجيل متاح الآن للأطفال والكبار</p>
        <a href="#enroll">احجز حصتك المجانية <ArrowLeft size={15} /></a>
      </div>

      <header className="site-header">
        <Brand />
        <nav className="desktop-nav" aria-label="التنقل الرئيسي">
          <a href="#programs">البرامج</a>
          <a href="#why-us">لماذا نحن؟</a>
          <a href="#tutors">المعلمون</a>
          <a href="#how-it-works">كيف نبدأ؟</a>
          <a href="#faq">الأسئلة</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="اختر اللغة">
            <Link href="/" lang="en">EN</Link>
            <a className="active" href="/ar/" lang="ar" aria-current="page">العربية</a>
          </div>
          <a className="header-cta" href="#enroll"><CalendarCheck size={17} /> حصة تجريبية مجانية</a>
        </div>
        <details className="mobile-menu">
          <summary aria-label="فتح قائمة التنقل"><span></span><span></span><span></span></summary>
          <nav aria-label="التنقل على الهاتف">
            <a href="#programs">البرامج</a>
            <a href="#why-us">لماذا نحن؟</a>
            <a href="#tutors">المعلمون</a>
            <a href="#how-it-works">كيف نبدأ؟</a>
            <a href="#faq">الأسئلة</a>
            <div className="mobile-language-switch" aria-label="اختر اللغة">
              <Link href="/" lang="en">English</Link>
              <a className="active" href="/ar/" lang="ar" aria-current="page">العربية</a>
            </div>
            <a className="button button-gold" href="#enroll">احجز حصة مجانية</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-photo" aria-hidden="true"></div>
        <div className="hero-pattern" aria-hidden="true"></div>
        <div className="hero-content">
          <div className="hero-copy">
            <p className="hero-kicker"><span><Star size={13} fill="currentColor" /></span> تعلم فردي مباشر · أينما كنت</p>
            <h1>تعلّم العربية.<span>واقرأ القرآن.</span><em>وتقدّم بثقة.</em></h1>
            <p className="hero-lead">دروس تفاعلية أونلاين في القرآن واللغة العربية للأطفال والكبار، يقدمها معلمون ومعلمات مؤهلون.</p>
            <div className="hero-actions">
              <a className="button button-gold button-large" href="#enroll">ابدأ حصتك المجانية <ArrowLeft size={19} /></a>
              <a className="hero-video-link" href="#how-it-works"><span><Play size={17} fill="currentColor" /></span> شاهد كيف نبدأ</a>
            </div>
            <div className="hero-trust">
              <div className="avatar-stack" aria-hidden="true"><span>م</span><span>ع</span><span>ن</span></div>
              <div><span className="stars" aria-label="خمس نجوم">★★★★★</span><p>دعم شخصي منذ الحصة الأولى</p></div>
            </div>
          </div>
        </div>
        <HeroLiveVectors locale="ar" />
        <div className="hero-badge"><strong>١٠٠٪</strong><span>حصص مباشرة</span></div>
        <div className="hero-curve" aria-hidden="true"></div>
      </section>

      <section className="trust-cards" aria-label="مميزات أكاديمية العربية">
        <article><span className="trust-icon"><UserRoundCheck size={27} /></span><div><strong>معلمون مؤهلون</strong><p>معلمون ومعلمات</p></div></article>
        <article><span className="trust-icon"><Clock3 size={27} /></span><div><strong>مواعيد مرنة</strong><p>تعلم عبر المناطق الزمنية</p></div></article>
        <article><span className="trust-icon"><ShieldCheck size={27} /></span><div><strong>تعلم آمن وشخصي</strong><p>حصص فردية خاصة</p></div></article>
        <article><span className="trust-icon"><Headphones size={27} /></span><div><strong>تقييم مجاني</strong><p>تعرّف إلى معلمك أولاً</p></div></article>
      </section>

      <section className="programs-section" id="programs">
        <div className="floating-shape shape-dots" aria-hidden="true"></div>
        <div className="section-heading heading-center">
          <p className="section-kicker"><span></span> اختر مسار تعلمك <span></span></p>
          <h2>برامج صُممت من أجل <em>تقدّم حقيقي</em></h2>
          <p>تعلم منظم، واهتمام شخصي، وحصص تجعل كل طالب متحمساً للعودة.</p>
        </div>
        <div className="program-grid">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <article className={`program-card card-${program.color}`} key={program.title}>
                <div className="program-photo">
                  <img src={program.image} alt={program.imageAlt} width="1200" height="900" loading="lazy" />
                  <div className="program-number">٠{index + 1}</div>
                  <span className="program-icon"><Icon size={28} strokeWidth={1.8} /></span>
                </div>
                <div className="program-body">
                  <p className="program-arabic">{program.eyebrow}</p>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <a href={`/ar/courses/${program.slug}/`}>استكشف البرنامج <ArrowLeft size={16} /></a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <LevelAssessment locale="ar" />

      <section className="learning-section" id="why-us">
        <div className="learning-image-wrap">
          <div className="image-arch"><img src="/images/student-learning.webp" alt="طالب صغير يستمتع بحصة قرآن مباشرة أونلاين" width="1200" height="900" loading="lazy" /></div>
          <div className="floating-result"><span><Check size={20} /></span><div><strong>تقدّم رائع!</strong><small>تم إنجاز هدف جديد</small></div></div>
          <div className="image-spark" aria-hidden="true">✦</div>
        </div>
        <div className="learning-copy">
          <p className="section-kicker left-kicker"><span></span> تعلم يشعر فيه الطالب بالاهتمام</p>
          <h2>كل طالب يستحق أن يتعلم <em>بثقة.</em></h2>
          <p className="lead-copy">نجمع بين التعليم المتقن والتشجيع والأنشطة البصرية ومنهج شخصي يتطور مع الطالب.</p>
          <div className="feature-list">
            {features.map((feature) => {
              const Icon = feature.icon;
              return <article key={feature.title}><span><Icon size={23} /></span><div><h3>{feature.title}</h3><p>{feature.text}</p></div></article>;
            })}
          </div>
          <a className="button button-blue" href="#enroll">اعثر على البرنامج المناسب <ArrowLeft size={18} /></a>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-pattern" aria-hidden="true"></div>
        <div className="stat-intro"><p>أكاديمية واحدة.<br /><strong>وعالم من المتعلمين.</strong></p></div>
        <article><strong>فردي</strong><span>دروس مباشرة وشخصية</span></article>
        <article><strong>٤</strong><span>مسارات تعليمية متكاملة</span></article>
        <article><strong>٢٤/٧</strong><span>جدول عالمي مرن</span></article>
        <article><strong>كل الأعمار</strong><span>أطفال ومراهقون وكبار</span></article>
      </section>

      <section className="tutors-section" id="tutors">
        <div className="tutor-copy">
          <p className="section-kicker left-kicker gold-kicker"><span></span> تعرّف إلى معلمك القادم</p>
          <h2>التعليم الممتاز يبدأ مع <em>الشخص المناسب.</em></h2>
          <p>نختار معلمينا لعلمهم ووضوحهم وصبرهم وقدرتهم على جعل التعلم أونلاين دافئاً وإنسانياً.</p>
          <div className="tutor-points">
            <span><Check size={17} /> متخصصون مؤهلون في القرآن والعربية</span>
            <span><Check size={17} /> ناطقون أصليون أو متقنون للعربية</span>
            <span><Check size={17} /> مدربون على الدروس التفاعلية أونلاين</span>
            <span><Check size={17} /> معلمون ومعلمات متاحون</span>
          </div>
          <a className="button button-white" href="#enroll">تعرّف إلى معلمك مجاناً <ArrowLeft size={18} /></a>
        </div>
        <div className="tutor-image-side">
          <div className="tutor-image-frame"><img src="/images/female-tutor.webp" alt="معلمة قرآن ولغة عربية مؤهلة وودودة" width="900" height="1350" loading="lazy" /></div>
          <div className="tutor-rating"><span><Star size={19} fill="currentColor" /></span><div><strong>معلم يهتم بتقدمك</strong><small>صبور · مؤهل · داعم</small></div></div>
        </div>
        <div className="tutors-curve" aria-hidden="true"></div>
      </section>

      <TeacherCards locale="ar" />

      <section className="journey-section" id="how-it-works">
        <div className="section-heading heading-center">
          <p className="section-kicker"><span></span> ابدأ في ثلاث خطوات بسيطة <span></span></p>
          <h2>حصتك الأولى <em>أقرب مما تتخيل</em></h2>
        </div>
        <div className="journey-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.number}>
                <span className="step-number">{step.number}</span>
                <div className="step-icon"><Icon size={31} /></div>
                <h3>{step.title}</h3><p>{step.text}</p>
                {index < steps.length - 1 && <div className="step-arrow" aria-hidden="true"><ArrowLeft /></div>}
              </article>
            );
          })}
        </div>
        <div className="journey-cta">
          <a className="button button-gold button-large" href="#enroll">احجز تقييمي المجاني <ArrowLeft size={19} /></a>
          <p><ShieldCheck size={16} /> لا دفع ولا التزام مطلوب</p>
        </div>
      </section>

      <section className="promise-section">
        <div className="promise-visual"><img src="/images/hero-family.webp" alt="أم تدعم ابنتها خلال حصة قرآن مباشرة أونلاين" width="1792" height="896" loading="lazy" /></div>
        <div className="promise-copy">
          <span className="quote-icon">”</span>
          <p className="section-kicker left-kicker"><span></span> وعدنا لكل أسرة</p>
          <blockquote>تعلّم بوضوح.<br />تدرّب بثقة.<br /><em>وانمُ بالإيمان.</em></blockquote>
          <p>كل حصة يجب أن تجعل الطالب يشعر بالقدرة والدعم والحماس لما سيأتي بعدها.</p>
          <div className="promise-signature"><img src="/logo.png" alt="" width="54" height="54" /><div><strong>أكاديمية العربية</strong><span>تعليم القرآن والعربية أينما كنت</span></div></div>
        </div>
      </section>

      <section className="enrollment-section" id="enroll">
        <div className="enroll-pattern" aria-hidden="true"></div>
        <div className="enrollment-intro">
          <p className="section-kicker left-kicker gold-kicker"><span></span> حصتك الأولى مجانية</p>
          <h2>هل أنت مستعد لبدء <em>رحلة التعلم؟</em></h2>
          <p>أخبرنا عن الطالب وسنرشح لك المعلم الأنسب في حصة تقييم مجانية.</p>
          <div className="enroll-benefits">
            <span><Check /> اختيار شخصي للمعلم</span>
            <span><Check /> مواعيد دروس مرنة</span>
            <span><Check /> لا حاجة إلى الدفع</span>
          </div>
        </div>
        <form className="enrollment-form" action="/api/enroll.php" method="post">
          <div className="form-title"><span><CalendarCheck size={24} /></span><div><strong>احجز حصتك المجانية</strong><small>نرد عادة خلال يوم عمل واحد</small></div></div>
          <div className="honeypot" aria-hidden="true"><label htmlFor="website-ar">الموقع</label><input id="website-ar" name="website" type="text" tabIndex={-1} autoComplete="off" /></div>
          <div className="field-row">
            <label>الاسم<input name="name" type="text" placeholder="الاسم الكامل" autoComplete="name" required /></label>
            <label>البريد الإلكتروني<input name="email" type="email" placeholder="you@example.com" autoComplete="email" required dir="ltr" /></label>
          </div>
          <div className="field-row">
            <label>رقم واتساب<input name="phone" type="tel" placeholder="+1 234 567 890" autoComplete="tel" required dir="ltr" /></label>
            <label>عمر الطالب
              <select name="age" defaultValue="" required>
                <option value="" disabled>اختر الفئة العمرية</option>
                <option>5–8 سنوات</option><option>9–12 سنة</option><option>13–17 سنة</option><option>18 سنة فأكثر</option>
              </select>
            </label>
          </div>
          <label>البرنامج المطلوب
            <select name="program" defaultValue="" required>
              <option value="" disabled>اختر برنامجاً تعليمياً</option>
              <option>قراءة القرآن</option><option>التجويد والحفظ</option><option>اللغة العربية</option><option>اللغة العربية والقرآن</option><option>الدراسات الإسلامية</option><option>ساعدني على الاختيار</option>
            </select>
          </label>
          <label>أهداف التعلم <span>(اختياري)</span><textarea name="message" rows={3} placeholder="المستوى الحالي، الأهداف، المواعيد المناسبة..."></textarea></label>
          <label className="consent"><input type="checkbox" name="consent" value="yes" required /><span>أوافق على التواصل معي بخصوص الحصة المجانية وبرامج الأكاديمية.</span></label>
          <button className="button button-gold form-submit" type="submit">أطلب حصتي المجانية <ArrowLeft size={18} /></button>
        </form>
      </section>

      <section className="faq-section" id="faq">
        <div className="faq-intro">
          <p className="section-kicker left-kicker"><span></span> إجابات على أسئلتك</p>
          <h2>كل ما تحتاجه <em>لتبدأ بثقة</em></h2>
          <p>هل ما زال لديك سؤال؟ سيسعد فريقنا بإرشادك شخصياً.</p>
          <a href="#enroll">اسأل الأكاديمية <ArrowLeft size={16} /></a>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary><span>{faq.question}</span><ChevronDown size={20} /></summary><p>{faq.answer}</p></details>)}
        </div>
      </section>

      <footer>
        <div className="footer-glow" aria-hidden="true"></div>
        <div className="footer-main">
          <div className="footer-brand"><Brand light /><p>تعلّم بوضوح.<br />وانمُ بالإيمان.</p></div>
          <div><strong>استكشف</strong><a href="#programs">البرامج</a><a href="#why-us">لماذا العربية؟</a><a href="#tutors">معلمونا</a><a href="#how-it-works">كيف نبدأ؟</a></div>
          <div><strong>البرامج</strong><a href="#programs">قراءة القرآن</a><a href="#programs">التجويد والحفظ</a><a href="#programs">اللغة العربية</a><a href="#programs">الدراسات الإسلامية</a></div>
          <div><strong>ابدأ الآن</strong><a href="#enroll">احجز حصة مجانية</a><a href="#faq">الأسئلة الشائعة</a><a href="mailto:hello@alarabiyaacademy.com" dir="ltr">hello@alarabiyaacademy.com</a></div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} أكاديمية العربية. جميع الحقوق محفوظة.</p>
          <div><a href="/privacy">سياسة الخصوصية</a><a href="/terms">شروط الاستخدام</a></div>
        </div>
      </footer>
    </main>
  );
}
