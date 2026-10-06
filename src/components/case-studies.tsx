import Image from "next/image";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const caseStudies = [
  {
    category: "Backend · Cloud",
    title: "Relitix Real-Time API Platform",
    image: "/assets/relitix-homepage.webp",
    imageAlt: "Relitix brokerage performance platform homepage",
    imageFit: "cover",
    problem: "Analytics workflows needed reliable APIs, real-time data movement, and predictable cloud cost.",
    approach: "Designed REST microservices and AWS service boundaries, then optimized Cython hot paths.",
    outcomes: ["Real-time API services", "AWS architecture", "Cython performance tuning"],
  },
  {
    category: "Full-stack · Enterprise",
    title: "ERP Platform",
    image: "/projects/erp.svg",
    imageAlt: "ERP platform interface illustration",
    imageFit: "cover",
    problem: "Internal operations needed secure role-based workflows instead of fragmented manual processes.",
    approach: "Built .NET APIs, React workflows, JWT authentication, role access, and QA-backed release checks.",
    outcomes: [".NET API design", "JWT and role security", "React workflow UI"],
  },
  {
    category: "Mobile · Community",
    title: "Yanioba Road Safety Platform",
    image: "/WhatsApp%20Image%202026-06-29%20at%204.14.50%20PM%20(1).jpeg",
    imageAlt: "Yanioba mobile incident map and active rescue report",
    imageFit: "contain",
    problem: "Road incident reporting needed faster community feedback and visible alert flows.",
    approach: "Shipped mobile-first reporting, live incident updates, and an end-to-end road-safety flow.",
    outcomes: ["Mobile-first reporting", "Live incident updates", "Community alerts"],
  },
] as const;

export function CaseStudies() {
  return (
    <section id="case-studies" className="section">
      <div className="container">
        <div className="case-study-header">
          <SectionHeading eyebrow="How I Build" title="From Product Need to Shipped System" />
          <p>
            I connect the user problem to the system design, then show the engineering decisions and product outcomes behind each project.
          </p>
        </div>
        <div className="case-study-grid">
          {caseStudies.map((item, index) => (
            <article key={item.title} className="case-study-card">
              <div className={`case-study-shot ${item.imageFit === "contain" ? "case-study-shot-contain" : ""}`}>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className="case-study-image"
                />
                <div className="case-study-shot-meta">
                  <span>CASE {String(index + 1).padStart(2, "0")}</span>
                  <span>{item.category}</span>
                </div>
                <div className="case-study-shot-caption">
                  <span>{item.title}</span>
                  <ChevronRight aria-hidden="true" className="h-4 w-4" />
                </div>
              </div>
              <div className="case-study-body">
                <h3>{item.title}</h3>
                <div className="case-study-step">
                  <span className="case-study-step-label">The challenge</span>
                  <p>{item.problem}</p>
                </div>
                <div className="case-study-step">
                  <span className="case-study-step-label">The approach</span>
                  <p>{item.approach}</p>
                </div>
                <ul className="case-study-outcomes" aria-label="Engineering outcomes">
                  {item.outcomes.map((outcome) => (
                    <li key={outcome}><Check aria-hidden="true" />{outcome}</li>
                  ))}
                </ul>
                <a href="#contact" className="case-study-link">
                  Discuss this work <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
