import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  Check,
  Clock3,
  GraduationCap,
  Languages,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "./site-chrome";
import { getTeacher } from "./site-data";
import type { IntentLanding } from "./intent-landing-data";

const landingIcons = {
  quran: BookOpen,
  arabic: Languages,
  combined: GraduationCap,
  female: UserRoundCheck,
};

const studyPaths = [
  {
    href: "/online-quran-classes/",
    icon: BookOpen,
    eyebrow: "Quran only",
    title: "Quran reading, Tajweed & Hifz",
    text: "Choose a focused Quran pathway for a child or adult.",
  },
  {
    href: "/online-arabic-classes/",
    icon: Languages,
    eyebrow: "Arabic only",
    title: "Speaking, reading & understanding",
    text: "Build practical Modern Standard Arabic from your level.",
  },
  {
    href: "/online-arabic-and-quran-classes/",
    icon: GraduationCap,
    eyebrow: "Arabic + Quran",
    title: "Both subjects in one plan",
    text: "Coordinate Arabic and Quran goals without a one-size-fits-all level.",
  },
];

export default function IntentLandingView({ landing }: { landing: IntentLanding }) {
  const LandingIcon = landingIcons[landing.icon];
  const landingTeachers = landing.teacherSlugs.map(getTeacher).filter(Boolean);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: landing.title,
    description: landing.metaDescription,
    provider: {
      "@type": "EducationalOrganization",
      name: "Alarabiya Academy",
      url: "https://alarabiyaacademy.com",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: "PT30M, PT45M or PT60M live lessons",
    },
  };

  return (
    <main className={`intent-landing intent-${landing.icon}`}>
      <SiteHeader
        locale="en"
        alternateHref="/ar/"
        ctaHref="#intent-enroll"
        ctaLabel="Free assessment"
      />

      <section className="intent-hero">
        <div className="intent-hero-copy">
          <nav className="intent-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a><span>/</span><strong>{landing.eyebrow}</strong>
          </nav>
          <span className="intent-hero-icon"><LandingIcon /></span>
          <p className="detail-eyebrow">{landing.eyebrow}</p>
          <h1>{landing.title}</h1>
          <p className="intent-hero-lead">{landing.tagline}</p>
          <div className="intent-hero-actions">
            <a className="button button-gold button-large" href="#intent-enroll">
              Request a free assessment <ArrowRight />
            </a>
            <a className="intent-text-link" href={landing.primaryCourseHref}>
              {landing.primaryCourseLabel} <ArrowRight />
            </a>
          </div>
          <div className="intent-trust-row" aria-label="Lesson benefits">
            <span><Check /> No payment required</span>
            <span><Check /> Personal tutor matching</span>
            <span><Check /> Flexible lesson times</span>
          </div>
        </div>
        <div className="intent-hero-visual">
          <img src={landing.image} alt={landing.imageAlt} width="1200" height="900" />
          <div className="intent-photo-card">
            <span><Sparkles /></span>
            <div><small>Your first step</small><strong>Meet a tutor for free</strong></div>
          </div>
        </div>
      </section>

      <section className="course-format-strip intent-format-strip" aria-label="Program details">
        {landing.facts.map((item, index) => {
          const Icon = index === 0 ? UserRoundCheck : index === 1 ? BookOpen : index === 2 ? Clock3 : ShieldCheck;
          return <article key={item.label}><span><Icon /></span><div><small>{item.label}</small><strong>{item.value}</strong></div></article>;
        })}
      </section>

      <section className="intent-path-section" aria-labelledby="choose-study-path">
        <div className="section-heading heading-center">
          <p className="section-kicker"><span></span> Choose the right study focus <span></span></p>
          <h2 id="choose-study-path">Arabic, Quran, or <em>both together</em></h2>
          <p>Start with the subject you searched for. Your free assessment confirms the right level and lesson plan.</p>
        </div>
        <div className="intent-path-grid">
          {studyPaths.map((path) => {
            const Icon = path.icon;
            const active = path.href === `/${landing.slug}/`;
            return (
              <a className={active ? "active" : ""} href={path.href} key={path.href} aria-current={active ? "page" : undefined}>
                <span className="intent-path-icon"><Icon /></span>
                <small>{path.eyebrow}</small>
                <h3>{path.title}</h3>
                <p>{path.text}</p>
                <strong>{active ? "You are viewing this path" : "Explore this path"}<ArrowRight /></strong>
              </a>
            );
          })}
        </div>
      </section>

      <section className="course-intro-section intent-outcomes-section">
        <div className="course-intro-copy">
          <p className="section-kicker left-kicker"><span></span> Personal learning, clear direction</p>
          <h2>A plan built for <em>real progress</em></h2>
          <p>The assessment identifies the learner’s current level, goal, preferred tutor, and suitable schedule before regular lessons begin.</p>
          <a className="button button-blue" href="#intent-enroll">Tell us your learning goal <ArrowRight /></a>
        </div>
        <div className="course-outcome-card">
          <div className="outcome-card-title">
            <span><Sparkles /></span>
            <div><small>What this pathway supports</small><strong>Learning outcomes</strong></div>
          </div>
          <div className="outcome-list">
            {landing.outcomes.map((outcome) => <span key={outcome}><Check />{outcome}</span>)}
          </div>
        </div>
      </section>

      <section className="curriculum-section intent-plan-section" id="learning-plan">
        <div className="section-heading heading-center">
          <p className="section-kicker"><span></span> How the learning path works <span></span></p>
          <h2>From assessment to <em>steady improvement</em></h2>
          <p>The exact pace and learning material change with the learner’s starting point and progress.</p>
        </div>
        <div className="curriculum-grid">
          {landing.modules.map((module, index) => (
            <article key={module.title}>
              <span className="module-number">0{index + 1}</span>
              <div className="module-icon"><LandingIcon /></div>
              <h3>{module.title}</h3>
              <p>{module.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ideal-section intent-ideal-section">
        <div>
          <p className="section-kicker left-kicker gold-kicker"><span></span> Is this path right for you?</p>
          <h2>Made for learners with <em>different starting points</em></h2>
        </div>
        <div className="ideal-list">{landing.idealFor.map((item) => <span key={item}><Check />{item}</span>)}</div>
      </section>

      <section className="course-teachers-section intent-teachers-section">
        <div className="section-heading heading-center">
          <p className="section-kicker"><span></span> Personal tutor matching <span></span></p>
          <h2>{landing.teacherHeading}</h2>
          <p>The academy confirms the most suitable available tutor after reviewing the learner’s level, goals, preferences, and lesson times.</p>
        </div>
        <div className="course-teacher-grid">
          {landingTeachers.map((teacher) => teacher && (
            <article key={teacher.slug}>
              <img src={teacher.image} alt={teacher.name.en} width="960" height="1200" loading="lazy" />
              <div>
                <small>{teacher.role.en}</small>
                <h3>{teacher.name.en}</h3>
                <p>{teacher.shortBio.en}</p>
                <a href={`/teachers/${teacher.slug}/`}>View teacher profile <ArrowRight /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="enrollment-section intent-enrollment" id="intent-enroll">
        <div className="enroll-pattern" aria-hidden="true"></div>
        <div className="enrollment-intro">
          <p className="section-kicker left-kicker gold-kicker"><span></span> Your assessment is free</p>
          <h2>Find the right <em>starting point.</em></h2>
          <p>Tell us about the learner and we’ll contact you to arrange a complimentary assessment with a suitable tutor.</p>
          <div className="enroll-benefits">
            <span><Check /> Your selected path: {landing.programValue}</span>
            <span><Check /> Male or female tutor requests welcomed</span>
            <span><Check /> No payment or commitment required</span>
          </div>
        </div>
        <form className="enrollment-form intent-form" action="/api/enroll.php" method="post">
          <div className="form-title">
            <span><CalendarCheck size={24} /></span>
            <div><strong>Request your free assessment</strong><small>We usually reply within one working day</small></div>
          </div>
          <input type="hidden" name="program" value={landing.programValue} />
          <div className="honeypot" aria-hidden="true">
            <label htmlFor={`website-${landing.slug}`}>Website</label>
            <input id={`website-${landing.slug}`} name="website" type="text" tabIndex={-1} autoComplete="off" />
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
          <label>Learning goals <span>(optional)</span>
            <textarea name="message" rows={3} placeholder="Current level, goals, tutor preference, suitable times..."></textarea>
          </label>
          <label className="consent">
            <input type="checkbox" name="consent" value="yes" required />
            <span>I agree to be contacted about my free assessment and academy programs.</span>
          </label>
          <button className="button button-gold form-submit" type="submit">
            Request my free assessment <ArrowRight size={18} />
          </button>
        </form>
      </section>

      <section className="course-faq-section intent-faq-section">
        <div className="course-faq-title">
          <p className="section-kicker left-kicker"><span></span> Questions before you begin</p>
          <h2>Clear answers for this learning path</h2>
        </div>
        <div className="faq-list">
          {landing.faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary><span>{faq.question}</span><span>+</span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="detail-final-cta intent-final-cta">
        <div><p><Sparkles /> Start with clarity</p><h2>Meet a tutor and discover the right next step.</h2></div>
        <a className="button button-gold button-large" href="#intent-enroll">Request the free assessment <ArrowRight /></a>
      </section>

      <SiteFooter locale="en" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
