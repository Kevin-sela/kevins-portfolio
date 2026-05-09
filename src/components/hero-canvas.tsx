"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export function HeroCanvas() {
  return (
    <Canvas
      dpr={1}
      camera={{ position: [0, 0, 1] }}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
      gl={{ antialias: false, powerPreference: "low-power" }}
    >
      <Stars
        radius={90}
        depth={55}
        count={1800}
        factor={3}
        saturation={0.4}
        fade
        speed={0.25}
      />
    </Canvas>
  );
}
