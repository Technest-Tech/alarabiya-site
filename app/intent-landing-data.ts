export type IntentLandingIcon = "quran" | "arabic" | "combined" | "female";

export type IntentLanding = {
  slug: string;
  image: string;
  imageAlt: string;
  icon: IntentLandingIcon;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  tagline: string;
  primaryCourseHref: string;
  primaryCourseLabel: string;
  programValue: string;
  facts: { label: string; value: string }[];
  outcomes: string[];
  modules: { title: string; text: string }[];
  idealFor: string[];
  teacherSlugs: string[];
  teacherHeading: string;
  faqs: { question: string; answer: string }[];
};

export const intentLandings: IntentLanding[] = [
  {
    slug: "online-quran-classes",
    image: "/images/course-quran-reading.webp",
    imageAlt: "Student learning Quran reading in a personal live online lesson",
    icon: "quran",
    metaTitle: "Online Quran Classes for Kids & Adults",
    metaDescription:
      "Live one-to-one online Quran classes for kids and adults. Learn Quran reading, Tajweed or Hifz with a personal plan and a free assessment.",
    eyebrow: "Quran-only learning · Kids and adults",
    title: "Online Quran classes that start at your level",
    tagline:
      "Learn Quran reading, practical Tajweed, or memorization in live one-to-one lessons shaped around your goals and pace.",
    primaryCourseHref: "/courses/quran-reading/",
    primaryCourseLabel: "Explore the Quran curriculum",
    programValue: "Online Quran Classes",
    facts: [
      { label: "Class type", value: "Live one-to-one" },
      { label: "Learning paths", value: "Reading, Tajweed & Hifz" },
      { label: "Lesson length", value: "30, 45 or 60 min" },
      { label: "First step", value: "Free assessment" },
    ],
    outcomes: [
      "Begin from Arabic letters or your current Surah",
      "Improve makharij, accuracy, and recitation confidence",
      "Follow a realistic memorization and revision plan",
      "Receive correction and clear next steps every lesson",
      "Choose a male or female tutor, subject to availability",
    ],
    modules: [
      { title: "Personal assessment", text: "Meet a tutor and identify the right starting point for reading, Tajweed, or Hifz." },
      { title: "Guided recitation", text: "Read aloud, hear clear examples, and correct high-impact mistakes during the lesson." },
      { title: "Tajweed in practice", text: "Learn relevant rules through real Quran passages instead of theory alone." },
      { title: "Progress plan", text: "Leave each class with focused practice and a clear target for the next lesson." },
    ],
    idealFor: ["Complete Quran beginners", "Children beginning Qaida", "Adults returning to Quran", "Tajweed and Hifz learners"],
    teacherSlugs: [],
    teacherHeading: "Meet Quran tutors from our teaching team",
    faqs: [
      { question: "Can I join if I cannot read Arabic?", answer: "Yes. Your plan can begin with the first Arabic letters and joining sounds before moving into Quran words and verses." },
      { question: "Can I choose Quran reading, Tajweed, or Hifz only?", answer: "Yes. The free assessment helps define a focused plan around the Quran goal you want to pursue." },
      { question: "Can I request a male or female tutor?", answer: "Yes. Share your preference with the academy and the team will confirm the best available match for your level and schedule." },
      { question: "What device do I need?", answer: "You can learn using a phone, tablet, or computer with a stable internet connection and a quiet place to practice." },
    ],
  },
  {
    slug: "online-quran-classes-for-kids",
    image: "/images/hero-family.webp",
    imageAlt: "Parent supporting a child during an online Quran class",
    icon: "quran",
    metaTitle: "Online Quran Classes for Kids",
    metaDescription:
      "Patient one-to-one online Quran classes for children ages 5–17, with age-appropriate lessons, clear goals, parent feedback, and a free assessment.",
    eyebrow: "For children ages 5–17",
    title: "Online Quran classes for kids that build confidence",
    tagline:
      "Patient, personal lessons help your child move from letters and Qaida to clearer recitation, Tajweed, and memorization at a manageable pace.",
    primaryCourseHref: "/courses/quran-reading/",
    primaryCourseLabel: "See the Quran reading path",
    programValue: "Online Quran Classes for Kids",
    facts: [
      { label: "Learner age", value: "5–17 years" },
      { label: "Class type", value: "Private one-to-one" },
      { label: "Lesson length", value: "Matched to age" },
      { label: "Parent support", value: "Goals and feedback" },
    ],
    outcomes: [
      "Recognize letters, vowels, and joined Arabic words",
      "Read short verses with growing fluency",
      "Correct pronunciation through patient repetition",
      "Build a consistent Quran practice habit",
      "Give parents a clearer view of goals and progress",
    ],
    modules: [
      { title: "Friendly level check", text: "The tutor meets your child, checks their starting point, and recommends a suitable lesson length." },
      { title: "Letters to verses", text: "Children progress from Qaida foundations into Quran words and short passages without rushed jumps." },
      { title: "Active practice", text: "Short reading turns, listening, repetition, and encouragement keep the learner involved." },
      { title: "Clear next goals", text: "The lesson plan adapts as reading accuracy, confidence, and independence grow." },
    ],
    idealFor: ["Children starting Qaida", "Kids who read slowly", "Young Tajweed learners", "Families seeking one-to-one support"],
    teacherSlugs: [],
    teacherHeading: "Find a tutor suited to your child",
    faqs: [
      { question: "Is the program suitable for a complete beginner?", answer: "Yes. A child can begin from the first Arabic letter and progress step by step." },
      { question: "How long is each class?", answer: "Lessons can be 30, 45, or 60 minutes. The academy recommends a duration based on age, level, and concentration." },
      { question: "Can parents request a female teacher?", answer: "Yes. You can request a male or female tutor, and the team will confirm availability for your preferred schedule." },
      { question: "How will I know what my child is learning?", answer: "The tutor works with clear lesson goals and feedback so parents can understand the current focus and next step." },
    ],
  },
  {
    slug: "online-quran-classes-for-adults",
    image: "/images/course-tajweed-hifz.webp",
    imageAlt: "Adult learner practicing Quran and Tajweed in a live online lesson",
    icon: "quran",
    metaTitle: "Online Quran Classes for Adults",
    metaDescription:
      "Private online Quran classes for adult beginners and returning learners. Improve reading, Tajweed, or Hifz at your pace with a free assessment.",
    eyebrow: "Private Quran learning for adults",
    title: "Learn Quran online as an adult—without pressure",
    tagline:
      "Whether you are starting with letters or refining Tajweed, your one-to-one plan begins where you are and develops around your available time.",
    primaryCourseHref: "/courses/tajweed-hifz/",
    primaryCourseLabel: "Explore Tajweed and Hifz",
    programValue: "Online Quran Classes for Adults",
    facts: [
      { label: "Starting level", value: "Beginner to advanced" },
      { label: "Class type", value: "Private one-to-one" },
      { label: "Schedule", value: "Flexible worldwide" },
      { label: "First step", value: "Free recitation check" },
    ],
    outcomes: [
      "Read more accurately and with fewer pauses",
      "Correct recurring pronunciation and Tajweed errors",
      "Study privately at a pace that feels manageable",
      "Restart memorization with a practical revision system",
      "Build a routine that fits work and family commitments",
    ],
    modules: [
      { title: "Respectful assessment", text: "Begin with a private conversation and recitation check—no judgment and no assumed starting level." },
      { title: "Focused correction", text: "Work first on the sounds and reading habits that will make the biggest difference." },
      { title: "Personal pathway", text: "Choose Quran reading, Tajweed, Hifz, or a combination based on your priorities." },
      { title: "Sustainable practice", text: "Use clear weekly targets that fit around your responsibilities and available study time." },
    ],
    idealFor: ["Complete adult beginners", "Adults returning after a break", "Busy learners needing flexibility", "Tajweed and Hifz students"],
    teacherSlugs: [],
    teacherHeading: "Choose the right tutor for your goals",
    faqs: [
      { question: "Am I too old to begin learning Quran?", answer: "No. Adult lessons begin at your actual level and move at a pace that supports steady, comfortable progress." },
      { question: "Can lessons focus only on correcting my recitation?", answer: "Yes. Your plan can concentrate on fluency, makharij, and practical Tajweed correction." },
      { question: "Can I study around work or family commitments?", answer: "The academy offers flexible online scheduling and confirms a regular time after reviewing tutor availability." },
      { question: "Do I need to buy learning materials first?", answer: "No. Your tutor recommends suitable material after the free assessment." },
    ],
  },
  {
    slug: "female-quran-teacher-online",
    image: "/images/female-tutor.webp",
    imageAlt: "Female online Quran and Arabic tutor",
    icon: "female",
    metaTitle: "Female Quran Teacher Online",
    metaDescription:
      "Request a female Quran teacher for private online Quran reading, Tajweed, or Hifz lessons. Flexible scheduling for children and adult women.",
    eyebrow: "Female tutor requests welcome",
    title: "Learn Quran online with a female teacher",
    tagline:
      "Request a patient female tutor for private Quran reading, Tajweed, or memorization lessons matched to the learner’s level and schedule.",
    primaryCourseHref: "/online-quran-classes/",
    primaryCourseLabel: "View a female tutor profile",
    programValue: "Female Quran Teacher Online",
    facts: [
      { label: "Tutor preference", value: "Female teacher" },
      { label: "Class type", value: "Private one-to-one" },
      { label: "For", value: "Children and adult women" },
      { label: "Matching", value: "Level and availability" },
    ],
    outcomes: [
      "Learn in a comfortable private lesson setting",
      "Improve Quran reading and pronunciation",
      "Apply Tajweed through guided recitation",
      "Create a realistic Hifz and revision target",
      "Receive a tutor match based on level and schedule",
    ],
    modules: [
      { title: "Share your preference", text: "Tell the academy the learner’s age, current level, goals, and suitable lesson times." },
      { title: "Meet your tutor", text: "Use the free assessment to meet an available female teacher and confirm the learning fit." },
      { title: "Set your path", text: "Choose Quran reading, Tajweed, Hifz, or a blended Quran plan after assessment." },
      { title: "Learn consistently", text: "Continue with live correction, manageable goals, and a schedule agreed with the academy." },
    ],
    idealFor: ["Girls learning Quran", "Adult women", "Families preferring a female tutor", "Learners seeking private one-to-one support"],
    teacherSlugs: [],
    teacherHeading: "Meet a female tutor from our team",
    faqs: [
      { question: "Can I guarantee a particular teacher before the trial?", answer: "Tutor matching depends on subject, level, and schedule. The academy confirms the available female tutor before your assessment." },
      { question: "Can a female tutor teach complete beginners?", answer: "Yes. Lessons can begin with Arabic letters and Qaida, then progress into Quran reading and Tajweed." },
      { question: "Are female teachers available for children and adults?", answer: "Female tutor requests are welcomed for children and adult women, subject to timetable availability." },
      { question: "Can I request Arabic lessons as well?", answer: "Yes. Mention Arabic in your learning goals and the academy will recommend the most suitable tutor and plan." },
    ],
  },
  {
    slug: "online-arabic-classes",
    image: "/images/course-arabic-language.webp",
    imageAlt: "Learner speaking Arabic in a personal online class",
    icon: "arabic",
    metaTitle: "Online Arabic Classes for Kids & Adults",
    metaDescription:
      "Live one-to-one online Arabic classes for kids and adults. Learn speaking, reading, vocabulary, and Modern Standard Arabic from your level.",
    eyebrow: "Arabic-only learning · Kids and adults",
    title: "Online Arabic classes for speaking, reading, and understanding",
    tagline:
      "Use Arabic actively in personal live lessons that combine conversation, vocabulary, reading, listening, and practical grammar.",
    primaryCourseHref: "/courses/arabic-language/",
    primaryCourseLabel: "Explore the Arabic curriculum",
    programValue: "Online Arabic Classes",
    facts: [
      { label: "Core language", value: "Modern Standard Arabic" },
      { label: "Class type", value: "Live one-to-one" },
      { label: "Learners", value: "Kids and adults" },
      { label: "First step", value: "Free language check" },
    ],
    outcomes: [
      "Speak using useful everyday words and phrases",
      "Read level-appropriate Arabic with confidence",
      "Understand common vocabulary and sentence patterns",
      "Apply grammar through speaking and writing",
      "Follow a personal path shaped around your purpose",
    ],
    modules: [
      { title: "Language assessment", text: "Identify your current speaking, reading, vocabulary, and comprehension level." },
      { title: "Useful vocabulary", text: "Learn high-frequency words through context, images, and repeated use." },
      { title: "Guided conversation", text: "Speak from the first lessons with prompts, patient correction, and practical situations." },
      { title: "Reading and grammar", text: "Build understanding with meaningful texts and grammar patterns you can use immediately." },
    ],
    idealFor: ["Complete Arabic beginners", "Heritage-language children", "Adults learning conversation", "Learners seeking Modern Standard Arabic"],
    teacherSlugs: [],
    teacherHeading: "Meet Arabic tutors from our teaching team",
    faqs: [
      { question: "Which type of Arabic do you teach?", answer: "The core program teaches Modern Standard Arabic, with conversational support adapted to the learner’s goals." },
      { question: "Are these classes connected to Quran lessons?", answer: "This page is for Arabic-only learning. If you want both subjects, choose the combined Arabic and Quran plan." },
      { question: "Can children join Arabic lessons?", answer: "Yes. Activities, lesson pace, and materials are adjusted to the child’s age and current language level." },
      { question: "Will I speak Arabic from the beginning?", answer: "Yes. Even complete beginners begin using short supported phrases while building reading and vocabulary foundations." },
    ],
  },
  {
    slug: "online-arabic-and-quran-classes",
    image: "/images/student-learning.webp",
    imageAlt: "Student following a combined Arabic and Quran learning plan online",
    icon: "combined",
    metaTitle: "Online Arabic and Quran Classes",
    metaDescription:
      "Combine online Arabic and Quran classes in one personal learning plan. Live one-to-one lessons for kids and adults with a free assessment.",
    eyebrow: "One plan · Arabic and Quran",
    title: "Learn Arabic and Quran online in one personal plan",
    tagline:
      "Build practical Arabic alongside Quran reading, Tajweed, or memorization with a coordinated path based on your level and priorities.",
    primaryCourseHref: "/courses/arabic-language/",
    primaryCourseLabel: "See the Arabic learning path",
    programValue: "Online Arabic and Quran Classes",
    facts: [
      { label: "Subjects", value: "Arabic + Quran" },
      { label: "Class type", value: "Live one-to-one" },
      { label: "Plan", value: "Balanced to your goals" },
      { label: "First step", value: "Free joint assessment" },
    ],
    outcomes: [
      "Strengthen Arabic reading and useful vocabulary",
      "Read Quran with clearer pronunciation and fluency",
      "Connect Arabic learning with Quranic words and patterns",
      "Balance both subjects without following disconnected plans",
      "Adjust the emphasis as your goals change",
    ],
    modules: [
      { title: "Joint assessment", text: "Check Arabic language and Quran reading separately so neither subject starts at the wrong level." },
      { title: "Arabic foundation", text: "Develop vocabulary, reading, comprehension, and speaking through structured language practice." },
      { title: "Quran pathway", text: "Work on reading, Tajweed, or Hifz with correction and goals suited to your recitation level." },
      { title: "Connected progress", text: "Coordinate practice across both subjects and change the balance as the learner develops." },
    ],
    idealFor: ["Families wanting one learning plan", "Kids studying Arabic and Quran", "Adults seeking Quranic understanding", "Learners with different levels in each subject"],
    teacherSlugs: [],
    teacherHeading: "Find tutors for your combined learning goals",
    faqs: [
      { question: "Do Arabic and Quran have to start at the same level?", answer: "No. The assessment checks each subject independently and builds the plan around both starting points." },
      { question: "Can I give more time to Quran or to Arabic?", answer: "Yes. Tell the academy your priority and the plan can place more emphasis on one subject while continuing the other." },
      { question: "Is the combined plan suitable for children?", answer: "Yes. Lesson length, activities, and subject balance can be adapted to the child’s age and attention." },
      { question: "Can I switch from a combined plan to one subject later?", answer: "Yes. Your learning path can be adjusted as your needs and progress change." },
    ],
  },
];

export function getIntentLanding(slug: string) {
  return intentLandings.find((landing) => landing.slug === slug);
}
