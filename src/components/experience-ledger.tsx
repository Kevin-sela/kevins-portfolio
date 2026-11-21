import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";

/**
 * Career timeline as a scannable ledger. Hovering one entry dims the
 * others so the reader's focus follows the pointer (pure CSS).
 */
export function ExperienceLedger() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading eyebrow="Experience" title="Where I've done the work" />
        <ol className="ledger">
          {experience.map((item, i) => (
            <li key={item.dates} className="ledger-item" data-reveal style={{ "--d": `${i * 90}ms` } as React.CSSProperties}>
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
        </ol>
        <a href="/resume/Kelvin_Ofori_org_Resume.docx" download className="text-link mt-10 inline-flex">
          Full résumé <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
