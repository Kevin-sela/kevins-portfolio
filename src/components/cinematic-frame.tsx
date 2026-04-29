"use client";

import { nav, person, socials } from "@/content/site";
import { cn } from "@/lib/cn";
import { ArrowDown } from "lucide-react";

function TopBar() {
  return (
    <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6">
      <a href="#hero" className="fancy-ring inline-flex items-center gap-3 rounded-xl px-2 py-1">
        <span className="h-2 w-2 rounded-full bg-accent-2 shadow-[0_0_0_6px_hsl(var(--accent-2)/0.14)]" />
        <div className="leading-none">
          <div className="text-sm font-semibold tracking-tight">{person.name}</div>
          <div className="mt-1 text-[11px] font-medium text-muted">{person.title}</div>
        </div>
      </a>

      <nav className="hidden items-center gap-1 sm:flex">
        {nav.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="fancy-ring rounded-xl px-3 py-2 text-xs font-semibold text-muted transition hover:text-fg"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

function SideRail() {
  return (
    <aside className="hidden w-[220px] shrink-0 px-6 pb-6 pt-2 lg:block">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
        Socials
      </div>
      <div className="mt-3 grid gap-2">
        {socials.map((s) => (
          <a
            key={`rail:${s.label}`}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="fancy-ring inline-flex items-center justify-between rounded-xl border border-border/70 bg-bg/35 px-3 py-2 text-xs text-muted backdrop-blur transition hover:text-fg"
          >
            <span className="inline-flex items-center gap-2">
              <s.icon className="h-4 w-4" />
              {s.label}
            </span>
            <span className="opacity-70">↗</span>
          </a>
        ))}
      </div>

      <div className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
        Contact me
      </div>
      <div className="mt-3 rounded-2xl border border-border/70 bg-bg/35 p-4 text-xs text-muted backdrop-blur">
        <div className="font-semibold text-fg">{person.email}</div>
        <div className="mt-2 leading-relaxed">
          Fastest response is email. I reply within 24–48 hours.
        </div>
      </div>
    </aside>
  );
}

export function CinematicFrame({
  children,
  className,
  variant = "ember",
  nextHref
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "ember" | "ember2";
  nextHref?: string;
}) {
  const frameClass = variant === "ember2" ? "frame-ember-2" : "frame-ember";

  return (
    <div className={cn("relative mx-auto w-full max-w-6xl", className)}>
      <div
        className={cn(
          "relative rounded-[28px] p-[2px] shadow-[0_35px_120px_rgba(0,0,0,0.65)]",
          frameClass
        )}
      >
        <div className="relative overflow-hidden rounded-[26px] border border-black/20 frame-inner">
          <div className="absolute inset-0 cinematic-mesh opacity-70" aria-hidden />
          <div className="absolute inset-0 vignette opacity-80" aria-hidden />

          <div className="relative">
            <TopBar />
            <div className="flex">
              <SideRail />
              <div className="flex-1 px-5 pb-8 pt-2 sm:px-6">{children}</div>
            </div>
          </div>
        </div>
      </div>

      {nextHref ? (
        <a
          href={nextHref}
          aria-label="Scroll to next section"
          className="fancy-ring absolute -bottom-6 left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-full border border-border bg-bg/55 p-3 text-muted shadow-glow backdrop-blur transition hover:text-fg"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      ) : null}
    </div>
  );
}

