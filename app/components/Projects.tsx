"use client";

import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Modern Marketing Website",
    subtitle: "NURA",
    category: "Development",
    year: "2025",
    description:
      "A sleek, conversion-focused marketing site with dynamic animations, responsive layout, and modern design system.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Full-Stack Recruitment Platform",
    subtitle: "Job Portal",
    category: "Development",
    year: "2025",
    description:
      "End-to-end recruitment platform with job listings, applicant tracking, and role-based dashboards.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "SAAS Productivity Platform",
    subtitle: "Productivity SAAS",
    category: "Development",
    year: "2025",
    description:
      "Comprehensive SaaS app for task management, team collaboration, and analytics dashboards.",
    tech: ["React", "TypeScript", "Firebase", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "ML Recommendation Engine",
    subtitle: "CineRec",
    category: "ML / Development",
    year: "2025",
    description:
      "Machine learning-powered movie recommendation system with collaborative filtering and content-based algorithms.",
    tech: ["Python", "Flask", "Scikit-learn", "React"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="works" className="section">
      <AnimatedSection>
        <span className="section-label">Portfolio</span>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <h2 className="section-title">
          Selected Works<span className="text-(--accent)"> /</span>
        </h2>
      </AnimatedSection>

      <div className="mt-14 space-y-8">
        {projects.map((project, i) => (
          <AnimatedSection key={project.title} delay={0.15 + i * 0.08}>
            <div className="card gradient-border group cursor-pointer overflow-hidden">
              <div className="p-8 sm:p-10 md:p-12">
                {/* Top Row: Meta Info */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-medium uppercase tracking-wider text-(--accent)">
                    {project.category}
                  </span>
                  <span className="text-(--text-muted)">·</span>
                  <span className="text-xs text-(--text-muted)">
                    {project.year}
                  </span>
                </div>

                {/* Title Row */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-5">
                  <div>
                    <h3
                      className="text-xl sm:text-2xl md:text-3xl font-bold text-(--text-primary) group-hover:text-gradient transition-all duration-300"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-base sm:text-lg text-(--text-muted) mt-1 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-(--border) flex items-center justify-center text-(--text-secondary) hover:text-(--accent) hover:border-(--accent) transition-all duration-300"
                      aria-label="View live"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-(--border) flex items-center justify-center text-(--text-secondary) hover:text-(--accent) hover:border-(--accent) transition-all duration-300"
                      aria-label="View source"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-(--text-secondary) text-sm leading-relaxed mb-8 max-w-2xl">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-full bg-(--bg-secondary) border border-(--border) text-(--text-muted) group-hover:text-(--text-secondary) transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div className="h-[2px] w-0 group-hover:w-full bg-linear-to-r from-(--accent) via-(--accent-hover) to-transparent transition-all duration-700" />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
