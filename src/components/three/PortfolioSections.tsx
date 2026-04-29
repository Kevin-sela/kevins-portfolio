import {
  experience,
  person as personContent,
  skills as skillsContent,
  type ExperienceItem,
  type Project,
} from "@/content/site";

type PortfolioSectionsProps = {
  person: typeof personContent;
  skills: typeof skillsContent;
  projects: Project[];
};

export default function PortfolioSections({
  person,
  skills,
  projects,
}: PortfolioSectionsProps) {
  return (
    <div className="w-screen">
      <section className="flex h-[200vh] items-center justify-center" />

      <section className="flex h-screen items-center justify-center px-8">
        <div className="max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
          <h2 className="text-4xl font-bold text-violet-300">About</h2>
          <p className="mt-4 text-slate-300">{person.tagline}</p>
          <ul className="mt-6 space-y-2 text-sm text-slate-400">
            {person.heroBullets?.map((bullet, index) => (
              <li key={index} className="flex items-start gap-2">
                <span aria-hidden="true">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="flex h-screen items-center justify-center px-8">
        <div className="w-full max-w-4xl">
          <h2 className="mb-12 text-center text-5xl font-bold text-white">Skills</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {skills.flatMap((group) => group.items.slice(0, 18)).map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-violet-400/30 bg-violet-500/10 px-6 py-4 text-center text-white shadow-[0_0_35px_rgba(139,92,246,.35)] backdrop-blur-xl"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex h-screen items-center justify-center px-8">
        <div className="max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
          <h2 className="mb-8 text-4xl font-bold text-violet-300">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp: ExperienceItem, index: number) => (
              <div key={index}>
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <p className="text-slate-400">
                  {exp.company} | {exp.start} - {exp.end}
                </p>
                <ul className="mt-4 space-y-2 text-slate-300">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2">
                      <span aria-hidden="true">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex h-[150vh] items-center justify-center px-8">
        <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project: Project) => (
            <div
              key={project.name}
              className="flex h-80 flex-col rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
            >
              <h3 className="mb-4 text-2xl font-bold">{project.name}</h3>
              <p className="mb-4 flex-1 text-slate-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-violet-400/30 bg-violet-500/20 px-3 py-1 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex h-screen items-center justify-center px-8">
        <div className="max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-xl">
          <h2 className="mb-8 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-5xl font-bold text-transparent">
            Contact
          </h2>
          <p className="mb-8 text-slate-300">Ready to build something? Let&apos;s talk.</p>
          <a
            href={`mailto:${person.email}`}
            className="inline-flex items-center gap-2 rounded-2xl bg-violet-600 px-8 py-4 font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-violet-700 hover:shadow-[0_20px_40px_rgba(139,92,246,0.4)]"
          >
            Say Hello
          </a>
        </div>
      </section>
    </div>
  );
}
