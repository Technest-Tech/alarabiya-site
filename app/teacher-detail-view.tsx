import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  CalendarCheck,
  Check,
  Clock3,
  GraduationCap,
  Languages,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  UserRoundCheck,
  Video,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "./site-chrome";
import { getCourse, type Locale, type TeacherProfile } from "./site-data";

export default function TeacherDetailView({ teacher, locale }: { teacher: TeacherProfile; locale: Locale }) {
  const ar = locale === "ar";
  const Arrow = ar ? ArrowLeft : ArrowRight;
  const home = ar ? "/ar/" : "/";
  const courseBase = ar ? "/ar/courses" : "/courses";
  const alternateHref = ar ? `/teachers/${teacher.slug}/` : `/ar/teachers/${teacher.slug}/`;
  const teacherCourses = teacher.courseSlugs.map(getCourse).filter(Boolean);
  const averageRating = teacher.reviews.length
    ? teacher.reviews.reduce((total, review) => total + review.rating, 0) / teacher.reviews.length
    : 0;

  return (
    <main className={ar ? "rtl-site" : ""} dir={ar ? "rtl" : "ltr"} lang={locale}>
      <SiteHeader locale={locale} alternateHref={alternateHref} />

      <div className="marketplace-profile-page">
        <div className="profile-demo-banner">
          <ShieldCheck />
          <span>{ar ? "عضو في فريق أكاديمية العربية · يتم تأكيد اختيار المعلم بعد حصة التقييم المجانية." : "Alarabiya Academy teaching team · Your tutor match is confirmed after the free assessment."}</span>
        </div>

        <div className="marketplace-profile-grid">
          <div className="marketplace-profile-content">
            <nav className="marketplace-breadcrumb" aria-label={ar ? "مسار التنقل" : "Breadcrumb"}>
              <a href={home}>{ar ? "الرئيسية" : "Home"}</a><span>/</span>
              <a href={`${home}#teacher-profiles`}>{ar ? "المعلمون" : "Teachers"}</a><span>/</span>
              <strong>{teacher.name[locale]}</strong>
            </nav>

            <section className="marketplace-profile-card">
              <div className="marketplace-profile-photo">
                <img src={teacher.image} alt={`${teacher.name[locale]} — ${teacher.role[locale]}`} width="960" height="1200" />
                <span><i></i>{ar ? "فريق الأكاديمية" : "Academy teacher"}</span>
              </div>
              <div className="marketplace-profile-summary">
                <div className="marketplace-profile-label"><Award />{ar ? "حصص فردية مباشرة أونلاين" : "Online one-to-one tutor"}</div>
                <h1>{teacher.name[locale]}</h1>
                <p className="marketplace-profile-role">{teacher.role[locale]}</p>
                {teacher.reviews.length > 0 && (
                  <div className="marketplace-rating-row">
                    <strong>{averageRating.toFixed(1)}</strong>
                    <span className="marketplace-stars" aria-label={`${averageRating.toFixed(1)} ${ar ? "نجوم" : "stars"}`}>
                      {Array.from({ length: 5 }, (_, index) => <Star key={index} fill="currentColor" />)}
                    </span>
                    <a href="#reviews">{teacher.reviews.length} {ar ? "تقييمات منشورة" : "published reviews"}</a>
                  </div>
                )}
                <p className="marketplace-profile-bio">{teacher.shortBio[locale]}</p>
                <div className="marketplace-subject-tags">
                  {teacher.focus[locale].map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="marketplace-profile-facts">
                  <span><Video />{ar ? "حصص مباشرة أونلاين" : "Live online lessons"}</span>
                  <span><Clock3 />{teacher.experience[locale]}</span>
                  {teacher.languages[locale].length > 0 && <span><Languages />{teacher.languages[locale].join(" · ")}</span>}
                </div>
                <a className="button button-gold marketplace-mobile-booking" href={`${home}#enroll`}>{ar ? "احجز حصة التقييم المجانية" : "Book the free assessment"}<Arrow /></a>
              </div>
            </section>

            <section className="marketplace-section">
              <div className="marketplace-section-heading">
                <span><UserRoundCheck /></span>
                <div><small>{ar ? "نبذة تعريفية" : "About the tutor"}</small><h2>{ar ? `عن ${teacher.name.ar}` : `About ${teacher.name.en}`}</h2></div>
              </div>
              <div className="marketplace-rich-copy">{teacher.about[locale].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            </section>

            <section className="marketplace-section">
              <div className="marketplace-section-heading">
                <span><BookOpen /></span>
                <div><small>{ar ? "طريقة الحصة" : "Lesson approach"}</small><h2>{ar ? "كيف تسير الدروس؟" : "About the lessons"}</h2></div>
              </div>
              <div className="marketplace-approach"><Sparkles /><p>{teacher.approach[locale]}</p></div>
              <div className="marketplace-detail-columns">
                <div>
                  <h3>{ar ? "يمكنك العمل على" : "What you can work on"}</h3>
                  <div className="marketplace-check-list">{teacher.focus[locale].map((item) => <span key={item}><Check />{item}</span>)}</div>
                </div>
                <div>
                  <h3>{ar ? "مناسب لـ" : "A good match for"}</h3>
                  <div className="marketplace-check-list">{teacher.learners[locale].map((item) => <span key={item}><Check />{item}</span>)}</div>
                </div>
              </div>
            </section>

            <section className="marketplace-section">
              <div className="marketplace-section-heading">
                <span><GraduationCap /></span>
                <div><small>{ar ? "معايير الحصة" : "Lesson standards"}</small><h2>{ar ? "تعلم شخصي أونلاين" : "Personal online learning"}</h2></div>
              </div>
              <div className="marketplace-credentials">
                <div className="marketplace-experience-card"><Award /><div><small>{ar ? "فريق الأكاديمية" : "Academy team"}</small><strong>{teacher.experience[locale]}</strong></div></div>
                <ul>{teacher.qualifications[locale].map((item) => <li key={item}><Check />{item}</li>)}</ul>
              </div>
            </section>

            <section className="marketplace-section">
              <div className="marketplace-section-heading">
                <span><BookOpen /></span>
                <div><small>{ar ? "مسارات الأكاديمية" : "Academy learning paths"}</small><h2>{ar ? "استكشف البرامج المتاحة" : "Explore available programs"}</h2></div>
              </div>
              <div className="marketplace-course-list">
                {teacherCourses.map((course) => course && (
                  <a href={`${courseBase}/${course.slug}/`} key={course.slug}>
                    <img src={course.image} alt="" width="1200" height="900" loading="lazy" />
                    <div><small>{course.eyebrow[locale]}</small><strong>{course.title[locale]}</strong><span>{ar ? "عرض البرنامج" : "View course"}<Arrow /></span></div>
                  </a>
                ))}
              </div>
            </section>

            {teacher.reviews.length > 0 && (
              <section className="marketplace-section" id="reviews">
                <div className="marketplace-section-heading marketplace-review-heading">
                  <span><MessageCircle /></span>
                  <div><small>{ar ? "آراء الطلاب والأسر" : "Learner & family feedback"}</small><h2>{averageRating.toFixed(1)} · {teacher.reviews.length} {ar ? "تقييمات منشورة" : "published reviews"}</h2></div>
                </div>
                <div className="marketplace-review-list">
                  {teacher.reviews.map((review) => (
                    <article key={review.reviewer.en}>
                      <header>
                        <span className="marketplace-review-avatar">{review.reviewer[locale].slice(0, 1)}</span>
                        <div><strong>{review.reviewer[locale]}</strong><small>{review.relationship[locale]} · {review.location[locale]}</small></div>
                        <span className="marketplace-review-stars" aria-label={`${review.rating} ${ar ? "نجوم" : "stars"}`}>{Array.from({ length: review.rating }, (_, index) => <Star key={index} fill="currentColor" />)}</span>
                      </header>
                      <blockquote>“{review.text[locale]}”</blockquote>
                      <div className="marketplace-review-footnote"><ShieldCheck />{ar ? "تجربة طالب أو أسرة" : "Learner or family experience"}</div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            <section className="marketplace-section marketplace-review-form-section">
              <div className="marketplace-section-heading">
                <span><Star /></span>
                <div><small>{ar ? "تجربة فعلية" : "Real experience"}</small><h2>{ar ? "أرسل تقييماً حقيقياً" : "Submit a genuine review"}</h2></div>
              </div>
              <form className="review-form marketplace-review-form" action="/api/review.php" method="post">
                <input type="hidden" name="teacher" value={`${teacher.name.en} (${teacher.slug})`} />
                <input type="hidden" name="locale" value={locale} />
                <div className="honeypot" aria-hidden="true"><label htmlFor={`review-website-${teacher.slug}-${locale}`}>Website</label><input id={`review-website-${teacher.slug}-${locale}`} name="website" type="text" tabIndex={-1} autoComplete="off" /></div>
                <div className="field-row">
                  <label>{ar ? "الاسم" : "Your name"}<input name="name" type="text" placeholder={ar ? "الاسم الكامل" : "Full name"} autoComplete="name" required /></label>
                  <label>{ar ? "البريد الإلكتروني" : "Email address"}<input name="email" type="email" placeholder="you@example.com" autoComplete="email" required dir="ltr" /></label>
                </div>
                <div className="field-row">
                  <label>{ar ? "التقييم" : "Rating"}
                    <select name="rating" defaultValue="" required>
                      <option value="" disabled>{ar ? "اختر من ٥ نجوم" : "Choose a star rating"}</option>
                      <option value="5">★★★★★ — {ar ? "ممتاز" : "Excellent"}</option><option value="4">★★★★ — {ar ? "جيد جداً" : "Very good"}</option><option value="3">★★★ — {ar ? "جيد" : "Good"}</option><option value="2">★★ — {ar ? "مقبول" : "Fair"}</option><option value="1">★ — {ar ? "يحتاج إلى تحسين" : "Needs improvement"}</option>
                    </select>
                  </label>
                  <label>{ar ? "علاقتك بالطالب" : "Your relationship"}
                    <select name="relationship" defaultValue="" required>
                      <option value="" disabled>{ar ? "اختر إجابة" : "Choose one"}</option><option>{ar ? "أنا الطالب" : "I am the learner"}</option><option>{ar ? "ولي أمر" : "Parent or guardian"}</option><option>{ar ? "فرد من الأسرة" : "Family member"}</option>
                    </select>
                  </label>
                </div>
                <label>{ar ? "تقييمك" : "Your review"}<textarea name="review" rows={5} minLength={30} maxLength={1500} placeholder={ar ? "ما الذي أعجبك؟ وكيف ساعد المعلم على التقدم؟" : "What worked well, and how did the teacher support progress?"} required></textarea></label>
                <label className="consent"><input type="checkbox" name="consent" value="yes" required /><span>{ar ? "أؤكد أن هذا التقييم يعبر عن تجربة حقيقية وأوافق على مراجعته قبل النشر." : "I confirm this review reflects a genuine experience and may be moderated before publication."}</span></label>
                <button className="button button-blue form-submit" type="submit">{ar ? "إرسال التقييم للمراجعة" : "Submit review for moderation"}<Arrow /></button>
              </form>
            </section>
          </div>

          <aside className="marketplace-booking-card">
            {teacher.reviews.length > 0 && (
              <div className="marketplace-booking-rating">
                <span><Star fill="currentColor" /></span>
                <div><strong>{averageRating.toFixed(1)}</strong><small>{teacher.reviews.length} {ar ? "تقييمات منشورة" : "published reviews"}</small></div>
              </div>
            )}
            <p className="marketplace-booking-kicker">{ar ? "الحصة الأولى" : "Your first lesson"}</p>
            <h2>{ar ? "تقييم شخصي مجاني" : "Free personal assessment"}</h2>
            <p>{ar ? "قابل المعلم، وحدد مستواك، واحصل على مسار تعلم يناسب أهدافك." : "Meet the tutor, check your level, and receive a learning path matched to your goals."}</p>
            <div className="marketplace-booking-features">
              <span><Video />{ar ? "حصة مباشرة أونلاين" : "Live online lesson"}</span>
              <span><UserRoundCheck />{ar ? "تعليم فردي" : "One-to-one format"}</span>
              <span><MapPin />{ar ? "متاح حول العالم" : "Available worldwide"}</span>
              <span><Clock3 />{ar ? "رد خلال يوم عمل" : "Reply within one working day"}</span>
            </div>
            <a className="button button-gold button-large marketplace-booking-button" href={`${home}#enroll`}>{ar ? "احجز حصتي المجانية" : "Book my free lesson"}<Arrow /></a>
            <div className="marketplace-booking-trust"><ShieldCheck />{ar ? "لا يلزم دفع أو التزام" : "No payment or commitment required"}</div>
            {teacher.reviews.length > 0 && <a className="marketplace-booking-reviews" href="#reviews"><MessageCircle />{ar ? "اقرأ التقييمات" : "Read reviews"}<Arrow /></a>}
          </aside>
        </div>
      </div>

      <section className="detail-final-cta marketplace-final-cta">
        <div><p><CalendarCheck />{ar ? "ابدأ بخطوة بسيطة" : "Start with one simple step"}</p><h2>{ar ? "قابل معلمك في حصة تقييم مجانية." : "Meet your tutor in a free assessment lesson."}</h2></div>
        <a className="button button-gold button-large" href={`${home}#enroll`}>{ar ? "احجز الآن" : "Book now"}<Arrow /></a>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
