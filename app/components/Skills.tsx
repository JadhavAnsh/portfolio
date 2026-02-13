import AnimatedSection from "./AnimatedSection";
import { SKILL_CATEGORIES } from "../lib/constants";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-label="Skills">
      <AnimatedSection>
        <span className="section-label">Expertise</span>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <h2 className="section-title">
          Skills<span className="text-accent"> /</span>
        </h2>
      </AnimatedSection>

      <div className="mt-16 space-y-16">
        {SKILL_CATEGORIES.map((category, catIdx) => (
          <AnimatedSection key={category.title} delay={0.15 + catIdx * 0.1}>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted mb-8 font-display">
                {category.title}
              </h3>
              <ul
                className="flex flex-wrap gap-3 sm:gap-4"
                aria-label={`${category.title} skills`}
              >
                {category.skills.map((skill) => (
                  <li key={skill} className="skill-pill">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
