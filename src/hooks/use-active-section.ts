"use client";

import { useEffect, useMemo, useState } from "react";
import { nav } from "@/content/site";

/**
 * Tracks which section is being read.
 *
 * - A section is active once its top passes 40% of the viewport height.
 * - At the very bottom of the page the last section wins, so a short final
 *   section (Contact) still gets highlighted.
 * - Progress through the active section (0 → 1) is written to the CSS
 *   variable `--section-progress` on <html>, so the nav can draw it without
 *   React re-rendering on every scroll frame.
 * - The URL hash follows the active section (replaceState, no history spam),
 *   and is cleared at the top of the page.
 */
export function useActiveSection() {
  const ids = useMemo(() => nav.map((n) => n.id as string), []);
  const [active, setActive] = useState<string>(ids[0] ?? "about");

  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    let current = "";
    // Don't touch the URL until the visitor scrolls, so deep links like
    // /#case-studies survive the initial measurement.
    let userScrolled = false;

    const measure = () => {
      frame = 0;
      const anchor = window.innerHeight * 0.4;
      const atBottom = window.innerHeight + window.scrollY >= root.scrollHeight - 4;

      let id = ids[0];
      let progress = 0;
      for (const candidate of ids) {
        const el = document.getElementById(candidate);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= anchor) {
          id = candidate;
          progress = Math.min(1, Math.max(0, (anchor - r.top) / Math.max(1, r.height)));
        }
      }
      if (atBottom) {
        id = ids[ids.length - 1];
        progress = 1;
      }

      root.style.setProperty("--section-progress", progress.toFixed(3));

      if (id !== current) {
        current = id;
        setActive(id);
      }
      if (userScrolled && id !== hashFor()) {
        const atTop = window.scrollY < 80;
        const next = atTop ? window.location.pathname + window.location.search : `#${id}`;
        if ((atTop && window.location.hash) || (!atTop && window.location.hash !== `#${id}`)) {
          history.replaceState(history.state, "", next);
        }
      }
    };
    const hashFor = () => (window.scrollY < 80 ? "" : window.location.hash.slice(1));

    const onScroll = () => {
      userScrolled = true;
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
