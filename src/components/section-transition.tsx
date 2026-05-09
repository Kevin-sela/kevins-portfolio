"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion, Transition } from "framer-motion";
import { cn } from "@/lib/cn";

type Variant = "rise" | "tilt" | "float" | "burst" | "pull";

type Config = { hidden: any; visible: any; transition: Transition };

const configs: Record<Variant, Config> = {
  // Big dramatic rise from below — timeline, footer
  rise: {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
  },
  // 3D perspective tilt into flat — cards, project grid
  tilt: {
    hidden: { opacity: 0, rotateX: 20, y: 60, scale: 0.95, transformPerspective: 900 },
    visible: { opacity: 1, rotateX: 0, y: 0, scale: 1, transformPerspective: 900 },
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
  },
  // Blur materializes — skills, contact form
  float: {
    hidden: { opacity: 0, y: 36, filter: "blur(12px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
  // Spring pop — stats, numbers
  burst: {
    hidden: { opacity: 0, scale: 0.82 },
    visible: { opacity: 1, scale: 1 },
    transition: { type: "spring", stiffness: 240, damping: 18, mass: 1 },
  },
  // Horizontal slide with skew snap — services
  pull: {
    hidden: { opacity: 0, x: -56, skewX: 4 },
    visible: { opacity: 1, x: 0, skewX: 0 },
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export function SectionTransition({
  children,
  className,
  variant = "rise",
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}) {
  const reduceMotion = useReducedMotion();
  const { hidden, visible, transition } = configs[variant];

  return (
    <motion.div
      initial={reduceMotion ? false : hidden}
      whileInView={reduceMotion ? { opacity: 1 } : visible}
      viewport={{ once: true, amount: 0.07 }}
      transition={reduceMotion ? { duration: 0.3 } : transition}
      className={cn("section-transition-shell", className)}
    >
      {children}
    </motion.div>
  );
}
