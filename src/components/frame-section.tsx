"use client";

import { cn } from "@/lib/cn";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";
import { ArrowDown } from "lucide-react";

export function FrameSection({
  id,
  children,
  className,
  nextHref
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  nextHref?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.55, ease: EASE_OUT }}
      className={cn("relative snap-start snap-always py-10 sm:py-12", className)}
    >
      {children}

      {nextHref ? (
        <a
          href={nextHref}
          aria-label="Scroll to next section"
          className="fancy-ring absolute -bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-full border border-border/70 bg-bg/45 p-2.5 text-muted shadow-glow backdrop-blur transition hover:text-fg"
          onClick={(e) => {
            const el = document.getElementById(nextHref.replace("#", ""));
            if (!el) return;
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <ArrowDown className="h-4 w-4" />
        </a>
      ) : null}
    </motion.section>
  );
}

