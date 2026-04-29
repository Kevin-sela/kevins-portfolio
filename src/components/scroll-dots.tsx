"use client";

import { nav } from "@/content/site";
import { cn } from "@/lib/cn";
import { useActiveSection } from "@/hooks/use-active-section";

export function ScrollDots() {
  const active = useActiveSection();

  return (
    <div className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 md:block">
      <div className="pointer-events-auto flex flex-col items-center gap-3 rounded-full border border-border/70 bg-bg/55 px-2 py-3 backdrop-blur">
        {nav.map((item) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-label={item.label}
              className="group relative h-3 w-3"
            >
              <span
                className={cn(
                  "absolute inset-0 rounded-full transition",
                  "bg-border/80 group-hover:bg-muted",
                  isActive && "bg-accent-2 shadow-[0_0_0_6px_hsl(var(--accent-2)/0.14)]"
                )}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}

