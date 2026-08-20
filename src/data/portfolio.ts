import type { LucideIcon } from "lucide-react";
import {
  Code2,
  BarChart3,
  Database,
  LineChart,
  Brain,
  MessagesSquare,
  Users,
  Compass,
  Lightbulb,
  Clock,
  Shuffle,
  Zap,
  Puzzle,
  ShieldCheck,
  Sun,
  GraduationCap,
  Music,
  Plane,
  Dumbbell,
  Heart,
  Sparkles,
  Mic,
  Smile,
  UserRoundCheck,
} from "lucide-react";

export const profile = {
  name: "Aditya Dubey",
  title: "B.Sc. Computer Science Student & Aspiring Data & Technology Professional",
  location: "Pune, Maharashtra, India",
  institution: "MIT ACSC, Pune",
  graduation: "2028",
  status: "Open to Opportunities",
  photo: "aditya-portfolio.png",
  intro:
    "I'm a B.Sc. Computer Science student at MIT ACSC, Pune, passionate about programming, data analytics, data science, and technology. I enjoy building practical projects, learning new skills, and solving problems through technology.",
};

/** Add real URLs here to activate the matching buttons. */
export const socialLinks: { email?: string; linkedin?: string; github?: string; resume?: string } = {};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "goals", label: "Goals" },
  { id: "contact", label: "Contact" },
];

export const quickFacts = [
  { label: "Education", value: "B.Sc. Computer Science" },
  { label: "Institution", value: "MIT ACSC, Pune" },
  { label: "Graduation", value: "2028" },
  { label: "Focus", value: "Data & Technology" },
  { label: "Status", value: "Open to Opportunities" },
];

export const aboutParagraphs = [
  "I am Aditya Dubey, a B.Sc. Computer Science student at MIT ACSC, Pune. I am passionate about programming, data science, and technology. I enjoy learning new skills, working on practical projects, and improving my problem-solving abilities.",
  "I am currently building my technical knowledge through academic projects, internships, online training, virtual programs, and self-learning. My interests include Python programming, data analytics, SQL and database management, data visualization, machine learning fundamentals, and software development.",
  "My goal is to gain practical industry experience, contribute to real-world projects, and continuously grow as a technology professional.",
];

export const education = {
  degree: "B.Sc. in Computer Science",
  institution: "MIT ACSC, Pune",
  graduation: "Expected Graduation: 2028",
  description:
    "Building a strong foundation in computer science, programming, databases, data analytics, software development, and emerging technologies.",
  icon: GraduationCap,
};

export const skillGroups: { category: string; items: string[] }[] = [
  { category: "Programming", items: ["Python", "C++", "C"] },
  { category: "Database", items: ["SQL", "DBMS"] },
  {
    category: "Data",
    items: [
      "Data Analytics",
      "Data Cleaning",
      "Data Visualization",
      "Excel",
      "Data Science Fundamentals",
    ],
  },
  {
    category: "Machine Learning",
    items: ["Basic Machine Learning", "Scikit-learn", "TF-IDF", "Naive Bayes"],
  },
  { category: "Tools", items: ["Pandas", "Jupyter Notebook", "VS Code"] },
  {
    category: "Core",
    items: ["Problem Solving", "Object-Oriented Programming", "Basic Data Structures"],
  },
];

export const expertise: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Programming",
    description: "Developing programming skills using Python, C++, and C.",
    icon: Code2,
  },
  {
    title: "Data Analytics",
    description: "Analyzing, cleaning, and interpreting datasets to extract useful insights.",
    icon: BarChart3,
  },
  {
    title: "Database Management",
    description: "Working with SQL, relational databases, joins, constraints, and database concepts.",
    icon: Database,
  },
  {
    title: "Data Visualization",
    description: "Presenting information through clear and meaningful visualizations.",
    icon: LineChart,
  },
  {
    title: "Machine Learning",
    description: "Exploring fundamental ML concepts and implementing basic classification models.",
    icon: Brain,
  },
];

export const projects: {
  title: string;
  description: string;
  tech: string[];
  concepts: string[];
  github?: string;
  demo?: string;
}[] = [
  {
    title: "Spam Email Classifier",
    description:
      "Developed a basic machine-learning model to classify emails as spam or not spam using text-processing and classification techniques.",
    tech: ["Python", "Pandas", "Scikit-learn", "TF-IDF", "Naive Bayes"],
    concepts: [
      "Text processing",
      "Feature extraction",
      "TF-IDF",
      "Classification",
      "Machine Learning",
    ],
  },
];

