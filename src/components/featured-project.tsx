"use client";

import { projects } from "@/content/site";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useRef } from "react";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { CinematicFrame } from "@/components/cinematic-frame";

export function FeaturedProject() {
  const featured = projects[0];
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 18, reduceMotion ? 0 : -18]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.65, 1, 1, 0.65]);

  const chips = useMemo(() => featured.tech.slice(0, 8), [featured.tech]);

  return (
    <CinematicFrame variant="ember2" nextHref="#contact">
      <div ref={ref} className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-6 left-0 right-0 select-none text-[clamp(64px,9vw,140px)] font-semibold tracking-[-0.07em] text-fg/10"
        >
          featured
        </div>

        <motion.div
          style={reduceMotion ? undefined : { y, scale, opacity }}
          className={cn(
            "relative overflow-hidden rounded-3xl border border-border/70 bg-bg/25 shadow-glow backdrop-blur",
            "grid items-stretch gap-0 lg:grid-cols-[1.2fr,0.8fr]"
          )}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent-2)/0.18),transparent_60%),radial-gradient(circle_at_75%_80%,hsl(var(--accent-1)/0.12),transparent_55%)]" />
            <div className="relative aspect-[16/11] overflow-hidden border-b border-border/70 lg:aspect-auto lg:h-full lg:border-b-0 lg:border-r">
              <Image
                src={featured.image}
                alt={`${featured.name} preview`}
                fill
                className="object-cover opacity-90"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full border border-border/70 bg-bg/55 px-3 py-1.5 text-xs font-semibold text-muted backdrop-blur">
                Featured
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: EASE_OUT }}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-muted"
            >
              Featured project
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.04 }}
              className="mt-4 text-balance text-2xl font-semibold tracking-[-0.03em] sm:text-3xl"
            >
              {featured.name}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.08 }}
              className="mt-4 text-sm leading-relaxed text-muted sm:text-base"
            >
              {featured.description}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.12 }}
              className="mt-6 grid gap-2 text-sm text-muted"
            >
              {featured.highlights.slice(0, 4).map((h) => (
                <li key={h}>• {h}</li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.16 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {chips.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border/70 bg-bg/35 px-3 py-1.5 text-xs text-muted backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.2 }}
              className="mt-7 flex flex-wrap items-center gap-2"
            >
              {featured.links.slice(0, 2).map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="fancy-ring inline-flex items-center gap-2 rounded-xl border border-border/70 bg-bg/35 px-4 py-2.5 text-sm font-semibold shadow-glow backdrop-blur transition hover:border-accent-2/40"
                >
                  {l.label} <ArrowUpRight className="h-4 w-4" />
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </CinematicFrame>
  );
}
