"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { nav, person, socials } from "@/content/site";
import { cn } from "@/lib/cn";
import { useActiveSection } from "@/hooks/use-active-section";
import { Command, Moon, Sun } from "lucide-react";
import { LayoutGroup, motion } from "framer-motion";

export function Header() {
  const active = useActiveSection();
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const resolvedTheme = useMemo(() => {
    if (!mounted) return "system";
    return theme === "system" ? systemTheme : theme;
  }, [mounted, theme, systemTheme]);

  return (
    <div className="fixed left-0 top-0 z-50 w-full">
      <div className="noise border-b border-border/70 bg-bg/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#hero" className="fancy-ring inline-flex items-center gap-2 rounded-lg px-2 py-1">
            <span className="h-2 w-2 rounded-full bg-accent-2 shadow-[0_0_0_4px_hsl(var(--accent-2)/0.18)]" />
            <span className="text-sm font-semibold tracking-tight">{person.name}</span>
            <span className="hidden text-sm text-muted sm:inline">{person.title}</span>
          </a>

          <LayoutGroup>
            <nav className="hidden items-center gap-1 md:flex">
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "fancy-ring relative rounded-lg px-3 py-2 text-sm text-muted transition hover:text-fg",
                    active === item.id && "text-fg"
                  )}
                >
                  {active === item.id ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg border border-border bg-card/60 shadow-glow"
                      transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
                    />
                  ) : null}
                  <span className="relative z-10">{item.label}</span>
                </a>
              ))}
            </nav>
          </LayoutGroup>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Open command palette"
              data-command-palette-trigger
              className="fancy-ring hidden items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted shadow-glow md:inline-flex"
              onClick={() => window.dispatchEvent(new Event("command-palette:open"))}
            >
              <Command className="h-4 w-4" />
              <span className="hidden lg:inline">Command</span>
              <kbd className="ml-1 rounded bg-bg px-1.5 py-0.5 text-xs text-muted">
                Ctrl K
              </kbd>
            </button>

            <button
              type="button"
              aria-label="Toggle theme"
              className="fancy-ring inline-flex items-center justify-center rounded-lg border border-border bg-card p-2 shadow-glow"
              onClick={() => {
                const next = resolvedTheme === "dark" ? "light" : "dark";
                setTheme(next);
              }}
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <div className="hidden items-center gap-1 sm:flex">
              {socials.slice(0, 2).map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="fancy-ring inline-flex items-center justify-center rounded-lg border border-border bg-card p-2 text-muted shadow-glow transition hover:text-fg"
                  aria-label={s.label}
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
