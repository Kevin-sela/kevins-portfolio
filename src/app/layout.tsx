import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { CursorGlow } from "@/components/cursor-glow";
import { PageMotion } from "@/components/page-motion";
import { ParallaxBackground } from "@/components/parallax-background";
import { ScrollProgress } from "@/components/scroll-progress";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Kelvin Ofori — Software Engineer",
  description:
    "Backend, full-stack, and cloud software engineer building reliable web platforms, APIs, and real-time systems.",
  openGraph: {
    title: "Kelvin Ofori — Software Engineer",
    description: "Backend, full-stack, and cloud software engineer.",
    images: ["/og.svg"],
    type: "website"
  },
  icons: [{ rel: "icon", url: "/favicon.svg" }]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <Providers>
          <div className="relative min-h-dvh bg-bg text-fg">
            <ParallaxBackground />
            <CursorGlow />
            <ScrollProgress />
            <div className="relative z-10">
              <PageMotion>{children}</PageMotion>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
