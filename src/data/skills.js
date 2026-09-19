import {
  Code2,
  Database,
  Brain,
  Wrench,
  Layout,
  Server,
} from "lucide-react";

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "React.js", description: "Building interactive UIs" },
      { name: "JavaScript", description: "Core web programming" },
      { name: "HTML5", description: "Semantic markup" },
      { name: "Tailwind CSS", description: "Utility-first styling" },
      { name: "Next.js", description: "Exploring React frameworks" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Python", description: "Server-side development" },
      { name: "FastAPI", description: "Modern Python APIs" },
    ],
  },
  {
    id: "programming",
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Python", description: "Primary language" },
      { name: "C", description: "Systems fundamentals" },
      { name: "C++", description: "OOP & performance" },
      { name: "JavaScript", description: "Web development" },
      { name: "SQL", description: "Data querying" },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", description: "NoSQL databases" },
      { name: "SQL", description: "Relational data" },
    ],
  },
  {
    id: "data-ai",
    title: "Data & AI",
    icon: Brain,
    skills: [
      { name: "Data Analytics", description: "Insights from data" },
      { name: "Artificial Intelligence", description: "Exploring AI concepts" },
      { name: "Machine Learning", description: "Learning ML fundamentals" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", description: "Version control" },
      { name: "GitHub", description: "Collaboration & hosting" },
      { name: "VS Code", description: "Primary editor" },
      { name: "PyCharm", description: "Python development" },
    ],
  },
];

export const learningTopics = [
  "React.js",
  "Tailwind CSS",
  "Python",
  "FastAPI",
  "Data Structures & Algorithms",
  "Data Analytics",
  "AI/ML",
];

export const journeySteps = [
  { step: 1, title: "Learn", description: "Study fundamentals and best practices" },
  { step: 2, title: "Practice", description: "Solve problems and write code daily" },
  { step: 3, title: "Build", description: "Create real projects and applications" },
  { step: 4, title: "Experiment", description: "Try new tools, patterns, and ideas" },
  { step: 5, title: "Improve", description: "Refactor, optimize, and iterate" },
  {
    step: 6,
    title: "Become a Strong Software Engineer",
    description: "Grow through consistent learning and building",
  },
];
