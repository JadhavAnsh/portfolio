import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { PROJECTS } from "../lib/constants";

export default function Projects() {
  return (
    <section id="works" className="section" aria-label="Portfolio">
      <AnimatedSection>
        <span className="section-label">Portfolio</span>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <h2 className="section-title">
          Selected Works<span className="text-accent"> /</span>
        </h2>
      </AnimatedSection>

      <div className="mt-14 space-y-8">
        {PROJECTS.map((project, i) => (
          <AnimatedSection key={project.title} delay={0.15 + i * 0.08}>
            <article className="card gradient-border group cursor-pointer overflow-hidden">
              <div className="p-8 sm:p-10 md:p-12">
                {/* Top Row: Meta Info */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">
                    {project.category}
                  </span>
                  <span className="text-muted" aria-hidden="true">
                    ·
                  </span>
                  <span className="text-xs text-muted">
                    <time>{project.year}</time>
                  </span>
                </div>

                {/* Title Row */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground group-hover:text-gradient transition-all duration-300 font-display">
                      {project.title}
                    </h3>
                    <p className="text-base sm:text-lg text-muted mt-1 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-all duration-300"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-all duration-300"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github size={16} aria-hidden="true" />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-secondary text-sm leading-relaxed mb-8 max-w-2xl">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <ul
                  className="flex flex-wrap gap-2"
                  aria-label="Technologies used"
                >
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-full bg-surface border border-border text-muted group-hover:text-secondary transition-colors"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Gradient Line */}
              <div
                className="h-[2px] w-0 group-hover:w-full bg-linear-to-r from-accent via-accent-hover to-transparent transition-all duration-700"
                aria-hidden="true"
              />
            </article>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
