"use client";

import { Award, Briefcase, Layers, Star } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { easeOutExpo } from "@/lib/motion";

const stats = [
  { value: 7, suffix: "+", label: "Years Experience", icon: Award },
  { value: 20, suffix: "+", label: "Projects Completed", icon: Briefcase },
  { value: 15, suffix: "+", label: "Technologies", icon: Layers },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: Star }
] as const;

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    motionValue.set(value);
    return spring.on("change", (latest) => setDisplay(Math.round(latest)));
  }, [motionValue, spring, value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });

  return (
    <section className="container">
      <Card ref={ref} className="stats-bar stats-bar-live">
        {stats.map((statItem, index) => (
          <motion.div
            key={statItem.label}
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: index * 0.06, duration: 0.5, ease: easeOutExpo }}
            className="stat stat-live"
          >
            <div className="stat-orb mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 text-violet-300">
              <statItem.icon className="h-6 w-6" />
            </div>
            <strong className="stat-value-live">
              {inView ? <CountUp value={statItem.value} suffix={statItem.suffix} /> : `0${statItem.suffix}`}
            </strong>
            <div className="text-sm text-slate-300">{statItem.label}</div>
          </motion.div>
        ))}
      </Card>
    </section>
  );
}
