"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Send, Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { SOCIALS } from "../lib/constants";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");
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
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSending(true);
              setError("");

              const formData = new FormData(e.target as HTMLFormElement);
              const data = {
                name: formData.get("name") as string,
                email: formData.get("email") as string,
                subject: formData.get("subject") as string,
                message: formData.get("message") as string,
                _gotcha: formData.get("_gotcha") as string,
              };

              try {
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(data),
                });

                if (!res.ok) {
                  const result = await res.json();
                  throw new Error(result.error || "Something went wrong.");
                }

                setIsSending(false);
                setIsSent(true);
                (e.target as HTMLFormElement).reset();
                setTimeout(() => setIsSent(false), 2000);
              } catch (err) {
                setIsSending(false);
                setError(
                  err instanceof Error
                    ? err.message
                    : "Failed to send message.",
                );
                setTimeout(() => setError(""), 4000);
              }
            }}
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
            {/* Honeypot for spam protection */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <button
              type="submit"
              disabled={isSending || isSent}
              className={`btn-primary w-full sm:w-auto relative overflow-hidden group transition-all duration-300 ${
                isSent ? "bg-green-500 border-green-500 text-white" : ""
              }`}
              style={{ marginTop: "6px" }}
            >
              <div className="relative flex items-center justify-center gap-2 z-10">
                <AnimatePresence mode="wait">
                  {isSent ? (
                    <motion.div
                      key="sent"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2"
                    >
                      <Check size={18} aria-hidden="true" />
                      <span>Message Sent!</span>
                    </motion.div>
                  ) : isSending ? (
                    <motion.div
                      key="sending"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2"
                    >
                      <span className="animate-pulse">Sending...</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="idle"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2"
                    >
                      <Send size={16} aria-hidden="true" />
                      <span>Send Message</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-red-500 text-sm text-center"
              >
                {error}
              </motion.p>
            )}
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
