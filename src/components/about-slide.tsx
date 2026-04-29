"use client";

import { person, skills } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { CinematicFrame } from "@/components/cinematic-frame";

function pickSkills(limit = 18) {
  const items: string[] = [];
  for (const group of skills) for (const item of group.items) items.push(item);
  return Array.from(new Set(items)).slice(0, limit);
}

export function AboutSlide() {
  const pills = pickSkills(20);

  return (
    <CinematicFrame variant="ember2" nextHref="#projects">
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-10 left-0 right-0 select-none text-[clamp(64px,9vw,140px)] font-semibold tracking-[-0.07em] text-fg/10"
        >
          about
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr,0.95fr]">
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                About
              </p>
            </Reveal>
            <Reveal delay={0.04}>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Minimal, futuristic, high-end — with motion that sells the story.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                I’m a full-stack engineer with a designer’s eye. I obsess over pacing,
                spacing, and performance so every scroll feels like a scene change.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  { title: "Scroll reveals", body: "Fade + lift, consistent timing across every section." },
                  { title: "Parallax depth", body: "Background drifts slower to create cinematic layers." },
                  { title: "Premium hover", body: "Soft lift, glow, and subtle text reveals." },
                  { title: "Clean UI", body: "Everything is minimal, bold, and whitespace-driven." }
                ].map((c) => (
                  <div
                    key={c.title}
                    className="rounded-2xl border border-border/70 bg-bg/35 p-5 shadow-glow backdrop-blur"
                  >
                    <div className="text-sm font-semibold">{c.title}</div>
                    <div className="mt-2 text-sm text-muted">{c.body}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border/70 bg-bg/25 p-6 shadow-glow backdrop-blur">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                      Skills
                    </div>
                    <div className="mt-2 text-lg font-semibold">Toolkit</div>
                  </div>
                  <div className="hidden text-sm text-muted sm:block">{person.location}</div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {pills.map((p) => (
                    <span
                      key={p}
                      className="rounded-full border border-border/70 bg-bg/35 px-3 py-1.5 text-xs text-muted backdrop-blur transition hover:border-accent-2/40 hover:text-fg"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-border/70 bg-bg/35 p-5 text-sm text-muted backdrop-blur">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    Philosophy
                  </div>
                  <p className="mt-3 leading-relaxed">
                    Subtle motion everywhere. No “big animations” — just consistent, smooth,
                    ease-out transitions that make the UI feel alive.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </CinematicFrame>
  );
}
