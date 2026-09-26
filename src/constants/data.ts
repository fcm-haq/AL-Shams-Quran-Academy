export const BRAND = {
  name: 'Al Shams Quran Academy',
  shortName: 'Al Shams',
  tagline: 'Learn Quran. Live by Quran. Lead a Better Life.',
  email: 'salihromi2@gmail.com',
  whatsapp: '+92 340 9478812',
  whatsappRaw: '923409478812',
  whatsappDefaultMsg: 'Assalamu Alaikum, I would like to book a free trial Quran class.',
  experienceYears: '3+',
  experienceTagline: 'Trusted • Dedicated • Passionate',
};

// Sitemap Courses matching the PDF:
// Quran Reading (Nazra), Quran with Tajweed, Quran Memorization (Hifz),
// Noorani Qaida, Islamic Studies, Quran Translation & Tafseer
export const COURSES = [
  {
    id: 'noorani-qaida',
    title: 'NOORANI QAIDA',
    subtitle: 'Foundation for Quranic reading and phonetics',
    description: 'The essential stepping stone for beginners and children. Learn Arabic letters, correct articulation points (Makharij), joinings, and basic vowel movements.',
    topics: ['Arabic Alphabet & Phonics', 'Letter Recognition & Shapes', 'Harakat (Fatha, Kasra, Damma)', 'Madd & Tanween Foundations'],
    targetAudience: 'Absolute beginners & kids aged 4-7',
    iconName: 'Sparkles',
  },
  {
    id: 'nazra',
    title: 'QURAN READING (NAZRA)',
    subtitle: 'Read the Holy Quran with correct pronunciation',
    description: 'Read the Quran fluently directly from the Mushaf with accurate pronunciation, steady flow, and confidence under the continuous guidance of your teacher.',
    topics: ['Fluent Mushaf Reading', 'Pronunciation Correction', 'Continuous Recitation Practice', 'Stopping & Pausing Signs'],
    targetAudience: 'Students who completed Qaida and want fluency',
    iconName: 'BookOpen',
  },
  {
    id: 'tajweed',
    title: 'QURAN WITH TAJWEED',
    subtitle: 'Learn recitation with classical Tajweed rules',
    description: 'Refine your Quranic recitation through systematic application of classical Tajweed rules, precise articulation points, rhythm, elongation, and acoustic beauty.',
    topics: ['Articulation Points (Makharij)', 'Rules of Noon & Meem Sakinah', 'Madd (Elongation) Rules', 'Waqf (Rules of Stopping)'],
    targetAudience: 'Learners seeking proper, beautiful recitation',
    iconName: 'Sparkles',
  },
  {
    id: 'hifz',
    title: 'QURAN MEMORIZATION (HIFZ)',
    subtitle: 'Memorization with regular revision and tashih',
    description: 'A structured, personalized memorization path featuring daily new lessons (Sabaq), recent revisions (Sabqi), and cumulative consolidation (Manzil).',
    topics: ['Individual Memorization Pace', 'Daily Recitation & Correction (Tashih)', 'Systematic Revision Cycles', 'Long-term Retention Strategy'],
    targetAudience: 'Committed students seeking full or Juz-by-Juz Hifz',
    iconName: 'BookmarkCheck',
  },
  {
    id: 'tafseer',
    title: 'QURAN TRANSLATION & TAFSEER',
    subtitle: 'Understand the meanings and wisdom of the Quran',
    description: 'Word-by-word translation, background of revelation (Asbab al-Nuzul), context, and practical application of Quranic wisdom in modern daily life.',
    topics: ['Word-by-word Translation', 'Context of Revelation (Asbab al-Nuzul)', 'Core Lessons & Principles', 'Spiritual Contemplation (Tadabbur)'],
    targetAudience: 'Teens & adults who wish to understand the Quran',
    iconName: 'BookOpen',
  },
  {
    id: 'islamic-studies',
    title: 'ISLAMIC STUDIES & DUAS',
    subtitle: 'Build solid Islamic knowledge, Salah & moral education',
    description: 'Foundational Islamic curriculum covering the Pillars of Islam and Iman, Salah with meanings, daily Masnoon Duas, and Seerah of the Prophet (PBUH).',
    topics: ['Pillars of Islam & Iman', 'Step-by-step Salah & Wudhu', 'Daily Masnoon Duas', 'Seerah & Islamic Character (Akhlaq)'],
    targetAudience: 'Children, teenagers & adult new learners',
    iconName: 'GraduationCap',
  },
];

