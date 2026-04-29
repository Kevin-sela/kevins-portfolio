"use client";

import { nav, person, socials } from "@/content/site";
import { cn } from "@/lib/cn";
import { ArrowDown } from "lucide-react";
import { useCallback, useMemo, useRef, useState } from "react";

export function FrameShell({
  render,
  className
}: {
  render: (ctx: { activeId: string; dir: 1 | -1; goTo: (id: string) => void }) => React.ReactNode;
  className?: string;
}) {
  type SectionId = (typeof nav)[number]["id"];
  const sectionIds = useMemo(() => nav.map((n) => n.id), []);
  const [active, setActive] = useState<SectionId>((sectionIds[0] ?? "hero") as SectionId);
  const [dir, setDir] = useState<1 | -1>(1);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const transitionLockRef = useRef(false);

  const goTo = useCallback(
    (id: string) => {
      if (!sectionIds.includes(id as SectionId)) return;
      if (id === active) return;
      const from = sectionIds.indexOf(active);
      const to = sectionIds.indexOf(id as SectionId);
      setDir((to > from ? 1 : -1) as 1 | -1);
      setActive(id as SectionId);
      requestAnimationFrame(() => {
        const v = viewportRef.current;
        if (v) v.scrollTop = 0;
      });
    },
    [active, sectionIds]
  );

  return (
    <div className={cn("relative min-h-dvh w-full", className)}>
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 noise opacity-80" />
        <div className="absolute -left-40 top-32 h-[520px] w-[520px] rounded-full bg-accent-2/14 blur-3xl" />
        <div className="absolute -right-44 top-72 h-[620px] w-[620px] rounded-full bg-accent-5/10 blur-3xl" />
        <div className="absolute left-1/2 top-[65%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent-6/10 blur-3xl" />
        <div className="absolute inset-0 vignette opacity-80" />
      </div>

      <div
        className="relative z-10 min-h-dvh w-full"
        onClickCapture={(e) => {
          const target = e.target as HTMLElement | null;
          const a = target?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
          if (!a) return;
          const href = a.getAttribute("href") ?? "";
          if (!href.startsWith("#")) return;
          const id = href.slice(1);
          if (!sectionIds.includes(id as SectionId)) return;

          e.preventDefault();
          goTo(id);
        }}
      >
        <div className="relative min-h-dvh w-full">
          <div className="relative min-h-dvh w-full p-[2px] frame-ember shadow-[0_40px_150px_rgba(0,0,0,0.75)]">
            <div className="relative min-h-dvh w-full overflow-hidden border border-black/25 frame-inner">
              <div aria-hidden className="absolute inset-0 cinematic-mesh opacity-70" />

              {/* Top bar */}
              <div className="relative flex items-center justify-between gap-4 px-5 py-4 sm:px-6">
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
                      className={cn(
                        "fancy-ring rounded-xl px-3 py-2 text-xs font-semibold transition",
                        active === item.id ? "text-fg" : "text-muted hover:text-fg"
                      )}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="relative flex">
                {/* Left rail */}
                <aside className="hidden w-[240px] shrink-0 px-6 pb-7 pt-2 lg:block">
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
                        className="fancy-ring inline-flex items-center justify-between rounded-xl border border-border/70 bg-bg/30 px-3 py-2 text-xs text-muted backdrop-blur transition hover:text-fg"
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
                  <div className="mt-3 rounded-2xl border border-border/70 bg-bg/30 p-4 text-xs text-muted backdrop-blur">
                    <div className="font-semibold text-fg">{person.email}</div>
                    <div className="mt-2 leading-relaxed">
                      Got a project in mind? Send a brief + timeline.
                    </div>
                  </div>
                </aside>

                {/* Inner scroll area */}
                <div className="relative flex-1 px-5 pb-10 pt-2 sm:px-6">
                  <div
                    ref={viewportRef}
                    className={cn(
                      "frame-scroller relative h-[calc(100dvh-92px)] overflow-y-auto pr-1 scroll-smooth"
                    )}
                    onWheel={(e) => {
                      const v = viewportRef.current;
                      if (!v) return;
                      if (transitionLockRef.current) {
                        e.preventDefault();
                        return;
                      }

                      const dy = e.deltaY;
                      if (Math.abs(dy) < 18) return;

                      const atTop = v.scrollTop <= 0;
                      const atBottom = v.scrollTop + v.clientHeight >= v.scrollHeight - 2;

                      // If the current scene can scroll in the wheel direction, let it.
                      if ((dy > 0 && !atBottom) || (dy < 0 && !atTop)) return;

                      const idx = sectionIds.indexOf(active);
                      const nextIdx =
                        dy > 0
                          ? Math.min(idx + 1, sectionIds.length - 1)
                          : Math.max(idx - 1, 0);
                      const nextId = sectionIds[nextIdx];
                      if (!nextId || nextId === active) return;

                      e.preventDefault();
                      transitionLockRef.current = true;
                      goTo(nextId);
                      window.setTimeout(() => {
                        transitionLockRef.current = false;
                      }, 850);
                    }}
                  >
                    {render({ activeId: active, dir, goTo })}
                  </div>
                </div>
              </div>

              {/* Right dots (like the reference) */}
              <div className="pointer-events-none absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 md:block">
                <div className="pointer-events-auto flex flex-col items-center gap-3 rounded-full border border-border/70 bg-bg/45 px-2 py-3 backdrop-blur">
                  {nav.map((item) => {
                    const isActive = active === item.id;
                    return (
                      <a
                        key={`dot:${item.id}`}
                        href={`#${item.id}`}
                        aria-label={item.label}
                        className="group relative h-3 w-3"
                      >
                        <span
                          className={cn(
                            "absolute inset-0 rounded-full transition",
                            "bg-border/80 group-hover:bg-muted",
                            isActive &&
                              "bg-accent-2 shadow-[0_0_0_6px_hsl(var(--accent-2)/0.14)]"
                          )}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Down button (matches the reference) */}
          <a
            href="#about"
            aria-label="Scroll to next section"
            className="fancy-ring fixed bottom-6 left-1/2 z-30 inline-flex -translate-x-1/2 items-center justify-center rounded-full border border-border bg-bg/55 p-3 text-muted shadow-glow backdrop-blur transition hover:text-fg"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
