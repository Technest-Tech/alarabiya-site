import type { Metadata } from "next";
import CourseDetailView from "../../../course-detail-view";
import { courses, getCourse } from "../../../site-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: { absolute: `${course.title.ar} أونلاين | أكاديمية العربية` },
    description: course.description.ar,
    alternates: {
      canonical: `/ar/courses/${slug}/`,
      languages: { en: `/courses/${slug}/`, ar: `/ar/courses/${slug}/` },
    },
    openGraph: {
      title: `${course.title.ar} | أكاديمية العربية`,
      description: course.tagline.ar,
      url: `/ar/courses/${slug}/`,
      locale: "ar_AR",
      images: [{ url: course.image, width: 1200, height: 900, alt: course.title.ar }],
    },
  };
}

export default async function ArabicCoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return null;
  return <CourseDetailView course={course} locale="ar" />;
}
