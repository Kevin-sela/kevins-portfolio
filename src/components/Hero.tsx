"use client";

import { ArrowDown, ArrowRight, FileDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaAws } from "react-icons/fa";
import { SiDocker, SiReact } from "react-icons/si";
import { Magnetic } from "@/components/rb/magnetic";
import { easeOutExpo } from "@/lib/motion";

const proof = ["Python", ".NET", "AWS", "React", "Docker"] as const;
const roleLines = [
  "Backend / Full-Stack Engineer",
  "Cloud & API Engineer",
  "Distributed Systems Engineer",
] as const;
const heroBadges = [
  { label: "React", icon: SiReact, className: "hero-tech-react" },
  { label: "AWS", icon: FaAws, className: "hero-tech-aws" },
  { label: "Docker", icon: SiDocker, className: "hero-tech-docker" },
] as const;

function TypedRole({ reduceMotion }: { reduceMotion: boolean }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const fullLine = roleLines[lineIndex];

  useEffect(() => {
    if (reduceMotion) return;

    const atEnd = text === fullLine;
    const atStart = text.length === 0;
    const delay = atEnd && !deleting ? 1200 : atStart && deleting ? 350 : deleting ? 28 : 62;
    const timeout = window.setTimeout(() => {
      if (atEnd && !deleting) {
        setDeleting(true);
      } else if (atStart && deleting) {
        setDeleting(false);
        setLineIndex((current) => (current + 1) % roleLines.length);
      } else {
        setText((current) => deleting ? current.slice(0, -1) : fullLine.slice(0, current.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [deleting, fullLine, reduceMotion, text]);

  return (
    <p className="hero-role" aria-label="Backend and full-stack engineer">
      <span aria-hidden="true">{reduceMotion ? roleLines[0] : text}<span className="typing-caret" /></span>
    </p>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="hero">
      <div className="hero-visual pointer-events-none absolute inset-y-0 right-0 z-[2] hidden w-[45%] lg:block" aria-hidden="true">
        <div className="neon-hero-scene">
          <div className="neon-orbit neon-orbit-a" />
          <div className="neon-orbit neon-orbit-b" />
          <div className="neon-orbit neon-orbit-c" />
          <div className="holo-grid" />
          {heroBadges.map(({ label, icon: Icon, className }) => (
            <div key={label} className={`hero-tech-badge ${className}`}>
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
          <div className="neon-dashboard">
            <div className="neon-dashboard-glow" />
            <div className="neon-dashboard-panel">
              <div className="system-heading">
                <span>SYSTEM</span>
                <span className="system-indicator"><span /> ENGINEERING TOOLKIT</span>
              </div>
              <div className="system-readout">
                <div className="system-row">
                  <span>APIs</span>
                  <strong>Python · .NET</strong>
                </div>
                <div className="system-row">
                  <span>Cloud</span>
                  <strong><FaAws aria-hidden="true" /> AWS</strong>
                </div>
                <div className="system-row">
                  <span>Delivery</span>
                  <strong><SiDocker aria-hidden="true" /> Docker</strong>
                </div>
              </div>
              <div className="system-code" aria-hidden="true">
                <span className="system-code-prompt">&gt;</span> api.build(&#123; reliable: true &#125;)
                <span className="typing-caret" />
              </div>
              <div className="holo-footer">
                <span className="holo-footer-pill">Distributed systems</span>
                <span className="holo-footer-pill">Cloud platforms</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="container hero-content"
        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOutExpo }}
      >
        <TypedRole reduceMotion={reduceMotion ?? false} />
        <h1 className="hero-name">
          <span className="hero-name-plate">Kelvin</span>{" "}
          <span className="gradient-text inline-block hero-name-plate">Ofori</span>
        </h1>
        <p className="hero-description">
          I build reliable APIs, scalable backend systems, and cloud infrastructure for modern products.
        </p>
        <div className="hero-buttons">
          <Magnetic strength={6}>
            <a href="#projects" className="hero-cta hero-cta-primary">
              View Projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Magnetic>
          <Magnetic strength={6}>
            <a href="/resume/Kelvin_Ofori_org_Resume.docx" download className="hero-cta hero-cta-outline">
              Download Resume <FileDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </Magnetic>
        </div>
        <ul className="hero-proof-row" aria-label="Core technologies">
          {proof.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </motion.div>

      <a className="hero-scroll-hint" href="#projects" aria-label="Continue to selected projects">
        <span>Selected Work</span><ArrowDown className="h-4 w-4" aria-hidden="true" />
      </a>
    </section>
  );
}
