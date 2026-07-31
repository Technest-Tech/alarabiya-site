import type { Metadata } from "next";
import IntentLandingView from "../intent-landing-view";
import { getIntentLanding, intentLandings } from "../intent-landing-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return intentLandings.map((landing) => ({ intent: landing.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ intent: string }> }): Promise<Metadata> {
  const { intent } = await params;
  const landing = getIntentLanding(intent);
  if (!landing) return {};

  return {
    title: landing.metaTitle,
    description: landing.metaDescription,
    alternates: { canonical: `/${landing.slug}/` },
    openGraph: {
      type: "website",
      title: `${landing.metaTitle} | Alarabiya Academy`,
      description: landing.metaDescription,
      url: `/${landing.slug}/`,
      images: [{ url: landing.image, width: 1200, height: 900, alt: landing.imageAlt }],
    },
  };
}

export default async function IntentLandingPage({ params }: { params: Promise<{ intent: string }> }) {
  const { intent } = await params;
  const landing = getIntentLanding(intent);
  if (!landing) return null;
  return <IntentLandingView landing={landing} />;
}