export const experience: { title: string; kind: string; tools: string[]; description: string }[] = [
  {
    title: "Data Analytics Virtual Internship",
    kind: "Virtual Internship",
    tools: ["Python", "Excel", "Data Analysis", "Data Visualization"],
    description:
      "Gained practical experience in data analysis, data cleaning, visualization, and extracting useful insights from datasets.",
  },
  {
    title: "Python Programming Internship",
    kind: "Internship",
    tools: ["Python", "Jupyter Notebook", "VS Code"],
    description:
      "Worked on Python programming concepts, functions, modules, packages, and basic problem-solving projects.",
  },
  {
    title: "C++ Training / Boot Camp",
    kind: "Training",
    tools: ["C++", "OOP", "Data Structures"],
    description:
      "Learned object-oriented programming concepts, classes, objects, constructors, destructors, and basic data structures.",
  },
  {
    title: "DBMS Training / Boot Camp",
    kind: "Training",
    tools: ["SQL", "DBMS"],
    description:
      "Learned database concepts, table creation, SQL queries, joins, constraints, and basic database management.",
  },
  {
    title: "Tata Virtual Program / Training",
    kind: "Virtual Program",
    tools: ["Business Concepts", "Digital Tools"],
    description:
      "Completed a virtual learning program focused on business-related problem solving and professional skills.",
  },
];

export const certifications: { name: string; category: string; url?: string }[] = [
  { name: "C Programming", category: "Programming" },
  { name: "C++", category: "Programming" },
  { name: "Python", category: "Programming" },
  { name: "DBMS", category: "Database" },
  { name: "Data Analytics", category: "Data" },
  { name: "Virtual Internship Certificates", category: "Internship" },
  { name: "Relevant Training Certificates", category: "Training" },
];

export const roadmap = [
  {
    step: "Learn",
    description: "Build strong foundations in programming, databases, analytics, and data science.",
  },
  { step: "Build", description: "Create practical projects and solve real-world problems." },
  { step: "Apply", description: "Gain internships and industry experience." },
  { step: "Grow", description: "Develop into a skilled Data/Technology professional." },
];

export const careerInterests = [
  "Data Analytics",
  "Data Science",
  "Software Development",
  "Machine Learning",
  "Python",
  "SQL",
  "Data Visualization",
];

export const strengths: { name: string; line: string; icon: LucideIcon }[] = [
  { name: "Communication", line: "Sharing ideas clearly with teams and mentors.", icon: MessagesSquare },
  { name: "Teamwork", line: "Collaborating well on shared goals and projects.", icon: Users },
  { name: "Leadership", line: "Taking initiative and guiding work forward.", icon: Compass },
  { name: "Creativity", line: "Looking for fresh angles on familiar problems.", icon: Lightbulb },
  { name: "Time Management", line: "Balancing studies, training, and projects.", icon: Clock },
  { name: "Adaptability", line: "Comfortable with new tools and changing needs.", icon: Shuffle },
  { name: "Quick Learning", line: "Picking up new concepts and applying them fast.", icon: Zap },
  { name: "Problem Solving", line: "Breaking problems into workable steps.", icon: Puzzle },
  { name: "Responsibility", line: "Owning tasks through to completion.", icon: ShieldCheck },
  { name: "Positive Attitude", line: "Staying constructive when work gets hard.", icon: Sun },
  { name: "Continuous Learning", line: "Always adding to my technical toolkit.", icon: GraduationCap },
];

export const hobbies: { name: string; icon: LucideIcon }[] = [
  { name: "Playing sports", icon: Dumbbell },
  { name: "Listening to music", icon: Music },
  { name: "Exploring new places", icon: Plane },
  { name: "Learning new skills", icon: Sparkles },
  { name: "Spending time with family and friends", icon: Heart },
  { name: "Creativity", icon: Lightbulb },
  { name: "Communication development", icon: Mic },
  { name: "Confidence building", icon: Smile },
  { name: "Personality development", icon: UserRoundCheck },
];