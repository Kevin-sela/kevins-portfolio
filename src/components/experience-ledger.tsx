import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollBeam } from "@/components/scroll-beam";

/**
 * Career timeline (idea from Aceternity's Timeline): a hairline rail with a
 * gold beam that fills as you scroll, sticky dates, and hover focus where
 * the other entries dim.
 */
export function ExperienceLedger() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading eyebrow="Experience" title="Where I've done the work" />
        <ScrollBeam className="ledger">
          {experience.map((item, i) => (
            <li key={item.dates} className="ledger-item" data-reveal style={{ "--d": `${i * 90}ms` } as React.CSSProperties}>
              <span className="ledger-node" aria-hidden="true" />
              <p className="ledger-dates">{item.dates}</p>
              <div className="ledger-body">
                <h3 className="ledger-role">
                  {item.role}
                  <span> · {item.company}</span>
                </h3>
                <ul className="ledger-points">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <ul className="ledger-tech" aria-label="Technologies">
                  {item.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ScrollBeam>
        <a href="/resume/Kelvin_Ofori_Software_Engineer_Resume.pdf" download className="text-link mt-10 inline-flex">
          Full résumé <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
