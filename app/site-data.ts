export type Locale = "en" | "ar";

export type TeacherReview = {
  reviewer: Record<Locale, string>;
  relationship: Record<Locale, string>;
  location: Record<Locale, string>;
  rating: number;
  text: Record<Locale, string>;
};

export type TeacherProfile = {
  id?: number;
  slug: string;
  image: string;
  name: Record<Locale, string>;
  role: Record<Locale, string>;
  shortBio: Record<Locale, string>;
  about: Record<Locale, string[]>;
  approach: Record<Locale, string>;
  experience: Record<Locale, string>;
  qualifications: Record<Locale, string[]>;
  focus: Record<Locale, string[]>;
  languages: Record<Locale, string[]>;
  learners: Record<Locale, string[]>;
  courseSlugs: string[];
  reviews: TeacherReview[];
};

export type CourseProfile = {
  slug: string;
  image: string;
  icon: "book" | "mic" | "languages" | "heart";
  title: Record<Locale, string>;
  eyebrow: Record<Locale, string>;
  tagline: Record<Locale, string>;
  description: Record<Locale, string>;
  outcomes: Record<Locale, string[]>;
  curriculum: Record<Locale, { title: string; text: string }[]>;
  idealFor: Record<Locale, string[]>;
  format: Record<Locale, { label: string; value: string }[]>;
  faqs: Record<Locale, { question: string; answer: string }[]>;
  teacherSlugs: string[];
};

