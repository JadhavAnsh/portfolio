import AnimatedSection from "./AnimatedSection";
import { STATS, PERSONAL } from "../lib/constants";

export default function About() {
  return (
    <section id="about" className="section" aria-label="About Me">
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
            <p className="text-secondary leading-relaxed mb-6">
              I&apos;m a {PERSONAL.role} and Computer Engineering student
              passionate about crafting web applications that balance aesthetics
              with functionality. I believe great software starts with
              understanding the user and ends with an experience that feels
              effortless.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p className="text-secondary leading-relaxed mb-14">
              From responsive frontends to robust backend systems, I bring ideas
              to life with clean code, modern architectures, and an eye for
              detail. When I&apos;m not coding, I&apos;m exploring new
              frameworks, contributing to open source, and constantly learning.
            </p>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={0.4}>
            <dl className="grid grid-cols-3 gap-4 sm:gap-6">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs text-muted uppercase tracking-wider order-2 mt-1">
                    {stat.label}
                  </dt>
                  <dd className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 font-display order-1">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>
        </div>

        {/* Right: Visual Element */}
        <AnimatedSection delay={0.3} direction="right">
          <div className="relative" aria-hidden="true">
            {/* Decorative gradient card */}
            <div className="aspect-square rounded-3xl overflow-hidden relative about-card-bg">
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-[0.04] about-grid" />

              {/* Inner glow */}
              <div className="absolute inset-0 about-inner-glow" />

              {/* Code-style content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-accent opacity-15 font-display">
                    {PERSONAL.initials}
                  </div>
                  <div className="text-sm text-muted mt-4 font-mono">
                    &lt;fullstack /&gt;
                  </div>
                </div>
              </div>

              {/* Border */}
              <div className="absolute inset-0 rounded-3xl border border-border" />
            </div>

            {/* Floating accent dots */}
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-accent opacity-40 blur-sm" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-accent opacity-20 blur-md" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
