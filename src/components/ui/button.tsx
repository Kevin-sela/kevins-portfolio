import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "btn group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400",
        variant === "primary" &&
          "bg-ember text-[#0e0d0b] hover:-translate-y-0.5 hover:bg-[#f1ece2]",
        variant === "outline" &&
          "border border-violet-400/70 bg-slate-950/30 text-white hover:bg-violet-500/10",
        variant === "ghost" && "text-slate-300 hover:text-violet-300",
        className
      )}
      {...props}
    />
  );
}
