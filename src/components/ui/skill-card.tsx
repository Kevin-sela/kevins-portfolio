"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Cloud, Database } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { easeOutExpo } from "@/lib/motion";
import type { IconType } from "react-icons";
import type { CSSProperties } from "react";
import {
  SiAngular,
  SiApachekafka,
  SiCloudflare,
  SiCss,
  SiDocker,
  SiDotnet,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGo,
  SiGraphql,
  SiJest,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiOpenjdk,
  SiPrisma,
  SiPython,
  SiReact,
  SiRust,
  SiSharp,
  SiTypescript,
  SiVuedotjs
} from "react-icons/si";

const skillIconMap: Record<string, { icon: IconType; color: string }> = {
  Python: { icon: SiPython, color: "#FFD43B" },
  "C#": { icon: SiSharp, color: "#9B4FCE" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Go: { icon: SiGo, color: "#00ADD8" },
  Java: { icon: SiOpenjdk, color: "#F89820" },
  Rust: { icon: SiRust, color: "#E5E7EB" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  Vue: { icon: SiVuedotjs, color: "#42B883" },
  Angular: { icon: SiAngular, color: "#DD0031" },
  "React Native": { icon: SiReact, color: "#61DAFB" },
  CSS: { icon: SiCss, color: "#1572B6" },
  ".NET": { icon: SiDotnet, color: "#8A63D2" },
  "Node.js": { icon: SiNodedotjs, color: "#68A063" },
  NestJS: { icon: SiNestjs, color: "#E0234E" },
  GraphQL: { icon: SiGraphql, color: "#E10098" },
  "Azure Functions": { icon: Cloud, color: "#00A4EF" },
  AWS: { icon: Cloud, color: "#FF9900" },
  Azure: { icon: Cloud, color: "#0089D6" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  Kafka: { icon: SiApachekafka, color: "#E5E7EB" },
  Cloudflare: { icon: SiCloudflare, color: "#F38020" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Oracle: { icon: Database, color: "#F80000" },
  DynamoDB: { icon: Database, color: "#4053D6" },
  Prisma: { icon: SiPrisma, color: "#D9E4EF" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#FFFFFF" },
  GitLab: { icon: SiGitlab, color: "#FC6D26" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  npm: { icon: SiNpm, color: "#CB3837" },
  Jest: { icon: SiJest, color: "#C21325" }
};

export function SkillCard({
  title,
  items,
  icon: Icon,
  index
}: {
  title: string;
  items: readonly string[];
  icon: LucideIcon;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ delay: index * 0.05, duration: 0.55, ease: easeOutExpo }}
    >
      <Card className="skill-card h-full transition duration-300 hover:-translate-y-1 hover:border-violet-400/40">
        <div className="skill-card-shell">
          <div className="skill-card-shell-bar">
            <span className="skill-card-shell-dot bg-emerald-400" />
            <span className="skill-card-shell-dot bg-sky-400" />
            <span className="skill-card-shell-dot bg-violet-400" />
            <span className="ml-3 text-[10px] uppercase tracking-[0.28em] text-sky-200/65">
              {title}
            </span>
          </div>

          <div className="mb-5 mt-4 flex items-center justify-between gap-3 text-sm font-semibold text-slate-100">
            <div className="inline-flex items-center gap-2">
              <Icon className="h-4 w-4 text-blue-400" />
              <span>{title}</span>
            </div>
            <span className="skill-card-count">{items.length.toString().padStart(2, "0")}</span>
          </div>

          <div className="skill-card-code mb-4">
            <span className="text-sky-300/70">const</span>{" "}
            <span className="text-violet-300/80">{title.toLowerCase().replace(/\s+/g, "_")}</span>{" "}
            <span className="text-slate-500">=</span>{" "}
            <span className="text-emerald-300/70">[{items.length}]</span>
          </div>

          <div className="skill-icons">
            {items.map((skillItem, itemIndex) => {
              const iconItem = skillIconMap[skillItem] ?? { icon: SiOpenjdk, color: "#cbd5e1" };
              const SkillIcon = iconItem.icon;

              return (
                <motion.span
                  key={`${title}-${skillItem}`}
                  className="skill-icon"
                  title={skillItem}
                  aria-label={skillItem}
                  initial={{ opacity: 0, y: 14, rotateX: 20, scale: 0.82 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                  whileHover={{ y: -3, scale: 1.08 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.45, ease: easeOutExpo, delay: itemIndex * 0.02 }}
                  style={
                    { transformStyle: "preserve-3d", "--skill-color": iconItem.color } as CSSProperties
                  }
                >
                  <SkillIcon className="h-6 w-6 skill-icon-glyph" style={{ color: iconItem.color }} aria-hidden />
                  <span className="skill-icon-label">{skillItem}</span>
                </motion.span>
              );
            })}
          </div>

          <div className="skill-card-footer mt-5">
            <span className="skill-card-status">compiled</span>
            <span className="skill-card-status">ready</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
