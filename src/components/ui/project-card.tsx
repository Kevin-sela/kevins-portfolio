"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { easeOutExpo } from "@/lib/motion";

export function ProjectCard({
  title,
  badge,
  description,
  tech,
  imageClass,
  href,
  previewSrc
}: {
  title: string;
  badge?: string;
  description: string;
  tech: readonly string[];
  imageClass: string;
  href: string;
  previewSrc?: string;
}) {
  const isGithubRepo = href.includes("github.com");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), { stiffness: 280, damping: 28 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), { stiffness: 280, damping: 28 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.7, ease: easeOutExpo }}
      style={{
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
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
          {previewSrc ? <iframe src={previewSrc} title={`${title} screen preview`} loading="lazy" /> : null}
        </div>
        <div className="project-content">
          <div className="flex items-center gap-2">
            <h3 className="line-clamp-1 text-sm font-bold text-white">{title}</h3>
            {badge ? <Badge className="border-amber-400/20 bg-amber-500/15 text-amber-300">{badge}</Badge> : null}
          </div>
          <p className="mt-3 line-clamp-3 min-h-[60px] text-sm leading-5 text-slate-300">
            {description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((techItem) => (
              <Badge key={`${title}-${techItem}`}>{techItem}</Badge>
            ))}
          </div>
          <a href={href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300">
            {isGithubRepo ? (
              <>
                GitHub Repo <Github className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </>
            ) : (
              <>
                Live Demo <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </>
            )}
          </a>
        </div>
      </Card>
    </motion.article>
  );
}
