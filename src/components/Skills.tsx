"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Box, Cloud, Code2, Cpu, Database, Terminal } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillCard } from "@/components/ui/skill-card";
import { easeOutExpo } from "@/lib/motion";

const icons = [Terminal, Code2, Cpu, Cloud, Database, Box] as const;
const hologramHighlights = ["React", ".NET", "Cloud", "APIs", "Systems", "DevOps"] as const;

export function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="skills"
      className="section"
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.72, ease: easeOutExpo }}
    >
      <div className="container">
        <motion.div
          className="mb-8 flex items-end justify-between gap-6"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.62, ease: easeOutExpo, delay: 0.04 }}
        >
          <SectionHeading eyebrow="Technical Skills" title="Technologies & Tools I Work With" />
          <a
            href="#contact"
            className="hidden items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-violet-300 sm:inline-flex"
          >
            View All Skills
          </a>
        </motion.div>
        <motion.div
          className="mb-8 flex flex-wrap gap-3"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.1 }}
        >
          {hologramHighlights.map((item, index) => (
            <span
              key={item}
              className="hologram-pill"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {item}
            </span>
          ))}
        </motion.div>
        <div className="skills-grid">
          {skillGroups.map((skillGroup, index) => (
            <SkillCard
              key={skillGroup.title}
              title={skillGroup.title}
              items={skillGroup.items}
              icon={icons[index]}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
