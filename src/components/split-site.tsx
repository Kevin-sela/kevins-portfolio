import { CaseStudies } from "@/components/case-studies";
import { Contact } from "@/components/Contact";
import { ExperienceLedger } from "@/components/experience-ledger";
import { FeedAbout } from "@/components/feed-about";
import { Projects } from "@/components/Projects";
import { Rail } from "@/components/rail";
import { ScrollReset } from "@/components/scroll-reset";
import { Skills } from "@/components/Skills";

/**
 * Split layout: a sticky identity rail on the left, a curated reading
 * column on the right. Collapses to a single column with a slim sticky
 * bar on small screens.
 */
export function SplitSite() {
  return (
    <div className="portfolio-page split">
      <ScrollReset />
      <Rail />
      <main className="feed" id="main" tabIndex={-1}>
        <FeedAbout />
        <Projects />
        <ExperienceLedger />
        <CaseStudies />
        <Skills />
        <Contact />
        <footer className="colophon">
          <p>
            Designed &amp; built by Kelvin Ofori with Next.js and Tailwind. Set in Geist and Geist Mono. The music is generated live in your browser with the Web Audio API.
          </p>
          <p>© {new Date().getFullYear()} Kelvin Ofori</p>
        </footer>
      </main>
    </div>
  );
}
