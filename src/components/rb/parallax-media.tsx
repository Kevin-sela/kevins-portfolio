"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/cn";

export function ParallaxMedia({
  children,
  className,
  amount = 18
}: {
  children: React.ReactNode;
  className?: string;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : amount, reduceMotion ? 0 : -amount]);

  return (
    <motion.div ref={ref} style={reduceMotion ? undefined : { y }} className={cn(className)}>
      {children}
    </motion.div>
  );
}

