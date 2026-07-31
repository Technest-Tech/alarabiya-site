"use client";

import { useEffect } from "react";

const revealSelectors = [
  ".trust-cards article",
  ".section-heading",
  ".program-card",
  ".assessment-shell",
  ".learning-image-wrap",
  ".learning-copy",
  ".stats-section article",
  ".tutor-copy",
  ".tutor-image-side",
  ".teacher-profile-card",
  ".journey-grid article",
  ".promise-visual",
  ".promise-copy",
  ".enrollment-intro",
  ".enrollment-form",
  ".faq-intro",
  ".faq-list details",
  ".footer-main > div",
];

export default function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors.join(","))
    );

    root.classList.add("motion-ready");
    elements.forEach((element, index) => {
      element.classList.add("reveal-target");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 80}ms`);
    });

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return () => root.classList.remove("motion-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
