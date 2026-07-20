import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "rise" | "tilt" | "float" | "burst" | "pull";

export function SectionTransition({
  children,
  className,
  variant = "rise",
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}) {
  return (
    <div className={cn("section-transition-shell", `section-transition-${variant}`, className)}>
      {children}
    </div>
  );
}
