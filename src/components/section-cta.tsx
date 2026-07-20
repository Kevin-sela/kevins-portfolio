import { ArrowRight } from "lucide-react";

export function SectionCTA({
  label,
  href = "#contact",
}: {
  label: string;
  href?: string;
}) {
  return (
    <div className="container section-cta-wrap">
      <a href={href} className="section-cta">
        <span>{label}</span>
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