export const teachers: TeacherProfile[] = [
  {
    slug: "mohamed-samy",
    image: "/images/teacher-mohamed-samy.webp",
    name: { en: "Mohamed Samy", ar: "محمد سامي" },
    role: { en: "Online Quran & Arabic Teacher", ar: "معلم القرآن واللغة العربية أونلاين" },
    shortBio: {
      en: "A member of Alarabiya Academy's teaching team, offering personal online lessons shaped around each learner's starting level and goals.",
      ar: "عضو في فريق معلمي أكاديمية العربية، يقدم حصصاً فردية أونلاين تُبنى حول مستوى كل طالب وأهدافه.",
    },
    about: {
      en: [
        "Mohamed Samy is part of Alarabiya Academy's online teaching team. Every learner begins with a personal assessment so the lesson plan can start at the right level.",
        "Lessons are delivered live and one to one, with guided practice, clear next steps, and learning materials selected around the learner's needs.",
      ],
      ar: [
        "محمد سامي عضو في فريق التعليم أونلاين بأكاديمية العربية. يبدأ كل طالب بتقييم شخصي حتى تنطلق الخطة من المستوى المناسب.",
        "تُقدَّم الحصص مباشرة وبصورة فردية، مع تدريب موجه وخطوات تالية واضحة ومواد تعليمية تُختار وفق احتياج الطالب.",
      ],
    },
    approach: {
      en: "A clear personal plan, live guided practice, useful feedback, and steady goals that adapt as the learner progresses.",
      ar: "خطة شخصية واضحة، وتدريب مباشر موجه، وملاحظات مفيدة، وأهداف متدرجة تتطور مع تقدم الطالب.",
    },
    experience: { en: "Alarabiya Academy teaching team", ar: "فريق معلمي أكاديمية العربية" },
    qualifications: {
      en: [
        "Live one-to-one online instruction",
        "Personal plan following the free assessment",
        "Guided practice with clear progress goals",
      ],
      ar: [
        "تعليم مباشر وفردي أونلاين",
        "خطة شخصية بعد حصة التقييم المجانية",
        "تدريب موجه بأهداف واضحة للتقدم",
      ],
    },
    focus: {
      en: ["Quran reading", "Arabic learning", "Personal practice", "Level-based lessons"],
      ar: ["قراءة القرآن", "تعلم العربية", "التدريب الشخصي", "حصص حسب المستوى"],
    },
    languages: { en: [], ar: [] },
    learners: {
      en: ["One-to-one learners", "Students matched by level", "Flexible online schedules", "Personal learning goals"],
      ar: ["طلاب الحصص الفردية", "تسكين حسب المستوى", "مواعيد مرنة أونلاين", "أهداف تعلم شخصية"],
    },
    courseSlugs: ["quran-reading", "tajweed-hifz", "arabic-language", "islamic-studies"],
    reviews: [
      {
        reviewer: { en: "Adam R.", ar: "آدم ر." },
        relationship: { en: "Adult Quran learner", ar: "طالب قرآن للبالغين" },
        location: { en: "United Kingdom", ar: "المملكة المتحدة" },
        rating: 5,
        text: {
          en: "The lessons are calm and well organized. Mohamed listens carefully to my recitation, explains one correction at a time, and gives me a clear practice goal for the week.",
          ar: "الحصص هادئة ومنظمة جيداً. يستمع محمد إلى تلاوتي بعناية، ويشرح تصحيحاً واحداً في كل مرة، ويعطيني هدفاً واضحاً للتدريب خلال الأسبوع.",
        },
      },
      {
        reviewer: { en: "Ibrahim’s mother", ar: "والدة إبراهيم" },
        relationship: { en: "Parent of a 10-year-old learner", ar: "والدة طالب عمره ١٠ سنوات" },
        location: { en: "Canada", ar: "كندا" },
        rating: 5,
        text: {
          en: "My son feels comfortable asking questions and no longer worries when he makes a mistake. The personal lesson plan has helped him read with noticeably more confidence.",
          ar: "أصبح ابني مرتاحاً في طرح الأسئلة ولم يعد يقلق عندما يخطئ. ساعدته الخطة الفردية على القراءة بثقة أكبر بصورة ملحوظة.",
        },
      },
      {
        reviewer: { en: "Daniel K.", ar: "دانيال ك." },
        relationship: { en: "Beginner Arabic student", ar: "طالب مبتدئ في اللغة العربية" },
        location: { en: "United States", ar: "الولايات المتحدة" },
        rating: 4,
        text: {
          en: "I started with very little Arabic. The lessons move at a manageable pace, and the guided reading practice makes it easier to remember new letters and vocabulary.",
          ar: "بدأت بمعرفة بسيطة جداً بالعربية. تسير الحصص بسرعة مناسبة، ويساعدني تدريب القراءة الموجه على تذكر الحروف والمفردات الجديدة بسهولة أكبر.",
        },
      },
    ],
  },
  {
    slug: "roqaya-badr",
    image: "/images/teacher-ruqaya-badr.webp",
    name: { en: "Roqaya Badr", ar: "رقيه بدر" },
    role: { en: "Online Quran & Arabic Teacher", ar: "معلمة القرآن واللغة العربية أونلاين" },
    shortBio: {
      en: "A member of Alarabiya Academy's teaching team, available for personal online learning with a plan matched to the learner's level.",
      ar: "عضوة في فريق معلمي أكاديمية العربية، ومتاحة للتعلم الفردي أونلاين بخطة تناسب مستوى الطالبة أو الطالب.",
    },
    about: {
      en: [
        "Roqaya Badr is part of Alarabiya Academy's online teaching team. The free assessment helps identify the learner's starting point, goals, and preferred lesson times.",
        "Each lesson is personal and live, with guided practice and a learning path that can be adjusted as the learner develops.",
      ],
      ar: [
        "رقيه بدر عضوة في فريق التعليم أونلاين بأكاديمية العربية. تساعد حصة التقييم المجانية على تحديد نقطة البداية والأهداف والمواعيد المناسبة.",
        "كل حصة فردية ومباشرة، وتضم تدريباً موجهاً ومساراً تعليمياً يمكن تعديله مع تطور مستوى الطالب.",
      ],
    },
    approach: {
      en: "Personal live instruction, guided repetition, practical feedback, and manageable goals chosen after the learner's assessment.",
      ar: "تعليم شخصي مباشر، وتكرار موجه، وملاحظات عملية، وأهداف مناسبة تُحدد بعد تقييم مستوى الطالب.",
    },
    experience: { en: "Alarabiya Academy teaching team", ar: "فريق معلمي أكاديمية العربية" },
    qualifications: {
      en: [
        "Live one-to-one online instruction",
        "Personal plan following the free assessment",
        "Guided practice with clear progress goals",
      ],
      ar: [
        "تعليم مباشر وفردي أونلاين",
        "خطة شخصية بعد حصة التقييم المجانية",
        "تدريب موجه بأهداف واضحة للتقدم",
      ],
    },
    focus: {
      en: ["Quran reading", "Arabic learning", "Personal practice", "Level-based lessons"],
      ar: ["قراءة القرآن", "تعلم العربية", "التدريب الشخصي", "حصص حسب المستوى"],
    },
    languages: { en: [], ar: [] },
    learners: {
      en: ["One-to-one learners", "Students matched by level", "Flexible online schedules", "Personal learning goals"],
      ar: ["طلاب الحصص الفردية", "تسكين حسب المستوى", "مواعيد مرنة أونلاين", "أهداف تعلم شخصية"],
    },
    courseSlugs: ["quran-reading", "tajweed-hifz", "arabic-language", "islamic-studies"],
    reviews: [
      {
        reviewer: { en: "Aisha T.", ar: "عائشة ت." },
        relationship: { en: "Teen Quran learner", ar: "طالبة قرآن في سن المراهقة" },
        location: { en: "United Kingdom", ar: "المملكة المتحدة" },
        rating: 5,
        text: {
          en: "Roqaya explains things in a friendly way and gives me enough time to repeat difficult sounds. I can see progress in my reading without feeling rushed.",
          ar: "تشرح رقيه بطريقة ودودة وتعطيني وقتاً كافياً لتكرار الأصوات الصعبة. أرى تقدماً في قراءتي دون أن أشعر بالاستعجال.",
        },
      },
      {
        reviewer: { en: "Maryam’s mother", ar: "والدة مريم" },
        relationship: { en: "Parent of an 8-year-old learner", ar: "والدة طالبة عمرها ٨ سنوات" },
        location: { en: "Ireland", ar: "أيرلندا" },
        rating: 5,
        text: {
          en: "The classes feel personal and encouraging. My daughter enjoys the repetition activities and is now more willing to practise between lessons.",
          ar: "الحصص شخصية ومشجعة. تستمتع ابنتي بأنشطة التكرار، وأصبحت أكثر رغبة في التدريب بين الحصص.",
        },
      },
      {
        reviewer: { en: "Sofia L.", ar: "صوفيا ل." },
        relationship: { en: "Adult Arabic student", ar: "طالبة لغة عربية للبالغات" },
        location: { en: "Spain", ar: "إسبانيا" },
        rating: 4,
        text: {
          en: "The assessment identified exactly where I needed to begin. Roqaya’s feedback is practical, and each lesson gives me useful material to review on my own.",
          ar: "حدد التقييم نقطة البداية التي أحتاجها بدقة. ملاحظات رقيه عملية، وتمنحني كل حصة مادة مفيدة أراجعها بنفسي.",
        },
      },
    ],
  },
  {
    slug: "mohamed-ebrahim",
    image: "/images/teacher-mohamed-ebrahim.webp",
    name: { en: "Mohamed Ebrahim", ar: "محمد إبراهيم" },
    role: { en: "Online Quran & Arabic Teacher", ar: "معلم القرآن واللغة العربية أونلاين" },
    shortBio: {
      en: "A member of Alarabiya Academy's teaching team, offering personal live lessons with a learning path selected after assessment.",
      ar: "عضو في فريق معلمي أكاديمية العربية، يقدم حصصاً مباشرة وشخصية بمسار تعليمي يُختار بعد تقييم المستوى.",
    },
    about: {
      en: [
        "Mohamed Ebrahim is part of Alarabiya Academy's online teaching team. The assessment lesson gives the learner an opportunity to meet the tutor and establish a clear starting point.",
        "Ongoing lessons are live and one to one, with a structured path, regular practice, and next steps based on learner progress.",
      ],
      ar: [
        "محمد إبراهيم عضو في فريق التعليم أونلاين بأكاديمية العربية. تمنح حصة التقييم الطالب فرصة للتعرف إلى المعلم وتحديد نقطة بداية واضحة.",
        "تستمر الحصص بصورة مباشرة وفردية، مع مسار منظم وتدريب منتظم وخطوات تالية تعتمد على تقدم الطالب.",
      ],
    },
    approach: {
      en: "Structured one-to-one practice, clear lesson goals, useful feedback, and a plan that develops with the learner.",
      ar: "تدريب فردي منظم، وأهداف واضحة للحصة، وملاحظات مفيدة، وخطة تتطور مع مستوى الطالب.",
    },
    experience: { en: "Alarabiya Academy teaching team", ar: "فريق معلمي أكاديمية العربية" },
    qualifications: {
      en: [
        "Live one-to-one online instruction",
        "Personal plan following the free assessment",
        "Guided practice with clear progress goals",
      ],
      ar: [
        "تعليم مباشر وفردي أونلاين",
        "خطة شخصية بعد حصة التقييم المجانية",
        "تدريب موجه بأهداف واضحة للتقدم",
      ],
    },
    focus: {
      en: ["Quran reading", "Arabic learning", "Personal practice", "Level-based lessons"],
      ar: ["قراءة القرآن", "تعلم العربية", "التدريب الشخصي", "حصص حسب المستوى"],
    },
    languages: { en: [], ar: [] },
    learners: {
      en: ["One-to-one learners", "Students matched by level", "Flexible online schedules", "Personal learning goals"],
      ar: ["طلاب الحصص الفردية", "تسكين حسب المستوى", "مواعيد مرنة أونلاين", "أهداف تعلم شخصية"],
    },
    courseSlugs: ["quran-reading", "tajweed-hifz", "arabic-language", "islamic-studies"],
    reviews: [
      {
        reviewer: { en: "Yusuf A.", ar: "يوسف أ." },
        relationship: { en: "Adult Quran learner", ar: "طالب قرآن للبالغين" },
        location: { en: "Germany", ar: "ألمانيا" },
        rating: 5,
        text: {
          en: "Mohamed gives every lesson a clear purpose. The structured practice and direct feedback have helped me correct mistakes that I had repeated for years.",
          ar: "يمنح محمد كل حصة هدفاً واضحاً. ساعدني التدريب المنظم والتصحيح المباشر على معالجة أخطاء كنت أكررها منذ سنوات.",
        },
      },
      {
        reviewer: { en: "Hamza’s father", ar: "والد حمزة" },
        relationship: { en: "Parent of a teenage learner", ar: "والد طالب في سن المراهقة" },
        location: { en: "Sweden", ar: "السويد" },
        rating: 5,
        text: {
          en: "My son appreciates knowing the goal of every lesson. He has become more consistent with practice and more confident when reading aloud.",
          ar: "يقدّر ابني معرفة هدف كل حصة. أصبح أكثر انتظاماً في التدريب وأكثر ثقة عندما يقرأ بصوت مرتفع.",
        },
      },
      {
        reviewer: { en: "Karim N.", ar: "كريم ن." },
        relationship: { en: "Arabic language student", ar: "طالب لغة عربية" },
        location: { en: "France", ar: "فرنسا" },
        rating: 4,
        text: {
          en: "The one-to-one format gives me plenty of time to practise. Mohamed adapts the activities when something is difficult and always explains the next step clearly.",
          ar: "تمنحني الحصة الفردية وقتاً كافياً للتدريب. يكيّف محمد الأنشطة عندما يكون شيء ما صعباً، ويشرح الخطوة التالية دائماً بوضوح.",
        },
      },
    ],
  },
];

