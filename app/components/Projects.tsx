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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        {PROJECTS.map((project, i) => (
          <AnimatedSection key={project.title} delay={0.15 + i * 0.08}>
            {/* Divider between cards */}
            {i > 0 && <div className="project-divider" aria-hidden="true" />}

            <article
              className="card gradient-border project-card group cursor-pointer"
              style={{ padding: "10px" }}
            >
              {/* Category + Year + Number Row */}
              <div
                className="flex items-center justify-between"
                style={{ marginBottom: "8px" }}
              >
                <div className="flex items-center gap-3">
                  <span className="project-number font-mono" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="w-px h-4 bg-border-hover"
                    aria-hidden="true"
                  />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent">
                    {project.category}
                  </span>
                  <span className="text-muted text-xs" aria-hidden="true">
                    ·
                  </span>
                  <span className="text-xs sm:text-sm text-secondary">
                    <time>{project.year}</time>
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2.5 shrink-0">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all duration-300"
                    aria-label={`View ${project.title} live`}
                  >
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all duration-300"
                    aria-label={`View ${project.title} source code`}
                  >
                    <Github size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl md:text-[1.75rem] font-bold text-foreground group-hover:text-gradient transition-all duration-300 font-display leading-tight">
                {project.title}
              </h3>

              {/* Subtitle */}
              <p
                className="text-[0.7rem] sm:text-xs uppercase tracking-[0.2em] text-muted font-medium"
                style={{ marginTop: "2px" }}
              >
                {project.subtitle}
              </p>

              {/* Description */}
              <p
                className="text-secondary text-sm leading-relaxed max-w-xl"
                style={{ marginTop: "6px", marginBottom: "8px" }}
              >
                {project.description}
              </p>

              {/* Tech Tags */}
              <ul
                className="flex flex-wrap gap-2"
                aria-label="Technologies used"
              >
                {project.tech.map((tech) => (
                  <li key={tech} className="tech-tag">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
