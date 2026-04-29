"use client";

import { socials, person } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { ArrowRight, Copy, Mail } from "lucide-react";
import { cn } from "@/lib/cn";
import { useMemo, useState } from "react";
import { CinematicFrame } from "@/components/cinematic-frame";

export function ContactSlide() {
  const [copied, setCopied] = useState(false);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Let’s build something");
    const body = encodeURIComponent(`Hi ${person.name},\n\nI’d like to talk about...\n\n—`);
    return `mailto:${person.email}?subject=${subject}&body=${body}`;
  }, []);

  return (
    <CinematicFrame variant="ember" className="py-2">
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-6 left-0 right-0 select-none text-[clamp(64px,9vw,140px)] font-semibold tracking-[-0.07em] text-fg/10"
        >
          contact
        </div>

        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr,1fr]">
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Contact
              </p>
            </Reveal>
            <Reveal delay={0.04}>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Let’s make something that feels premium.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                Send a brief, deadline, and a couple reference links. I’ll reply with an
                approach and a timeline.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 flex flex-wrap items-center gap-2">
                <a
                  href={mailto}
                  className="fancy-ring inline-flex items-center gap-2 rounded-xl bg-fg px-4 py-2.5 text-sm font-semibold text-bg shadow-glow transition hover:opacity-90"
                >
                  Email me <Mail className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  className={cn(
                    "fancy-ring inline-flex items-center gap-2 rounded-xl border border-border/70 bg-bg/35 px-4 py-2.5 text-sm font-semibold text-fg shadow-glow backdrop-blur transition hover:border-accent-2/40",
                    copied && "border-accent-3/60"
                  )}
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(person.email);
                      setCopied(true);
                      window.setTimeout(() => setCopied(false), 1200);
                    } catch {
                      setCopied(false);
                    }
                  }}
                >
                  {copied ? "Copied" : "Copy email"} <Copy className="h-4 w-4" />
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <footer className="mt-10 border-t border-border/70 pt-6 text-sm text-muted">
                © {new Date().getFullYear()} {person.name}.
              </footer>
            </Reveal>
          </div>

          <Reveal>
            <div className="rounded-3xl border border-border/70 bg-bg/25 p-6 shadow-glow backdrop-blur sm:p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Links
              </div>
              <div className="mt-4 grid gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="fancy-ring flex items-center justify-between rounded-2xl border border-border/70 bg-bg/35 px-4 py-3 text-sm shadow-glow backdrop-blur transition hover:border-accent-2/40"
                  >
                    <span className="inline-flex items-center gap-2">
                      <s.icon className="h-4 w-4 text-muted" />
                      <span className="font-semibold">{s.label}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted" />
                  </a>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-border/70 bg-bg/35 p-5 text-sm text-muted backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  Quick brief
                </div>
                <ul className="mt-3 grid gap-2">
                  <li>• What are we building?</li>
                  <li>• Deadline and constraints</li>
                  <li>• Reference sites you love</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </CinematicFrame>
  );
}
