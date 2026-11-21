import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";

const lookingFor = [
  ["Role", "Backend, full-stack or cloud engineer"],
  ["Setup", "Remote, hybrid, or relocation"],
  ["Start", "Available immediately"],
] as const;

export function FeedAbout() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading eyebrow="About" title="Engineer for the boring, critical parts" />
        <div className="about-grid">
          <div className="about-copy" data-reveal>
            <p>
              I&rsquo;m a software engineer with <strong>7+ years</strong> of designing and shipping web platforms,
              APIs and developer tooling. Most of my work lives in the backend: <strong>.NET, Python and Node</strong>{" "}
              services, data pipelines, and the AWS / Azure infrastructure they run on.
            </p>
            <p>
              Right now I build real-time APIs and microservices for a brokerage analytics platform, where I cut
              cloud costs by about 30% and doubled Python throughput. On the side I ship products for my own
              community in Ghana, like <a href="https://asiewie.com/" target="_blank" rel="noreferrer">Asiewie</a>{" "}
              and <a href="https://www.yanioba.com/" target="_blank" rel="noreferrer">Yanioba</a>.
            </p>
            <p>
              I care about systems that stay up, code the next engineer can read, and interfaces people don&rsquo;t
              have to think about.
            </p>
          </div>
          <aside className="about-side" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
            <div className="about-photo">
              <Image src="/images/kevs-portfolio.jpeg" alt="Kelvin Ofori" fill sizes="220px" className="object-cover" />
            </div>
            <dl className="about-facts">
              {lookingFor.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