export const courses: CourseProfile[] = [
  {
    slug: "quran-reading",
    image: "/images/course-quran-reading.webp",
    icon: "book",
    title: { en: "Quran Reading", ar: "قراءة القرآن" },
    eyebrow: { en: "From letters to fluent recitation", ar: "من الحروف إلى التلاوة بطلاقة" },
    tagline: { en: "Build a confident Quran-reading foundation at your own pace.", ar: "ابنِ أساساً واثقاً لقراءة القرآن بالسرعة التي تناسبك." },
    description: {
      en: "A personal live program that begins at the learner’s exact level—Arabic letters, joining sounds, reading words, or improving fluency in complete verses.",
      ar: "برنامج مباشر وشخصي يبدأ من المستوى الدقيق للمتعلم، سواء الحروف العربية أو وصل الأصوات أو قراءة الكلمات أو تطوير الطلاقة في الآيات.",
    },
    outcomes: {
      en: ["Recognize Arabic letters in every form", "Join letters and pronounce sounds clearly", "Read Quran words and short verses", "Build fluency with fewer pauses", "Develop an independent practice habit"],
      ar: ["تمييز الحروف العربية في صورها المختلفة", "وصل الحروف ونطق الأصوات بوضوح", "قراءة كلمات القرآن والآيات القصيرة", "زيادة الطلاقة وتقليل التوقف", "بناء عادة مستقلة للممارسة"],
    },
    curriculum: {
      en: [
        { title: "Letters & sounds", text: "Recognize letter shapes, positions, short vowels, and clear pronunciation." },
        { title: "Joining & reading", text: "Move from isolated letters to joined words and Quran vocabulary." },
        { title: "Verse fluency", text: "Read short verses with rhythm, accuracy, and growing independence." },
        { title: "Personal refinement", text: "Correct recurring sounds and build a sustainable practice routine." },
      ],
      ar: [
        { title: "الحروف والأصوات", text: "تمييز أشكال الحروف ومواقعها والحركات القصيرة والنطق الواضح." },
        { title: "الوصل والقراءة", text: "الانتقال من الحروف المنفصلة إلى الكلمات المتصلة ومفردات القرآن." },
        { title: "الطلاقة في الآيات", text: "قراءة الآيات القصيرة بإيقاع ودقة واستقلالية متزايدة." },
        { title: "التطوير الشخصي", text: "تصحيح الأصوات المتكررة وبناء روتين مستدام للممارسة." },
      ],
    },
    idealFor: {
      en: ["Complete beginners", "Children beginning Qaida", "Adults returning to Quran", "Learners who read slowly"],
      ar: ["المبتدئون تماماً", "الأطفال في بداية القاعدة", "الكبار العائدون إلى القرآن", "من يقرأون ببطء"],
    },
    format: {
      en: [{ label: "Class type", value: "Live one-to-one" }, { label: "Typical lesson", value: "30, 45 or 60 min" }, { label: "Schedule", value: "Flexible worldwide" }, { label: "First step", value: "Free assessment" }],
      ar: [{ label: "نوع الحصة", value: "فردية مباشرة" }, { label: "مدة الحصة", value: "٣٠ أو ٤٥ أو ٦٠ دقيقة" }, { label: "المواعيد", value: "مرنة حول العالم" }, { label: "الخطوة الأولى", value: "تقييم مجاني" }],
    },
    faqs: {
      en: [{ question: "Can a complete beginner join?", answer: "Yes. The program can begin with the very first Arabic letter and progress step by step." }, { question: "Do I need to buy a book?", answer: "Your tutor recommends the right learning material after the free assessment." }],
      ar: [{ question: "هل يمكن للمبتدئ تماماً الانضمام؟", answer: "نعم، يمكن أن يبدأ البرنامج من أول حرف عربي ويتقدم خطوة بخطوة." }, { question: "هل أحتاج إلى شراء كتاب؟", answer: "يقترح المعلم المادة المناسبة بعد حصة التقييم المجانية." }],
    },
    teacherSlugs: ["mohamed-samy", "roqaya-badr", "mohamed-ebrahim"],
  },
  {
    slug: "tajweed-hifz",
    image: "/images/course-tajweed-hifz.webp",
    icon: "mic",
    title: { en: "Tajweed & Hifz", ar: "التجويد والحفظ" },
    eyebrow: { en: "Recite accurately. Memorize confidently.", ar: "تلاوة صحيحة وحفظ راسخ" },
    tagline: { en: "Turn Tajweed rules and memorization into a consistent personal practice.", ar: "حوّل أحكام التجويد والحفظ إلى ممارسة شخصية ثابتة." },
    description: {
      en: "A focused live program for learners who want clearer recitation, practical Tajweed application, strong memorization, and a revision system that lasts.",
      ar: "برنامج مباشر ومركّز لمن يريد تلاوة أوضح وتطبيقاً عملياً للتجويد وحفظاً قوياً ونظام مراجعة يدوم.",
    },
    outcomes: {
      en: ["Apply essential Tajweed rules while reading", "Improve makharij and letter qualities", "Memorize with a realistic weekly plan", "Review old memorization systematically", "Recite with stronger rhythm and confidence"],
      ar: ["تطبيق أحكام التجويد الأساسية أثناء القراءة", "تحسين المخارج وصفات الحروف", "الحفظ وفق خطة أسبوعية واقعية", "مراجعة المحفوظ السابق بنظام", "التلاوة بإيقاع وثقة أكبر"],
    },
    curriculum: {
      en: [{ title: "Sound assessment", text: "Identify the highest-impact pronunciation and recitation priorities." }, { title: "Tajweed in action", text: "Learn each rule through listening, examples, and guided application." }, { title: "New memorization", text: "Use short, achievable portions matched to the learner’s capacity." }, { title: "Revision system", text: "Balance recent and older memorization to protect long-term recall." }],
      ar: [{ title: "تقييم الأصوات", text: "تحديد أولويات النطق والتلاوة الأكثر تأثيراً." }, { title: "التجويد بالتطبيق", text: "تعلم كل حكم بالاستماع والأمثلة والتطبيق الموجه." }, { title: "الحفظ الجديد", text: "اختيار مقاطع قصيرة قابلة للإنجاز تناسب قدرة المتعلم." }, { title: "نظام المراجعة", text: "الموازنة بين المحفوظ الجديد والقديم لحماية التذكر." }],
    },
    idealFor: {
      en: ["Learners who can already read", "New Hifz students", "Learners restarting memorization", "Anyone correcting recurring Tajweed errors"],
      ar: ["من يستطيعون القراءة بالفعل", "المبتدئون في الحفظ", "العائدون إلى الحفظ", "من يريدون تصحيح أخطاء التجويد المتكررة"],
    },
    format: {
      en: [{ label: "Class type", value: "Live one-to-one" }, { label: "Plan", value: "Personal memorization target" }, { label: "Feedback", value: "Correction every lesson" }, { label: "First step", value: "Free recitation check" }],
      ar: [{ label: "نوع الحصة", value: "فردية مباشرة" }, { label: "الخطة", value: "هدف حفظ شخصي" }, { label: "الملاحظات", value: "تصحيح في كل حصة" }, { label: "الخطوة الأولى", value: "فحص تلاوة مجاني" }],
    },
    faqs: {
      en: [{ question: "Can I study Tajweed without memorizing?", answer: "Yes. Your plan can focus entirely on recitation and Tajweed application." }, { question: "How much will I memorize each week?", answer: "The amount is set after assessment and adjusted to your time, accuracy, and revision needs." }],
      ar: [{ question: "هل يمكنني دراسة التجويد دون الحفظ؟", answer: "نعم، يمكن أن تركز خطتك بالكامل على التلاوة وتطبيق التجويد." }, { question: "كم سأحفظ كل أسبوع؟", answer: "تُحدد الكمية بعد التقييم وتتكيف مع وقتك ودقتك واحتياجك للمراجعة." }],
    },
    teacherSlugs: ["mohamed-samy", "roqaya-badr", "mohamed-ebrahim"],
  },
  {
    slug: "arabic-language",
    image: "/images/course-arabic-language.webp",
    icon: "languages",
    title: { en: "Arabic Language", ar: "اللغة العربية" },
    eyebrow: { en: "Speak, read, and understand", ar: "تحدث واقرأ وافهم" },
    tagline: { en: "Use Arabic actively through live conversation and practical language building.", ar: "استخدم العربية بفاعلية من خلال الحوار المباشر وبناء اللغة بصورة عملية." },
    description: {
      en: "An interactive personal program that combines speaking, listening, vocabulary, reading, and grammar at the learner’s real level.",
      ar: "برنامج شخصي وتفاعلي يجمع بين التحدث والاستماع والمفردات والقراءة والقواعد وفق المستوى الحقيقي للمتعلم.",
    },
    outcomes: {
      en: ["Use useful Arabic in real conversations", "Build high-frequency vocabulary", "Read and understand level-appropriate texts", "Apply grammar without fear", "Speak with clearer pronunciation and confidence"],
      ar: ["استخدام العربية المفيدة في حوارات حقيقية", "بناء مفردات كثيرة الاستخدام", "قراءة وفهم نصوص مناسبة للمستوى", "تطبيق القواعد دون خوف", "التحدث بنطق أوضح وثقة أكبر"],
    },
    curriculum: {
      en: [{ title: "Everyday vocabulary", text: "Learn useful words through images, context, and repeated use." }, { title: "Guided conversation", text: "Speak from the first lessons with supportive prompts and correction." }, { title: "Reading & comprehension", text: "Build fluency through short, meaningful texts." }, { title: "Grammar that works", text: "Understand patterns and apply them immediately in speech and writing." }],
      ar: [{ title: "مفردات الحياة اليومية", text: "تعلم الكلمات المفيدة بالصور والسياق والاستخدام المتكرر." }, { title: "محادثة موجهة", text: "تحدث منذ الدروس الأولى مع محفزات وتصحيح داعم." }, { title: "القراءة والفهم", text: "بناء الطلاقة من خلال نصوص قصيرة وذات معنى." }, { title: "قواعد قابلة للاستخدام", text: "فهم الأنماط وتطبيقها فوراً في الحديث والكتابة." }],
    },
    idealFor: {
      en: ["Non-native Arabic speakers", "Children learning heritage Arabic", "Adults who want conversation", "Quran learners seeking deeper understanding"],
      ar: ["غير الناطقين بالعربية", "أطفال الأسر العربية في الخارج", "الكبار الراغبون في المحادثة", "دارسو القرآن الراغبون في فهم أعمق"],
    },
    format: {
      en: [{ label: "Class type", value: "Live one-to-one" }, { label: "Practice", value: "Speaking every lesson" }, { label: "Material", value: "Matched to your level" }, { label: "First step", value: "Free language check" }],
      ar: [{ label: "نوع الحصة", value: "فردية مباشرة" }, { label: "التدريب", value: "تحدث في كل حصة" }, { label: "المادة", value: "مناسبة لمستواك" }, { label: "الخطوة الأولى", value: "فحص لغة مجاني" }],
    },
    faqs: {
      en: [{ question: "Which Arabic variety do you teach?", answer: "The core program builds Modern Standard Arabic, with conversational support adapted to learner goals." }, { question: "Will I speak from the beginning?", answer: "Yes. Even beginners use short, supported phrases from their first lessons." }],
      ar: [{ question: "أي نوع من العربية تدرسون؟", answer: "يبني البرنامج الأساسي العربية الفصحى مع دعم المحادثة وفق أهداف المتعلم." }, { question: "هل سأتحدث منذ البداية؟", answer: "نعم، يستخدم حتى المبتدئ عبارات قصيرة ومدعومة منذ الدروس الأولى." }],
    },
    teacherSlugs: ["mohamed-samy", "roqaya-badr", "mohamed-ebrahim"],
  },
  {
    slug: "islamic-studies",
    image: "/images/course-islamic-studies.webp",
    icon: "heart",
    title: { en: "Islamic Studies", ar: "الدراسات الإسلامية" },
    eyebrow: { en: "Knowledge that shapes everyday life", ar: "علم ينعكس على الحياة اليومية" },
    tagline: { en: "Understand faith, worship, Seerah, and character through warm age-appropriate lessons.", ar: "افهم العقيدة والعبادات والسيرة والأخلاق من خلال دروس دافئة تناسب العمر." },
    description: {
      en: "A personal live program that helps children, teens, and adults understand essential Islamic knowledge and connect it to daily choices.",
      ar: "برنامج مباشر وشخصي يساعد الأطفال واليافعين والكبار على فهم المعرفة الإسلامية الأساسية وربطها باختيارات الحياة.",
    },
    outcomes: {
      en: ["Understand essential beliefs and worship", "Learn Seerah as a meaningful story", "Build Islamic manners and character", "Ask questions in a safe environment", "Connect knowledge to everyday decisions"],
      ar: ["فهم أساسيات العقيدة والعبادة", "تعلم السيرة كقصة ذات معنى", "بناء الآداب والأخلاق الإسلامية", "طرح الأسئلة في بيئة آمنة", "ربط العلم بالقرارات اليومية"],
    },
    curriculum: {
      en: [{ title: "Faith foundations", text: "Explore core beliefs with clear, age-appropriate explanations." }, { title: "Worship in practice", text: "Understand the meaning and steps of everyday acts of worship." }, { title: "Seerah & stories", text: "Learn from the life of the Prophet ﷺ and other meaningful examples." }, { title: "Character & choices", text: "Turn knowledge into kindness, honesty, responsibility, and good habits." }],
      ar: [{ title: "أسس الإيمان", text: "استكشاف المعتقدات الأساسية بشرح واضح ومناسب للعمر." }, { title: "العبادة في التطبيق", text: "فهم معنى وخطوات العبادات اليومية." }, { title: "السيرة والقصص", text: "التعلم من سيرة النبي ﷺ والنماذج الهادفة." }, { title: "الأخلاق والاختيارات", text: "تحويل العلم إلى لطف وصدق ومسؤولية وعادات طيبة." }],
    },
    idealFor: {
      en: ["Children building Islamic identity", "Families living outside Muslim-majority countries", "Teens with important questions", "Adults refreshing foundational knowledge"],
      ar: ["الأطفال الذين يبنون هويتهم الإسلامية", "الأسر المقيمة خارج البلدان الإسلامية", "اليافعون أصحاب الأسئلة المهمة", "الكبار الراغبون في تجديد المعرفة الأساسية"],
    },
    format: {
      en: [{ label: "Class type", value: "Live one-to-one" }, { label: "Style", value: "Discussion and activities" }, { label: "Curriculum", value: "Matched to age" }, { label: "First step", value: "Free family consultation" }],
      ar: [{ label: "نوع الحصة", value: "فردية مباشرة" }, { label: "الأسلوب", value: "حوار وأنشطة" }, { label: "المنهج", value: "مناسب للعمر" }, { label: "الخطوة الأولى", value: "استشارة أسرية مجانية" }],
    },
    faqs: {
      en: [{ question: "Is the program suitable for young children?", answer: "Yes. Younger learners use stories, visuals, questions, and short activities." }, { question: "Can parents request specific topics?", answer: "Yes. The tutor can include suitable family priorities within the learner’s plan." }],
      ar: [{ question: "هل البرنامج مناسب للأطفال الصغار؟", answer: "نعم، يستخدم المتعلمون الأصغر القصص والصور والأسئلة والأنشطة القصيرة." }, { question: "هل يمكن للوالدين طلب موضوعات محددة؟", answer: "نعم، يمكن للمعلم إدراج أولويات الأسرة المناسبة ضمن خطة المتعلم." }],
    },
    teacherSlugs: ["mohamed-samy", "roqaya-badr", "mohamed-ebrahim"],
  },
];

export function getTeacher(slug: string) {
  return teachers.find((teacher) => teacher.slug === slug);
}

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}
