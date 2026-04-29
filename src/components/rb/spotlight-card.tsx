"use client";

import { cn } from "@/lib/cn";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";

export function SpotlightCard({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const bg = useMotionTemplate`radial-gradient(240px circle at ${mx}% ${my}%, hsl(var(--accent-5)/0.18), transparent 60%)`;

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border/70 bg-bg/25 shadow-glow backdrop-blur",
        "transition-transform duration-300 will-change-transform",
        "hover:-translate-y-1",
        className
      )}
      style={reduceMotion ? undefined : { backgroundImage: bg }}
      onPointerMove={(e) => {
        if (reduceMotion) return;
        if (e.pointerType === "touch") return;
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width) * 100);
        my.set(((e.clientY - r.top) / r.height) * 100);
      }}
      onPointerLeave={() => {
        if (reduceMotion) return;
        mx.set(50);
        my.set(50);
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100" />
      <div className="relative p-6 sm:p-7">{children}</div>
    </motion.div>
  );
}

