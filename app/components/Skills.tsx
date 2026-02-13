"use client";

import AnimatedSection from "./AnimatedSection";

const skillCategories = [
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

export default function Skills() {
  return (
    <section id="skills" className="section">
      <AnimatedSection>
        <span className="section-label">Expertise</span>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <h2 className="section-title">
          Skills<span className="text-(--accent)"> /</span>
        </h2>
      </AnimatedSection>

      <div className="mt-16 space-y-16">
        {skillCategories.map((category, catIdx) => (
          <AnimatedSection key={category.title} delay={0.15 + catIdx * 0.1}>
            <div>
              <h3
                className="text-sm font-medium uppercase tracking-wider text-(--text-muted) mb-8"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
