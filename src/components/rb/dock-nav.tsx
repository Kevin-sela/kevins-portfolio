"use client";

import { cn } from "@/lib/cn";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

export type DockItem = { id: string; label: string };

export function DockNav({
  items,
  activeId
}: {
  items: DockItem[];
  activeId?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.15 }}
        className="pointer-events-auto rounded-full border border-border/70 bg-bg/45 p-1 shadow-glow backdrop-blur"
      >
        <div className="relative flex items-center gap-1">
          {items.map((i) => {
            const isActive = activeId === i.id;
            return (
              <a
                key={i.id}
                href={`#${i.id}`}
                className={cn(
                  "fancy-ring relative rounded-full px-4 py-2 text-xs font-semibold transition",
                  isActive ? "text-fg" : "text-muted hover:text-fg"
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId="dock-pill"
                    className="absolute inset-0 rounded-full border border-border/70 bg-bg/55"
                    transition={{ duration: 0.28, ease: EASE_OUT }}
                  />
                ) : null}
                <span className="relative z-10">{i.label}</span>
              </a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

