"use client";

import { Github, Linkedin, Instagram, Mail, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const socials = [
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: Mail, href: "mailto:your@email.com", label: "Email" },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left: Heading */}
        <div>
          <AnimatedSection>
            <span className="section-label">Get In Touch</span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2
              className="text-[clamp(2rem,5vw,4.5rem)] font-extrabold leading-none tracking-tighter mb-8"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Let&apos;s Make
              <br />
              It <span className="text-gradient">Happen</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-(--text-secondary) leading-relaxed mb-12 max-w-md">
              Have a project in mind? Let&apos;s collaborate and build something
              amazing together. I&apos;m always open to new opportunities and
              interesting conversations.
            </p>
          </AnimatedSection>

          {/* Social Links */}
          <AnimatedSection delay={0.3}>
            <div className="flex gap-3 sm:gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-(--border) flex items-center justify-center text-(--text-secondary) hover:text-(--accent) hover:border-(--accent) hover:bg-(--accent-subtle) transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Right: Form */}
        <AnimatedSection delay={0.2} direction="right">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-(--text-muted) uppercase tracking-wider mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="input-field"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-(--text-muted) uppercase tracking-wider mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="input-field"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-xs font-medium text-(--text-muted) uppercase tracking-wider mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Project discussion"
                className="input-field"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium text-(--text-muted) uppercase tracking-wider mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project..."
                className="input-field resize-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto mt-2">
              <Send size={16} />
              Send Message
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
