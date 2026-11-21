"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { Code2 } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillIconMap } from "@/components/ui/skill-card";

// Anything named in a real role's tech list is marked "used in production".
const inProduction = new Set<string>(experience.flatMap((e) => [...e.tech]));
const aliases: Record<string, string> = { "C#": "C#", ".NET": "C#" };
const isProd = (s: string) => inProduction.has(s) || inProduction.has(aliases[s] ?? "");

/**
 * Stack as tabs (pattern from shadcn/ui Tabs): one category at a time, with a
 * sliding indicator, arrow-key navigation, and logos that turn gold on hover.
 */
export function Skills() {
  const [tab, setTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    const last = skillGroups.length - 1;
    const next =
      e.key === "Home" ? 0 : e.key === "End" ? last : e.key === "ArrowRight" ? (tab === last ? 0 : tab + 1) : tab === 0 ? last : tab - 1;
    setTab(next);
    tabRefs.current[next]?.focus();
  };

  const group = skillGroups[tab];

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading eyebrow="Stack" title="Tools I reach for" />
        <p className="section-lede">
          Grouped the way I think about them. <span className="prod-key"><i aria-hidden="true" /> used in production</span>
        </p>

        <div className="tabs" role="tablist" aria-label="Skill categories" onKeyDown={onKey}>
          {skillGroups.map((g, i) => (
            <button
              key={g.title}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${i}`}
              aria-selected={tab === i}
              aria-controls="stack-panel"
              tabIndex={tab === i ? 0 : -1}
              className={`tab${tab === i ? " is-active" : ""}`}
              onClick={() => setTab(i)}
            >
              {g.title}
              <span className="tab-count">{g.items.length}</span>
            </button>
          ))}
        </div>

        <div id="stack-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} className="stack-grid" key={group.title}>
          {group.items.map((item, i) => {
            const meta = skillIconMap[item];
            const Icon = meta?.icon ?? Code2;
            return (
              <div
                key={item}
                className="stack-tile spot"
                style={{ "--i": i } as React.CSSProperties}
              >
                <Icon className="stack-icon" aria-hidden="true" />
                <span className="stack-name">{item}</span>
                {isProd(item) ? <span className="stack-prod" title="Used in production" aria-label="used in production" /> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
