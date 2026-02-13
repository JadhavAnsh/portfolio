"use client";

import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left: Text Content */}
        <div>
          <AnimatedSection>
            <span className="section-label">About Me</span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="section-title">
              Building Digital
              <br />
              <span className="text-gradient">Experiences</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-(--text-secondary) leading-relaxed mb-6">
              I&apos;m a Full Stack Developer and Computer Engineering student
              passionate about crafting web applications that balance aesthetics
              with functionality. I believe great software starts with
              understanding the user and ends with an experience that feels
              effortless.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p className="text-(--text-secondary) leading-relaxed mb-14">
              From responsive frontends to robust backend systems, I bring ideas
              to life with clean code, modern architectures, and an eye for
              detail. When I&apos;m not coding, I&apos;m exploring new
              frameworks, contributing to open source, and constantly learning.
            </p>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={0.4}>
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { value: "10+", label: "Projects Built" },
                { value: "5+", label: "Technologies" },
                { value: "2+", label: "Years Coding" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-(--accent) mb-1"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-(--text-muted) uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Right: Visual Element */}
        <AnimatedSection delay={0.3} direction="right">
          <div className="relative">
            {/* Decorative gradient card */}
            <div
              className="aspect-square rounded-3xl overflow-hidden relative"
              style={{
                background:
                  "linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%)",
              }}
            >
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Inner glow */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 40%, var(--accent-glow) 0%, transparent 60%)",
                }}
              />

              {/* Code-style content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div
                    className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-(--accent) opacity-15"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    AJ
                  </div>
                  <div className="text-sm text-(--text-muted) mt-4 font-mono">
                    &lt;fullstack /&gt;
                  </div>
                </div>
              </div>

              {/* Border */}
              <div className="absolute inset-0 rounded-3xl border border-(--border)" />
            </div>

            {/* Floating accent dots */}
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-(--accent) opacity-40 blur-sm" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-(--accent) opacity-20 blur-md" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
