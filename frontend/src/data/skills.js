import {
  Database,
  Brain,
  Wrench,
  Layout,
  Server,
  GraduationCap,
} from "lucide-react";

export const skillCategories = [
  {
    id: "frontend",
    title: "Web & Frontend",
    icon: Layout,
    skills: [
      { name: "Next.js & React.js", description: "Modern reactive web apps" },
      { name: "JavaScript (ES6+)", description: "Dynamic clients & asynchronous code" },
      { name: "Tailwind CSS", description: "Design systems & responsive styling" },
      { name: "HTML5 & CSS3", description: "Semantic, accessible markup" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Systems",
    icon: Server,
    skills: [
      { name: "Python", description: "Primary backend & scripting language" },
      { name: "FastAPI", description: "High-performance REST APIs" },
      { name: "C & C++", description: "Low-level fundamentals & OOP" },
      { name: "OOPS Concept", description: "Clean architectural design patterns" },
    ],
  },
  {
    id: "database",
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", description: "Relational database querying & schema" },
      { name: "SQLite", description: "Lightweight embedded storage" },
      { name: "DBMS Concepts", description: "Normalization, transactions & indexing" },
    ],
  },
  {
    id: "ai-ml",
    title: "Artificial Intelligence & Data",
    icon: Brain,
    skills: [
      { name: "AI Chatbots", description: "Conversational systems (DigiCoders)" },
      { name: "Artificial Intelligence", description: "Core search & reasoning algorithms" },
      { name: "Data Structures & Algorithms", description: "Arrays, trees, graphs, dynamic programming" },
    ],
  },
  {
    id: "tools",
    title: "Developer Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Git & Version Control", description: "Branching, PRs, and collaborative flow" },
      { name: "Linux / CLI", description: "Shell scripting & system navigation" },
      { name: "VS Code", description: "Custom tooling & efficient workflows" },
      { name: "Vercel", description: "Continuous deployment & hosting" },
    ],
  },
  {
    id: "coursework",
    title: "Core CS Coursework",
    icon: GraduationCap,
    skills: [
      { name: "Operating Systems", description: "Process scheduling, memory & concurrency" },
      { name: "Computer Science Eng.", description: "B.Tech CSE at ANDUAT Ayodhya" },
      { name: "Object Oriented Design", description: "Polymorphism, abstraction & encapsulation" },
      { name: "Hackathon Engineering", description: "Rapid prototyping & team execution" },
    ],
  },
];

export const learningTopics = [
  "Next.js App Router",
  "Tailwind CSS v4",
  "FastAPI Microservices",
  "AI Chatbot Architectures",
  "Data Structures & Algorithms",
];

export const journeySteps = [
  {
    step: 1,
    title: "Foundations & Code",
    description: "Built strong grounding in C, C++, and Python; mastered object-oriented programming and core data structures.",
  },
  {
    step: 2,
    title: "B.Tech Computer Science (ANDUAT Ayodhya)",
    description: "Enrolled in B.Tech CSE (2024–2028), maintaining a 7.636 CGPA while exploring operating systems, DBMS, and algorithms.",
  },
  {
    step: 3,
    title: "SIH Internal Hackathon Winner (SIH 2025)",
    description: "Won 1st Position in the Internal Smart India Hackathon (SIH 2025) at Mahamaya College, demonstrating technical leadership.",
  },
  {
    step: 4,
    title: "AI Chatbot Development (DigiCoders)",
    description: "Completed specialized training in AI chatbot architectures and natural language conversational workflows.",
  },
  {
    step: 5,
    title: "Production Projects (Spotify, Netflix, Web Apps)",
    description: "Engineered and deployed modern web applications with responsive design and seamless user interfaces.",
  },
];
