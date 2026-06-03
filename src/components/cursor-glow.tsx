"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const INTERACTIVE =
  "a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]";

export function CursorGlow() {
  const reduceMotion = useReducedMotion();

  // Exact cursor coordinates
  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);

  // Glow blob: very slow spring — large ambient background effect
  const gx = useSpring(cx, { stiffness: 80, damping: 20, mass: 1.2 });
  const gy = useSpring(cy, { stiffness: 80, damping: 20, mass: 1.2 });

  // Ring: luxurious lag behind the cursor
  const rx = useSpring(cx, { stiffness: 200, damping: 30, mass: 0.35 });
  const ry = useSpring(cy, { stiffness: 200, damping: 30, mass: 0.35 });

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

    const move = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      cx.set(e.clientX);
      cy.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(INTERACTIVE)) setHovered(true);
    };

    const out = (e: MouseEvent) => {
      if (!(e.relatedTarget as HTMLElement | null)?.closest(INTERACTIVE))
        setHovered(false);
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("mouseover", over, { passive: true });
    document.addEventListener("mouseout", out, { passive: true });

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, [reduceMotion, cx, cy]);

  if (reduceMotion) return null;

  return (
    <>
      {/* Ambient glow blob — very slow, painterly background effect */}
      <motion.div
        aria-hidden
        id="cursor-glow"
        className="pointer-events-none fixed left-0 top-0 z-[20] h-[320px] w-[320px] rounded-full opacity-25 blur-[80px] mix-blend-screen"
        style={{ x: gx, y: gy, translateX: "-50%", translateY: "-50%" }}
      />

      {/* Ring — lagged follow with luxury spring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[998]"
        style={{ x: rx, y: ry }}
      >
        <motion.div
          className="absolute rounded-full border border-white/50"
          initial={{ width: 36, height: 36, x: -18, y: -18 }}
          animate={{
            width: hovered ? 56 : 36,
            height: hovered ? 56 : 36,
            x: hovered ? -28 : -18,
            y: hovered ? -28 : -18,
            borderColor: hovered
              ? "rgba(139, 92, 246, 0.9)"
              : "rgba(255, 255, 255, 0.5)",
            backgroundColor: hovered
              ? "rgba(139, 92, 246, 0.08)"
              : "transparent",
            boxShadow: hovered
              ? "0 0 20px rgba(139, 92, 246, 0.35), inset 0 0 20px rgba(139, 92, 246, 0.06)"
              : "none",
          }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>

      {/* Dot — exact cursor position, vanishes on hover */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[999]"
        style={{ x: cx, y: cy }}
      >
        <motion.div
          className="absolute -left-[3px] -top-[3px] h-[6px] w-[6px] rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.85)]"
          animate={{ scale: hovered ? 0 : 1 }}
          transition={{ duration: 0.18 }}
        />
      </motion.div>
    </>
  );
}
