"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function Model({ url, scale = 1, autoRotate = true }: {
  url: string;
  scale?: number;
  autoRotate?: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(url);
  const { actions, names } = useAnimations(animations, groupRef);

  useEffect(() => {
    if (names[0]) {
      actions[names[0]]?.reset().fadeIn(0.5).play();
    }
    return () => {
      if (names[0]) actions[names[0]]?.fadeOut(0.5);
    };
  }, [actions, names]);

  useFrame(({ clock }) => {
    if (autoRotate && groupRef.current && !names[0]) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.22;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      <primitive ref={groupRef} object={scene} scale={scale} />
    </Float>
  );
}

/**
 * Drop-in Blender model viewer.
 *
 * Usage:
 *   1. Export your Blender model as GLB (File → Export → glTF 2.0, select GLB)
 *   2. Put the file in /public/models/your-model.glb
 *   3. Use: <BlenderModelViewer url="/models/your-model.glb" scale={1.5} />
 *
 * Props:
 *   url          - path to your .glb file in /public
 *   scale        - model scale (default 1)
 *   autoRotate   - slow Y-axis spin when no animations (default true)
 *   width/height - canvas size
 */
export function BlenderModelViewer({
  url,
  scale = 1,
  autoRotate = true,
  width = "100%",
  height = "520px",
}: {
  url: string;
  scale?: number;
  autoRotate?: boolean;
  width?: string;
  height?: string;
}) {
  return (
    <div style={{ width, height, position: "relative" }}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 1, 5], fov: 50 }}
        style={{ width: "100%", height: "100%" }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        shadows
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5,  5, 5]} color="#3b82f6" intensity={4} distance={14} decay={2} />
        <pointLight position={[-4, 3, 4]} color="#8b5cf6" intensity={5} distance={16} decay={2} />
        <pointLight position={[0, -2, 4]} color="#06b6d4" intensity={3} distance={12} decay={2} />
        <Environment preset="night" />
        <ContactShadows
          position={[0, -1.6, 0]}
          opacity={0.45}
          scale={10}
          blur={2.5}
          far={4}
          color="#8b5cf6"
        />
        <Suspense fallback={null}>
          <Model url={url} scale={scale} autoRotate={autoRotate} />
        </Suspense>
      </Canvas>
    </div>
  );
}
