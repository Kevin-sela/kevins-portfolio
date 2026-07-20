import { Gauge, Globe2, Layers, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const proofItems = [
  { icon: Layers, label: "Framework", value: "Next.js 14 + TypeScript" },
  { icon: Gauge, label: "Performance", value: "Responsive image assets + metadata" },
  { icon: Globe2, label: "Delivery", value: "Vercel-ready static deployment" },
  { icon: ShieldCheck, label: "Quality", value: "SEO, Open Graph, and accessibility basics" },
] as const;

export function SiteProof() {
  return (
    <section id="site-proof" className="section site-proof-section">
      <div className="container site-proof-grid">
        <div>
          <SectionHeading eyebrow="About This Site" title="I Treat This Portfolio Like Production" />
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            I built this as a production-facing Next.js app with structured metadata, optimized public assets,
            reusable sections, and content that makes my engineering value easy to evaluate.
          </p>
        </div>
        <div className="site-proof-panel">
          {proofItems.map((item) => (
            <div key={item.label} className="site-proof-item">
              <item.icon className="h-5 w-5" />
              <div>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
