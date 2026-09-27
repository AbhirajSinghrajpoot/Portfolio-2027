export interface Project {
  id: string
  number: string
  title: string
  subtitle: string
  year: string
  timeline?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  summary: string
  architectureNodes?: { label: string; description: string }[]
  highlights: string[]
  category: 'ai-ml' | 'systems' | 'data' | 'web'
}

export interface ArchiveProject {
  id: string
  title: string
  subtitle: string
  year: string
  month?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  description: string
  patternsOrFeatures?: string[]
}

export interface Certification {
  title: string
  issuer: string
  status?: string
  type: 'certification' | 'simulation' | 'course'
  isFeatured?: boolean
}

export interface SkillCategory {
  name: string
  tagline: string
  skills: string[]
}

export const PERSONAL_INFO = {
  name: 'Abhiraj Singh Rajpoot',
  firstName: 'ABHIRAJ',
  lastName: 'RAJPOOT',
  role: 'Full-Stack Developer | AI / Generative AI | Cybersecurity',
  positioning: 'Building practical digital products at the intersection of full-stack development, artificial intelligence and cybersecurity.',
  location: 'Jabalpur, Madhya Pradesh, India',
  university: 'Baderia Global Institute of Engineering & Management · RGPV',
  degree: 'B.Tech — IoT, Cybersecurity & Blockchain',
  graduationYear: '2027',
  cgpa: '7.18 / 10',
  currentYear: 'B.Tech Student',
  email: 'abhirajsingh2k5@gmail.com',
  phone: '+91 6263 479 576',
  github: 'https://github.com/AbhirajSinghrajpoot',
  linkedin: 'https://linkedin.com/in/abhiraj-singh-rajpoot-7133a9349',
  leetcode: 'https://leetcode.com/u/abhirajsinghrajpoot',
  summary:
    "I'm Abhiraj Singh Rajpoot, a B.Tech student specializing in IoT, Cybersecurity & Blockchain. I work across full-stack development, AI integration, databases, networking and cybersecurity. My focus is on building practical web applications and AI-powered products while keeping security, usability and performance in mind.",
  statementBig: "BUILDING PRACTICAL DIGITAL PRODUCTS AT THE INTERSECTION OF FULL-STACK DEVELOPMENT, AI AND CYBERSECURITY.",
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'ai-finance-platform',
    number: '01',
    title: 'AI FINANCE PLATFORM',
    subtitle: 'AI-Powered Personal Finance',
    year: '2026',
    liveUrl: 'https://ai-finance-amber.vercel.app/',
    technologies: ['Next.js', 'Supabase', 'Prisma', 'Clerk', 'Gemini AI', 'Inngest', 'Arcjet'],
    summary: 'An AI-powered personal finance platform with expense tracking, budget management, and AI receipt scanning.',
    highlights: [
      'Expense tracking and budget management',
      'AI receipt scanning and automated categorization',
      'Automated email alerts using Inngest',
      'Secure authentication and rate limiting'
    ],
    category: 'ai-ml',
  },
  {
    id: 'nexthire',
    number: '02',
    title: 'NEXTHIRE',
    subtitle: 'AI Career Assistant',
    year: '2026',
    liveUrl: 'https://nexthire-mu.vercel.app/',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'AI APIs'],
    summary: 'An AI-powered career platform providing intelligent feedback on resumes and candidate-job matching.',
    highlights: [
      'Resume analysis using AI APIs',
      'Automated ATS scoring and intelligent feedback',
      'Candidate-job matching algorithms'
    ],
    category: 'ai-ml',
  },
  {
    id: 'get-me-a-chai',
    number: '03',
    title: 'GET ME A CHAI',
    subtitle: 'Creator Support & Donation Platform',
    year: '2025',
    liveUrl: 'https://get-me-a-chai-wizard.vercel.app/',
    technologies: ['Next.js', 'MongoDB', 'Razorpay', 'Tailwind CSS'],
    summary: 'A full-stack creator-support platform allowing users to track payments and manage supporters.',
    highlights: [
      'Secure authentication for creators',
      'Razorpay payment gateway integration for donations',
      'Supporter management and dashboard',
      'Payment tracking system'
    ],
    category: 'web',
  },
  {
    id: 'intellithreat',
    number: '04',
    title: 'INTELLITHREAT',
    subtitle: 'Malware Detection · Academic Project',
    year: '2025',
    liveUrl: 'https://ai-based-malware-detector-o03w.onrender.com/',
    technologies: ['Python', 'Machine Learning', 'Random Forest'],
    summary: 'Academic cybersecurity project that analyzes file-based dataset features and predicts whether a file is malware or safe, without executing actual malware.',
    highlights: [
      'Dataset-based file feature analysis',
      'Random Forest classification model',
      'Predicts Malware / Safe classification',
      'Flask-based web interface for results',
      'No actual malware execution required'
    ],
    category: 'systems',
  },
  {
    id: 'editkaro',
    number: '05',
    title: 'EDITKARO AGENCY',
    subtitle: 'Video Editing Agency Portfolio',
    year: '2025',
    liveUrl: 'https://editing-agency-beryl.vercel.app/index.html',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    summary: 'Responsive video editing agency website with categorized portfolio showcases, video previews, and a modern user-friendly interface.',
    highlights: [
      'Categorized video portfolio with previews',
      'Modern UI with smooth hover animations',
      'Fully responsive across all devices',
      'Agency services and package showcase',
      'Contact & inquiry section'
    ],
    category: 'web',
  }
]


