"use client";

import { Code2, FileDown, Github, Sun } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Contact"] as const;

export function Navbar() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE_OUT }}
      className="navbar"
    >
      <div className="container nav-inner">
        <a href="#home" className="inline-flex items-center gap-3 font-bold tracking-wide text-white">
          <Code2 className="h-8 w-8 text-violet-400" />
          <span>KELVIN OFORI</span>
        </a>
        <nav className="nav-links hidden lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={item === "Home" ? "text-violet-400" : undefined}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://github.com/Kevin-sela" aria-label="GitHub" className="hidden text-slate-200 transition hover:text-violet-300 sm:block">
            <Github className="h-5 w-5" />
          </a>
          <Sun className="hidden h-5 w-5 text-amber-300 sm:block" />
          <a
            href="/resume/Kelvin_Ofori_org_Resume.docx"
            className="inline-flex items-center gap-2 rounded-lg border border-violet-400/60 px-4 py-2 text-sm font-semibold text-slate-50 transition hover:bg-violet-500/15"
          >
            Resume <FileDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
