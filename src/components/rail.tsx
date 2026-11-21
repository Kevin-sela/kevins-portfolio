"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, FileDown, Github, Linkedin, Mail } from "lucide-react";
import { nav } from "@/content/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { NumberTicker } from "@/components/number-ticker";
import { LocalTime } from "@/components/local-time";

const metrics = [
  { value: 7, prefix: "", suffix: "+", label: "years shipping" },
  { value: 10, prefix: "", suffix: "k+", label: "API requests / day" },
  { value: 30, prefix: "−", suffix: "%", label: "AWS spend" },
] as const;

const links = [
  { label: "GitHub", href: "https://github.com/Kevin-sela", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kelvin-ofori-dev", icon: Linkedin },
  { label: "Email", href: "mailto:kofori787@gmail.com", icon: Mail },
] as const;

const openPalette = () => window.dispatchEvent(new Event("command-palette:open"));

export function Rail() {
  const active = useActiveSection();
  const stripRef = useRef<HTMLElement>(null);

  // Mobile strip: keep the highlighted link in view (scrolls the strip only,
  // never the page).
  useEffect(() => {
    const strip = stripRef.current;
    const link = strip?.querySelector<HTMLElement>("a.is-active");
    if (!strip || !link || strip.scrollWidth <= strip.clientWidth) return;
    const offset = link.getBoundingClientRect().left - strip.getBoundingClientRect().left + strip.scrollLeft;
    const target = offset - (strip.clientWidth - link.offsetWidth) / 2;
    strip.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [active]);

  return (
    <>
      {/* Mobile: slim sticky bar */}
      <div className="mbar">
        <a href="#top" className="mbar-name">
          Kelvin Ofori<span>.</span>
        </a>
        <nav className="mbar-links" aria-label="Sections" ref={stripRef}>
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={active === n.id ? "is-active" : undefined}
              aria-current={active === n.id ? "true" : undefined}
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>

      <header className="rail" id="top">
        <div className="rail-top">
          <p className="rail-loc">
            <span className="rail-status-dot" aria-hidden="true" />
            Accra, Ghana · <LocalTime /> GMT
          </p>

          <h1 className="rail-name">
            <span>Kelvin</span> <span>Ofori</span>
          </h1>
          <p className="rail-role">Backend &amp; Full-Stack Engineer</p>
          <p className="rail-pitch">
            I build reliable APIs, distributed systems and the product interfaces on top of them, with
            7+ years shipping for product teams and clients across Africa and Europe.
          </p>

          <a href="#contact" className="rail-status">
            <span className="rail-status-dot" aria-hidden="true" />
            Open to remote backend / full-stack roles
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <nav className="rail-nav" aria-label="Sections">
            <ol>
              {nav.map((n, i) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className={active === n.id ? "is-active" : undefined} aria-current={active === n.id ? "true" : undefined}>
                    <span className="rail-nav-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="rail-nav-line" aria-hidden="true" />
                    <span className="rail-nav-label">{n.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <div className="rail-bottom">
          <dl className="rail-metrics">
            {metrics.map((m) => (
              <div key={m.label}>
                <dt>{m.label}</dt>
                <dd>
                  <NumberTicker value={m.value} prefix={m.prefix} suffix={m.suffix} />
                </dd>
              </div>
            ))}
          </dl>

          <div className="rail-actions">
            <a href="/resume/Kelvin_Ofori_Software_Engineer_Resume.pdf" download className="rail-btn rail-btn--solid">
              Résumé <FileDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <button type="button" className="rail-btn rail-kbd" onClick={openPalette} aria-label="Open command menu">
              <kbd>⌘</kbd>
              <kbd>K</kbd>
            </button>
            <ul className="rail-socials">
              {links.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label} title={label}>
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
