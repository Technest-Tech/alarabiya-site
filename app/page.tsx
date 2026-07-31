import {
  ArrowRight,
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
import MotionEffects from "./motion-effects";
import LevelAssessment from "./level-assessment";
import HeroLiveVectors from "./hero-live-vectors";
import TeacherCards from "./teacher-cards";

const programs = [
  {
    icon: BookOpen,
    slug: "quran-reading",
    image: "/images/course-quran-reading.webp",
    imageAlt: "Young student learning Quran reading in a live online class",
    title: "Quran Reading",
    arabic: "تلاوة القرآن",
    description:
      "From the first Arabic letter to confident, fluent recitation—with a patient path built around your level.",
    color: "blue",
  },
  {
    icon: Mic2,
    slug: "tajweed-hifz",
    image: "/images/course-tajweed-hifz.webp",
    imageAlt: "Student practicing Tajweed and Quran memorization with an online tutor",
    title: "Tajweed & Hifz",
    arabic: "التجويد والحفظ",
    description:
      "Perfect every sound, understand Tajweed rules, and memorize with a revision system that truly lasts.",
    color: "gold",
  },
  {
    icon: Languages,
    slug: "arabic-language",
    image: "/images/course-arabic-language.webp",
    imageAlt: "Adult learner speaking Arabic during an interactive online lesson",
    title: "Arabic Language",
    arabic: "اللغة العربية",
    description:
      "Speak, read, and understand Arabic through practical conversation and engaging live practice.",
    color: "sky",
  },
  {
    icon: Heart,
    slug: "islamic-studies",
    image: "/images/course-islamic-studies.webp",
    imageAlt: "Muslim family learning Islamic Studies together in a live online class",
    title: "Islamic Studies",
    arabic: "الدراسات الإسلامية",
    description:
      "Age-appropriate lessons in faith, worship, Seerah, character, and the everyday beauty of Islam.",
    color: "coral",
  },
];

const features = [
  {
    icon: UserRoundCheck,
    title: "The right teacher match",
    text: "Choose a qualified male or female tutor who fits the learner’s age, goals, and personality.",
  },
  {
    icon: CalendarCheck,
    title: "Lessons that fit your life",
    text: "Flexible scheduling across time zones, with simple rescheduling when family plans change.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Progress you can see",
    text: "Clear learning goals, teacher feedback, and regular reports keep every learner moving forward.",
  },
];

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Tell us your goal",
    text: "Share the learner’s age, current level, preferred program, and ideal lesson times.",
  },
  {
    number: "02",
    icon: MonitorPlay,
    title: "Enjoy a free lesson",
    text: "Meet a carefully matched tutor in a complimentary assessment class—no payment required.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Start your journey",
    text: "Receive a personal learning plan and begin consistent live lessons from wherever you are.",
  },
];

