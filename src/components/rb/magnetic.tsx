"use client";

import { cn } from "@/lib/cn";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef } from "react";

export function Magnetic({
  children,
  className,
  strength = 10
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 22, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 180, damping: 22, mass: 0.5 });
  const transform = useMotionTemplate`translate3d(${sx}px, ${sy}px, 0)`;

  return (
    <motion.div
      ref={ref}
      style={reduceMotion ? undefined : { transform }}
      className={cn("will-change-transform", className)}
      onPointerMove={(e) => {
        if (reduceMotion) return;
        if (e.pointerType === "touch") return;
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        x.set(px * strength);
        y.set(py * strength);
      }}
      onPointerLeave={() => {
        if (reduceMotion) return;
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

