"use client";

import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarCheck,
  Check,
  GraduationCap,
  Heart,
  Languages,
  Mic2,
  RotateCcw,
  Sparkles,
  Star,
  UserRoundCheck,
} from "lucide-react";

type Locale = "en" | "ar";
type Subject = "arabic" | "islamic" | "tajweed";
type LevelKey = "starter" | "foundation" | "developing" | "strong" | "advanced";
type Phase = "setup" | "quiz" | "result";

type SetupOption = {
  value: string;
  label: string;
  hint: string;
  icon: LucideIcon;
};

type Question = {
  prompt: string;
  options: string[];
  correct: number;
};

const quizBanks: Record<Locale, Record<Subject, Question[]>> = {
  en: {
    arabic: [
      {
        prompt: "Which Arabic word means “book”?",
        options: ["كتاب", "باب", "بيت", "قلم"],
        correct: 0,
      },
      {
        prompt: "What is the plural of طالب (student)?",
        options: ["طلاب", "طالبة", "مكتبة", "معلم"],
        correct: 0,
      },
      {
        prompt: "Complete the sentence: أنا ___ اللغة العربية.",
        options: ["أتعلم", "يتعلم", "تتعلم", "نتعلم"],
        correct: 0,
      },
      {
        prompt: "What does the Arabic question word أين mean?",
        options: ["Where", "When", "Who", "Why"],
        correct: 0,
      },
      {
        prompt: "Which Arabic sentence is grammatically correct?",
        options: ["الطالبة تقرأ الكتاب.", "الطالبة يقرأ الكتاب.", "الطالبة يقرؤون الكتاب.", "الطالبة نقرأ الكتاب."],
        correct: 0,
      },
    ],
    islamic: [
      {
        prompt: "How many pillars of Islam are there?",
        options: ["Three", "Four", "Five", "Six"],
        correct: 2,
      },
      {
        prompt: "Which obligatory prayer is performed before sunrise?",
        options: ["Fajr", "Dhuhr", "Asr", "Isha"],
        correct: 0,
      },
      {
        prompt: "Which Surah opens the Quran?",
        options: ["Al-Baqarah", "Al-Fatihah", "Al-Ikhlas", "An-Nas"],
        correct: 1,
      },
      {
        prompt: "Which prophet helped Ibrahim build the Kaaba?",
        options: ["Yusuf", "Musa", "Ismail", "Yunus"],
        correct: 2,
      },
      {
        prompt: "What is the obligatory charity given by eligible Muslims called?",
        options: ["Sadaqah", "Zakat", "Waqf", "Hadiyyah"],
        correct: 1,
      },
    ],
    tajweed: [
      {
        prompt: "How many counts is Madd Tabi‘i (natural elongation)?",
        options: ["One", "Two", "Four", "Six"],
        correct: 1,
      },
      {
        prompt: "Which phrase contains all five Qalqalah letters?",
        options: ["قطب جد", "ينمو", "يرملون", "صف ذا ثنا"],
        correct: 0,
      },
      {
        prompt: "What rule applies when Noon Sakinah is followed by ب?",
        options: ["Izhar", "Idgham", "Iqlab", "Ikhfa"],
        correct: 2,
      },
      {
        prompt: "What sound accompanies Noon or Meem with a shaddah?",
        options: ["Qalqalah", "Ghunnah", "Madd", "Sakt"],
        correct: 1,
      },
      {
        prompt: "Which group contains the letters of Idgham with Ghunnah?",
        options: ["قطب جد", "ء هـ ع ح غ خ", "ينمو", "ل ر"],
        correct: 2,
      },
    ],
  },
  ar: {
    arabic: [
      {
        prompt: "أي كلمة عربية تعني “Book”؟",
        options: ["كتاب", "باب", "بيت", "قلم"],
        correct: 0,
      },
      {
        prompt: "ما جمع كلمة «طالب»؟",
        options: ["طلاب", "طالبة", "مكتبة", "معلم"],
        correct: 0,
      },
      {
        prompt: "أكمل الجملة: أنا ___ اللغة العربية.",
        options: ["أتعلم", "يتعلم", "تتعلم", "نتعلم"],
        correct: 0,
      },
      {
        prompt: "فيمَ تُستخدم أداة السؤال «أين»؟",
        options: ["للسؤال عن المكان", "للسؤال عن الزمان", "للسؤال عن الشخص", "للسؤال عن السبب"],
        correct: 0,
      },
      {
        prompt: "أي جملة عربية صحيحة نحوياً؟",
        options: ["الطالبة تقرأ الكتاب.", "الطالبة يقرأ الكتاب.", "الطالبة يقرؤون الكتاب.", "الطالبة نقرأ الكتاب."],
        correct: 0,
      },
    ],
    islamic: [
      {
        prompt: "كم عدد أركان الإسلام؟",
        options: ["ثلاثة", "أربعة", "خمسة", "ستة"],
        correct: 2,
      },
      {
        prompt: "أي صلاة مفروضة تؤدى قبل شروق الشمس؟",
        options: ["الفجر", "الظهر", "العصر", "العشاء"],
        correct: 0,
      },
      {
        prompt: "ما السورة التي يبدأ بها المصحف؟",
        options: ["البقرة", "الفاتحة", "الإخلاص", "الناس"],
        correct: 1,
      },
      {
        prompt: "أي نبي ساعد إبراهيم عليه السلام في بناء الكعبة؟",
        options: ["يوسف", "موسى", "إسماعيل", "يونس"],
        correct: 2,
      },
      {
        prompt: "ما اسم الصدقة الواجبة على المسلم المستطيع؟",
        options: ["الصدقة", "الزكاة", "الوقف", "الهدية"],
        correct: 1,
      },
    ],
    tajweed: [
      {
        prompt: "كم حركة يُمد المد الطبيعي؟",
        options: ["حركة واحدة", "حركتان", "أربع حركات", "ست حركات"],
        correct: 1,
      },
      {
        prompt: "أي عبارة تجمع حروف القلقلة الخمسة؟",
        options: ["قطب جد", "ينمو", "يرملون", "صف ذا ثنا"],
        correct: 0,
      },
      {
        prompt: "ما الحكم إذا جاء بعد النون الساكنة حرف الباء؟",
        options: ["الإظهار", "الإدغام", "الإقلاب", "الإخفاء"],
        correct: 2,
      },
      {
        prompt: "ما الصوت الملازم للنون أو الميم المشددتين؟",
        options: ["القلقلة", "الغنة", "المد", "السكت"],
        correct: 1,
      },
      {
        prompt: "أي مجموعة هي حروف الإدغام بغنة؟",
        options: ["قطب جد", "ء هـ ع ح غ خ", "ينمو", "ل ر"],
        correct: 2,
      },
    ],
  },
};

