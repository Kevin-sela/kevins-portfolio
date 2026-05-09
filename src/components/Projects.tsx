"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { easeOutExpo } from "@/lib/motion";

const projectSignals = ["Production Ready", "Open Source", "AI-Powered"] as const;

export function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="projects"
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
          transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.04 }}
        >
          <SectionHeading eyebrow="Featured Projects" title="Some Things I've Built" />
          <a
            href="#projects"
            className="hidden items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-violet-300 sm:inline-flex"
          >
            View All Projects <ArrowRight className="h-4 w-4 text-violet-400" />
          </a>
        </motion.div>
        <motion.div
          className="project-signal-row"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.58, ease: easeOutExpo, delay: 0.1 }}
        >
          {projectSignals.map((signal) => (
            <span key={signal} className="project-signal-pill">
              {signal}
            </span>
          ))}
        </motion.div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
