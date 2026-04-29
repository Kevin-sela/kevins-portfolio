import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "badge inline-flex items-center rounded-md border border-blue-300/10 bg-slate-950/70 px-2.5 py-1 text-[11px] font-semibold text-slate-300",
        className
      )}
      {...props}
    />
  );
}
