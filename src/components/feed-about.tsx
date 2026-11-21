import Image from "next/image";
import { Briefcase, GraduationCap, MapPin, Target } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { LocalTime } from "@/components/local-time";

/**
 * About as a bento grid (layout idea from Magic UI's Bento Grid): the
 * story gets the big tile, facts a recruiter scans for get small ones.
 */
export function FeedAbout() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading eyebrow="About" title="Engineer for the boring, critical parts" />

        <div className="bento">
          <article className="tile spot tile--story" data-reveal>
            <p>
              I&rsquo;m a software engineer with <strong>7+ years</strong> of designing and shipping web platforms, APIs
              and developer tooling. Most of my work lives in the backend: <strong>.NET, Python and Node</strong>{" "}
              services, data pipelines, and the AWS / Azure infrastructure they run on.
            </p>
            <p>
              On the side I ship products for my own community in Ghana, like{" "}
              <a href="https://asiewie.com/" target="_blank" rel="noreferrer">Asiewie</a> and{" "}
              <a href="https://www.yanioba.com/" target="_blank" rel="noreferrer">Yanioba</a>. I care about systems
              that stay up, code the next engineer can read, and interfaces people don&rsquo;t have to think about.
            </p>
          </article>

          <figure className="tile tile--photo" data-reveal style={{ "--d": "80ms" } as React.CSSProperties}>
            <Image src="/images/kevs-portfolio.jpeg" alt="Kelvin Ofori" fill sizes="(max-width: 720px) 100vw, 260px" className="object-cover" />
            <figcaption>Kelvin Ofori</figcaption>
          </figure>

          <article className="tile spot" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
            <p className="tile-label"><Briefcase aria-hidden="true" /> Currently</p>
            <p className="tile-big">Backend Engineer</p>
            <p className="tile-sub">Aptiveon Technologies, building real-time APIs for Relitix. Since 2023.</p>
          </article>

          <article className="tile spot" data-reveal style={{ "--d": "160ms" } as React.CSSProperties}>
            <p className="tile-label"><MapPin aria-hidden="true" /> Based in</p>
            <p className="tile-big">Accra, <LocalTime /></p>
            <p className="tile-sub">GMT all year. Full overlap with UK and EU hours, and US East mornings.</p>
          </article>

          <article className="tile spot tile--wide" data-reveal style={{ "--d": "200ms" } as React.CSSProperties}>
            <p className="tile-label"><Target aria-hidden="true" /> Looking for</p>
            <ul className="tile-chips">
              <li>Backend engineer</li>
              <li>Full-stack engineer</li>
              <li>Cloud engineer</li>
              <li>Remote · hybrid · relocation</li>
              <li className="is-live">Available now</li>
            </ul>
          </article>

          <article className="tile spot" data-reveal style={{ "--d": "240ms" } as React.CSSProperties}>
            <p className="tile-label"><GraduationCap aria-hidden="true" /> Education</p>
            <p className="tile-big tile-big--sm">BSc Information Technology</p>
            <p className="tile-sub">Accra Institute of Technology · in progress</p>
          </article>
        </div>
      </div>
    </section>
  );
}