export const WHY_CHOOSE_US = [
  {
    id: '1',
    title: '3+ Years of Teaching Experience',
    description: 'Trusted, dedicated, and passionate teaching focused on helping students progress consistently in their recitation.',
    iconName: 'Award',
  },
  {
    id: '2',
    title: 'Qualified Teachers',
    description: 'Certified, patient, and student-focused Quran educators providing individual attention and proven pedagogical guidance.',
    iconName: 'UserCheck',
  },
  {
    id: '3',
    title: 'One-to-One Classes',
    description: 'Personalized lessons designed specifically around the student’s personal learning pace, strengths, and schedule.',
    iconName: 'User',
  },
  {
    id: '4',
    title: 'Flexible Timings',
    description: 'Choose learning slots that comfortably fit your family’s daily routine across international time zones.',
    iconName: 'Clock',
  },
  {
    id: '5',
    title: 'Learn From Home',
    description: 'Learn the Holy Quran in a comfortable, convenient, safe, and familiar environment without travel hassles.',
    iconName: 'Home',
  },
  {
    id: '6',
    title: '100% Satisfaction Guaranteed',
    description: 'Your progress and meaningful spiritual learning experience remain our utmost priority throughout your journey.',
    iconName: 'ShieldCheck',
  },
];

export const TEACHERS_LIST = [
  {
    id: 'male',
    category: 'Male Quran Teachers',
    description: 'Experienced, certified male teachers specialized in Tajweed, Hifz, and Nazra for boys and adult male students.',
    features: [
      'Certified Tajweed & Qira’ah background',
      'Patience with beginner students & young boys',
      'Fluent in English & Urdu for clear communication',
      'Flexible scheduling for morning or evening classes',
    ],
  },
  {
    id: 'female',
    category: 'Female Quran Teachers',
    description: 'Qualified female Quran teachers offering private, comfortable, and respectful one-on-one sessions for girls, young kids, and female adults.',
    features: [
      'Dedicated female-only environment',
      'Gentle, child-friendly teaching methodology',
      'Extensive experience with sisters & young children',
      'Strict adherence to Islamic privacy and modesty',
    ],
  },
];

export const PRICING_PACKAGES = [
  {
    id: 'starter',
    name: '2 Days / Week',
    days: '2 Days per Week (8 Classes/mo)',
    duration: '30 mins per 1-on-1 session',
    price: 'Affordable Monthly',
    badge: 'Popular for Beginners',
    description: 'Ideal for busy schedules, young children starting Qaida, or light weekly revision.',
    features: [
      'One-on-One Live Session',
      'Dedicated Male or Female Teacher',
      'Monthly Progress Report',
      'Free Class Rescheduling',
      'Free Trial Class Included',
    ],
  },
  {
    id: 'standard',
    name: '3 Days / Week',
    days: '3 Days per Week (12 Classes/mo)',
    duration: '30 mins per 1-on-1 session',
    price: 'Most Recommended',
    badge: 'Best Balance',
    description: 'The recommended frequency for steady learning, retention, and consistent Tajweed practice.',
    features: [
      'One-on-One Live Session',
      'Dedicated Male or Female Teacher',
      'Regular Revision & Tashih',
      'Free Class Rescheduling',
      'Free Trial Class Included',
    ],
  },
  {
    id: 'intensive',
    name: '5 Days / Week',
    days: '5 Days per Week (20 Classes/mo)',
    duration: '30 mins per 1-on-1 session',
    price: 'Fast-Track Learning',
    badge: 'Best for Hifz & Fluency',
    description: 'Daily immersion designed for Hifz students and those looking for rapid Quranic mastery.',
    features: [
      'Daily 1-on-1 Lessons & Revisions',
      'Dedicated Male or Female Teacher',
      'Comprehensive Hifz / Tajweed Focus',
      'Weekly Assessment & Feedback',
      'Free Trial Class Included',
    ],
  },
];

export const AUDIENCE_LEVELS = [
  {
    category: 'KIDS',
    ageRange: '5+ Years',
    highlight: 'Engaging & Patient Approach',
    description: 'Friendly and age-appropriate Quran learning designed to make lessons engaging, interactive, and comfortable for young students.',
    features: [
      'Interactive Noorani Qaida phonics',
      'Positive encouragement & gentle pacing',
      'Short, focused attention spans handled with care',
      'Regular parent feedback on milestones',
    ],
  },
  {
    category: 'TEENS',
    ageRange: 'For Teen Learners',
    highlight: 'Structured & Inspiring',
    description: 'Structured Quran learning with personalized guidance, deep Tajweed precision, and consistent teacher attention.',
    features: [
      'Systematic Tajweed rule comprehension',
      'Understanding meanings of daily prayers',
      'Flexible after-school and weekend schedules',
      'Mentorship fostering Islamic moral values',
    ],
  },
  {
    category: 'ADULTS',
    ageRange: 'Male & Female',
    highlight: 'Respectful & Accommodating',
    description: 'Flexible online Quran and Islamic education tailored for adult learners, balancing work, university, and family commitments.',
    features: [
      'Separate male and female instruction',
      'Zero-judgment environment for beginners',
      'Correction of recitation habits & fluency',
      'Customized evening and early morning slots',
    ],
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'REGISTER & BOOK FREE TRIAL',
    description: 'Fill in our short form or reach out directly to request your free, no-obligation trial class.',
  },
  {
    step: '02',
    title: 'CHOOSE YOUR COURSE & TIME',
    description: 'Select your preferred course, male or female teacher, and convenient time slot according to your timezone.',
  },
  {
    step: '03',
    title: 'JOIN YOUR LIVE 1-ON-1 CLASS',
    description: 'Connect with your teacher via Zoom, Skype, or WhatsApp from the comfort and safety of your home.',
  },
  {
    step: '04',
    title: 'START LEARNING & PROGRESS',
    description: 'Begin regular structured classes and experience steady improvement with continuous encouragement.',
  },
];

