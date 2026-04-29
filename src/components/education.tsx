import { education } from "@/content/site";
import { Reveal } from "@/components/reveal";

export function Education() {
  return (
    <div className="grid gap-4">
      {education.map((e, idx) => (
        <Reveal key={e.school} delay={idx * 0.05}>
          <div className="glass rounded-2xl p-5 shadow-glow">
            <div className="text-sm font-semibold">{e.program}</div>
            <div className="mt-1 text-sm text-muted">{e.school}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
