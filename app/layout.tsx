import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { getSiteUrl } from "./lib/site";
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
  metadataBase: new URL(getSiteUrl()),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
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
  applicationName: "Ansh Jadhav",
  authors: [{ name: "Ansh Jadhav", url: getSiteUrl() }],
  creator: "Ansh Jadhav",
  openGraph: {
    title: "Ansh Jadhav — Full Stack Developer",
    description:
      "Full-stack developer crafting beautiful, scalable web applications.",
    type: "website",
    url: getSiteUrl(),
    siteName: "Ansh Jadhav",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ansh Jadhav — Full Stack Developer",
    description:
      "Full-stack developer crafting beautiful, scalable web applications.",
  },
  other: {
    "theme-color": "#ffffff",
  },
};

const siteUrl = getSiteUrl();
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Ansh Jadhav",
      description:
        "Portfolio of Ansh Jadhav. Full-stack developer crafting beautiful, scalable web applications.",
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Ansh Jadhav",
      url: siteUrl,
      jobTitle: "Full Stack Developer",
      sameAs: [
        "https://github.com/JadhavAnsh",
        "https://linkedin.com/in/anshjadhav",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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
