"use client";

import { cn } from "@/lib/cn";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("mb-6 sm:mb-8", className)}
      initial={reduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.6, margin: "-10% 0px -10% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.06, delayChildren: 0.02 }
        }
      }}
    >
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 10 },
          show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } }
        }}
        className="text-xs font-semibold uppercase tracking-wide text-muted"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 10 },
          show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } }
        }}
        className="mt-2 text-pretty text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } }
          }}
          className="mt-2 max-w-3xl text-pretty text-sm text-muted sm:text-base"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </motion.div>
  );
}

