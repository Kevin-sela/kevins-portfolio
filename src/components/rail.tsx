"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, FileDown, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useLenis } from "lenis/react";
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

const isTyping = (el: EventTarget | null) => {
  const t = el as HTMLElement | null;
  return !!t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName));
};

export function Rail() {
  const active = useActiveSection();
  const lenis = useLenis();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const activeIndex = Math.max(0, nav.findIndex((n) => n.id === active));

  const goTo = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      // Sections carry scroll-margin-top (clears the mobile bar), which both
      // Lenis and native scrolling respect, so no extra offset is needed.
      if (lenis) lenis.scrollTo(el);
      else el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [lenis]
  );

  // Number keys 1–6 jump to sections (desktop keyboard shortcut).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || isTyping(e.target)) return;
      const n = Number(e.key);
      if (Number.isInteger(n) && n >= 1 && n <= nav.length) {
        e.preventDefault();
        goTo(nav[n - 1].id);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo]);

  // Mobile menu: lock scroll, close on Escape, move focus in and back out.
  useEffect(() => {
    if (!menuOpen) return;
    const root = document.documentElement;
    root.classList.add("menu-open");
    lenis?.stop();
    const first = menuRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
      if (e.key === "Tab" && menuRef.current) {
        const items = [...menuRef.current.querySelectorAll<HTMLElement>("a, button")];
        const i = items.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey && i <= 0) {
          e.preventDefault();
          items[items.length - 1]?.focus();
        } else if (!e.shiftKey && i === items.length - 1) {
          e.preventDefault();
          items[0]?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    const toggle = toggleRef.current;
    return () => {
      root.classList.remove("menu-open");
      lenis?.start();
      window.removeEventListener("keydown", onKey);
      toggle?.focus();
    };
  }, [menuOpen, lenis]);

  const onMenuLink = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    // wait one frame so scrolling is unlocked before we move
    requestAnimationFrame(() => goTo(id));
  };

  return (
    <>
      {/* Mobile: sticky bar with a contact shortcut and a full-screen menu */}
      <div className="mbar">
        <a href="#top" className="mbar-name">
          Kelvin Ofori<span>.</span>
        </a>
        <span className="mbar-current" aria-hidden="true">
          <span>{String(activeIndex + 1).padStart(2, "0")}</span> {nav[activeIndex]?.label}
        </span>
        <a href="#contact" className="mbar-cta" onClick={(e) => onMenuLink(e, "contact")}>
          Contact
        </a>
        <button
          ref={toggleRef}
          type="button"
          className="mbar-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mmenu${menuOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!menuOpen}
        data-lenis-prevent
        onClick={(e) => {
          if (e.target === e.currentTarget) setMenuOpen(false);
        }}
      >
        <nav aria-label="Sections">
          <ol className="mmenu-list">
            {nav.map((n, i) => (
              <li key={n.id} style={{ "--i": i } as React.CSSProperties}>
                <a
                  href={`#${n.id}`}
                  className={active === n.id ? "is-active" : undefined}
                  aria-current={active === n.id ? "true" : undefined}
                  onClick={(e) => onMenuLink(e, n.id)}
                >
                  <span className="mmenu-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="mmenu-label">{n.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="mmenu-foot">
          <a href="/resume/Kelvin_Ofori_Software_Engineer_Resume.pdf" download className="rail-btn rail-btn--solid">
            Résumé <FileDown className="h-4 w-4" aria-hidden="true" />
          </a>
          <ul className="rail-socials">
            {links.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label} title={label}>
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mmenu-mail">kofori787@gmail.com</p>
        </div>
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
                  <a
                    href={`#${n.id}`}
                    className={active === n.id ? "is-active" : undefined}
                    aria-current={active === n.id ? "true" : undefined}
                    aria-keyshortcuts={String(i + 1)}
                    onClick={(e) => {
                      e.preventDefault();
                      goTo(n.id);
                    }}
                  >
                    <span className="rail-nav-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="rail-nav-line" aria-hidden="true">
                      <span className="rail-nav-fill" />
                    </span>
                    <span className="rail-nav-label">{n.label}</span>
                    <kbd className="rail-nav-key">{i + 1}</kbd>
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
