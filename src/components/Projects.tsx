import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Selected Work" title="Things I've designed, built and shipped" />
          <a href="#case-studies" className="text-link hidden sm:inline-flex">
            How I build <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className="work-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index + 1} total={projects.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
