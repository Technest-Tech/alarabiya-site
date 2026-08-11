import type { Metadata, Viewport } from "next";
import { Almarai, Manrope } from "next/font/google";
import "./globals.css";
import SiteSettingsHydrator from "./site-settings-hydrator";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  preload: false,
});

const almarai = Almarai({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
  display: "swap",
  preload: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alarabiyaacademy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Online Quran & Arabic Classes | Alarabiya Academy",
    template: "%s | Alarabiya Academy",
  },
  description:
    "Personal one-to-one online Quran, Tajweed, Hifz, Arabic and Islamic Studies classes for kids and adults with qualified male and female tutors.",
  keywords: [
    "online Quran classes",
    "Quran classes for kids",
    "online Arabic classes",
    "Tajweed classes online",
    "Hifz classes online",
    "Islamic studies for kids",
    "female Quran teacher online",
  ],
  authors: [{ name: "Alarabiya Academy" }],
  creator: "Alarabiya Academy",
  publisher: "Alarabiya Academy",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ar: "/ar/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Alarabiya Academy",
    title: "Learn the Quran with clarity. Live it with heart.",
    description:
      "Personal live Quran and Arabic lessons for children and adults, wherever you are.",
    images: [
      {
        url: "/og-arabic-quran.png",
        width: 1200,
        height: 630,
        alt: "Alarabiya Academy — Learn with clarity. Grow with faith.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn the Quran with clarity. Live it with heart.",
    description:
      "Personal live Quran and Arabic lessons for children and adults.",
    images: ["/og-arabic-quran.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=20260811", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=20260811",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0878c9",
  colorScheme: "light",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Alarabiya Academy",
  url: siteUrl,
  description:
    "Personal online Quran, Arabic, Tajweed, Hifz and Islamic Studies classes for children and adults.",
  areaServed: "Worldwide",
  educationalCredentialAwarded: "Course completion",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Online learning programs",
    itemListElement: [
      "Quran Reading",
      "Tajweed and Hifz",
      "Arabic Language",
      "Islamic Studies",
    ].map((name) => ({
      "@type": "Course",
      name,
      provider: {
        "@type": "EducationalOrganization",
        name: "Alarabiya Academy",
      },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${almarai.variable}`}>
        {children}
        <SiteSettingsHydrator />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
