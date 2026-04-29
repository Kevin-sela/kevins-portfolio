"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
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

  return (
    <motion.article
      className="project-tilt-scene"
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, rotateX: 0, rotateY: 0, y: 0, scale: 1 }}
      whileHover={{ y: -6, scale: 1.015 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.7, ease: easeOutExpo }}
      style={{ transformPerspective: 1200, transformStyle: "preserve-3d" }}
    >
      <Card className="project-card project-tilt-card group h-full">
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
          <a href={href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-400">
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
