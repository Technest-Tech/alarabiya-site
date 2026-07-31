"use client";

import { useRef, useState } from "react";
import { BookOpen, Languages, Mic2, MonitorPlay, Sparkles, Star } from "lucide-react";

const copy = {
  en: {
    ready: "Live lesson preview",
    active: "Lesson in progress",
    hint: "Tap to bring it to life",
    quran: "Quran",
    arabic: "Arabic",
    tajweed: "Tajweed",
    progress: "Great work!",
    aria: "Activate the live lesson animation",
  },
  ar: {
    ready: "معاينة حصة مباشرة",
    active: "الحصة بدأت الآن",
    hint: "اضغط لتبدأ التجربة",
    quran: "قرآن",
    arabic: "عربي",
    tajweed: "تجويد",
    progress: "أحسنت!",
    aria: "تشغيل تجربة الحصة المباشرة",
  },
};

export default function HeroLiveVectors({ locale }: { locale: "en" | "ar" }) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const text = copy[locale];

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const scene = sceneRef.current;
    if (!scene || event.pointerType === "touch") return;
    const bounds = scene.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 18;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 18;
    scene.style.setProperty("--hero-vector-x", `${x}px`);
    scene.style.setProperty("--hero-vector-y", `${y}px`);
  };

  const resetPointer = () => {
    sceneRef.current?.style.setProperty("--hero-vector-x", "0px");
    sceneRef.current?.style.setProperty("--hero-vector-y", "0px");
  };

  return (
    <div
      ref={sceneRef}
      className={`hero-live-vectors ${active ? "is-active" : ""}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="hero-vector-stage">
        <div className="hero-vector-orbit orbit-a" aria-hidden="true"></div>
        <div className="hero-vector-orbit orbit-b" aria-hidden="true"></div>
        <div className="hero-vector-spark spark-a" aria-hidden="true"><Sparkles /></div>
        <div className="hero-vector-spark spark-b" aria-hidden="true"><Star fill="currentColor" /></div>

        <div className="hero-vector-chip hero-chip-quran" aria-hidden="true">
          <span><BookOpen /></span><strong>{text.quran}</strong>
        </div>
        <div className="hero-vector-chip hero-chip-arabic" aria-hidden="true">
          <span><Languages /></span><strong>{text.arabic}</strong>
        </div>
        <div className="hero-vector-chip hero-chip-tajweed" aria-hidden="true">
          <span><Mic2 /></span><strong>{text.tajweed}</strong>
        </div>
        <div className="hero-vector-chip hero-chip-progress" aria-hidden="true">
          <span><Star fill="currentColor" /></span><strong>{text.progress}</strong>
        </div>

        <button
          className="hero-live-toggle"
          type="button"
          aria-label={text.aria}
          aria-pressed={active}
          onClick={() => setActive((current) => !current)}
        >
          <span className="hero-live-icon"><MonitorPlay /></span>
          <span className="hero-live-copy">
            <small><i></i>{active ? text.active : text.ready}</small>
            <strong>{text.hint}</strong>
          </span>
          <span className="sound-bars" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
        </button>
      </div>
    </div>
  );
}
