"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, MeshDistortMaterial, Environment, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

function TechOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.11;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.17;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.9}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.45, 4]} />
        <MeshDistortMaterial
          color="#f0ad1c"
          distort={0.38}
          speed={2}
          roughness={0}
          metalness={0.95}
          emissive="#7a5a18"
          emissiveIntensity={0.6}
          envMapIntensity={1.4}
        />
      </mesh>
      {/* inner glow sphere */}
      <mesh scale={0.88}>
        <sphereGeometry args={[1.45, 24, 24]} />
        <meshStandardMaterial
          color="#f0ad1c"
          emissive="#f0ad1c"
          emissiveIntensity={0.35}
          transparent
          opacity={0.12}
          side={THREE.BackSide}
        />
      </mesh>
    </Float>
  );
}

function OrbGlow() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      const mat = ref.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.25 + Math.sin(clock.getElapsedTime() * 0.9) * 0.12;
    }
  });
  return (
    <mesh ref={ref} scale={2.4}>
      <sphereGeometry args={[1.45, 12, 12]} />
      <meshStandardMaterial
        color="#f0ad1c"
        emissive="#f0ad1c"
        emissiveIntensity={0.25}
        transparent
        opacity={0.055}
        side={THREE.BackSide}
        depthWrite={false}
      />
    </mesh>
  );
}

function Ring({ radius, tube, rotation, color, speed }: {
  radius: number; tube: number;
  rotation: [number, number, number];
  color: string; speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.z = clock.getElapsedTime() * speed;
  });
  return (
    <mesh ref={ref} rotation={rotation}>
      <torusGeometry args={[radius, tube, 2, 120]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.8}
        transparent
        opacity={0.3}
        depthWrite={false}
      />
    </mesh>
  );
}

function FloatingParticle({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  const offset = useRef(Math.random() * Math.PI * 2);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.8 + offset.current) * 0.3;
      const mat = ref.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.6 + Math.sin(clock.getElapsedTime() * 1.2 + offset.current) * 0.4;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.04, 8, 8]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
    </mesh>
  );
}

const particles: { pos: [number, number, number]; color: string }[] = [
  { pos: [1.2, 1.8, 0.4], color: "#4fe3b8" },
  { pos: [-1.6, 1.2, 0.2], color: "#ffc83d" },
  { pos: [1.8, -1.0, 0.6], color: "#4fe3b8" },
  { pos: [-1.0, -1.6, 0.3], color: "#ffdb7a" },
  { pos: [0.6, 2.2, 0.1], color: "#8af0d2" },
  { pos: [-1.8, 0.4, 0.5], color: "#ffdb7a" },
  { pos: [2.1, 0.2, 0.3], color: "#38bdf8" },
];

function Scene() {
  return (
    <>
      <ambientLight intensity={0.18} />
      <pointLight position={[5, 5, 5]}   color="#4fe3b8" intensity={6} distance={14} decay={2} />
      <pointLight position={[-5, -2, 4]} color="#ffc83d" intensity={8} distance={16} decay={2} />
      <pointLight position={[0,  3,  5]} color="#4fe3b8" intensity={4} distance={12} decay={2} />
      <pointLight position={[3, -4,  2]} color="#ffdb7a" intensity={5} distance={14} decay={2} />

      <Environment preset="night" />
      <Stars radius={90} depth={55} count={1800} factor={3} saturation={0.45} fade speed={0.22} />

      <group position={[2.6, 0.1, -0.5]}>
        <TechOrb />
        <OrbGlow />
        {particles.map((p, i) => (
          <FloatingParticle key={i} position={p.pos} color={p.color} />
        ))}
        <Ring radius={2.5}  tube={0.013} rotation={[0.4,  0.2,  0]}   color="#4fe3b8" speed={0.07} />
        <Ring radius={3.05} tube={0.009} rotation={[-0.3, 0.55, 0.1]} color="#ffc83d" speed={-0.05} />
        <Ring radius={2.15} tube={0.011} rotation={[1.1, -0.4, 0.3]}  color="#4fe3b8" speed={0.09} />
      </group>
    </>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 52 }}
      style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}
      gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
    >
      <Scene />
    </Canvas>
  );
}
