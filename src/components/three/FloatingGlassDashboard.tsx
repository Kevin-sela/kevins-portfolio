"use client";

import { Html } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";
import { person } from "@/content/site";

export default function FloatingGlassDashboard() {
  const ref = useRef<Group>(null);

  useFrame((state) => {
    if (!ref.current) {
      return;
    }

    const t = state.clock.elapsedTime;
    ref.current.rotation.y = Math.sin(t * 0.35) * 0.12;
    ref.current.rotation.x = Math.sin(t * 0.25) * 0.06;
    ref.current.position.y = Math.sin(t * 0.6) * 0.12;
  });

  return (
    <group ref={ref} position={[0, 0, 0]}>
      <mesh>
        <boxGeometry args={[4.8, 2.8, 0.12]} />
        <meshPhysicalMaterial
          color="#111827"
          transparent
          opacity={0.35}
          roughness={0.12}
          metalness={0.35}
          transmission={0.35}
          thickness={0.8}
        />
      </mesh>

      <mesh position={[0, 0, 0.08]}>
        <planeGeometry args={[4.9, 2.9]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.08} />
      </mesh>

      <Html transform position={[0, 0, 0.18]} scale={0.42} className="w-[720px]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
          <p className="text-sm text-violet-300">SOFTWARE ENGINEER</p>
          <h1 className="text-6xl font-bold">
            {person.name.split(" ")[0]}{" "}
            <span className="text-violet-400">{person.name.split(" ")[1]}</span>
          </h1>
          <p className="mt-4 text-slate-300">
            {person.tagline}
          </p>
        </div>
      </Html>
    </group>
  );
}
