import { About } from "@/components/About";
import { ArticlesPreview } from "@/components/articles-preview";
import { CaseStudies } from "@/components/case-studies";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { FloatingCTA } from "@/components/floating-cta";
import { Footer } from "@/components/Footer";
import { GithubActivity } from "@/components/github-activity";
import { Hero } from "@/components/Hero";
import { HireBanner } from "@/components/hire-banner";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { ScrollReset } from "@/components/scroll-reset";
import { SectionTransition } from "@/components/section-transition";
import { SectionCTA } from "@/components/section-cta";
import { Services } from "@/components/Services";
import { SiteProof } from "@/components/site-proof";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";
import { TechMarquee } from "@/components/TechMarquee";
import { TrustLogos } from "@/components/trust-logos";

export function TemplateSite() {
  return (
    <main className="portfolio-page">
      <ScrollReset />
      <HireBanner />
      <Navbar />
      <FloatingCTA />
      <Hero />
      <TechMarquee />
      <SectionTransition variant="burst">
        <Stats />
      </SectionTransition>
      <SectionTransition variant="float">
        <TrustLogos />
      </SectionTransition>
      <SectionTransition variant="tilt">
        <About />
      </SectionTransition>
      <SectionTransition variant="pull">
        <Services />
      </SectionTransition>
      <SectionCTA label="Let's Discuss Your Backend or Full-Stack Role" />
      <SectionTransition variant="float">
        <Skills />
      </SectionTransition>
      <SectionTransition variant="rise">
        <Experience />
      </SectionTransition>
      <SectionTransition variant="tilt">
        <Projects />
      </SectionTransition>
      <SectionTransition variant="rise">
        <CaseStudies />
      </SectionTransition>
      <SectionCTA label="See How I Built This" href="#case-studies" />
      <SectionTransition variant="float">
        <SiteProof />
      </SectionTransition>
      <SectionTransition variant="tilt">
        <ArticlesPreview />
      </SectionTransition>
      <SectionTransition variant="rise">
        <GithubActivity />
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
