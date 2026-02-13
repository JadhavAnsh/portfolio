"use client";

import { Code2, Palette, Gauge, Smartphone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
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

export default function Services() {
  return (
    <section id="services" className="section">
      <AnimatedSection>
        <span className="section-label">What I Do</span>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <h2 className="section-title">
          Services<span className="text-(--accent)"> /</span>
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
        {services.map((service, i) => (
          <AnimatedSection key={service.title} delay={0.15 + i * 0.1}>
            <div className="card gradient-border p-8 sm:p-10 h-full group">
              <div className="w-12 h-12 rounded-xl bg-(--accent-subtle) flex items-center justify-center mb-8 group-hover:bg-(--accent)/15 transition-colors duration-300">
                <service.icon
                  size={22}
                  className="text-(--accent) group-hover:text-(--accent-hover) transition-colors"
                />
              </div>
              <h3
                className="text-xl font-semibold mb-4 text-(--text-primary)"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {service.title}
              </h3>
              <p className="text-(--text-secondary) text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
