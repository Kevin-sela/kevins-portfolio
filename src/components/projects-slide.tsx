"use client";

import { Reveal } from "@/components/reveal";
import { Projects } from "@/components/Projects";
import { CinematicFrame } from "@/components/cinematic-frame";

export function ProjectsSlide() {
  return (
    <CinematicFrame variant="ember" nextHref="#featured" className="py-2">
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-6 left-0 right-0 select-none text-[clamp(64px,9vw,140px)] font-semibold tracking-[-0.07em] text-fg/10"
        >
          projects
        </div>

        <div className="relative">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Selected work
            </p>
          </Reveal>
          <Reveal delay={0.04}>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Hover → glow. Click → spotlight.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 max-w-2xl text-pretty text-sm text-muted sm:text-base">
              Subtle lift, soft shadows, and consistent ease-out timing — the “video”
              feel without overdoing it.
            </p>
          </Reveal>

          <div className="mt-8">
            <Projects />
          </div>
        </div>
      </div>
    </CinematicFrame>
  );
}
