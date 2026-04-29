"use client";

import { Float, Html } from "@react-three/drei";
import { skills } from "@/content/site";

const skillPositions: [number, number, number][] = [
  [-2.4, -2.2, 0],
  [-0.8, -2.5, 0.4],
  [0.8, -2.3, -0.2],
  [2.3, -2.6, 0.3],
  [-1.6, -3.3, -0.3],
  [1.6, -3.2, 0.2],
];

export default function HologramSkills() {
  const featuredSkills = [...new Set(skills.flatMap((group) => group.items))].slice(
    0,
    skillPositions.length,
  );

  return (
    <group>
      {featuredSkills.map((label, i) => {
        const [x, y, z] = skillPositions[i];

        return (
        <Float key={label} speed={1.4 + i * 0.1} floatIntensity={0.5}>
          <Html transform position={[x, y, z]} scale={0.26}>
            <div className="rounded-2xl border border-violet-400/30 bg-violet-500/10 px-6 py-4 text-white backdrop-blur-xl shadow-[0_0_35px_rgba(139,92,246,.35)]">
              {label}
            </div>
          </Html>
        </Float>
        );
      })}
    </group>
  );
}
