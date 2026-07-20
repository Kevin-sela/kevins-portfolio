import { SectionHeading } from "@/components/ui/section-heading";

const logos = ["APTIVEON", "RELITIX", "INNORIK USA", "FREELANCE CLIENTS", "YANI OBA"] as const;

export function TrustLogos() {
  return (
    <section className="trust-section">
      <div className="container">
        <SectionHeading eyebrow="Trusted By" title="Teams I Have Built With" />
        <div className="trust-logo-row">
          {logos.map((logo) => (
            <div key={logo} className="trust-logo">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
