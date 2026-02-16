import AnimatedSection from "./AnimatedSection";
import { SERVICES } from "../lib/constants";

export default function Services() {
  return (
    <section id="services" className="section" aria-label="Services">
      <AnimatedSection>
        <span className="section-label">What I Do</span>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <h2 className="section-title">
          Services<span className="text-accent"> /</span>
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
        {SERVICES.map((service, i) => (
          <AnimatedSection
            key={service.title}
            delay={0.15 + i * 0.1}
            className="h-full"
          >
            <div
              className="card gradient-border h-full group"
              style={{ padding: "12px" }}
            >
              <div
                className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300"
                style={{ marginBottom: "20px" }}
              >
                <service.icon
                  size={22}
                  className="text-accent group-hover:text-accent-hover transition-colors"
                  aria-hidden="true"
                />
              </div>
              <h3
                className="text-xl font-semibold text-foreground font-display"
                style={{ marginBottom: "10px" }}
              >
                {service.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
