import { ArrowLeft, ArrowRight, BookOpen, Check, Languages, Sparkles } from "lucide-react";
import { teachers, type Locale } from "./site-data";

export default function TeacherCards({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const Arrow = ar ? ArrowLeft : ArrowRight;
  const base = ar ? "/ar/teachers" : "/teachers";

  return (
    <section className="teacher-cards-section" id="teacher-profiles">
      <div className="teacher-card-pattern" aria-hidden="true"></div>
      <div className="section-heading heading-center">
        <p className="section-kicker"><span></span>{ar ? "معلم يَفهم طريقة تعلمك" : "A teacher who understands your learner"}<span></span></p>
        <h2>{ar ? <>تعرّف إلى بعض <em>معلمينا</em></> : <>Meet some of our <em>teachers</em></>}</h2>
        <p>{ar ? "تعرّف إلى فريقنا، ثم قابل المعلم أو المعلمة الأنسب لمستواك وأهدافك في حصة تقييم مجانية." : "Meet our team, then find the tutor best matched to your level and goals in a free assessment lesson."}</p>
      </div>
      <div className="teacher-profile-grid">
        {teachers.map((teacher, index) => (
          <article className="teacher-profile-card" key={teacher.slug}>
            <a className="teacher-card-photo" href={`${base}/${teacher.slug}/`} aria-label={`${ar ? "عرض ملف" : "View profile for"} ${teacher.name[locale]}`}>
              <img src={teacher.image} alt={`${teacher.name[locale]} — ${teacher.role[locale]}`} width="960" height="1200" loading="lazy" />
              <span className="teacher-number">0{index + 1}</span>
              <span className="teacher-availability"><i></i>{ar ? "فريق الأكاديمية" : "Academy teacher"}</span>
            </a>
            <div className="teacher-card-body">
              <div className="teacher-card-heading">
                <div><h3>{teacher.name[locale]}</h3><p>{teacher.role[locale]}</p></div>
                <span>{index === 1 ? <BookOpen /> : index === 2 ? <Languages /> : <Sparkles />}</span>
              </div>
              <p className="teacher-card-bio">{teacher.shortBio[locale]}</p>
              <div className="teacher-card-focus">
                {teacher.focus[locale].slice(0, 2).map((focus) => <span key={focus}><Check />{focus}</span>)}
              </div>
              <a className="teacher-profile-link" href={`${base}/${teacher.slug}/`}>
                {ar ? "اعرف المزيد عن المعلم" : "View teacher profile"} <Arrow size={17} />
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="profile-preview-note">
        {ar ? "يتم تأكيد المعلم النهائي والبرنامج المناسب بعد حصة التقييم المجانية حسب المستوى والأهداف والمواعيد المتاحة." : "Your final tutor and learning path are confirmed after the free assessment based on level, goals, and availability."}
      </p>
    </section>
  );
}
