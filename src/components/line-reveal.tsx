"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/cn";

export function LineReveal({
  children,
  className,
  delay = 0,
  amount = 0.25,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount });

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div
        initial={reduceMotion ? false : { y: "110%" }}
        animate={inView ? { y: "0%" } : undefined}
        transition={{ duration: 0.88, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
