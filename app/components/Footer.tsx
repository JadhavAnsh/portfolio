"use client";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-(--border)">
      {/* Giant Watermark Text */}
      <div className="relative flex items-center justify-center py-16 md:py-20">
        <div
          className="text-[clamp(4rem,15vw,14rem)] font-extrabold tracking-tighter leading-none text-transparent select-none pointer-events-none"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
          }}
        >
          ANSH JADHAV
        </div>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-(--text-muted)/60 font-mono">
          © {new Date().getFullYear()} Ansh Jadhav. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
