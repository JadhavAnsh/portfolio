import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Gauge,
  Github,
  Linkedin,
  Mail,
  Palette,
  Smartphone
} from "lucide-react";

/* ─── Navigation ─── */
export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
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
    title: "Offbeat Pravasi",
    subtitle: "Mobile App",
    category: "Development",
    year: "2025",
    description:
      "A vibrant mobile platform for exploring unique travel stories, featuring real-time data and cross-device performance.",
    tech: ["Flutter", "Dart", "Firebase", "Appwrite"],
    liveUrl: "#", // TODO: Replace with actual URL
    githubUrl: "https://github.com/const-nishant/offbeat_pravasi_v2", 
  },
  {
    title: "Syncora Application",
    subtitle: "Mobile App",
    category: "Development",
    year: "2025",
    description:
      "A decentralized social platform with crypto transactions via text and built-in Web3 wallets.",
    tech: ["Flutter", "Dart", "Firebase", "Appwrite"],
    liveUrl: "#", // TODO: Replace with actual URL
    githubUrl: "https://github.com/const-nishant/syncora_application",
  },
  {
    title: "Formata",
    subtitle: "Web App",
    category: "Development",
    year: "2026",
    description:
      "A centralized platform for secure document storage, automated verification workflows, and digital signatures.",
    tech: ["Next.js", "TypeScript", "Python", "FastAPI"],
    liveUrl: "#", // TODO: Replace with actual URL
    githubUrl: "https://github.com/JadhavAnsh/formata",
  },
  {
    title: "PR-Forge",
    subtitle: "CLI Tool",
    category: "CLI Tool",
    year: "2026",
    description:
      "A Rust CLI tool that generates standardized GitHub PR summaries in markdown format based on branch comparisons.",
    tech: ["Rust"],
    liveUrl: "#", // TODO: Replace with actual URL
    githubUrl: "https://github.com/JadhavAnsh/pr-forge",
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
  {
    icon: Github,
    href: "https://github.com/JadhavAnsh",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/anshjadhav",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:contact@anshjadhav.in",
    label: "Email",
  },
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
