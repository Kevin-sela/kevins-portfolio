"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

export type FrameScene = {
  id: string;
  element: React.ReactNode;
};

type Dir = 1 | -1;

const EASE = [0.16, 1, 0.3, 1] as const;

const scene3d = {
  enter: (dir: Dir) => ({
    opacity: 0,
    rotateY: dir === 1 ? 10 : -10,
    rotateX: 4,
    x: dir === 1 ? 46 : -46,
    z: 140,
    scale: 0.985,
    filter: "blur(10px)"
  }),
  center: {
    opacity: 1,
    rotateY: 0,
    rotateX: 0,
    x: 0,
    z: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE }
  },
  exit: (dir: Dir) => ({
    opacity: 0,
    rotateY: dir === 1 ? -8 : 8,
    rotateX: -2,
    x: dir === 1 ? -34 : 34,
    z: -220,
    scale: 0.98,
    filter: "blur(6px)",
    transition: { duration: 0.7, ease: EASE }
  })
} as const;

const scene2d = {
  enter: (_dir: Dir) => ({ opacity: 0, y: 12 }),
  center: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
  exit: (_dir: Dir) => ({ opacity: 0, y: -8, transition: { duration: 0.25, ease: EASE } })
} as const;

export function FrameScenes({
  scenes,
  activeId,
  dir
}: {
  scenes: FrameScene[];
  activeId: string;
  dir: Dir;
}) {
  const reduceMotion = useReducedMotion();

  const active = useMemo(() => {
    const found = scenes.find((s) => s.id === activeId);
    return found ?? scenes[0];
  }, [activeId, scenes]);

  if (!active) return null;

  const variants = reduceMotion ? scene2d : scene3d;

  return (
    <div style={{ perspective: 1400, transformStyle: "preserve-3d" }}>
      <AnimatePresence mode="wait" initial={false} custom={dir}>
        <motion.div
          key={active.id}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        >
          {active.element}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