export const ARCHIVE_PROJECTS: ArchiveProject[] = [
  { id: 'cyberrakshak', title: 'CyberRakshak', subtitle: 'Scam Detector AI', year: '2026', technologies: ['React', 'TypeScript', 'Vite', 'Google Gemini API'], description: 'AI-powered cybersecurity application that analyzes scam messages, phishing attempts, and suspicious links using Google Gemini API for risk explanation and safety guidance.' },
  { id: 'mysql-journey', title: 'MySQL Technical Log', subtitle: 'Backend / Database', year: '2024', technologies: ['MySQL', 'SQL', 'Relational Databases'], description: 'A 15-day technical log documenting my journey mastering MySQL, relational databases, and complex backend querying.' },
  { id: 'tic-tac-toe', title: 'Tic Tac Toe', subtitle: 'Classic Game', year: '2024', technologies: ['HTML', 'CSS', 'JavaScript'], description: 'Interactive browser-based two-player game.' },
  { id: 'stone-paper-scissors', title: 'Stone Paper Scissors', subtitle: 'Mini Game', year: '2024', technologies: ['HTML', 'CSS', 'JavaScript'], description: 'Interactive browser-based game with computer-generated moves.' },
  { id: 'netflix-clone', title: 'Netflix Clone', subtitle: 'UI Replication', year: '2024', technologies: ['GitHub Repo Missing'], description: 'Frontend recreation of a Netflix-style movie browsing interface.' },
  { id: 'todo-web', title: 'To-Do Web App', subtitle: 'Task Manager', year: '2024', technologies: ['GitHub Repo Missing'], description: 'Web-based task management application.' },
  { id: 'flask-todo', title: 'Python Flask To-Do App', subtitle: 'Backend Application', year: '2025', technologies: ['Python', 'Flask', 'SQLite'], description: 'Server-rendered task management application with persistent local data storage.' },
  { id: 'port-scanner', title: 'Network Port Scanner', subtitle: 'Security Tool', year: '2025', technologies: ['Python', 'Tkinter', 'Socket', 'Threading'], description: 'GUI-based network reconnaissance tool for scanning ports and identifying open services.' },
  { id: 'saas-app', title: 'Full Stack SaaS Application', subtitle: 'Web Service', year: '2026', technologies: ['GitHub Repo Missing'], description: 'Full-stack application with authentication, payments and web-based functionality.' },
  { id: 'dev-portfolio', title: 'Personal Developer Portfolio', subtitle: 'Web Portfolio', year: '2025', technologies: ['React', 'CSS'], description: 'Personal portfolio showcasing projects, skills and development work.' },
  { id: 'orbitbank', title: 'OrbitBank', subtitle: 'FinTech Landing Page', year: '2025', liveUrl: 'https://orbit-bank.vercel.app/', technologies: ['React.js', 'Tailwind CSS', 'Vite', 'Google Apps Script'], description: 'Modern FinTech landing page featuring responsive design, a cryptocurrency ticker, pricing plans, testimonials, and a Google Sheets integrated contact form.' },
  { id: 'wizards-portfolio', title: "Wizard's Portfolio", subtitle: 'Personal Portfolio v1', year: '2025', liveUrl: 'https://wizards-portfolio.vercel.app/', githubUrl: 'https://github.com/AbhirajSinghrajpoot/Wizards-Portfolio', technologies: ['HTML', 'CSS', 'JavaScript', 'Typed.js'], description: 'First personal developer portfolio showcasing projects, skills, and contact. Features animated typing effect, smooth scrolling, and a Google Sheets integrated contact form.' }
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'PROGRAMMING',
    tagline: 'Core languages I use.',
    skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    name: 'FRONTEND',
    tagline: 'Building engaging user interfaces.',
    skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  },
  {
    name: 'BACKEND',
    tagline: 'Robust server-side architecture.',
    skills: ['Node.js', 'Express.js', 'Flask', 'REST APIs', 'JWT Authentication'],
  },
  {
    name: 'DATABASES',
    tagline: 'Data storage and management.',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Prisma', 'Supabase'],
  },
  {
    name: 'AI & MACHINE LEARNING',
    tagline: 'Intelligent integrations.',
    skills: ['Generative AI', 'Google Gemini API', 'Machine Learning Fundamentals', 'Prompt Engineering', 'AI API Integration'],
  },
  {
    name: 'CYBERSECURITY',
    tagline: 'Security operations and testing tools.',
    skills: ['Kali Linux', 'Wireshark', 'Burp Suite', 'Nmap', 'OWASP Awareness'],
  },
  {
    name: 'TOOLS & CLOUD',
    tagline: 'Deployment and workflows.',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker', 'Vercel', 'Netlify', 'Render', 'MongoDB Atlas'],
  }
]



