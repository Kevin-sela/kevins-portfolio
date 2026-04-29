"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { easeOutExpo } from "@/lib/motion";

const tags = ["Backend Development", "Full-Stack Development", "Cloud Architecture", "DevOps", "API Design"];

export function About() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="about"
      className="section"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.72, ease: easeOutExpo }}
    >
      <div className="container about">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.62, ease: easeOutExpo, delay: 0.04 }}
        >
          <SectionHeading
            eyebrow="About Me"
            title={
              <>
                Building Scalable Solutions With <span className="text-violet-400">Modern Technologies</span>
              </>
            }
          />
        </motion.div>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.66, ease: easeOutExpo, delay: 0.12 }}
        >
          Results-driven software engineer with 7+ years of experience designing and shipping scalable web platforms, APIs, and developer tools. Strong expertise in .NET, React, TypeScript, and cloud-native systems with a focus on performance, reliability, and user experience.
        </motion.p>
      </div>
      <motion.div
        className="container mt-10 flex flex-wrap gap-3"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.28 }}
        transition={{ duration: 0.65, ease: easeOutExpo, delay: 0.18 }}
      >
        {tags.map((tag, index) => (
          <motion.span
            key={tag}
            className="rounded-lg border border-white/10 bg-slate-900/75 px-5 py-3 text-sm text-slate-300"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.42, ease: easeOutExpo, delay: 0.08 + index * 0.05 }}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  );
}
