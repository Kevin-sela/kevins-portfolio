"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Download, MapPin, Code2, Zap, Globe } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { easeOutExpo } from "@/lib/motion";

const tags = ["Backend Development", "Full-Stack Development", "Cloud Architecture", "DevOps", "API Design", "Microservices"];

const highlights = [
  { icon: Code2, label: "7+ Years", sub: "Professional engineering experience" },
  { icon: Zap, label: "20+ Projects", sub: "Shipped to production" },
  { icon: Globe, label: "AWS & Azure", sub: "Multi-cloud platform expertise" },
];

const focusAreas = [
  "Scalable backend & microservices",
  "Cloud-native deployments",
  "Full-stack product delivery",
  "API design & third-party integration",
];

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
        <div>
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
                  Building Scalable Solutions With{" "}
                  <span className="text-violet-400">Modern Technologies</span>
                </>
              }
            />
          </motion.div>

          <motion.p
            className="mt-5"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.66, ease: easeOutExpo, delay: 0.12 }}
          >
            Results-driven software engineer with 7+ years of experience designing and shipping scalable web platforms, APIs, and developer tools. Strong expertise in .NET, React, TypeScript, and cloud-native systems with a focus on performance, reliability, and user experience.
          </motion.p>

          <motion.p
            className="mt-4"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.66, ease: easeOutExpo, delay: 0.18 }}
          >
            I thrive across the full stack — from architecting microservices and optimising database queries, to crafting polished front-end interfaces. I&rsquo;m driven by solving hard engineering problems that create direct business impact.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.65, ease: easeOutExpo, delay: 0.22 }}
          >
            {tags.map((tag, index) => (
              <motion.span
                key={tag}
                className="rounded-lg border border-white/10 bg-slate-900/75 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-violet-400/40 hover:text-violet-200"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.42, ease: easeOutExpo, delay: 0.08 + index * 0.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <motion.a
            href="/resume/Kelvin_Ofori_org_Resume.docx"
            className="btn mt-7 inline-flex items-center gap-2 rounded-lg border border-violet-400/60 px-5 py-2.5 text-sm font-semibold text-violet-300 hover:bg-violet-500/10"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.42, ease: easeOutExpo, delay: 0.38 }}
          >
            <Download className="h-4 w-4" /> Download Resume
          </motion.a>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 24, y: 12 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.72, ease: easeOutExpo, delay: 0.14 }}
        >
          <motion.div
            className="profile-photo-shell"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.88 }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.82, ease: easeOutExpo, delay: 0.22 }}
            whileHover={reduceMotion ? undefined : { scale: 1.04 }}
          >
            <div className="profile-ring-outer" aria-hidden />
            <div className="profile-ring-inner" aria-hidden />
            <div className="profile-glow" aria-hidden />
            <Image
              src="/images/profile.png"
              alt="Kevin Ofori"
              width={320}
              height={320}
              className="profile-photo"
              draggable={false}
            />
            <div className="profile-scanline" aria-hidden />
          </motion.div>

          <Card className="about-profile-card p-6 mt-6">
            <div className="mb-5 flex items-center gap-2.5">
              <span className="about-status-dot" />
              <span className="text-sm font-semibold text-emerald-300">Open to New Opportunities</span>
            </div>

            <div className="mb-5 flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="h-4 w-4 shrink-0 text-violet-400" />
              <span>Accra, Ghana &mdash; Remote friendly</span>
            </div>

            <div className="grid gap-3">
              {highlights.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="about-highlight-item">
                  <div className="about-highlight-icon">
                    <Icon className="h-4 w-4 text-violet-300" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{label}</div>
                    <div className="text-xs text-slate-400">{sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="my-5 border-t border-white/[0.08]" />

            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-sky-400">
              Core Focus
            </p>
            <div className="grid gap-2">
              {focusAreas.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
