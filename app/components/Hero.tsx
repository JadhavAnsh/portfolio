"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const nameChars = "ANSH JADHAV".split("");

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.3,
    },
  },
};

const charVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    filter: "blur(12px)",
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 1.1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Gradient Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.08) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
        {/* Name */}
        <motion.h1
          className="text-[clamp(2.5rem,10vw,9rem)] font-extrabold leading-[0.9] tracking-tighter mb-10"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            perspective: "600px",
          }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {nameChars.map((char, i) => {
            const isFirstName = i < 4;
            const isLastName = i >= 5;
            return (
              <motion.span
                key={i}
                variants={charVariants}
                className={`inline-block ${char === " " ? "w-[0.25em]" : ""} ${
                  isFirstName ? "text-gradient" : ""
                }`}
                style={{
                  color: isLastName ? "var(--text-primary)" : undefined,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            );
          })}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-(--text-secondary) max-w-md mx-auto mb-14 leading-relaxed"
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          Full Stack Developer crafting{" "}
          <span className="text-(--accent) font-medium">beautiful</span>,{" "}
          <span className="text-(--text-primary) font-medium">scalable</span>{" "}
          web experiences with modern technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
        >
          <a href="#works" className="btn-primary">
            View Projects
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </a>
          <a href="#contact" className="btn-outline">
            <MessageCircle size={16} />
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-(--text-muted) flex items-start justify-center p-1"
        >
          <motion.div className="w-1 h-2 rounded-full bg-(--accent)" />
        </motion.div>
      </motion.div>
    </section>
  );
}
