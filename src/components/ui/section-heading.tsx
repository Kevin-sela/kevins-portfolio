"use client";

import { LineReveal } from "@/components/line-reveal";

export function SectionHeading({
  eyebrow,
  title,
  align = "left"
}: {
  eyebrow: string;
  title: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : undefined}>
      <LineReveal>
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-400">
          {eyebrow}
        </p>
      </LineReveal>
      <div className="mt-3">
        <LineReveal delay={0.06}>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
        </LineReveal>
      </div>
      <span className={`section-heading-accent${align === "center" ? " mx-auto" : ""}`} />
    </div>
  );
}
