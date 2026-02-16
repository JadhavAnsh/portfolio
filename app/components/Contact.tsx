"use client";

import { Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { SOCIALS } from "../lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="section" aria-label="Contact">
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "40px" }}>
        {/* Left: Heading */}
        <div>
          <AnimatedSection>
            <span className="section-label">Get In Touch</span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2
              className="text-[clamp(2rem,5vw,4.5rem)] font-extrabold leading-none tracking-tighter font-display"
              style={{ marginBottom: "24px" }}
            >
              Let&apos;s Make
              <br />
              It <span className="text-gradient">Happen</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p
              className="text-secondary leading-relaxed max-w-md"
              style={{ marginBottom: "28px" }}
            >
              Have a project in mind? Let&apos;s collaborate and build something
              amazing together. I&apos;m always open to new opportunities and
              interesting conversations.
            </p>
          </AnimatedSection>

          {/* Social Links */}
          <AnimatedSection delay={0.3}>
            <div className="flex" style={{ gap: "12px" }}>
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-border flex items-center justify-center text-secondary hover:text-accent hover:border-accent hover:bg-accent-subtle transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Right: Form */}
        <AnimatedSection delay={0.2} direction="right">
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", flexDirection: "column", gap: "18px" }}
          >
            <div
              className="grid grid-cols-1 sm:grid-cols-2"
              style={{ gap: "18px" }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-muted uppercase tracking-wider"
                  style={{ marginBottom: "6px" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-muted uppercase tracking-wider"
                  style={{ marginBottom: "6px" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  className="input-field"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-xs font-medium text-muted uppercase tracking-wider"
                style={{ marginBottom: "6px" }}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project discussion"
                className="input-field"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium text-muted uppercase tracking-wider"
                style={{ marginBottom: "6px" }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                className="input-field resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full sm:w-auto"
              style={{ marginTop: "6px" }}
            >
              <Send size={16} aria-hidden="true" />
              Send Message
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