const copy = {
  en: {
    kicker: "Interactive placement quiz",
    title: <>Test your knowledge and <em>discover your level</em></>,
    intro: "Choose Arabic, Islamic Studies, or Quran & Tajweed, then answer five real questions for an instant scored result.",
    setupLabel: "Setup",
    questionLabel: "Question",
    of: "of",
    choose: "Choose one answer",
    next: "Continue",
    startQuiz: "Start the quiz",
    nextQuestion: "Next question",
    finish: "Calculate my level",
    back: "Back",
    resultEyebrow: "Your quiz result",
    scoreLabel: "Correct answers",
    recommended: "Recommended learning path",
    resultNote: "This short quiz gives a useful starting estimate. A free live assessment with a tutor will confirm the precise level and learning plan.",
    book: "Book my free assessment",
    retry: "Try another quiz",
    setup: [
      {
        key: "learner",
        eyebrow: "Tell us who is taking the quiz",
        question: "Who would you like to assess?",
        helper: "This helps us frame the recommendation for the learner.",
        options: [
          { value: "child", label: "My child", hint: "Ages 5–17", icon: GraduationCap },
          { value: "adult", label: "Myself / an adult", hint: "Age 18+", icon: UserRoundCheck },
        ],
      },
      {
        key: "subject",
        eyebrow: "Choose a subject",
        question: "Which knowledge quiz would you like to take?",
        helper: "You will answer five real questions from the selected subject.",
        options: [
          { value: "arabic", label: "Arabic Language", hint: "Vocabulary and grammar", icon: Languages },
          { value: "islamic", label: "Islamic Studies", hint: "Faith, worship and Seerah", icon: Heart },
          { value: "tajweed", label: "Quran & Tajweed", hint: "Rules and recitation", icon: Mic2 },
        ],
      },
    ],
    subjects: {
      arabic: "Arabic Language",
      islamic: "Islamic Studies",
      tajweed: "Quran & Tajweed",
    },
    levels: {
      starter: { name: "New Beginner", description: "Start with the essentials in a gentle, structured program that builds clear foundations and confidence." },
      foundation: { name: "Foundation Level", description: "You understand a few key ideas. Regular guided practice will connect the basics and improve accuracy." },
      developing: { name: "Developing Level", description: "You have a useful base. Focused lessons will fill important gaps and make your knowledge more consistent." },
      strong: { name: "Strong Intermediate", description: "You answered most questions correctly and are ready for detailed coaching and more challenging material." },
      advanced: { name: "Advanced Starter", description: "Excellent result. You have a strong knowledge base and are ready for refinement, depth, and ambitious goals." },
    },
  },
  ar: {
    kicker: "اختبار تحديد مستوى تفاعلي",
    title: <>اختبر معلوماتك و<em>اكتشف مستواك</em></>,
    intro: "اختر اللغة العربية أو الدراسات الإسلامية أو القرآن والتجويد، ثم أجب عن خمسة أسئلة حقيقية لتحصل على نتيجتك فوراً.",
    setupLabel: "الإعداد",
    questionLabel: "السؤال",
    of: "من",
    choose: "اختر إجابة واحدة",
    next: "متابعة",
    startQuiz: "ابدأ الاختبار",
    nextQuestion: "السؤال التالي",
    finish: "احسب مستواي",
    back: "السابق",
    resultEyebrow: "نتيجة الاختبار",
    scoreLabel: "الإجابات الصحيحة",
    recommended: "مسار التعلم المقترح",
    resultNote: "يمنحك هذا الاختبار القصير تقديراً مبدئياً مفيداً، وتؤكد حصة التقييم المباشرة المجانية المستوى الدقيق وخطة التعلم.",
    book: "احجز تقييمي المجاني",
    retry: "جرّب اختباراً آخر",
    setup: [
      {
        key: "learner",
        eyebrow: "أخبرنا من سيؤدي الاختبار",
        question: "لمن تريد تحديد المستوى؟",
        helper: "تساعدنا هذه المعلومة على تخصيص التوصية للمتعلم.",
        options: [
          { value: "child", label: "طفلي", hint: "من ٥ إلى ١٧ سنة", icon: GraduationCap },
          { value: "adult", label: "أنا أو شخص بالغ", hint: "١٨ سنة فأكثر", icon: UserRoundCheck },
        ],
      },
      {
        key: "subject",
        eyebrow: "اختر مادة الاختبار",
        question: "في أي مجال تريد اختبار معلوماتك؟",
        helper: "ستجيب عن خمسة أسئلة حقيقية من المادة التي تختارها.",
        options: [
          { value: "arabic", label: "اللغة العربية", hint: "المفردات والقواعد", icon: Languages },
          { value: "islamic", label: "الدراسات الإسلامية", hint: "العقيدة والعبادات والسيرة", icon: Heart },
          { value: "tajweed", label: "القرآن والتجويد", hint: "الأحكام والتلاوة", icon: Mic2 },
        ],
      },
    ],
    subjects: {
      arabic: "اللغة العربية",
      islamic: "الدراسات الإسلامية",
      tajweed: "القرآن والتجويد",
    },
    levels: {
      starter: { name: "مبتدئ جديد", description: "ابدأ بالأساسيات في برنامج هادئ ومنظم يبني قاعدة واضحة وثقة مستمرة." },
      foundation: { name: "المستوى التأسيسي", description: "لديك بعض المعلومات الأساسية، وستساعدك الممارسة الموجهة على ربطها وتحسين الدقة." },
      developing: { name: "المستوى المتطور", description: "لديك قاعدة مفيدة، وستملأ الدروس المركزة الفجوات المهمة وتجعل معرفتك أكثر ثباتاً." },
      strong: { name: "متوسط قوي", description: "أجبت عن معظم الأسئلة بشكل صحيح وأنت مستعد لتدريب أدق ومحتوى أكثر تحدياً." },
      advanced: { name: "متقدم", description: "نتيجة ممتازة. لديك قاعدة معرفية قوية وأنت مستعد للإتقان والتعمق والأهداف الطموحة." },
    },
  },
};

