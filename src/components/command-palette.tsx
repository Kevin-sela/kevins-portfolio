"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { nav, person, socials } from "@/content/site";
import { cn } from "@/lib/cn";
import { Command, CornerDownLeft, Search, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

type Action = {
  label: string;
  hint?: string;
  onRun: () => void;
  icon?: React.ComponentType<{ className?: string }>;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const actions = useMemo<Action[]>(() => {
    const sectionActions: Action[] = nav.map((n) => ({
      label: `Go to ${n.label}`,
      hint: `#${n.id}`,
      icon: Command,
      onRun: () => {
        document.getElementById(n.id)?.scrollIntoView({ behavior: "smooth" });
      }
    }));

    const socialActions: Action[] = socials.map((s) => ({
      label: `Open ${s.label}`,
      hint: "external",
      icon: s.icon,
      onRun: () => window.open(s.href, "_blank", "noreferrer")
    }));

    const utility: Action[] = [
      {
        label: "Email Kelvin",
        hint: person.email,
        icon: Search,
        onRun: () => {
          const subject = encodeURIComponent("Interview / opportunity");
          const body = encodeURIComponent(
            `Hi Kelvin,\n\nI found your portfolio and would like to discuss...\n\n—`
          );
          window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`;
        }
      }
    ];

    return [...sectionActions, ...socialActions, ...utility];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter((a) => a.label.toLowerCase().includes(q) || a.hint?.toLowerCase().includes(q));
  }, [actions, query]);

  useEffect(() => {
    const openListener = () => setOpen(true);
    window.addEventListener("command-palette:open", openListener);
    return () => window.removeEventListener("command-palette:open", openListener);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    const id = window.setTimeout(() => inputRef.current?.focus(), 50);
    return () => window.clearTimeout(id);
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
          className="fixed inset-0 z-[60] flex items-start justify-center bg-black/50 px-4 pt-24 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: EASE_OUT }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <motion.div
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-card shadow-glow"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: EASE_OUT }}
          >
            <div className="flex items-center gap-2 border-b border-border bg-bg px-4 py-3">
              <Search className="h-4 w-4 text-muted" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command…"
                className="w-full bg-transparent text-sm text-fg placeholder:text-muted focus:outline-none"
              />
              <button
                type="button"
                className="fancy-ring rounded-lg p-1.5 text-muted hover:text-fg"
                aria-label="Close command palette"
                onClick={() => setOpen(false)}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[52vh] overflow-auto p-2">
              {filtered.length ? (
                filtered.map((a) => (
                  <button
                    key={`${a.label}:${a.hint ?? ""}`}
                    type="button"
                    className={cn(
                      "fancy-ring flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition hover:bg-bg"
                    )}
                    onClick={() => {
                      a.onRun();
                      setOpen(false);
                    }}
                  >
                    <span className="inline-flex items-center gap-2">
                      {a.icon ? <a.icon className="h-4 w-4 text-muted" /> : null}
                      <span className="text-fg">{a.label}</span>
                    </span>
                    <span className="text-xs text-muted">{a.hint}</span>
                  </button>
                ))
              ) : (
                <div className="px-3 py-10 text-center text-sm text-muted">No results.</div>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-border bg-bg px-4 py-3 text-xs text-muted">
              <span className="inline-flex items-center gap-1">
                <CornerDownLeft className="h-3.5 w-3.5" /> Run
              </span>
              <span className="inline-flex items-center gap-2">
                <kbd className="rounded bg-card px-1.5 py-0.5">Esc</kbd> Close
              </span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
