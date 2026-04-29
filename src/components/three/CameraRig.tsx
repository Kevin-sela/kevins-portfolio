"use client";

import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function CameraRig() {
  const scroll = useScroll();

  useFrame((state) => {
    const offset = scroll.offset;

    state.camera.position.x = Math.sin(offset * Math.PI * 2) * 1.2;
    state.camera.position.y = -offset * 8;
    state.camera.position.z = 8 - offset * 2.5;

    state.camera.rotation.x = offset * 0.18;
    state.camera.rotation.z = Math.sin(offset * Math.PI) * 0.04;
  });

  return null;
}

