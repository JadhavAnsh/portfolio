import { MARQUEE_WORDS } from "../lib/constants";

export default function Marquee() {
  /* No need to duplicate MARQUEE_WORDS logic here, just use constants + repeat inline if needed or repeat in constants
     Actually, constants just has the base words. We need to repeat them for the marquee effect.
  */
  const repeated = [
    ...MARQUEE_WORDS,
    ...MARQUEE_WORDS,
    ...MARQUEE_WORDS,
    ...MARQUEE_WORDS,
  ];

  return (
    <div
      className="w-full py-10 md:py-14 overflow-hidden border-y border-border"
      aria-hidden="true" // Marquee is decorative
    >
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((word, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 sm:gap-6 md:gap-10 mx-2 sm:mx-3 md:mx-5"
          >
            <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-transparent font-display stroke-outline">
              {word}
            </span>
            <span className="text-accent text-xl sm:text-2xl md:text-3xl">
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
