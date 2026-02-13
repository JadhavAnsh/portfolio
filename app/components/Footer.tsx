import { PERSONAL } from "../lib/constants";

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden border-t border-border"
      role="contentinfo"
    >
      {/* Giant Watermark Text */}
      <div
        className="relative flex items-center justify-center py-16 md:py-20"
        aria-hidden="true"
      >
        <div className="text-[clamp(4rem,15vw,14rem)] font-extrabold tracking-tighter leading-none text-transparent select-none pointer-events-none font-display stroke-outline-subtle">
          {PERSONAL.name.toUpperCase()}
        </div>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-muted/60 font-mono">
          © {new Date().getFullYear()} {PERSONAL.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
