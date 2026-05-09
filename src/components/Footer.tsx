import { Code2, Github, Mail } from "lucide-react";

const navLinks = ["About", "Skills", "Projects", "Experience", "Contact"] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <a href="#home" className="inline-flex items-center gap-2 font-bold text-white">
              <Code2 className="h-6 w-6 text-violet-400" />
              KELVIN OFORI
            </a>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Backend Software Engineer specialising in distributed systems, cloud infrastructure, and full-stack product delivery.
            </p>
          </div>
          <div className="flex gap-12 text-sm">
            <div>
              <p className="mb-3 font-semibold text-slate-200">Navigate</p>
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="mt-2 block text-slate-400 transition hover:text-violet-300"
                >
                  {link}
                </a>
              ))}
            </div>
            <div>
              <p className="mb-3 font-semibold text-slate-200">Connect</p>
              <a
                href="https://github.com/Kevin-sela"
                className="mt-2 flex items-center gap-2 text-slate-400 transition hover:text-violet-300"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="mailto:kofori787@gmail.com"
                className="mt-2 flex items-center gap-2 text-slate-400 transition hover:text-violet-300"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-white/[0.06] pt-6 text-sm text-slate-500 sm:flex-row sm:justify-between">
          <p>© 2026 Kelvin Ofori. All rights reserved.</p>
          <p>Built with Next.js · Tailwind CSS · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
