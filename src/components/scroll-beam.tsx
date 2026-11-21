"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * An <ol> whose `--beam` CSS variable (0 → 1) tracks how far the reader has
 * scrolled through it. Only runs while the list is near the viewport, and
 * writes one custom property per frame; the beam itself is a scaled
 * pseudo-element, so it never triggers layout.
 */
export function ScrollBeam({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--beam", "1");
      return;
    }

    let frame = 0;
    let active = false;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const anchor = window.innerHeight * 0.55;
      const p = Math.min(1, Math.max(0, (anchor - r.top) / r.height));
      el.style.setProperty("--beam", p.toFixed(3));
    };
    const onScroll = () => {
      if (active && !frame) frame = requestAnimationFrame(update);
    };
    const io = new IntersectionObserver(([entry]) => {
      active = entry.isIntersecting;
      if (active) update();
    }, { rootMargin: "20% 0px" });

    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <ol ref={ref} className={className}>
      {children}
    </ol>
  );
}
