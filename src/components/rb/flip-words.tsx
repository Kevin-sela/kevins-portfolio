"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { EASE_OUT } from "@/lib/motion";

export function FlipWords({
  words,
  intervalMs = 1800
}: {
  words: string[];
  intervalMs?: number;
}) {
  const reduceMotion = useReducedMotion();
  const safeWords = useMemo(() => (words.length ? words : ["design"]), [words]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const t = window.setInterval(() => {
      setIdx((i) => (i + 1) % safeWords.length);
    }, intervalMs);
    return () => window.clearInterval(t);
  }, [intervalMs, reduceMotion, safeWords.length]);

  const word = safeWords[idx] ?? safeWords[0]!;

  return (
    <span className="relative inline-block align-baseline">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={word}
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="inline-block text-gradient"
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

