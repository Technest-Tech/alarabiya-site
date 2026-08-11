"use client";

import { useEffect } from "react";

type PublicSiteSettings = {
  contactEmail: string;
  whatsappNumber: string | null;
  whatsappUrl: string | null;
  facebookUrl: string | null;
  instagramUrl: string | null;
  youtubeUrl: string | null;
  tiktokUrl: string | null;
};

function updateLinks(selector: string, href: string | null, label?: string | null) {
  document.querySelectorAll<HTMLAnchorElement>(selector).forEach((link) => {
    if (!href) {
      link.hidden = true;
      return;
    }

    link.href = href;
    link.hidden = false;

    if (label) link.textContent = label;
  });
}

export default function SiteSettingsHydrator() {
  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/site-settings", {
      headers: { Accept: "application/json" },
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("Could not load site settings");
        return response.json() as Promise<PublicSiteSettings>;
      })
      .then((settings) => {
        updateLinks(
          '[data-site-setting="contact-email"]',
          `mailto:${settings.contactEmail}`,
          settings.contactEmail,
        );
        updateLinks(
          '[data-site-setting="whatsapp"]',
          settings.whatsappUrl,
          settings.whatsappNumber ? `WhatsApp: ${settings.whatsappNumber}` : null,
        );
        updateLinks('[data-site-setting="facebook-url"]', settings.facebookUrl);
        updateLinks('[data-site-setting="instagram-url"]', settings.instagramUrl);
        updateLinks('[data-site-setting="youtube-url"]', settings.youtubeUrl);
        updateLinks('[data-site-setting="tiktok-url"]', settings.tiktokUrl);
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        console.warn("Using the website's fallback contact details.");
      });

    return () => controller.abort();
  }, []);

  return null;
}
