"use client";

import { useEffect } from "react";

/**
 * One shared IntersectionObserver for every `[data-reveal]` element.
 * Elements get `.is-visible` once and are then unobserved, so the cost
 * after the first pass is zero. Hidden-until-revealed styles only apply
 * once `html.js-reveal` is set, so content stays visible without JS.
 */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    const observe = () =>
      document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((el) => io.observe(el));

    root.classList.add("js-reveal");
    observe();
    // Catch anything mounted slightly later (lazy client components).
    const late = window.setTimeout(observe, 1200);

    return () => {
      window.clearTimeout(late);
      io.disconnect();
    };
  }, []);

  return null;
}
