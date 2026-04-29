"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaAws } from "react-icons/fa";
import { SiDocker, SiKubernetes, SiReact } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/rb/magnetic";
import { easeOutExpo } from "@/lib/motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const floatingTech = [
  { label: "React", icon: SiReact, className: "left-[55%] top-[22%] bg-cyan-500/20 text-cyan-300" },
  { label: "AWS", icon: FaAws, className: "left-[66%] top-[20%] bg-orange-500/20 text-orange-200" },
  { label: "K8s", icon: SiKubernetes, className: "right-[20%] top-[18%] bg-blue-500/25 text-blue-200" },
  { label: "Docker", icon: SiDocker, className: "right-[11%] top-[29%] bg-sky-500/20 text-sky-200" },
] as const;

const dashboardItems = [
  { label: "React systems", icon: SiReact, color: "text-cyan-300" },
  { label: "AWS delivery", icon: FaAws, color: "text-orange-300" },
  { label: "Kubernetes", icon: SiKubernetes, color: "text-blue-300" },
  { label: "Containerized APIs", icon: SiDocker, color: "text-sky-300" },
] as const;

const typingLines = [
  "boot.sequence('portfolio-ui')",
  "compile.experience({ mode: 'live' })",
  "ship.features(['backend', 'cloud', 'ux'])",
  "status: operational",
] as const;

function RevealWords({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.06,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block pr-[0.32em]"
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.6, ease: easeOutExpo },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

function CommandLineIntro() {
  const [typed, setTyped] = useState("");
  const fullText = "Hi, I'm Kelvin Ofori";

  useEffect(() => {
    if (typed === fullText) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setTyped(fullText.slice(0, typed.length + 1));
    }, typed.length < 5 ? 80 : 48);

    return () => window.clearTimeout(timeout);
  }, [typed]);

  return (
    <span className="hero-command-line">
      <span className="hero-command-prompt">&gt;</span> {typed}
      <span className="typing-caret" />
    </span>
  );
}

function HeroLineTyping({
  lines,
  className,
}: {
  lines: readonly string[];
  className?: string;
}) {
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const fullLine = lines[lineIndex];

    if (typed !== fullLine) {
      const timeout = window.setTimeout(() => {
        setTyped(fullLine.slice(0, typed.length + 1));
      }, 40);

      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      setTyped("");
      setLineIndex((current) => (current + 1) % lines.length);
    }, 1400);

    return () => window.clearTimeout(timeout);
  }, [lineIndex, lines, typed]);

  return (
    <span className={className}>
      {typed}
      <span className="typing-caret" />
    </span>
  );
}

function HeroTypingPanel() {
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const fullLine = typingLines[lineIndex];
    const isDone = typed === fullLine;

    if (!isDone) {
      const timeout = window.setTimeout(() => {
        setTyped(fullLine.slice(0, typed.length + 1));
      }, 42);

      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      setTyped("");
      setLineIndex((current) => (current + 1) % typingLines.length);
    }, 1350);

    return () => window.clearTimeout(timeout);
  }, [lineIndex, typed]);

  return (
    <div className="holo-terminal">
      <div className="holo-terminal-top">
        <span className="holo-terminal-dot bg-emerald-400" />
        <span className="holo-terminal-dot bg-sky-400" />
        <span className="holo-terminal-dot bg-violet-400" />
        <span className="ml-3 text-[10px] uppercase tracking-[0.3em] text-sky-200/70">
          runtime
        </span>
      </div>
      <div className="holo-terminal-body">
        <div className="text-sky-300/75">$ {typed}<span className="typing-caret" /></div>
        <div className="mt-3 grid gap-2 text-[11px] text-slate-300/65">
          <div>&gt; latency: 42ms</div>
          <div>&gt; region: eu-west-1</div>
          <div>&gt; uptime: 99.98%</div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="hero">
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] hidden w-[48%] lg:block">
        <div className="neon-hero-scene">
          <div className="neon-orbit neon-orbit-a" />
          <div className="neon-orbit neon-orbit-b" />
          <div className="neon-orbit neon-orbit-c" />
          <div className="holo-beacon" />
          <div className="holo-grid" />

          <div className="neon-dashboard">
            <div className="neon-dashboard-glow" />
            <div className="neon-dashboard-panel">
              <div className="mb-1 flex items-center justify-between">
                <div className="text-[10px] uppercase tracking-[0.32em] text-sky-200/75">
                  holographic stack
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                  live
                </div>
              </div>

              <HeroTypingPanel />

              <div className="grid gap-3">
                {dashboardItems.map((item) => (
                  <div key={item.label} className="neon-dashboard-chip">
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="holo-footer">
                <span className="holo-footer-pill">API orchestration</span>
                <span className="holo-footer-pill">Distributed systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {floatingTech.map((techItem, index) => (
        <motion.div
          aria-hidden
          key={techItem.label}
          className={`floating-tech absolute hidden items-center gap-2 lg:flex ${techItem.className}`}
          style={
            reduceMotion
              ? undefined
              : {
                  animationDelay: `${0.4 + index * 0.35}s`,
                }
          }
          initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.98 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.18 + index * 0.06, ease: easeOutExpo }}
        >
          <techItem.icon className="h-6 w-6" />
          {techItem.label}
        </motion.div>
      ))}

      <motion.div
        className="container hero-content"
        initial="hidden"
        animate="visible"
        transition={reduceMotion ? undefined : { staggerChildren: 0.085, delayChildren: 0.06 }}
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-300/10 bg-slate-950/70 px-4 py-2 text-xs font-medium text-slate-300 shadow-[0_10px_30px_rgba(2,6,23,0.35)]"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.8)]" />
          Available for opportunities
        </motion.div>
        <motion.p variants={fadeUp} className="mt-12 text-xl font-semibold text-slate-300 sm:text-2xl">
          <CommandLineIntro />
        </motion.p>
        <motion.h1 variants={fadeUp} className="hero-name">
          <span className="hero-name-plate">Kelvin</span>{" "}
          <span className="gradient-text inline-block hero-name-plate">Ofori</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-5 text-xl font-extrabold uppercase tracking-[0.12em] text-slate-200 sm:text-2xl">
          <HeroLineTyping lines={["Software Engineer", "Backend Systems Builder", "Product-Focused Developer"]} />
        </motion.p>
        <motion.p variants={fadeUp} className="mt-1 text-xl font-extrabold uppercase tracking-[0.11em] text-blue-400 sm:text-2xl">
          <RevealWords text="Backend - Full-Stack - Cloud" delay={0.34} />
        </motion.p>
        <motion.p variants={fadeUp} className="max-w-[620px]">
          <RevealWords
            text="I build scalable systems, real-time platforms, and developer tools that solve real-world problems."
            delay={0.42}
          />
        </motion.p>
        <motion.div variants={fadeUp} className="hero-buttons">
          <Magnetic strength={10}>
            <a href="#projects">
              <Button className="hero-cta hero-cta-primary">
                <span className="hero-cta-ping" />
                <span className="hero-cta-label">
                View My Work <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </span>
              </Button>
            </a>
          </Magnetic>
          <Magnetic strength={10}>
            <a href="#contact">
              <Button variant="outline" className="hero-cta hero-cta-outline">
                <span className="hero-cta-label">
                Contact Me <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </span>
              </Button>
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
}
