"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { Locale, TeacherProfile } from "./site-data";

export default function ManagedTeacherGrid({ locale, courseSlug }: { locale: Locale; courseSlug?: string }) {
  const ar = locale === "ar";
  const Arrow = ar ? ArrowLeft : ArrowRight;
  const [teachers, setTeachers] = useState<TeacherProfile[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/teachers", { headers: { Accept: "application/json" }, signal: controller.signal })
      .then((response) => response.ok ? response.json() : Promise.reject(new Error("Teacher request failed")))
      .then((profiles: TeacherProfile[]) => setTeachers(courseSlug
        ? profiles.filter((teacher) => teacher.courseSlugs.includes(courseSlug))
        : profiles))
      .catch(() => setTeachers([]))
      .finally(() => setLoaded(true));

    return () => controller.abort();
  }, [courseSlug]);

  if (!loaded) {
    return <div className="teacher-loading-state compact" aria-label={ar ? "جارٍ تحميل المعلمين" : "Loading teachers"}><span></span><span></span><span></span></div>;
  }

  if (teachers.length === 0) {
    return <div className="teacher-empty-state compact"><p>{ar ? "ستظهر ملفات المعلمين الحقيقيين هنا بعد نشرها من لوحة التحكم." : "Real teacher profiles will appear here after the academy publishes them from the dashboard."}</p></div>;
  }

  return (
    <div className="course-teacher-grid">
      {teachers.map((teacher) => (
        <article key={teacher.slug}>
          <img src={teacher.image} alt={teacher.name[locale]} width="960" height="1200" loading="lazy" />
          <div>
            <small>{teacher.role[locale]}</small>
            <h3>{teacher.name[locale]}</h3>
            <p>{teacher.shortBio[locale]}</p>
            <a href={`${ar ? "/ar" : ""}/teachers/${teacher.slug}/`}>{ar ? "عرض الملف التعريفي" : "View teacher profile"}<Arrow /></a>
          </div>
        </article>
      ))}
    </div>
  );
}