export const REVIEWS = [
  {
    name: 'Brother Usman',
    location: 'United Kingdom',
    course: 'Noorani Qaida & Nazra for Kids',
    text: 'Al Shams Quran Academy has been a blessing for my two children. The teacher is incredibly patient, gentle, and always punctual. In just 3 months, their pronunciation has improved remarkably.',
    rating: 5,
  },
  {
    name: 'Sister Maryam',
    location: 'United States',
    course: 'Tajweed for Adult Sisters',
    text: 'Having a dedicated female teacher who understands my busy schedule was crucial for me. I can finally recite Surah Al-Baqarah with accurate Tajweed rules and confidence.',
    rating: 5,
  },
  {
    name: 'Brother Farhan',
    location: 'Canada',
    course: 'Hifz-ul-Quran',
    text: 'The 1-on-1 attention and systematic Sabaq-Sabqi revision approach helped my teenage son memorize Juz Amma with strong retention. Highly recommended!',
    rating: 5,
  },
];

export const FAQS = [
  {
    question: 'How do online Quran classes work?',
    answer: 'Classes are conducted live 1-on-1 using video/audio platforms such as Zoom, Skype, or WhatsApp. The teacher shares the digital Quran or Qaida screen and guides you step-by-step.',
  },
  {
    question: 'Is the trial class completely free?',
    answer: 'Yes! The trial class is 100% free with no registration fees and zero financial obligation. It allows you to evaluate our teaching method and meet your teacher.',
  },
  {
    question: 'Do you offer female teachers for sisters and young girls?',
    answer: 'Yes, we have certified and experienced female Quran teachers dedicated exclusively to female students and young children.',
  },
  {
    question: 'What if I need to reschedule a class?',
    answer: 'We offer flexible scheduling. Just notify your teacher or academy coordinator in advance, and we will happily arrange a makeup class at your convenience.',
  },
  {
    question: 'What age can children start learning?',
    answer: 'Children as young as 4 to 5 years old can start with our interactive Noorani Qaida course. Our teachers use patient, child-friendly methods to keep them engaged.',
  },
  {
    question: 'What equipment do I need to attend classes?',
    answer: 'All you need is a laptop, tablet, or smartphone with an internet connection and headphones or built-in speakers. No special software is required.',
  },
];

export const BLOG_RESOURCES = [
  {
    title: 'The Importance of Learning Tajweed Rules',
    category: 'Tajweed',
    readTime: '4 min read',
    summary: 'Discover why accurate articulation of Arabic letters protects the sacred meaning of the Quranic text and enriches your prayer experience.',
  },
  {
    title: '5 Effective Tips to Help Kids Memorize the Quran at Home',
    category: 'Quran Learning',
    readTime: '5 min read',
    summary: 'Practical guidance for parents on establishing consistent Quran routines, positive reinforcement, and optimal listening habits.',
  },
  {
    title: 'The Virtues of Reciting the Quran: Insights from Hadith',
    category: 'Islamic Articles',
    readTime: '6 min read',
    summary: 'Reflecting upon the noble traditions of Prophet Muhammad (PBUH) on the spiritual elevation and rewards of Quran recitation.',
  },
];

export const PLATFORMS = [
  {
    name: 'Zoom',
    description: 'Crystal-clear HD screen sharing for digital Quran & Noorani Qaida reading.',
    badge: 'Popular for Kids & Teens',
  },
  {
    name: 'Skype',
    description: 'Reliable, low-bandwidth video & voice calling accessible on any computer or tablet.',
    badge: 'Desktop & Laptop Friendly',
  },
  {
    name: 'WhatsApp',
    description: 'Convenient one-tap video calling directly from your smartphone or tablet.',
    badge: 'Quick & Mobile Ready',
  },
];

export const QURAN_QUOTE = {
  arabic: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
  english: '“The best of you are those who learn the Quran and teach it.”',
  source: '— Sahih Bukhari',
};
