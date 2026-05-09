"use client";

import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import {
  SiDotnet,
  SiDocker,
  SiGo,
  SiGraphql,
  SiApachekafka,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTypescript,
  SiTerraform,
  SiSharp,
  SiFirebase,
  SiPostgresql,
  SiRedis,
} from "react-icons/si";

type TechItem = { icon: IconType; label: string; color: string };

const row1: TechItem[] = [
  { icon: SiPython, label: "Python", color: "#FFD43B" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "#FFFFFF" },
  { icon: SiNodedotjs, label: "Node.js", color: "#68A063" },
  { icon: SiDotnet, label: ".NET", color: "#8A63D2" },
  { icon: SiDocker, label: "Docker", color: "#2496ED" },
  { icon: SiKubernetes, label: "Kubernetes", color: "#326CE5" },
  { icon: FaAws, label: "AWS", color: "#FF9900" },
  { icon: SiGo, label: "Go", color: "#00ADD8" },
  { icon: SiSharp, label: "C#", color: "#9B4FCE" },
];

const row2: TechItem[] = [
  { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { icon: SiMysql, label: "MySQL", color: "#4479A1" },
  { icon: SiGraphql, label: "GraphQL", color: "#E10098" },
  { icon: SiApachekafka, label: "Kafka", color: "#E5E7EB" },
  { icon: SiTerraform, label: "Terraform", color: "#7B42BC" },
  { icon: SiFirebase, label: "Firebase", color: "#FFCA28" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
  { icon: SiRedis, label: "Redis", color: "#DC382D" },
];

function MarqueeRow({ items, reverse = false }: { items: TechItem[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-container">
      <div className={reverse ? "marquee-track-reverse" : "marquee-track"}>
        {doubled.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="marquee-item">
              <Icon className="h-5 w-5 shrink-0" style={{ color: item.color }} />
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function TechMarquee() {
  return (
    <section className="marquee-section">
      <div className="marquee-label">Tech Stack</div>
      <div className="grid gap-4">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
