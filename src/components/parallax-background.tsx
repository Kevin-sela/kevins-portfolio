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
        className="absolute -left-24 top-28 h-[360px] w-[360px] rounded-full bg-gradient-to-br from-violet-500/8 via-blue-500/6 to-transparent blur-2xl"
      />
      <motion.div
        style={{ y: yB }}
        className="absolute -right-24 top-64 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-cyan-500/7 via-blue-500/6 to-transparent blur-2xl"
      />
      <motion.div
        style={{ y: yD }}
        className="absolute left-1/2 top-[220px] h-[340px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500/7 via-blue-500/6 to-transparent blur-2xl"
      />
    </div>
  );
}
