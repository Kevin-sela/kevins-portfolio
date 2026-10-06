"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { easeOutExpo } from "@/lib/motion";

export function ProjectCard({
  title,
  badge,
  description,
  tech,
  imageClass,
  href,
  imageSrc,
  index,
  total
}: {
  title: string;
  badge?: string;
  description: string;
  tech: readonly string[];
  imageClass: string;
  href: string;
  imageSrc: string;
  index: number;
  total: number;
}) {
  const isGithubRepo = href.includes("github.com");
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2.5, -2.5]), { stiffness: 280, damping: 32 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2.5, 2.5]), { stiffness: 280, damping: 32 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(nx);
    mouseY.set(ny);
    glowX.set(((e.clientX - rect.left) / rect.width) * 100);
    glowY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  const glowBg = useTransform(
    [glowX, glowY],
    ([x, y]: number[]) =>
      `radial-gradient(380px circle at ${x}% ${y}%, rgba(139,92,246,0.13), transparent 55%)`
  );

  return (
    <motion.article
      className="project-tilt-scene"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: easeOutExpo }}
      style={{
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
        rotateX: reduceMotion ? 0 : rotateX,
        rotateY: reduceMotion ? 0 : rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Card className="project-card group h-full relative overflow-hidden">
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glowBg }}
        />
        <div className={`project-image ${imageClass}`}>
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={`${title} preview`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className={imageClass === "project-yanioba" ? "project-image-asset object-contain" : "project-image-asset object-cover"}
            />
          ) : null}
          <div className="project-image-meta">
            <span className="project-index">{String(index).padStart(2, "0")} <span>/ {String(total).padStart(2, "0")}</span></span>
            {badge ? <span className="project-category">{badge}</span> : null}
          </div>
        </div>
        <div className="project-content">
          <h3 className="project-title line-clamp-2">{title}</h3>
          <p className="project-description line-clamp-3">
            {description}
          </p>
          <div className="project-tech-list">
            {tech.slice(0, 4).map((techItem) => (
              <span className="project-tech" key={`${title}-${techItem}`}>{techItem}</span>
            ))}
          </div>
          <a href={href} className="project-link" target="_blank" rel="noreferrer">
            <span>{isGithubRepo ? "View source code" : "Explore project"}</span>
            {isGithubRepo ? <Github className="h-4 w-4" aria-hidden="true" /> : <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
          </a>
        </div>
      </Card>
    </motion.article>
  );
}
