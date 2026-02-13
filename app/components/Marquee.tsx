"use client";

export default function Marquee() {
  const words = [
    "DEVELOPER",
    "DESIGNER",
    "CREATOR",
    "ENGINEER",
    "PROBLEM SOLVER",
  ];
  const repeated = [...words, ...words, ...words, ...words];

  return (
    <div className="w-full py-10 md:py-14 overflow-hidden border-y border-(--border)">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((word, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 sm:gap-6 md:gap-10 mx-2 sm:mx-3 md:mx-5"
          >
            <span
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-transparent"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                WebkitTextStroke: "1px var(--text-muted)",
              }}
            >
              {word}
            </span>
            <span className="text-(--accent) text-xl sm:text-2xl md:text-3xl">
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
