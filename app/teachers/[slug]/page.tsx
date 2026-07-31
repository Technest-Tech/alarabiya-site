import type { Metadata } from "next";
import TeacherDetailView from "../../teacher-detail-view";
import { getTeacher, teachers } from "../../site-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return teachers.map((teacher) => ({ slug: teacher.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const teacher = getTeacher(slug);
  if (!teacher) return {};
  return {
    title: `${teacher.name.en} — ${teacher.role.en}`,
    description: teacher.shortBio.en,
    alternates: {
      canonical: `/teachers/${slug}/`,
      languages: { en: `/teachers/${slug}/`, ar: `/ar/teachers/${slug}/` },
    },
    openGraph: {
      title: `${teacher.name.en} | Alarabiya Academy`,
      description: teacher.shortBio.en,
      url: `/teachers/${slug}/`,
      images: [{ url: teacher.image, width: 960, height: 1200, alt: teacher.name.en }],
    },
  };
}

export default async function TeacherPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const teacher = getTeacher(slug);
  if (!teacher) return null;
  return <TeacherDetailView teacher={teacher} locale="en" />;
}
