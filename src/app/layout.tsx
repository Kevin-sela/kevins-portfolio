import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { CursorGlow } from "@/components/cursor-glow";
import { PageMotion } from "@/components/page-motion";
import { ScrollProgress } from "@/components/scroll-progress";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { MusicPlayer } from "@/components/music-player";
import { RevealObserver } from "@/components/reveal-observer";

// Variable names kept for backwards compatibility with existing CSS references.
const inter = Instrument_Sans({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap", weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Kelvin Ofori — Backend & Full-Stack Engineer | Available for Hire",
  description:
    "Backend and full-stack software engineer with 7+ years of experience. Specialising in .NET, Python, React, AWS, and distributed systems. Open to remote engineering roles globally.",
  keywords: [
    "Backend Engineer",
    "Full-Stack Developer",
    "Software Engineer",
    "Cloud Engineer",
    "Kelvin Ofori",
    ".NET Developer",
    "React Developer",
    "AWS Engineer",
    "Python Developer",
    "Microservices",
    "Available for hire",
    "Remote software engineer",
    "Ghana developer",
  ],
  openGraph: {
    title: "Kelvin Ofori — Backend & Full-Stack Engineer",
    description:
      "7+ years building distributed systems, REST APIs, and full-stack web platforms on AWS & Azure. Open to remote engineering roles.",
    images: ["/og.svg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelvin Ofori — Backend & Full-Stack Engineer",
    description: "7+ years building distributed systems, APIs, and full-stack platforms. Open to remote roles.",
  },
  icons: [{ rel: "icon", url: "/favicon.png", type: "image/png" }],
};

export const viewport: Viewport = { themeColor: "#0e0d0b" };

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${mono.variable} font-sans`}>
        <Providers>
          <div className="relative min-h-dvh bg-bg text-fg">
            <div aria-hidden className="ambient-backdrop" />
            <CursorGlow />
            <ScrollProgress />
            <RevealObserver />
            <MusicPlayer />
            <div className="relative z-10">
              <PageMotion>{children}</PageMotion>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
