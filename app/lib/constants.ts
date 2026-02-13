import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Palette,
  Gauge,
  Smartphone,
  Github,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";

/* ─── Navigation ─── */
export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/* ─── Services ─── */
export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "From frontend interactions to backend APIs, I build complete web solutions. Modern stacks, scalable architecture, and production-ready code.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps with React Native and Flutter. Native-feel experiences, smooth animations, and optimized performance across iOS and Android.",
  },
  {
    icon: Palette,
    title: "UI/UX & Frontend",
    description:
      "Design is more than looks — it's about clarity and connection. Clean, responsive interfaces that feel intuitive across all devices.",
  },
  {
    icon: Gauge,
    title: "Performance & Optimization",
    description:
      "Building for scale, speed, and stability. I design systems that power insights and apply core CS principles to deliver fast, reliable apps.",
  },
];

/* ─── Projects ─── */
export interface Project {
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Modern Marketing Website",
    subtitle: "NURA",
    category: "Development",
    year: "2025",
    description:
      "A sleek, conversion-focused marketing site with dynamic animations, responsive layout, and modern design system.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    liveUrl: "#", // TODO: Replace with actual URL
    githubUrl: "#", // TODO: Replace with actual URL
  },
  {
    title: "Full-Stack Recruitment Platform",
    subtitle: "Job Portal",
    category: "Development",
    year: "2025",
    description:
      "End-to-end recruitment platform with job listings, applicant tracking, and role-based dashboards.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "#", // TODO: Replace with actual URL
    githubUrl: "#", // TODO: Replace with actual URL
  },
  {
    title: "SAAS Productivity Platform",
    subtitle: "Productivity SAAS",
    category: "Development",
    year: "2025",
    description:
      "Comprehensive SaaS app for task management, team collaboration, and analytics dashboards.",
    tech: ["React", "TypeScript", "Firebase", "TailwindCSS"],
    liveUrl: "#", // TODO: Replace with actual URL
    githubUrl: "#", // TODO: Replace with actual URL
  },
  {
    title: "ML Recommendation Engine",
    subtitle: "CineRec",
    category: "ML / Development",
    year: "2025",
    description:
      "Machine learning-powered movie recommendation system with collaborative filtering and content-based algorithms.",
    tech: ["Python", "Flask", "Scikit-learn", "React"],
    liveUrl: "#", // TODO: Replace with actual URL
    githubUrl: "#", // TODO: Replace with actual URL
  },
];

/* ─── Skills ─── */
export interface SkillCategory {
  title: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages & Tools",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "SQL",
      "C++",
      "Java",
      "Dart",
      "Git",
      "Docker",
      "Postman",
      "Firebase",
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Flutter",
      "Node.js",
      "Express.js",
      "NestJS",
      "TailwindCSS",
      "Framer Motion",
      "GSAP",
      "Flask",
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      "DSA",
      "System Design",
      "OOP",
      "DBMS",
      "REST APIs",
      "WebSockets",
      "CI/CD",
      "Responsive Design",
      "UI/UX Principles",
      "Mobile App Architecture",
    ],
  },
];

/* ─── Social Links ─── */
export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const SOCIALS: SocialLink[] = [
  { icon: Github, href: "https://github.com/", label: "GitHub" }, // TODO: Replace with actual URL
  { icon: Linkedin, href: "https://linkedin.com/in/", label: "LinkedIn" }, // TODO: Replace with actual URL
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" }, // TODO: Replace with actual URL
  { icon: Mail, href: "mailto:your@email.com", label: "Email" }, // TODO: Replace with actual email
];

/* ─── About Stats ─── */
export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Technologies" },
  { value: "2+", label: "Years Coding" },
];

/* ─── Marquee ─── */
export const MARQUEE_WORDS = [
  "DEVELOPER",
  "DESIGNER",
  "CREATOR",
  "ENGINEER",
  "PROBLEM SOLVER",
];

/* ─── Personal Info ─── */
export const PERSONAL = {
  name: "Ansh Jadhav",
  initials: "AJ",
  role: "Full Stack Developer",
  tagline:
    "Full Stack Developer crafting beautiful, scalable web experiences with modern technologies.",
} as const;
