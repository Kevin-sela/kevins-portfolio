import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";

function addressLabel(href: string, domain?: string) {
  if (domain) return domain;
  if (href.includes("github.com")) return "github.com";
  if (href.startsWith("/")) return "screens / design";
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
}

export function ProjectCard({
  title,
  badge,
  description,
  tech,
  imageClass,
  href,
  imageSrc,
  mobileSrc,
  domain,
  featured,
  index,
  total
}: Project & { index: number; total: number }) {
  const isGithubRepo = href.includes("github.com");
  const isScreens = href.startsWith("/images/");
  const isLive = !isScreens && !isGithubRepo;
  const linkLabel = isGithubRepo ? "Source code" : isScreens ? "View screens" : "Visit live site";

  return (
    <article
      className={`work-card spot${featured ? " work-card--featured" : ""}${mobileSrc ? " has-phone" : ""}`}
      data-reveal
      style={{ "--d": `${(index % 3) * 80}ms` } as React.CSSProperties}
    >
      {featured ? <span className="work-beam" aria-hidden="true" /> : null}
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="work-media"
        aria-label={`${title}: ${linkLabel}`}
        tabIndex={-1}
      >
        <div className="work-window">
          <div className="work-window-bar" aria-hidden="true">
            <span className="work-window-dots"><i /><i /><i /></span>
            <span className="work-window-url">
              {isLive ? <span className="work-live-dot" /> : null}
              {addressLabel(href, domain)}
            </span>
          </div>
          <div className={`work-shot ${imageClass}`}>
            <Image
              src={imageSrc}
              alt={`${title} screenshot`}
              fill
              sizes={featured ? "(max-width: 900px) 100vw, 60vw" : "(max-width: 900px) 100vw, 40vw"}
              className="work-shot-img"
            />
          </div>
        </div>
        {mobileSrc ? (
          <div className="work-phone" aria-hidden="true">
            <div className="work-phone-screen">
              <Image src={mobileSrc} alt="" fill sizes="180px" className="work-shot-img" />
            </div>
          </div>
        ) : null}
      </a>

      <div className="work-body">
        <div className="work-meta">
          <span className="work-index">
            {String(index).padStart(2, "0")}
            <span>/{String(total).padStart(2, "0")}</span>
          </span>
          {badge ? <span className="work-badge">{badge}</span> : null}
        </div>
        <h3 className="work-title">{title}</h3>
        <p className="work-desc">{description}</p>
        <ul className="work-tech" aria-label="Technologies">
          {tech.slice(0, 4).map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <a href={href} className="work-link" target="_blank" rel="noreferrer">
          <span>{linkLabel}</span>
          {isGithubRepo ? <Github className="h-4 w-4" aria-hidden="true" /> : <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
        </a>
      </div>
    </article>
  );
}
