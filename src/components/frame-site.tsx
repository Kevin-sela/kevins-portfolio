"use client";

import { FrameShell } from "@/components/frame-shell";
import { FrameScenes } from "@/components/frame-scenes";
import HeroNeonAccent from "@/components/three/HeroNeonAccent";
import { person, projects, socials } from "@/content/site";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";
import { ArrowUpRight, Layers, Mail } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiDotnet,
  SiFramer,
  SiNextdotjs,
  SiReact,
  SiSharp,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr,0.95fr]">
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-14 -left-2 right-0 select-none text-[clamp(64px,9vw,140px)] font-semibold tracking-[-0.08em] text-fg/10"
        >
          design hello@
        </div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="text-xs font-semibold uppercase tracking-[0.18em] text-muted"
        >
          Contact me / Email / Telegram
        </motion.p>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE_OUT, delay: 0.04 }}
          className="mt-5 text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-6xl"
        >
          Let’s make something together
        </motion.h1>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.1 }}
          className="mt-6 grid gap-5 text-pretty text-base leading-relaxed text-muted sm:text-lg"
        >
          <p>
            As a designer and Rotarian, I believe in service above self.
          </p>
          <p>
            Being a designer is about serving user needs. It’s dedicating yourself to
            finding the right balance between user needs and business goals.
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.16 }}
          className="mt-8 flex flex-wrap items-center gap-2"
        >
          <a
            href={`mailto:${person.email}`}
            className="fancy-ring inline-flex items-center gap-2 rounded-xl bg-fg px-4 py-2.5 text-sm font-semibold text-bg shadow-glow transition hover:opacity-90"
          >
            Email me <Mail className="h-4 w-4" />
          </a>
          <a
            href="#projects"
            className="fancy-ring inline-flex items-center gap-2 rounded-xl border border-border/70 bg-bg/35 px-4 py-2.5 text-sm font-semibold text-fg shadow-glow backdrop-blur transition hover:border-accent-2/40"
          >
            Work <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.06 }}
        className="relative overflow-hidden rounded-3xl border border-border/70 bg-bg/25 p-6 shadow-glow backdrop-blur sm:p-8"
      >
        <HeroNeonAccent />
        <div aria-hidden className="absolute -left-14 top-6 h-44 w-44 rounded-full bg-accent-2/18 blur-2xl" />
        <div aria-hidden className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-accent-1/14 blur-2xl" />

        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-bg/30">
          <div className="relative aspect-square">
            {/* Put your photo at `public/me.jpg` */}
            <Image
              src={person.avatar}
              alt={`${person.name} portrait`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(139,92,246,0.24),transparent_34%),radial-gradient(circle_at_78%_72%,rgba(59,130,246,0.2),transparent_30%)]" />
          </div>
        </div>

        <div className="relative mt-5 grid grid-cols-2 gap-3">
          {[
            { label: "Mode", value: "3D accents" },
            { label: "Mood", value: "Neon glass" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border/70 bg-bg/35 px-4 py-3 backdrop-blur"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                {item.label}
              </div>
              <div className="mt-2 text-sm font-semibold text-fg">{item.value}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        Selected work
      </div>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
        A grid you can feel.
      </h2>
      <p className="mt-4 max-w-2xl text-pretty text-sm text-muted sm:text-base">
        Hover a tile for glow. Click for details (coming next). Keeping it minimal like the reference.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {projects.map((p, idx) => (
          <motion.a
            key={p.name}
            href="#featured"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: EASE_OUT, delay: idx * 0.03 }}
            className="group relative overflow-hidden rounded-2xl border border-border/70 bg-bg/25 shadow-glow backdrop-blur"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -left-14 top-8 h-36 w-36 rounded-full bg-accent-2/18 blur-2xl" />
              <div className="absolute -right-12 bottom-0 h-40 w-40 rounded-full bg-accent-1/14 blur-2xl" />
            </div>
            <div className="relative aspect-square p-5">
              <div className="absolute inset-0 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_55%),linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.65))]" />
              </div>
              <div className="relative h-full w-full">
                <Image src={p.image} alt={p.name} fill className="object-contain opacity-85" />
              </div>
            </div>
            <div className="relative border-t border-border/70 px-4 py-3">
              <div className="text-sm font-semibold">{p.name}</div>
              <div className="mt-1 line-clamp-2 text-xs text-muted">
                {p.description}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

function Featured() {
  const featured = projects[0];
  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1.15fr,0.85fr]">
      <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-bg/25 shadow-glow backdrop-blur">
        <div className="relative aspect-[16/10]">
          <Image src={featured.image} alt={featured.name} fill className="object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        </div>
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Featured
        </div>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
          {featured.name}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          {featured.description}
        </p>
        <ul className="mt-6 grid gap-2 text-sm text-muted">
          {featured.highlights.slice(0, 4).map((h) => (
            <li key={h}>• {h}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1fr,1fr]">
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Contact
        </div>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
          Let’s make something together.
        </h2>
        <p className="mt-4 max-w-xl text-pretty text-sm text-muted sm:text-base">
          Email is best. Include: brief, timeline, and 2–3 reference sites.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <a
            href={`mailto:${person.email}`}
            className="fancy-ring inline-flex items-center gap-2 rounded-xl bg-fg px-4 py-2.5 text-sm font-semibold text-bg shadow-glow transition hover:opacity-90"
          >
            Email me <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="rounded-3xl border border-border/70 bg-bg/25 p-6 shadow-glow backdrop-blur sm:p-8">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Socials
        </div>
        <div className="mt-4 grid gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="fancy-ring flex items-center justify-between rounded-2xl border border-border/70 bg-bg/35 px-4 py-3 text-sm shadow-glow backdrop-blur transition hover:border-accent-2/40"
            >
              <span className="inline-flex items-center gap-2">
                <s.icon className="h-4 w-4 text-muted" />
                <span className="font-semibold">{s.label}</span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function About() {
  const reduceMotion = useReducedMotion();
  const skills: Array<{ label: string; Icon: IconType | typeof Layers; color: string; glow: string }> =
    [
      { label: ".NET", Icon: SiDotnet, color: "#512BD4", glow: "rgba(81,43,212,0.55)" },
      { label: "C#", Icon: SiSharp, color: "#239120", glow: "rgba(35,145,32,0.5)" },
      { label: "React", Icon: SiReact, color: "#61DAFB", glow: "rgba(97,218,251,0.55)" },
      { label: "Next.js", Icon: SiNextdotjs, color: "#E5E7EB", glow: "rgba(255,255,255,0.25)" },
      { label: "TypeScript", Icon: SiTypescript, color: "#3178C6", glow: "rgba(49,120,198,0.55)" },
      { label: "Tailwind", Icon: SiTailwindcss, color: "#38BDF8", glow: "rgba(56,189,248,0.55)" },
      { label: "Framer Motion", Icon: SiFramer, color: "#FF0055", glow: "rgba(255,0,85,0.55)" },
      { label: "Design systems", Icon: Layers, color: "#A855F7", glow: "rgba(168,85,247,0.5)" }
    ];

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[1.05fr,0.95fr]">
      <div>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="text-xs font-semibold uppercase tracking-[0.18em] text-muted"
        >
          About
        </motion.p>
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.04 }}
          className="mt-4 text-balance text-3xl font-semibold tracking-[-0.05em] sm:text-4xl"
        >
          Cinematic motion, minimal UI, high-end typography.
        </motion.h2>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.08 }}
          className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
        >
          I build story-led websites that feel like slides: smooth scroll, subtle reveals,
          and calm transitions. The trick is consistency — every animation shares the same
          easing and timing.
        </motion.p>
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
        whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, ease: EASE_OUT, delay: 0.06 }}
        className="rounded-3xl border border-border/70 bg-bg/25 p-6 shadow-glow backdrop-blur sm:p-8"
      >
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Skills
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {skills.map(({ label, Icon, color, glow }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-bg/35 px-3 py-1.5 text-xs font-medium text-fg/85 shadow-glow backdrop-blur"
            >
              <Icon
                className="h-[18px] w-[18px] shrink-0"
                style={{
                  color,
                  filter: `drop-shadow(0 0 10px ${glow}) drop-shadow(0 0 22px ${glow})`
                }}
              />
              <span>{label}</span>
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function FrameSite() {
  return (
    <FrameShell
      render={({ activeId, dir }) => (
        <FrameScenes
          activeId={activeId}
          dir={dir}
          scenes={[
            { id: "hero", element: <Hero /> },
            { id: "about", element: <About /> },
            { id: "projects", element: <Projects /> },
            { id: "featured", element: <Featured /> },
            { id: "contact", element: <Contact /> }
          ]}
        />
      )}
    />
  );
}
