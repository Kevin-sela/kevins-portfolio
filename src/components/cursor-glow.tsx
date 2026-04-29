"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, { stiffness: 120, damping: 26, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 120, damping: 26, mass: 0.6 });

  useEffect(() => {
    if (reduceMotion) return;

    function onMove(e: PointerEvent) {
      if (e.pointerType === "touch") return;
      x.set(e.clientX);
      y.set(e.clientY);
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduceMotion, x, y]);

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden
      id="cursor-glow"
      className="pointer-events-none fixed left-0 top-0 z-[20] h-[400px] w-[400px] rounded-full opacity-40 blur-[120px] mix-blend-screen"
      style={{ x: sx, y: sy }}
    />
  );
}
