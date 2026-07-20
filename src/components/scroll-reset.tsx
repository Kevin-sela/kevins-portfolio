"use client";

import { useEffect } from "react";

export function ScrollReset() {
  useEffect(() => {
    if (window.location.hash) return;

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    const resetToHero = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetToHero();
    window.addEventListener("pageshow", resetToHero);

    return () => {
      window.removeEventListener("pageshow", resetToHero);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  return null;
}
