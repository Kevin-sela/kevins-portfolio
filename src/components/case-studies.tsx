import { ArrowUpRight, BarChart3, CheckCircle2, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const caseStudies = [
  {
    title: "Relitix Real-Time API Platform",
    problem: "Analytics workflows needed reliable APIs, real-time data movement, and predictable cloud cost.",
    solution: "Designed REST microservices, containerized deployments, AWS service boundaries, and Cython hot-path optimization.",
    impact: ["10,000+ daily requests", "~30% lower cloud costs", "99.9% uptime target"],
    imageClass: "case-study-relitix",
  },
  {
    title: "INNORIK ERP Platform",
    problem: "Internal operations needed secure role-based workflows instead of fragmented manual processes.",
    solution: "Built .NET 6 APIs, React screens, JWT authentication, RBAC, and QA-backed test workflows.",
    impact: ["200+ concurrent users", "60% fewer production bugs", "Role-secured service layers"],
    imageClass: "case-study-erp",
  },
  {
    title: "Yanioba Road Safety Platform",
    problem: "Road incident reporting needed faster community feedback and visible alert flows.",
    solution: "Shipped mobile-first reporting, real-time alerts, and an end-to-end product flow for Ghanaian road users.",
    impact: ["Live reporting workflow", "Community alert model", "Mobile-first UX"],
    imageClass: "case-study-yanioba",
  },
] as const;

export function CaseStudies() {
  return (
    <section id="case-studies" className="section">
      <div className="container">
        <div className="case-study-header">
          <SectionHeading eyebrow="Case Studies" title="How I Solve Business Problems" />
          <p>
            I frame my strongest work around the problem, the architecture choices I made, and the outcomes a
            technical team can evaluate quickly.
          </p>
        </div>
        <div className="case-study-grid">
          {caseStudies.map((item) => (
            <article
              key={item.title}
              className="case-study-card"
            >
              <div className={`case-study-shot ${item.imageClass}`} />
              <div className="case-study-body">
                <h3>{item.title}</h3>
                <div className="case-study-block">
                  <Wrench className="h-4 w-4" />
                  <p><strong>Problem:</strong> {item.problem}</p>
                </div>
                <div className="case-study-block">
                  <CheckCircle2 className="h-4 w-4" />
                  <p><strong>Solution:</strong> {item.solution}</p>
                </div>
                <div className="case-study-impact">
                  <BarChart3 className="h-4 w-4" />
                  {item.impact.map((impact) => (
                    <span key={impact}>{impact}</span>
                  ))}
                </div>
                <a href="#contact" className="case-study-link">
                  Discuss this work <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
