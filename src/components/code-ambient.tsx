"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const snippets = [
  [
    "const api = createService({",
    "  runtime: 'edge',",
    "  auth: 'jwt',",
    "  cache: 'stale-while-revalidate'",
    "});",
  ],
  [
    "export async function deploy() {",
    "  await verifyBuild();",
    "  await ship({ region: 'eu-west-1' });",
    "}",
  ],
  [
    "type Stack = 'backend' | 'frontend' | 'cloud';",
    "const focus: Stack[] = ['backend', 'cloud'];",
    "const status = 'operational';",
  ],
] as const;

export function CodeAmbient() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const yA = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -120]);
  const yB = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 90]);
  const yC = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -70]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.18, 0.3, 0.24, 0.16]);

  return (
    <div aria-hidden className="code-ambient">
      <motion.div className="code-card code-card-a" style={{ y: yA, opacity }}>
        {snippets[0].map((line) => (
          <div key={line}>{line}</div>
        ))}
      </motion.div>
      <motion.div className="code-card code-card-b" style={{ y: yB, opacity }}>
        {snippets[1].map((line) => (
          <div key={line}>{line}</div>
        ))}
      </motion.div>
      <motion.div className="code-card code-card-c" style={{ y: yC, opacity }}>
        {snippets[2].map((line) => (
          <div key={line}>{line}</div>
        ))}
      </motion.div>
      <div className="code-grid-overlay" />
    </div>
  );
}
