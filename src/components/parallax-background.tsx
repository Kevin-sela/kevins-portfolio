"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function ParallaxBackground() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const yA = useTransform(scrollY, [0, 1200], [0, -40]);
  const yB = useTransform(scrollY, [0, 1200], [0, 55]);
  const yC = useTransform(scrollY, [0, 1200], [0, -25]);
  const yD = useTransform(scrollY, [0, 1200], [0, 32]);

  if (reduceMotion) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        style={{ y: yA }}
        className="absolute -left-24 top-28 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-accent-1/10 via-accent-2/8 to-transparent blur-3xl"
      />
      <motion.div
        style={{ y: yB }}
        className="absolute -right-24 top-64 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-accent-3/10 via-accent-2/8 to-transparent blur-3xl"
      />
      <motion.div
        style={{ y: yC }}
        className="absolute left-1/2 top-[900px] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-gradient-to-r from-accent-1/8 via-accent-2/8 to-accent-3/8 blur-3xl"
      />
      <motion.div
        style={{ y: yD }}
        className="absolute left-1/2 top-[220px] h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-gradient-to-r from-accent-4/10 via-accent-2/8 to-transparent blur-3xl"
      />
    </div>
  );
}