export default function LevelAssessment({ locale }: { locale: Locale }) {
  const [phase, setPhase] = useState<Phase>("setup");
  const [setupIndex, setSetupIndex] = useState(0);
  const [learner, setLearner] = useState("");
  const [subject, setSubject] = useState<Subject | "">("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const text = copy[locale];
  const setupStep = text.setup[setupIndex];
  const questions = subject ? quizBanks[locale][subject] : quizBanks[locale].arabic;
  const selectedSetup = setupStep.key === "learner" ? learner : subject;
  const selectedAnswer = answers[questionIndex];
  const NextArrow = locale === "ar" ? ArrowLeft : ArrowRight;
  const BackArrow = locale === "ar" ? ArrowRight : ArrowLeft;

  const score = useMemo(
    () => answers.reduce((total, answer, index) => total + (answer === questions[index]?.correct ? 1 : 0), 0),
    [answers, questions]
  );

  const levelKey: LevelKey =
    score <= 1 ? "starter" : score === 2 ? "foundation" : score === 3 ? "developing" : score === 4 ? "strong" : "advanced";
  const level = text.levels[levelKey];

  const totalJourneySteps = 2 + questions.length;
  const currentJourneyStep =
    phase === "setup" ? setupIndex + 1 : phase === "quiz" ? 2 + questionIndex + 1 : totalJourneySteps;
  const progress = (currentJourneyStep / totalJourneySteps) * 100;

  const selectSetup = (value: string) => {
    if (setupStep.key === "learner") {
      setLearner(value);
    } else {
      setSubject(value as Subject);
      setAnswers([]);
      setQuestionIndex(0);
    }
  };

  const continueSetup = () => {
    if (!selectedSetup) return;
    if (setupIndex === 0) {
      setSetupIndex(1);
    } else {
      setPhase("quiz");
      setQuestionIndex(0);
    }
  };

  const selectAnswer = (answerIndex: number) => {
    setAnswers((current) => {
      const next = [...current];
      next[questionIndex] = answerIndex;
      return next;
    });
  };

  const continueQuiz = () => {
    if (selectedAnswer === undefined) return;
    if (questionIndex === questions.length - 1) {
      setPhase("result");
    } else {
      setQuestionIndex((current) => current + 1);
    }
  };

  const goBack = () => {
    if (phase === "setup") {
      setSetupIndex((current) => Math.max(0, current - 1));
    } else if (phase === "quiz" && questionIndex === 0) {
      setPhase("setup");
      setSetupIndex(1);
    } else if (phase === "quiz") {
      setQuestionIndex((current) => Math.max(0, current - 1));
    }
  };

  const restart = () => {
    setPhase("setup");
    setSetupIndex(0);
    setLearner("");
    setSubject("");
    setQuestionIndex(0);
    setAnswers([]);
  };

  const phaseLabel =
    phase === "setup"
      ? `${text.setupLabel} ${setupIndex + 1} ${text.of} 2`
      : phase === "quiz"
        ? `${text.questionLabel} ${questionIndex + 1} ${text.of} ${questions.length}`
        : text.resultEyebrow;

  return (
    <section className="assessment-section" aria-labelledby={`assessment-title-${locale}`}>
      <div className="assessment-bg-orb orb-one" aria-hidden="true"></div>
      <div className="assessment-bg-orb orb-two" aria-hidden="true"></div>
      <div className="section-heading heading-center">
        <p className="section-kicker"><span></span>{text.kicker}<span></span></p>
        <h2 id={`assessment-title-${locale}`}>{text.title}</h2>
        <p>{text.intro}</p>
      </div>

      <div className={`assessment-shell ${phase === "result" ? "show-result" : ""}`}>
        <div className="assessment-visual" aria-hidden="true">
          <div className="assessment-orbit assessment-orbit-one"></div>
          <div className="assessment-orbit assessment-orbit-two"></div>
          <div className="assessment-float assessment-float-quran"><BookOpen /><span>{locale === "ar" ? "قرآن" : "Quran"}</span></div>
          <div className="assessment-float assessment-float-arabic"><Languages /><span>{locale === "ar" ? "عربي" : "Arabic"}</span></div>
          <div className="assessment-float assessment-float-star"><Star fill="currentColor" /></div>
          <div className="assessment-meter" key={`${phase}-${setupIndex}-${questionIndex}`}>
            <span className="meter-icon">{phase === "result" ? <Check /> : <Sparkles />}</span>
            <small>{phaseLabel}</small>
            <strong>{phase === "result" ? `${score}/${questions.length}` : `${Math.round(progress)}%`}</strong>
            <div><i style={{ width: `${progress}%` }}></i></div>
          </div>
        </div>

        <div className="assessment-card">
          {phase === "setup" && (
            <div className="assessment-step" key={`${locale}-setup-${setupIndex}`}>
              <div className="assessment-progress">
                <span>{phaseLabel}</span><strong>{Math.round(progress)}%</strong>
                <div><i style={{ width: `${progress}%` }}></i></div>
              </div>
              <p className="assessment-eyebrow">{setupStep.eyebrow}</p>
              <h3>{setupStep.question}</h3>
              <p className="assessment-helper">{setupStep.helper}</p>
              <strong className="assessment-choose">{text.choose}</strong>
              <div className={`assessment-options options-${setupStep.options.length}`}>
                {(setupStep.options as SetupOption[]).map((option) => {
                  const Icon = option.icon;
                  const selected = selectedSetup === option.value;
                  return (
                    <button
                      className={selected ? "selected" : ""}
                      type="button"
                      key={option.value}
                      aria-pressed={selected}
                      onClick={() => selectSetup(option.value)}
                    >
                      <span><Icon /></span>
                      <div><strong>{option.label}</strong><small>{option.hint}</small></div>
                      <i>{selected && <Check />}</i>
                    </button>
                  );
                })}
              </div>
              <div className="assessment-actions">
                {setupIndex > 0 ? (
                  <button className="assessment-back" type="button" onClick={goBack}><BackArrow />{text.back}</button>
                ) : <span></span>}
                <button className="button button-blue" type="button" disabled={!selectedSetup} onClick={continueSetup}>
                  {setupIndex === 1 ? text.startQuiz : text.next}<NextArrow />
                </button>
              </div>
            </div>
          )}

          {phase === "quiz" && (
            <div className="assessment-step quiz-step" key={`${locale}-${subject}-${questionIndex}`}>
              <div className="assessment-progress">
                <span>{phaseLabel}</span><strong>{Math.round(progress)}%</strong>
                <div><i style={{ width: `${progress}%` }}></i></div>
              </div>
              <p className="assessment-eyebrow">{text.subjects[subject as Subject]}</p>
              <h3>{questions[questionIndex].prompt}</h3>
              <p className="assessment-helper">{text.choose}</p>
              <div className="assessment-options quiz-options">
                {questions[questionIndex].options.map((option, optionIndex) => {
                  const selected = selectedAnswer === optionIndex;
                  return (
                    <button
                      className={selected ? "selected" : ""}
                      type="button"
                      key={option}
                      aria-pressed={selected}
                      onClick={() => selectAnswer(optionIndex)}
                    >
                      <span className="answer-marker">{String.fromCharCode(65 + optionIndex)}</span>
                      <div><strong>{option}</strong></div>
                      <i>{selected && <Check />}</i>
                    </button>
                  );
                })}
              </div>
              <div className="assessment-actions">
                <button className="assessment-back" type="button" onClick={goBack}><BackArrow />{text.back}</button>
                <button className="button button-blue" type="button" disabled={selectedAnswer === undefined} onClick={continueQuiz}>
                  {questionIndex === questions.length - 1 ? text.finish : text.nextQuestion}<NextArrow />
                </button>
              </div>
            </div>
          )}

          {phase === "result" && (
            <div className="assessment-result" key={`${locale}-${level.name}`}>
              <span className="result-check"><Check /></span>
              <p className="assessment-eyebrow">{text.resultEyebrow}</p>
              <h3>{level.name}</h3>
              <div className="quiz-score-line">
                <strong>{score}/{questions.length}</strong>
                <span>{text.scoreLabel}</span>
                <i><Star fill="currentColor" /></i>
              </div>
              <p>{level.description}</p>
              <div className="result-path">
                <span><BookOpen /></span>
                <div><small>{text.recommended}</small><strong>{text.subjects[subject as Subject]}</strong></div>
                <i><Star fill="currentColor" /></i>
              </div>
              <p className="result-note">{text.resultNote}</p>
              <div className="result-actions">
                <a className="button button-gold" href="#enroll"><CalendarCheck />{text.book}<NextArrow /></a>
                <button type="button" onClick={restart}><RotateCcw />{text.retry}</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
