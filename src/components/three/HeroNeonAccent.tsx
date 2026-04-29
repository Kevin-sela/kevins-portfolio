"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function AccentCluster() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.18;
    groupRef.current.rotation.x = Math.cos(t * 0.16) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.8} />
      <pointLight position={[2, 2, 3]} intensity={18} color="#60a5fa" />
      <pointLight position={[-2, -1, 3]} intensity={16} color="#8b5cf6" />

      <Float speed={1.3} rotationIntensity={0.22} floatIntensity={0.65}>
        <mesh position={[-1.25, 0.45, -0.8]}>
          <sphereGeometry args={[0.72, 48, 48]} />
          <meshPhysicalMaterial
            color="#7c3aed"
            transparent
            opacity={0.28}
            roughness={0.15}
            metalness={0.35}
            transmission={0.7}
            thickness={1}
          />
        </mesh>
      </Float>

      <Float speed={1.55} rotationIntensity={0.35} floatIntensity={0.8}>
        <mesh position={[1.1, -0.55, -1.2]} rotation={[0.4, 0.7, 0]}>
          <boxGeometry args={[1.4, 0.9, 0.08]} />
          <meshStandardMaterial
            color="#0f172a"
            emissive="#1d4ed8"
            emissiveIntensity={0.55}
            roughness={0.24}
            metalness={0.52}
          />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.5}>
        <Html transform position={[0.05, 0.05, 0.6]} scale={0.22}>
          <div className="rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-slate-200 shadow-[0_0_40px_rgba(96,165,250,0.18)] backdrop-blur-xl">
            Neon systems
          </div>
        </Html>
      </Float>
    </group>
  );
}

export default function HeroNeonAccent() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 opacity-90">
      <Canvas camera={{ position: [0, 0, 4.8], fov: 36 }} dpr={[1, 1.5]}>
        <AccentCluster />
      </Canvas>
    </div>
  );
}
