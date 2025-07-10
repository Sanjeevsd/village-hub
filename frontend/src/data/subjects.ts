export interface Subject {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  topics: string[];
  guideUrl: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface GradeData {
  [grade: string]: Subject[];
}

export const subjectsData: GradeData = {
  '7': [
    {
      id: 'math-7',
      name: 'Mathematics',
      description: 'Basic algebra, geometry, and arithmetic fundamentals',
      icon: 'Calculator',
      color: 'from-amber-400 to-amber-500',
      topics: ['Basic Algebra', 'Geometry', 'Fractions', 'Decimals'],
      guideUrl: '/guides/math-grade-7.pdf',
      difficulty: 'Beginner'
    },
    {
      id: 'science-7',
      name: 'Science',
      description: 'Introduction to physics, chemistry, and biology',
      icon: 'Microscope',
      color: 'from-orange-400 to-orange-500',
      topics: ['Basic Physics', 'Chemistry', 'Biology', 'Earth Science'],
      guideUrl: '/guides/science-grade-7.pdf',
      difficulty: 'Beginner'
    },
    {
      id: 'english-7',
      name: 'English',
      description: 'Reading comprehension, grammar, and basic writing',
      icon: 'BookOpen',
      color: 'from-yellow-400 to-yellow-500',
      topics: ['Reading', 'Grammar', 'Writing', 'Vocabulary'],
      guideUrl: '/guides/english-grade-7.pdf',
      difficulty: 'Beginner'
    },
    {
      id: 'social-7',
      name: 'Social Studies',
      description: 'History, geography, and civic education basics',
      icon: 'Scroll',
      color: 'from-amber-500 to-orange-500',
      topics: ['History', 'Geography', 'Civics', 'Culture'],
      guideUrl: '/guides/social-grade-7.pdf',
      difficulty: 'Beginner'
    },
    {
      id: 'arts-7',
      name: 'Arts',
      description: 'Creative expression through visual and performing arts',
      icon: 'BookOpen',
      color: 'from-yellow-500 to-amber-500',
      topics: ['Drawing', 'Music', 'Drama', 'Crafts'],
      guideUrl: '/guides/arts-grade-7.pdf',
      difficulty: 'Beginner'
    }
  ],
  '8': [
    {
      id: 'math-8',
      name: 'Advanced Mathematics',
      description: 'Pre-algebra, advanced geometry, and problem solving',
      icon: 'Calculator',
      color: 'from-amber-400 to-amber-500',
      topics: ['Pre-Algebra', 'Advanced Geometry', 'Statistics', 'Problem Solving'],
      guideUrl: '/guides/math-grade-8.pdf',
      difficulty: 'Intermediate'
    },
    {
      id: 'science-8',
      name: 'Physical Science',
      description: 'Chemistry basics, physics principles, and scientific method',
      icon: 'Microscope',
      color: 'from-orange-400 to-orange-500',
      topics: ['Chemistry Basics', 'Physics Principles', 'Scientific Method', 'Lab Skills'],
      guideUrl: '/guides/science-grade-8.pdf',
      difficulty: 'Intermediate'
    },
    {
      id: 'english-8',
      name: 'Literature & Writing',
      description: 'Literary analysis, creative writing, and communication',
      icon: 'BookOpen',
      color: 'from-yellow-400 to-yellow-500',
      topics: ['Literature Analysis', 'Creative Writing', 'Public Speaking', 'Research'],
      guideUrl: '/guides/english-grade-8.pdf',
      difficulty: 'Intermediate'
    },
    {
      id: 'history-8',
      name: 'World History',
      description: 'Ancient civilizations, world cultures, and historical analysis',
      icon: 'Scroll',
      color: 'from-amber-500 to-orange-500',
      topics: ['Ancient Civilizations', 'World Cultures', 'Historical Analysis', 'Geography'],
      guideUrl: '/guides/history-grade-8.pdf',
      difficulty: 'Intermediate'
    },
    {
      id: 'tech-8',
      name: 'Technology',
      description: 'Computer basics, digital literacy, and introduction to coding',
      icon: 'Code',
      color: 'from-yellow-500 to-orange-500',
      topics: ['Computer Basics', 'Digital Literacy', 'Basic Coding', 'Internet Safety'],
      guideUrl: '/guides/tech-grade-8.pdf',
      difficulty: 'Beginner'
    },
    {
      id: 'health-8',
      name: 'Health & Wellness',
      description: 'Physical health, mental wellness, and life skills',
      icon: 'BookOpen',
      color: 'from-amber-400 to-yellow-500',
      topics: ['Physical Health', 'Mental Wellness', 'Nutrition', 'Life Skills'],
      guideUrl: '/guides/health-grade-8.pdf',
      difficulty: 'Beginner'
    }
  ],
  '9': [
    {
      id: 'math-9',
      name: 'Mathematics',
      description: 'Algebra, geometry, and number theory fundamentals',
      icon: 'Calculator',
      color: 'from-amber-400 to-amber-500',
      topics: ['Algebra', 'Geometry', 'Statistics', 'Trigonometry'],
      guideUrl: '/guides/math-grade-9.pdf',
      difficulty: 'Intermediate'
    },
    {
      id: 'science-9',
      name: 'Science',
      description: 'Physics, chemistry, and biology essentials',
      icon: 'Microscope',
      color: 'from-orange-400 to-orange-500',
      topics: ['Physics', 'Chemistry', 'Biology', 'Lab Work'],
      guideUrl: '/guides/science-grade-9.pdf',
      difficulty: 'Intermediate'
    },
    {
      id: 'english-9',
      name: 'English',
      description: 'Literature, writing, and communication skills',
      icon: 'BookOpen',
      color: 'from-yellow-400 to-yellow-500',
      topics: ['Literature', 'Writing', 'Grammar', 'Speaking'],
      guideUrl: '/guides/english-grade-9.pdf',
      difficulty: 'Intermediate'
    },
    {
      id: 'history-9',
      name: 'History',
      description: 'World history and historical analysis',
      icon: 'Scroll',
      color: 'from-amber-500 to-orange-500',
      topics: ['World History', 'Civilization', 'Historical Analysis'],
      guideUrl: '/guides/history-grade-9.pdf',
      difficulty: 'Intermediate'
    }
  ],
  '10': [
    {
      id: 'math-10',
      name: 'Mathematics',
      description: 'Advanced algebra, calculus introduction, and complex geometry',
      icon: 'Calculator',
      color: 'from-amber-400 to-amber-500',
      topics: ['Advanced Algebra', 'Pre-Calculus', 'Complex Geometry', 'Statistics'],
      guideUrl: '/guides/math-grade-10.pdf',
      difficulty: 'Advanced'
    },
    {
      id: 'science-10',
      name: 'Science',
      description: 'Advanced physics, organic chemistry, and molecular biology',
      icon: 'Microscope',
      color: 'from-orange-400 to-orange-500',
      topics: ['Advanced Physics', 'Organic Chemistry', 'Molecular Biology', 'Research Methods'],
      guideUrl: '/guides/science-grade-10.pdf',
      difficulty: 'Advanced'
    },
    {
      id: 'english-10',
      name: 'English',
      description: 'Advanced literature analysis and creative writing',
      icon: 'BookOpen',
      color: 'from-yellow-400 to-yellow-500',
      topics: ['Advanced Literature', 'Creative Writing', 'Critical Analysis', 'Debate'],
      guideUrl: '/guides/english-grade-10.pdf',
      difficulty: 'Advanced'
    },
    {
      id: 'computer-10',
      name: 'Computer Science',
      description: 'Programming fundamentals and computational thinking',
      icon: 'Code',
      color: 'from-amber-500 to-orange-500',
      topics: ['Programming', 'Algorithms', 'Data Structures', 'Web Development'],
      guideUrl: '/guides/computer-grade-10.pdf',
      difficulty: 'Intermediate'
    }
  ],
  '11': [
    {
      id: 'math-11',
      name: 'Mathematics',
      description: 'Calculus, advanced statistics, and mathematical modeling',
      icon: 'Calculator',
      color: 'from-amber-400 to-amber-500',
      topics: ['Calculus', 'Advanced Statistics', 'Mathematical Modeling', 'Linear Algebra'],
      guideUrl: '/guides/math-grade-11.pdf',
      difficulty: 'Advanced'
    },
    {
      id: 'physics-11',
      name: 'Physics',
      description: 'Classical mechanics, thermodynamics, and electromagnetism',
      icon: 'Zap',
      color: 'from-orange-400 to-red-500',
      topics: ['Classical Mechanics', 'Thermodynamics', 'Electromagnetism', 'Optics'],
      guideUrl: '/guides/physics-grade-11.pdf',
      difficulty: 'Advanced'
    },
    {
      id: 'chemistry-11',
      name: 'Chemistry',
      description: 'Organic chemistry, chemical bonding, and reactions',
      icon: 'Flask',
      color: 'from-yellow-400 to-orange-500',
      topics: ['Organic Chemistry', 'Chemical Bonding', 'Reactions', 'Thermochemistry'],
      guideUrl: '/guides/chemistry-grade-11.pdf',
      difficulty: 'Advanced'
    },
    {
      id: 'biology-11',
      name: 'Biology',
      description: 'Genetics, ecology, and human physiology',
      icon: 'Dna',
      color: 'from-amber-400 to-yellow-500',
      topics: ['Genetics', 'Ecology', 'Human Physiology', 'Cell Biology'],
      guideUrl: '/guides/biology-grade-11.pdf',
      difficulty: 'Advanced'
    }
  ],
  '12': [
    {
      id: 'math-12',
      name: 'Mathematics',
      description: 'Advanced calculus, differential equations, and complex analysis',
      icon: 'Calculator',
      color: 'from-amber-400 to-amber-500',
      topics: ['Advanced Calculus', 'Differential Equations', 'Complex Analysis', 'Probability'],
      guideUrl: '/guides/math-grade-12.pdf',
      difficulty: 'Advanced'
    },
    {
      id: 'physics-12',
      name: 'Physics',
      description: 'Quantum mechanics, relativity, and modern physics',
      icon: 'Zap',
      color: 'from-orange-400 to-red-500',
      topics: ['Quantum Mechanics', 'Relativity', 'Modern Physics', 'Nuclear Physics'],
      guideUrl: '/guides/physics-grade-12.pdf',
      difficulty: 'Advanced'
    },
    {
      id: 'chemistry-12',
      name: 'Chemistry',
      description: 'Advanced organic chemistry and chemical engineering',
      icon: 'Flask',
      color: 'from-yellow-400 to-orange-500',
      topics: ['Advanced Organic Chemistry', 'Chemical Engineering', 'Spectroscopy', 'Kinetics'],
      guideUrl: '/guides/chemistry-grade-12.pdf',
      difficulty: 'Advanced'
    },
    {
      id: 'computer-12',
      name: 'Computer Science',
      description: 'Data structures, algorithms, and software engineering',
      icon: 'Code',
      color: 'from-amber-500 to-orange-500',
      topics: ['Data Structures', 'Algorithms', 'Software Engineering', 'Machine Learning'],
      guideUrl: '/guides/computer-grade-12.pdf',
      difficulty: 'Advanced'
    }
  ]
};

export const getSubjectsByGrade = (grade: string): Subject[] => {
  return subjectsData[grade] || [];
};

export const getAvailableGrades = (): string[] => {
  return Object.keys(subjectsData).sort();
};