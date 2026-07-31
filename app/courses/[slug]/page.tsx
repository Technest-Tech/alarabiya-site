import type { Metadata } from "next";
import CourseDetailView from "../../course-detail-view";
import { courses, getCourse } from "../../site-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: `${course.title.en} Online Course`,
    description: course.description.en,
    alternates: {
      canonical: `/courses/${slug}/`,
      languages: { en: `/courses/${slug}/`, ar: `/ar/courses/${slug}/` },
    },
    openGraph: {
      title: `${course.title.en} | Alarabiya Academy`,
      description: course.tagline.en,
      url: `/courses/${slug}/`,
      images: [{ url: course.image, width: 1200, height: 900, alt: course.title.en }],
    },
  };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return null;
  return <CourseDetailView course={course} locale="en" />;
}
