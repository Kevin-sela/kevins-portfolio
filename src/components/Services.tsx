"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Cloud, Code2, GitBranch, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRef, type MouseEvent } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { easeOutExpo } from "@/lib/motion";

const services: {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
  accent: string;
}[] = [
  {
    icon: Server,
    title: "Backend Engineering",
    description: "High-throughput APIs and distributed systems engineered for scale, reliability, and low latency.",
    points: ["REST & GraphQL APIs", "Microservices architecture", "Real-time WebSocket systems", "Database optimisation"],
    accent: "rgba(59,130,246,0.18)",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "Cloud-native deployments on AWS and Azure with infrastructure-as-code and full CI/CD automation.",
    points: ["AWS & Azure deployments", "Docker & Kubernetes", "Terraform & IaC", "Zero-downtime pipelines"],
    accent: "rgba(6,182,212,0.18)",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "End-to-end product delivery — from polished React UIs to performant, type-safe server logic.",
    points: ["React & Next.js", "TypeScript / C# / Python", "Server-side rendering", "Accessible component systems"],
    accent: "rgba(139,92,246,0.18)",
  },
  {
    icon: GitBranch,
    title: "DevOps & Automation",
    description: "Streamlined engineering workflows with automated testing, deployment pipelines, and observability.",
    points: ["GitHub Actions & CI", "Automated unit/e2e testing", "Log monitoring & alerting", "Containerised workloads"],
    accent: "rgba(52,211,153,0.18)",
  },
];

function ServiceCard({
  icon: Icon,
  title,
  description,
  points,
  accent,
  index,
}: (typeof services)[0] & { index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || reduceMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--sx", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--sy", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      className="service-card"
      onMouseMove={handleMouseMove}
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.015 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: easeOutExpo, delay: index * 0.07 }}
    >
      <div className="service-card-icon" style={{ background: accent }}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
      <ul className="mt-4 grid gap-2">
        {points.map((point) => (
          <li key={point} className="flex items-center gap-2 text-sm text-slate-300">
            <span className="h-1 w-1 shrink-0 rounded-full bg-violet-400" />
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="services"
      className="section"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.72, ease: easeOutExpo }}
    >
      <div className="container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.04 }}
          className="mb-10"
        >
          <SectionHeading eyebrow="What I Offer" title="Services & Expertise" />
        </motion.div>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
