"use client";

import { useEffect, useMemo, useState } from "react";
import { nav } from "@/content/site";

export function useActiveSection() {
  const ids = useMemo(() => nav.map((n) => n.id), []);
  const [active, setActive] = useState<string>(ids[0] ?? "projects");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.01, 0.15, 0.3]
      }
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
