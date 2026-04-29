"use client";

import { Float, Html } from "@react-three/drei";
import { projects } from "@/content/site";

export default function ProjectPlanets() {
  const projectPositions: [number, number, number][] = [
    [-2.2, -4.6, 0],
    [0, -4.9, -0.4],
    [2.2, -4.6, 0],
  ];

  return (
    <group>
      {projects.slice(0, 3).map((project, i) => (
        <Float key={project.name} speed={1 + i * 0.2} rotationIntensity={0.35}>
          <group position={projectPositions[i]}>
            <mesh>
              <boxGeometry args={[1.5, 1, 0.08]} />
              <meshStandardMaterial
                color={i === 1 ? "#8b5cf6" : "#1e293b"}
                emissive={i === 1 ? "#4c1d95" : "#111827"}
                emissiveIntensity={0.5}
                roughness={0.25}
                metalness={0.45}
              />
            </mesh>
            <Html transform position={[0, 0, 0.08]} scale={0.14}>
              <div className="w-48 rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-white shadow-2xl backdrop-blur-xl">
                <p className="line-clamp-2 text-sm font-semibold">{project.name}</p>
                <p className="mt-2 line-clamp-3 text-xs text-slate-300">{project.description}</p>
              </div>
            </Html>
          </group>
        </Float>
      ))}
    </group>
  );
}
