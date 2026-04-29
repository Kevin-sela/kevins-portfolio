import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-5">
      <div className="container flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <a href="#home" className="inline-flex items-center gap-2 font-bold text-white">
          <Code2 className="h-6 w-6 text-violet-400" /> KELVIN OFORI
        </a>
        <p>Copyright 2026 Kelvin Ofori. All rights reserved.</p>
        <p>Built with React - 21st.dev - Bit Components</p>
      </div>
    </footer>
  );
}