const faqs = [
  {
    question: "Do I need any previous Quran or Arabic experience?",
    answer:
      "Not at all. We teach complete beginners through advanced learners. Your free assessment helps us begin at exactly the right point.",
  },
  {
    question: "Can I choose a male or female teacher?",
    answer:
      "Yes. We match every learner with a suitable male or female tutor based on age, goals, learning style, and availability.",
  },
  {
    question: "Are the lessons suitable for children?",
    answer:
      "Yes. Children’s lessons use short activities, encouragement, visual learning, repetition, and age-appropriate goals to keep learning joyful.",
  },
  {
    question: "How long is each class?",
    answer:
      "Lesson duration depends on age and program. Most classes are 30, 45, or 60 minutes, and we help you choose the right format after assessment.",
  },
  {
    question: "What do I need to join?",
    answer:
      "A stable internet connection, a phone, tablet, or computer, and a quiet place to learn. We guide you through everything else.",
  },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? "brand-light" : ""}`} href="#top" aria-label="Alarabiya Academy home">
      <img className="brand-logo" src="/logo.png" alt="" width="64" height="64" />
      <span className="brand-copy">
        <strong>ALARABIYA</strong>
        <small>Quran & Arabic Academy</small>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <MotionEffects />
      <div className="topbar">
        <p>
          <Sparkles size={14} aria-hidden="true" />
          Enrollment is open for kids and adults
        </p>
        <a href="#enroll">Book your free trial <ArrowRight size={15} /></a>
      </div>

      <header className="site-header">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#programs">Programs</a>
          <a href="#why-us">Why us</a>
          <a href="#tutors">Tutors</a>
          <a href="#how-it-works">How it works</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Choose language">
            <Link className="active" href="/" lang="en" aria-current="page">EN</Link>
            <a href="/ar/" lang="ar" dir="rtl">العربية</a>
          </div>
          <a className="header-cta" href="#enroll">
            <CalendarCheck size={17} />
            Free trial lesson
          </a>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <span></span><span></span><span></span>
          </summary>
          <nav aria-label="Mobile navigation">
            <a href="#programs">Programs</a>
            <a href="#why-us">Why us</a>
            <a href="#tutors">Tutors</a>
            <a href="#how-it-works">How it works</a>
            <a href="#faq">FAQ</a>
            <div className="mobile-language-switch" aria-label="Choose language">
              <Link className="active" href="/" lang="en" aria-current="page">English</Link>
              <a href="/ar/" lang="ar" dir="rtl">العربية</a>
            </div>
            <a className="button button-gold" href="#enroll">Book a free trial</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-photo" aria-hidden="true"></div>
        <div className="hero-pattern" aria-hidden="true"></div>
        <div className="hero-content">
          <div className="hero-copy">
            <p className="hero-kicker">
              <span><Star size={13} fill="currentColor" /></span>
              Live one-to-one learning · Worldwide
            </p>
            <h1>
              Learn Quran.
              <span>Love Arabic.</span>
              <em>Grow in faith.</em>
            </h1>
            <p className="hero-lead">
              Engaging online Quran and Arabic classes for children and adults,
              taught live by qualified male and female tutors.
            </p>
            <div className="hero-actions">
              <a className="button button-gold button-large" href="#enroll">
                Start your free lesson <ArrowRight size={19} />
              </a>
              <a className="hero-video-link" href="#how-it-works">
                <span><Play size={17} fill="currentColor" /></span>
                See how it works
              </a>
            </div>
            <div className="hero-trust">
              <div className="avatar-stack" aria-hidden="true">
                <span>م</span><span>ع</span><span>ن</span>
              </div>
              <div>
                <span className="stars" aria-label="Five stars">★★★★★</span>
                <p>Personal support from the first lesson</p>
              </div>
            </div>
          </div>
        </div>
        <HeroLiveVectors locale="en" />
        <div className="hero-badge">
          <strong>100%</strong>
          <span>Live classes</span>
        </div>
        <div className="hero-curve" aria-hidden="true"></div>
      </section>

      <section className="trust-cards" aria-label="Alarabiya Academy benefits">
        <article>
          <span className="trust-icon"><UserRoundCheck size={27} /></span>
          <div><strong>Qualified tutors</strong><p>Male & female teachers</p></div>
        </article>
        <article>
          <span className="trust-icon"><Clock3 size={27} /></span>
          <div><strong>Flexible schedule</strong><p>Learn across time zones</p></div>
        </article>
        <article>
          <span className="trust-icon"><ShieldCheck size={27} /></span>
          <div><strong>Safe & personal</strong><p>Private one-to-one classes</p></div>
        </article>
        <article>
          <span className="trust-icon"><Headphones size={27} /></span>
          <div><strong>Free assessment</strong><p>Meet your tutor first</p></div>
        </article>
      </section>

      <section className="programs-section" id="programs">
        <div className="floating-shape shape-dots" aria-hidden="true"></div>
        <div className="section-heading heading-center">
          <p className="section-kicker"><span></span> Choose your learning path <span></span></p>
          <h2>Programs made for <em>real progress</em></h2>
          <p>Structured learning, personal attention, and classes that make every learner excited to return.</p>
        </div>
        <div className="program-grid">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <article className={`program-card card-${program.color}`} key={program.title}>
                <div className="program-photo">
                  <img src={program.image} alt={program.imageAlt} width="1200" height="900" loading="lazy" />
                  <div className="program-number">0{index + 1}</div>
                  <span className="program-icon"><Icon size={28} strokeWidth={1.8} /></span>
                </div>
                <div className="program-body">
                  <p className="program-arabic" lang="ar" dir="rtl">{program.arabic}</p>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <a href={`/courses/${program.slug}/`}>Explore program <ArrowRight size={16} /></a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <LevelAssessment locale="en" />

      <section className="learning-section" id="why-us">
        <div className="learning-image-wrap">
          <div className="image-arch">
            <img
              src="/images/student-learning.webp"
              alt="Young student enjoying a live online Quran lesson"
              width="1200"
              height="900"
              loading="lazy"
            />
          </div>
          <div className="floating-result">
            <span><Check size={20} /></span>
            <div><strong>Great progress!</strong><small>New goal completed</small></div>
          </div>
          <div className="image-spark" aria-hidden="true">✦</div>
        </div>
        <div className="learning-copy">
          <p className="section-kicker left-kicker"><span></span> Learning that feels personal</p>
          <h2>Every learner deserves to feel <em>confident.</em></h2>
          <p className="lead-copy">
            We combine expert teaching with encouragement, visual activities,
            and a personal curriculum that grows with the learner.
          </p>
          <div className="feature-list">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title}>
                  <span><Icon size={23} /></span>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <a className="button button-blue" href="#enroll">Find the right program <ArrowRight size={18} /></a>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-pattern" aria-hidden="true"></div>
        <div className="stat-intro">
          <p>One academy.<br /><strong>A world of learners.</strong></p>
        </div>
        <article><strong>1-to-1</strong><span>Live personal lessons</span></article>
        <article><strong>4</strong><span>Complete learning paths</span></article>
        <article><strong>24/7</strong><span>Flexible global scheduling</span></article>
        <article><strong>All ages</strong><span>Children, teens & adults</span></article>
      </section>

      <section className="tutors-section" id="tutors">
        <div className="tutor-copy">
          <p className="section-kicker left-kicker gold-kicker"><span></span> Meet your future teacher</p>
          <h2>Excellent teaching starts with <em>the right person.</em></h2>
          <p>
            Our tutors are chosen for their knowledge, clarity, patience, and
            ability to make online learning feel warm and human.
          </p>
          <div className="tutor-points">
            <span><Check size={17} /> Qualified Quran and Arabic specialists</span>
            <span><Check size={17} /> Native and fluent Arabic speakers</span>
            <span><Check size={17} /> Trained for engaging online lessons</span>
            <span><Check size={17} /> Male and female tutors available</span>
          </div>
          <a className="button button-white" href="#enroll">Meet your tutor for free <ArrowRight size={18} /></a>
        </div>
        <div className="tutor-image-side">
          <div className="tutor-image-frame">
            <img
              src="/images/female-tutor.webp"
              alt="Friendly qualified female Quran and Arabic tutor"
              width="900"
              height="1350"
              loading="lazy"
            />
          </div>
          <div className="tutor-rating">
            <span><Star size={19} fill="currentColor" /></span>
            <div><strong>A teacher who cares</strong><small>Patient · Qualified · Supportive</small></div>
          </div>
        </div>
        <div className="tutors-curve" aria-hidden="true"></div>
      </section>

      <TeacherCards locale="en" />

      <section className="journey-section" id="how-it-works">
        <div className="section-heading heading-center">
          <p className="section-kicker"><span></span> Start in three simple steps <span></span></p>
          <h2>Your first class is <em>closer than you think</em></h2>
        </div>
        <div className="journey-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.number}>
                <span className="step-number">{step.number}</span>
                <div className="step-icon"><Icon size={31} /></div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                {index < steps.length - 1 && <div className="step-arrow" aria-hidden="true"><ArrowRight /></div>}
              </article>
            );
          })}
        </div>
        <div className="journey-cta">
          <a className="button button-gold button-large" href="#enroll">Book my free assessment <ArrowRight size={19} /></a>
          <p><ShieldCheck size={16} /> No payment or commitment required</p>
        </div>
      </section>

      <section className="promise-section">
        <div className="promise-visual">
          <img
            src="/images/hero-family.webp"
            alt="Mother supporting her daughter during a live online Quran lesson"
            width="1792"
            height="896"
            loading="lazy"
          />
        </div>
        <div className="promise-copy">
          <span className="quote-icon">“</span>
          <p className="section-kicker left-kicker"><span></span> Our promise to every family</p>
          <blockquote>
            Learn with clarity.<br />
            Practice with confidence.<br />
            <em>Grow with faith.</em>
          </blockquote>
          <p>Every lesson should leave the learner feeling capable, supported, and excited for what comes next.</p>
          <div className="promise-signature">
            <img src="/logo.png" alt="" width="54" height="54" />
            <div><strong>Alarabiya Academy</strong><span>Quran & Arabic education, wherever you are</span></div>
          </div>
        </div>
      </section>

      <section className="enrollment-section" id="enroll">
        <div className="enroll-pattern" aria-hidden="true"></div>
        <div className="enrollment-intro">
          <p className="section-kicker left-kicker gold-kicker"><span></span> Your first lesson is free</p>
          <h2>Ready to begin your <em>learning journey?</em></h2>
          <p>Tell us about the learner and we’ll match you with the right tutor for a complimentary assessment class.</p>
          <div className="enroll-benefits">
            <span><Check /> Personal tutor matching</span>
            <span><Check /> Flexible lesson times</span>
            <span><Check /> No payment required</span>
          </div>
        </div>
        <form className="enrollment-form" action="/api/enroll.php" method="post">
          <div className="form-title">
            <span><CalendarCheck size={24} /></span>
            <div><strong>Book your free trial</strong><small>We usually reply within one working day</small></div>
          </div>
          <div className="honeypot" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>
          <div className="field-row">
            <label>Your name<input name="name" type="text" placeholder="Full name" autoComplete="name" required /></label>
            <label>Email address<input name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></label>
          </div>
          <div className="field-row">
            <label>WhatsApp number<input name="phone" type="tel" placeholder="+1 234 567 890" autoComplete="tel" required /></label>
            <label>Learner&apos;s age
              <select name="age" defaultValue="" required>
                <option value="" disabled>Select age group</option>
                <option>5–8 years</option><option>9–12 years</option>
                <option>13–17 years</option><option>18+ years</option>
              </select>
            </label>
          </div>
          <label>I&apos;m interested in
            <select name="program" defaultValue="" required>
              <option value="" disabled>Choose a learning program</option>
              <option>Quran Reading</option><option>Tajweed & Hifz</option>
              <option>Arabic Language</option><option>Islamic Studies</option>
              <option>Help me choose</option>
            </select>
          </label>
          <label>Learning goals <span>(optional)</span>
            <textarea name="message" rows={3} placeholder="Current level, goals, preferred schedule..."></textarea>
          </label>
          <label className="consent">
            <input type="checkbox" name="consent" value="yes" required />
            <span>I agree to be contacted about my free lesson and academy programs.</span>
          </label>
          <button className="button button-gold form-submit" type="submit">
            Request my free lesson <ArrowRight size={18} />
          </button>
        </form>
      </section>

      <section className="faq-section" id="faq">
        <div className="faq-intro">
          <p className="section-kicker left-kicker"><span></span> Questions, answered</p>
          <h2>Everything you need to <em>feel ready</em></h2>
          <p>Still unsure about something? Our team will be happy to guide you personally.</p>
          <a href="#enroll">Ask the academy <ArrowRight size={16} /></a>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary><span>{faq.question}</span><ChevronDown size={20} /></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-glow" aria-hidden="true"></div>
        <div className="footer-main">
          <div className="footer-brand">
            <Brand light />
            <p>Learn with clarity.<br />Grow with faith.</p>
          </div>
          <div>
            <strong>Explore</strong>
            <a href="#programs">Programs</a><a href="#why-us">Why Alarabiya</a>
            <a href="#tutors">Our tutors</a><a href="#how-it-works">How it works</a>
          </div>
          <div>
            <strong>Programs</strong>
            <a href="#programs">Quran Reading</a><a href="#programs">Tajweed & Hifz</a>
            <a href="#programs">Arabic Language</a><a href="#programs">Islamic Studies</a>
          </div>
          <div>
            <strong>Get started</strong>
            <a href="#enroll">Book a free lesson</a><a href="#faq">Common questions</a>
            <a href="mailto:hello@alarabiyaacademy.com">hello@alarabiyaacademy.com</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Alarabiya Academy. All rights reserved.</p>
          <div><a href="/privacy">Privacy policy</a><a href="/terms">Terms of use</a></div>
        </div>
      </footer>
    </main>
  );
}
