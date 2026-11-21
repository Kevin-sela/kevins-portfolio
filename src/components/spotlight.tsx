"use client";

import { useEffect, useRef } from "react";

/**
 * Soft light that trails the pointer, plus per-card spotlights on `.spot`. It is a single fixed element moved
 * with `transform` inside requestAnimationFrame, so it stays on the
 * compositor (no repaints, no blur filter). Disabled for touch and
 * reduced-motion users.
 */
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let x = 0;
    let y = 0;
    let frame = 0;
    const render = () => {
      frame = 0;
      el.style.transform = `translate3d(${x - 350}px, ${y - 350}px, 0)`;
    };
    let lastCard: HTMLElement | null = null;
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      // Per-card spotlight (Aceternity "Card Spotlight" idea): one shared
      // listener writes the pointer position into the hovered card's CSS vars.
      const card = (e.target as HTMLElement | null)?.closest?.(".spot") as HTMLElement | null;
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${x - r.left}px`);
        card.style.setProperty("--my", `${y - r.top}px`);
      }
      if (lastCard && lastCard !== card) lastCard.style.removeProperty("--mx");
      lastCard = card;
      el.dataset.on = "true";
      if (!frame) frame = requestAnimationFrame(render);
    };
    const onLeave = () => {
      el.dataset.on = "false";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} className="spotlight" aria-hidden="true" data-on="false" />;
}
