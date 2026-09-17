import { ImageResponse } from "next/og";
import { BrandMark } from "./lib/brand-mark";

export const alt = "Ansh Jadhav — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <BrandMark size={200} />
        <div
          style={{
            marginTop: 32,
            fontSize: 56,
            fontWeight: 700,
            color: "#243047",
            letterSpacing: "-0.02em",
          }}
        >
          Ansh Jadhav
        </div>
        <div
          style={{
            marginTop: 12,
            fontSize: 28,
            color: "#64748b",
          }}
        >
          Full Stack Developer
        </div>
      </div>
    ),
    { ...size },
  );
}
