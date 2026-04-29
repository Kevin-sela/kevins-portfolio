import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";
import { forwardRef } from "react";

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function Card({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "glass rounded-lg",
        className
      )}
      {...props}
    />
  );
  }
);
