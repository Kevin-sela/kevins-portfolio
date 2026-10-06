"use client";

import { MotionConfig } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";
import { SmoothScroll } from "@/components/smooth-scroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: EASE_OUT }}>
      <SmoothScroll>{children}</SmoothScroll>
    </MotionConfig>
  );
}
