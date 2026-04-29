export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
export const EASE_OUT = easeOutExpo;
export const EASE_IN_OUT = [0.4, 0, 0.2, 1] as const;

export const motionConfig = {
  fast: 0.35,
  normal: 0.75,
  slow: 1.15,
  cinematic: 1.45
} as const;

export const DURATIONS = {
  fast: 0.18,
  base: 0.28,
  slow: 0.45
} as const;

export const SPRINGS = {
  soft: { stiffness: 140, damping: 22, mass: 0.8 },
  firm: { stiffness: 220, damping: 26, mass: 0.7 }
} as const;

export const fadeUp = (y = 10) => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { duration: DURATIONS.slow, ease: easeOutExpo } }
});

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: DURATIONS.base, ease: easeOutExpo } }
} as const;
