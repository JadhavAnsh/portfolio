import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ansh Jadhav — Full Stack Developer",
  description:
    "Portfolio of Ansh Jadhav. Full-stack developer crafting beautiful, scalable web applications with modern technologies.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Ansh Jadhav",
  ],
  openGraph: {
    title: "Ansh Jadhav — Full Stack Developer",
    description:
      "Full-stack developer crafting beautiful, scalable web applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ansh Jadhav — Full Stack Developer",
    description:
      "Full-stack developer crafting beautiful, scalable web applications.",
  },
  other: {
    "theme-color": "#8b5cf6",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
