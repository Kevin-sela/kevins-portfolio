"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

export function TimelineItem({
  dates,
  role,
  company,
  brand,
  bullets,
  index
}: {
  dates: string;
  role: string;
  company: string;
  brand?: string;
  bullets: readonly string[];
  index: number;
}) {
  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
    >
      <div className="timeline-dot" />
      <div className="timeline-date">
        <div className="rounded-lg border border-white/10 bg-slate-900/75 px-4 py-4 text-sm font-semibold text-violet-300">
          {dates}
        </div>
      </div>
      <Card className="p-5">
        <div className="flex items-start justify-between gap-5">
          <div>
            <h3 className="font-bold text-white">{role}</h3>
            <p className="mt-1 text-sm font-semibold text-slate-300">{company}</p>
          </div>
          {brand ? (
            <div className="text-xl font-bold tracking-[0.18em] text-white/90">{brand}</div>
          ) : (
            <div className="rounded-full border border-slate-400 p-2 text-slate-300">
              <Shield className="h-6 w-6" />
            </div>
          )}
        </div>
        <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-300">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-300" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}
