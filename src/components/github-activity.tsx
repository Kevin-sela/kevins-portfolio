import { Github, GitPullRequest, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function GithubActivity() {
  return (
    <section id="github" className="section github-section">
      <div className="container github-grid">
        <div>
          <SectionHeading eyebrow="Engineering Signal" title="GitHub Activity and Public Work" />
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            I keep public repositories and project code visible so technical teams can inspect how I structure,
            document, and ship software.
          </p>
          <a href="https://github.com/Kevin-sela" className="github-main-link">
            View GitHub Profile <Github className="h-4 w-4" />
          </a>
        </div>
        <div className="github-panel">
          <div className="github-stat">
            <Github className="h-5 w-5" />
            <span>Public repositories and project code</span>
          </div>
          <div className="github-stat">
            <GitPullRequest className="h-5 w-5" />
            <span>Backend, frontend, and cloud-focused work</span>
          </div>
          <div className="github-stat">
            <Star className="h-5 w-5" />
            <span>Best projects highlighted as case studies above</span>
          </div>
        </div>
      </div>
    </section>
  );
}
