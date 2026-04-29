"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowRight, FileDown, Mail } from "lucide-react";
import { person } from "@/content/site";
import { cn } from "@/lib/cn";
import { useMemo, useRef } from "react";
import { EASE_OUT } from "@/lib/motion";
import { CinematicFrame } from "@/components/cinematic-frame";

function Magnetic({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 22, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 180, damping: 22, mass: 0.5 });

  const transform = useMotionTemplate`translate3d(${sx}px, ${sy}px, 0)`;

  return (
    <motion.div
      ref={ref}
      style={reduceMotion ? undefined : { transform }}
      className={cn("will-change-transform", className)}
      onPointerMove={(e) => {
        if (reduceMotion) return;
        if (e.pointerType === "touch") return;
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        x.set(px * 10);
        y.set(py * 10);
      }}
      onPointerLeave={() => {
        if (reduceMotion) return;
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

export function CinematicHero() {
  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Portfolio inquiry");
    const body = encodeURIComponent(`Hi ${person.name},\n\nI'd like to talk about...\n\n—`);
    return `mailto:${person.email}?subject=${subject}&body=${body}`;
  }, []);

  return (
    <CinematicFrame variant="ember" nextHref="#about">
      <div className="relative grid items-start gap-10 lg:grid-cols-[1.05fr,0.95fr]">
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-12 -left-4 right-0 select-none text-[clamp(56px,8vw,120px)] font-semibold tracking-[-0.06em] text-fg/10"
          >
            design • build • ship
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE_OUT }}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-muted"
          >
            Index / Portfolio / Contact
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE_OUT, delay: 0.05 }}
            className="mt-5 text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl"
          >
            I create{" "}
            <span className="text-gradient">cinematic</span> web experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.12 }}
            className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            {person.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.18 }}
            className="mt-8 flex flex-wrap items-center gap-2"
          >
            <a
              href="#projects"
              className="fancy-ring inline-flex items-center gap-2 rounded-xl bg-fg px-4 py-2.5 text-sm font-semibold text-bg shadow-glow transition hover:opacity-90"
            >
              View work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={mailto}
              className="fancy-ring inline-flex items-center gap-2 rounded-xl border border-border bg-bg/40 px-4 py-2.5 text-sm font-semibold text-fg shadow-glow backdrop-blur transition hover:border-border/80"
            >
              Email <Mail className="h-4 w-4" />
            </a>
            <a
              href="/resume/Kelvin_Ofori_org_Resume.docx"
              className="fancy-ring inline-flex items-center gap-2 rounded-xl border border-border bg-bg/40 px-4 py-2.5 text-sm font-semibold text-fg shadow-glow backdrop-blur transition hover:border-border/80"
            >
              Resume <FileDown className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.08 }}
          className="relative"
        >
          <Magnetic className="group relative overflow-hidden rounded-3xl border border-border/70 bg-bg/25 p-6 shadow-glow backdrop-blur">
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -left-24 top-6 h-40 w-40 rounded-full bg-accent-2/18 blur-2xl" />
              <div className="absolute -right-16 bottom-0 h-52 w-52 rounded-full bg-accent-1/14 blur-2xl" />
            </div>

            <div className="relative">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Statement
              </div>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-fg/90">
                I believe great design is service above self—balancing user needs and
                business goals with calm, premium motion.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { k: "Aesthetic", v: "Minimal, high-end" },
                  { k: "Motion", v: "Subtle + consistent" },
                  { k: "Depth", v: "Parallax layers" },
                  { k: "Focus", v: "Storytelling UI" }
                ].map((m) => (
                  <div key={m.k} className="rounded-2xl border border-border/70 bg-bg/35 p-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                      {m.k}
                    </div>
                    <div className="mt-2 text-sm font-semibold">{m.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </Magnetic>
        </motion.div>
      </div>
    </CinematicFrame>
  );
}
