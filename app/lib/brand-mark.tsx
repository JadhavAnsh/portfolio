import type { CSSProperties } from "react";

type BrandMarkProps = {
  size: number;
};

/** AJ avatar mark — pale circle, navy initials, green status dot. */
export function BrandMark({ size }: BrandMarkProps) {
  const circle = Math.round(size * 0.86);
  const fontSize = Math.round(size * 0.34);
  const dot = Math.max(4, Math.round(size * 0.2));
  const ring = Math.max(1, Math.round(size * 0.04));

  const circleStyle: CSSProperties = {
    width: circle,
    height: circle,
    borderRadius: "50%",
    background: "#E4EBF3",
    border: `${ring}px solid #FFFFFF`,
    boxShadow: `0 0 0 ${ring}px #E2E8F0`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    fontSize,
    fontWeight: 700,
    color: "#243047",
    letterSpacing: "-0.04em",
    fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
  };

  const dotStyle: CSSProperties = {
    position: "absolute",
    right: Math.round(circle * 0.02),
    bottom: Math.round(circle * 0.02),
    width: dot,
    height: dot,
    borderRadius: "50%",
    background: "#6B9080",
    border: `${Math.max(1, Math.round(dot * 0.18))}px solid #FFFFFF`,
  };

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#FFFFFF",
      }}
    >
      <div style={circleStyle}>
        AJ
        <div style={dotStyle} />
      </div>
    </div>
  );
}
