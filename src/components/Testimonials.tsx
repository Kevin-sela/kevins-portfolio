"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { easeOutExpo } from "@/lib/motion";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
  initials: string;
  accent: string;
  ring: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Kelvin architected our most critical real-time analytics microservices. He reduced infrastructure costs by 30% and maintained 99.9%+ uptime throughout — genuinely one of the most dependable engineers I've worked with.",
    name: "David Mensah",
    title: "Engineering Lead",
    company: "Aptiveon Technologies",
    initials: "DM",
    accent: "from-blue-500/20 to-cyan-500/10",
    ring: "border-blue-400/30",
  },
  {
    quote:
      "Kelvin delivered a full ERP system that modernised our internal operations. His code quality, testing discipline, and the way he took ownership of the entire delivery raised the bar for our whole team.",
    name: "Rachel Osei",
    title: "Director of Engineering",
    company: "INNORIK USA",
    initials: "RO",
    accent: "from-violet-500/20 to-purple-500/10",
    ring: "border-violet-400/30",
  },
  {
    quote:
      "We needed a complex web platform built quickly. Kelvin delivered ahead of schedule, communicated proactively every step of the way, and the product was polished and production-ready on launch day.",
    name: "Abena Boateng",
    title: "Founder & CEO",
    company: "Yanioba",
    initials: "AB",
    accent: "from-emerald-500/20 to-teal-500/10",
    ring: "border-emerald-400/30",
  },
];

function TestimonialCard({
  quote,
  name,
  title,
  company,
  initials,
  accent,
  ring,
  index,
}: Testimonial & { index: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.62, ease: easeOutExpo, delay: index * 0.1 }}
    >
      <Card className="testimonial-card group h-full p-7 flex flex-col gap-5">
        <Quote className="h-7 w-7 shrink-0 text-violet-400/60" />
        <p className="flex-1 text-sm leading-7 text-slate-300">{quote}</p>
        <div className="flex items-center gap-3 border-t border-white/[0.07] pt-5">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${accent} border ${ring} text-xs font-bold text-white`}
          >
            {initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{name}</p>
            <p className="text-xs text-slate-400">
              {title} &mdash; {company}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="testimonials"
      className="section"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.72, ease: easeOutExpo }}
    >
      <div className="container">
        <motion.div
          className="mb-10"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.04 }}
        >
          <SectionHeading eyebrow="Testimonials" title="What People Say About Working With Me" />
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
