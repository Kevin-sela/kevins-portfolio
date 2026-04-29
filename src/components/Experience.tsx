"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { TimelineItem } from "@/components/ui/timeline-item";
import { easeOutExpo } from "@/lib/motion";

export function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="experience"
      className="section"
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.74, ease: easeOutExpo }}
    >
      <div className="container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.04 }}
        >
          <SectionHeading eyebrow="Experience" title="My Professional Journey" />
        </motion.div>
        <motion.div
          className="timeline mt-10"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.68, ease: easeOutExpo, delay: 0.12 }}
        >
          {experience.map((experienceItem, index) => (
            <TimelineItem
              key={`${experienceItem.company}-${experienceItem.dates}`}
              index={index}
              {...experienceItem}
            />
          ))}
        </motion.div>
        <motion.div
          className="mt-7 text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.56, ease: easeOutExpo, delay: 0.18 }}
        >
          <a href="/resume/Kelvin_Ofori_org_Resume.docx" className="inline-flex items-center gap-2 rounded-lg border border-violet-500 px-5 py-3 text-sm font-bold text-violet-300 transition hover:bg-violet-500/10">
            View Full Experience <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
