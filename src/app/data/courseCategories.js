

export const categories = [
  {
    id: 'academic',
    name: 'Academic',
    subcategories: [
      'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10 (SSC)',
      'Class 11-12 (HSC)', 'University Entrance', 'Olympiad Preparation'
    ]
  },
  {
    id: 'professional',
    name: 'Professional Skills',
    subcategories: [
      'Data Analysis', 'Machine Learning', 'Project Management',
      'Digital Marketing', 'Graphic Design', 'Business Communication',
      'Entrepreneurship & Startup', 'Software Development Lifecycle',
      'UI/UX Design', 'Financial Modeling', 'Public Speaking & Presentation'
    ]
  },
  {
    id: 'personal',
    name: 'Personal Development',
    subcategories: [
      'Time Management', 'Critical Thinking', 'Problem Solving',
      'Leadership Skills', 'Emotional Intelligence', 'Career Planning'
    ]
  },
  {
    id: 'language',
    name: 'Language Learning',
    subcategories: [
      'English (Beginner to Advanced)', 'Arabic for Understanding Quran',
      'Bangla Grammar & Literature', 'IELTS Preparation',
      'Spoken English for Professionals', 'French / German Basics'
    ]
  },
  {
    id: 'islamic',
    name: 'Islamic Studies',
    subcategories: [
      'Quran Recitation (Tajweed)', 'Tafsir (Quran Understanding)',
      'Hadith Studies', 'Seerah (Life of the Prophet ﷺ)',
      'Fiqh (Islamic Rulings)', 'Islamic History & Civilization'
    ]
  },
  {
    id: 'tech',
    name: 'Technology & Coding',
    subcategories: [
      'Python Programming', 'Web Development (HTML, CSS, JS)',
      'React & Next.js', 'Django & Backend Development',
      'Flutter & Mobile Development', 'Cybersecurity Basics',
      'Cloud Computing (AWS, Azure)', 'Database Management (SQL, MongoDB)'
    ]
  },
  {
    id: 'arts',
    name: 'Arts & Creativity',
    subcategories: [
      'Drawing & Sketching', 'Digital Art & Illustration', 'Photography',
      'Creative Writing', 'Video Editing', 'Animation & Motion Graphics',
      'Calligraphy (Arabic & Bangla)'
    ]
  }
];

export const difficultyLevels = ['Beginner', 'Intermediate', 'Advanced'];

export const durationFilters = [
  { value: 'short', label: 'Short Course (≤ 1 month)' },
  { value: 'medium', label: 'Medium (1–3 months)' },
  { value: 'long', label: 'Long (> 3 months)' }
];

export const priceFilters = [
  { value: 'free', label: 'Free' },
  { value: 'low', label: 'Paid (Low)' },
  { value: 'medium', label: 'Paid (Medium)' },
  { value: 'high', label: 'Paid (Premium)' }
];

export const languageFilters = [
  { value: 'en', label: 'English' },
  { value: 'bn', label: 'Bangla' },
  { value: 'bilingual', label: 'Bilingual' }
];

export const sortOptions = [
  { value: 'popularity', label: 'Most Popular' },
  { value: 'newest', label: 'Newest First' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' }
];
