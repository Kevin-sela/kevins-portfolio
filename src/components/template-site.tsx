"use client";

import { About } from "@/components/About";
import { CodeAmbient } from "@/components/code-ambient";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { SectionTransition } from "@/components/section-transition";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";
import { TechMarquee } from "@/components/TechMarquee";
import { useEffect } from "react";

export function TemplateSite() {
  useEffect(() => {
    if (window.location.hash) return;

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    const resetToHero = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetToHero();
    window.addEventListener("pageshow", resetToHero);

    return () => {
      window.removeEventListener("pageshow", resetToHero);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  return (
    <main className="portfolio-page">
      <CodeAmbient />
      <Navbar />
      <Hero />
      <TechMarquee />
      <SectionTransition variant="burst">
        <Stats />
      </SectionTransition>
      <SectionTransition variant="tilt">
        <About />
      </SectionTransition>
      <SectionTransition variant="pull">
        <Services />
      </SectionTransition>
      <SectionTransition variant="float">
        <Skills />
      </SectionTransition>
      <SectionTransition variant="rise">
        <Experience />
      </SectionTransition>
      <SectionTransition variant="tilt">
        <Projects />
      </SectionTransition>
      <SectionTransition variant="float">
        <Contact />
      </SectionTransition>
      <SectionTransition variant="rise">
        <Footer />
      </SectionTransition>
    </main>
  );
}
