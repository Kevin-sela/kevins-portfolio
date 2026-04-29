"use client";

import { cn } from "@/lib/cn";
import { EASE_OUT } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";

export function Slide({
  id,
  children,
  className
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.55 }}
      transition={{ duration: 0.55, ease: EASE_OUT }}
      className={cn(
        "relative snap-start snap-always",
        "min-h-dvh w-full",
        "px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </motion.section>
  );
}
