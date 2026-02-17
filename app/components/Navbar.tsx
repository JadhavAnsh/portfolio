"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "../lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = useCallback(
    (href: string) => {
      setIsOpen(false);
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    },
    [setIsOpen],
  );

  return (
    <>
      {/* Outer wrapper — pushes navbar down from top */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex justify-center"
        style={{
          paddingTop: "clamp(1.5rem, 3vw, 2.5rem)",
          paddingLeft: "clamp(2rem, 8vw, 12rem)",
          paddingRight: "clamp(2rem, 8vw, 12rem)",
        }}
      >
        {/* Navbar bar */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          className={`w-full max-w-4xl rounded-full border overflow-hidden transition-all duration-500 ${
            scrolled
              ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50"
              : "bg-[#0d0d0d]/85 backdrop-blur-md border-white/8"
          }`}
          style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
        >
          {/* Inner container */}
          <div className="relative flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="text-lg md:text-xl font-bold tracking-tight text-foreground hover:text-accent transition-colors duration-300 shrink-0 font-display"
              aria-label="Go to homepage"
            >
              AJ<span className="text-accent">.</span>
            </a>

            {/* Nav Links — Absolutely Centered */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12 absolute left-1/2 -translate-x-1/2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-[15px] font-medium transition-colors duration-300 ${
                    activeSection === link.href.slice(1)
                      ? "text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                  aria-current={
                    activeSection === link.href.slice(1) ? "page" : undefined
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA — Right */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="hidden md:inline-flex items-center gap-2.5 text-sm font-medium tracking-widest uppercase rounded-full border border-white/20 bg-white/5 text-white/90 hover:bg-white/10 hover:border-white/30 transition-all duration-300 shrink-0"
              style={{ padding: "12px 24px" }}
            >
              CONTACT
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className={`text-3xl font-bold tracking-tight transition-colors font-display ${
                    activeSection === link.href.slice(1)
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`}
                  aria-current={
                    activeSection === link.href.slice(1) ? "page" : undefined
                  }
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
