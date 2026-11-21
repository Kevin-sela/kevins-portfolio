"use client";

import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";

const caseStudies = [
  {
    category: "Product · Web + Android",
    title: "Asiewie",
    subtitle: "Funeral services marketplace",
    image: "/images/projects/asiewie/asiewie-desktop.webp",
    imageAlt: "Asiewie homepage listing trusted funeral service providers",
    fit: "cover",
    href: "https://asiewie.com/",
    problem: "Families arranging funerals in Ghana find providers by word of mouth and share arrangements over scattered chats.",
    approach: "Built a provider directory grouped by service and region, funeral arrangement posts, and direct messaging, on web and Android.",
    outcomes: ["Provider search by region", "Funeral arrangement posts", "Live on web + Google Play"],
  },
  {
    category: "Backend · Cloud",
    title: "Relitix",
    subtitle: "Real-time brokerage analytics APIs",
    image: "/images/projects/relitix/relitix-desktop.webp",
    imageAlt: "Relitix brokerage performance platform homepage",
    fit: "cover",
    href: "https://relitix.com/",
    problem: "Analytics workflows needed reliable APIs, real-time data movement, and predictable cloud cost.",
    approach: "Designed REST microservices and AWS service boundaries, then optimised Cython hot paths.",
    outcomes: ["10k+ requests a day", "~30% lower AWS cost", "2× Python throughput"],
  },
  {
    category: "Mobile · Community",
    title: "Yanioba",
    subtitle: "Community road-safety reporting",
    image: "/WhatsApp%20Image%202026-06-29%20at%204.14.50%20PM%20(1).jpeg",
    imageAlt: "Yanioba mobile incident map and active rescue report",
    fit: "contain",
    href: "https://www.yanioba.com/",
    problem: "Road incident reporting needed faster community feedback and visible alert flows.",
    approach: "Shipped mobile-first reporting, live incident updates, and an end-to-end road-safety flow.",
    outcomes: ["Mobile-first reporting", "Live incident updates", "Community alerts"],
  },
] as const;

/**
 * Sticky scroll reveal (idea from Aceternity): the write-ups scroll on the
 * left while one pinned frame on the right cross-fades to the study in view.
 * On narrow screens each study shows its own image inline instead.
 */
export function CaseStudies() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="case-studies" className="section">
      <div className="container">
        <SectionHeading eyebrow="Case studies" title="From product need to shipped system" />
        <p className="section-lede">
          The problem, the engineering decisions, and what changed. Scroll through three of them.
        </p>

        <div className="cases">
          <div className="cases-steps">
            {caseStudies.map((c, i) => (
              <article
                key={c.title}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                data-index={i}
                className={`case${active === i ? " is-active" : ""}`}
              >
                <div className={`case-inline-shot${c.fit === "contain" ? " is-contain" : ""}`}>
                  <Image src={c.image} alt={c.imageAlt} fill sizes="100vw" quality={90} />
                </div>
                <p className="case-cat">
                  <span>{String(i + 1).padStart(2, "0")}</span> {c.category}
                </p>
                <h3 className="case-title">
                  {c.title} <span>{c.subtitle}</span>
                </h3>
                <dl className="case-steps">
                  <div>
                    <dt>Challenge</dt>
                    <dd>{c.problem}</dd>
                  </div>
                  <div>
                    <dt>Approach</dt>
                    <dd>{c.approach}</dd>
                  </div>
                </dl>
                <ul className="case-outcomes" aria-label="Outcomes">
                  {c.outcomes.map((o) => (
                    <li key={o}>
                      <Check aria-hidden="true" />
                      {o}
                    </li>
                  ))}
                </ul>
                <a href={c.href} target="_blank" rel="noreferrer" className="text-link inline-flex">
                  Visit {c.title} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>

          <div className="cases-stage" aria-hidden="true">
            <div className="cases-frame">
              {caseStudies.map((c, i) => (
                <div key={c.title} className={`cases-shot${active === i ? " is-active" : ""}${c.fit === "contain" ? " is-contain" : ""}`}>
                  <Image src={c.image} alt="" fill sizes="(min-width: 1200px) 420px, 100vw" quality={90} />
                </div>
              ))}
              <div className="cases-progress">
                {caseStudies.map((c, i) => (
                  <span key={c.title} className={active === i ? "is-active" : undefined} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
