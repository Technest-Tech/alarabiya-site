import type { Metadata } from "next";
import TeacherDetailView from "../../../teacher-detail-view";
import { getTeacher, teachers } from "../../../site-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return teachers.map((teacher) => ({ slug: teacher.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const teacher = getTeacher(slug);
  if (!teacher) return {};
  return {
    title: { absolute: `${teacher.name.ar} — ${teacher.role.ar} | أكاديمية العربية` },
    description: teacher.shortBio.ar,
    alternates: {
      canonical: `/ar/teachers/${slug}/`,
      languages: { en: `/teachers/${slug}/`, ar: `/ar/teachers/${slug}/` },
    },
    openGraph: {
      title: `${teacher.name.ar} | أكاديمية العربية`,
      description: teacher.shortBio.ar,
      url: `/ar/teachers/${slug}/`,
      locale: "ar_AR",
      images: [{ url: teacher.image, width: 960, height: 1200, alt: teacher.name.ar }],
    },
  };
}

export default async function ArabicTeacherPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const teacher = getTeacher(slug);
  if (!teacher) return null;
  return <TeacherDetailView teacher={teacher} locale="ar" />;
}