export const CERTIFICATIONS: Certification[] = [
  { title: 'Fortinet Certified Associate in Cybersecurity', issuer: 'Fortinet', type: 'certification', isFeatured: true },
  { title: 'Fortinet Certified Fundamentals in Cybersecurity', issuer: 'Fortinet', type: 'certification', isFeatured: true },
  { title: 'Blockchain and Its Applications — Elite, 63%', issuer: 'NPTEL', type: 'certification', isFeatured: true },
  { title: 'Azure Fundamentals', issuer: 'Microsoft', type: 'certification', isFeatured: true },
  { title: 'Startup School: Prompt to Prototype', issuer: 'Google for Startups', type: 'course', isFeatured: true },
  { title: '5-Day AI Agents Intensive Course', issuer: 'Kaggle & Google', type: 'course', isFeatured: true },
  { title: 'CCNA 1, 2 & 3', issuer: 'Cisco', type: 'certification', isFeatured: true },
  
  { title: 'Introduction to Cybersecurity', issuer: 'Cisco', type: 'course', isFeatured: false },
  { title: 'Introduction to Modern AI', issuer: 'Cisco', type: 'course', isFeatured: false },
  { title: 'Apply AI: Analyze Customer Reviews', issuer: 'Cisco', type: 'course', isFeatured: false },
  { title: 'Introduction to Data Science', issuer: 'Cisco', type: 'course', isFeatured: false },
  { title: 'Python Essentials 1', issuer: 'Cisco', type: 'course', isFeatured: false },
  { title: 'SQL and Relational Databases 101', issuer: 'IBM', type: 'course', isFeatured: false },
  { title: 'Cybersecurity Analyst Job Simulation', issuer: 'TATA / Forage', type: 'simulation', isFeatured: false },
  { title: 'Advanced Software Engineering Job Simulation', issuer: 'Walmart / Forage', type: 'simulation', isFeatured: false },
  { title: 'Solutions Architecture Job Simulation', issuer: 'AWS / Forage', type: 'simulation', isFeatured: false },
  { title: 'Developer and Technology Job Simulation', issuer: 'Accenture / Forage', type: 'simulation', isFeatured: false },
  { title: 'Front-End Software Engineering Job Simulation', issuer: 'Skyscanner / Forage', type: 'simulation', isFeatured: false },
  { title: 'Software Engineering Job Simulation', issuer: 'Electronic Arts / Forage', type: 'simulation', isFeatured: false },
  { title: 'Technology Job Simulation', issuer: 'Deloitte / Forage', type: 'simulation', isFeatured: false },
]
