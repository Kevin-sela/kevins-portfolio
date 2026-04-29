"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { easeOutExpo, motionConfig } from "@/lib/motion";

export function CinematicSection({
  children,
  className = "",
  scene = "glass"
}: {
  children: ReactNode;
  className?: string;
  scene?: "hero" | "glass" | "hologram" | "portal" | "contact";
}) {
  const reduceMotion = useReducedMotion();

  const sceneTone: Record<typeof scene, string> = {
    hero: "radial-gradient(circle at 50% 0%, rgba(139,92,246,.20), transparent 42%)",
    glass: "radial-gradient(circle at 50% 0%, rgba(139,92,246,.14), transparent 42%)",
    hologram: "radial-gradient(circle at 60% 0%, rgba(6,182,212,.14), transparent 42%)",
    portal: "radial-gradient(circle at 50% 0%, rgba(59,130,246,.14), transparent 42%)",
    contact: "radial-gradient(circle at 45% 0%, rgba(168,85,247,.12), transparent 42%)"
  };

  return (
    <motion.section
      data-scene={scene}
      className={cn("cinematic-section relative overflow-hidden", className)}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 120, rotateX: 18, scale: 0.94 }
      }
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.22 }}
      transition={{ duration: motionConfig.cinematic, ease: easeOutExpo }}
      style={{ perspective: 1400, transformStyle: "preserve-3d" }}
    >
      <motion.div
        aria-hidden
        className="cinematic-blob pointer-events-none absolute left-1/2 top-24 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-3xl"
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.08, 1],
                rotate: [0, 12, 0]
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "linear-gradient(135deg, rgba(139,92,246,.35), rgba(59,130,246,.18))"
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: motionConfig.normal }}
        style={{ background: sceneTone[scene] }}
      />
      <motion.div
        className={cn("cinematic-glass relative z-10", scene === "hero" && "cinematic-hero")}
        initial={reduceMotion ? false : { opacity: 0, y: 64, rotateX: 14, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.22 }}
        transition={{ duration: motionConfig.normal, ease: easeOutExpo }}
        style={{ transformPerspective: 1200, transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
}

export function PortalTransition() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className="h-24" aria-hidden />;

  return (
    <div className="relative h-40 overflow-hidden" style={{ perspective: 1000 }} aria-hidden>
      <motion.div
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/40"
        initial={{ scale: 0, rotateX: 80, opacity: 0 }}
        whileInView={{ scale: 4.5, rotateX: 0, opacity: [0, 1, 0] }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: motionConfig.normal, ease: easeOutExpo }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/25 to-transparent blur-xl"
        initial={{ x: "-120%" }}
        whileInView={{ x: "120%" }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: motionConfig.fast, ease: easeOutExpo }}
      />
    </div>
  );
}

export function ParallaxGlow() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  if (reduceMotion) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        <div className="absolute left-16 top-24 h-80 w-80 rounded-full bg-purple-600/18 blur-[110px]" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute inset-0">
        <div className="absolute right-12 top-40 h-[26rem] w-[26rem] rounded-full bg-blue-600/14 blur-[130px]" />
      </motion.div>
    </div>
  );
}
