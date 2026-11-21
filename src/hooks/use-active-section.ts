"use client";

import { useEffect, useMemo, useState } from "react";
import { nav } from "@/content/site";

/**
 * Which section is being read, for highlighting the matching nav link.
 *
 * - A section becomes active once its top passes 40% of the viewport height,
 *   so the highlight changes as a section's heading reaches the reading area.
 * - At the very bottom of the page the last section wins, so a short final
 *   section (Contact) still gets highlighted.
 * - Measured in one requestAnimationFrame per scroll; React only re-renders
 *   when the active section actually changes.
 */
export function useActiveSection() {
  const ids = useMemo(() => nav.map((n) => n.id as string), []);
  const [active, setActive] = useState<string>(ids[0] ?? "about");

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const anchor = window.innerHeight * 0.4;
      const root = document.documentElement;
      const atBottom = window.innerHeight + window.scrollY >= root.scrollHeight - 4;

      let id = ids[0];
      for (const candidate of ids) {
        const el = document.getElementById(candidate);
        if (el && el.getBoundingClientRect().top <= anchor) id = candidate;
      }
      if (atBottom) id = ids[ids.length - 1];

      setActive((prev) => (prev === id ? prev : id));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [ids]);

  return active;
}
