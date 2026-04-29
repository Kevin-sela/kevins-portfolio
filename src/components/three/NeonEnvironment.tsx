import { Float, Stars, MeshDistortMaterial } from "@react-three/drei";

export default function NeonEnvironment() {
  return (
    <>
      <Stars radius={70} depth={40} count={1200} factor={4} fade speed={0.6} />

      <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.6}>
        <mesh position={[-3, 1, -4]}>
          <sphereGeometry args={[1.4, 64, 64]} />
          <MeshDistortMaterial
            color="#8b5cf6"
            transparent
            opacity={0.18}
            distort={0.45}
            speed={1.6}
          />
        </mesh>
      </Float>

      <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[3, -3, -5]}>
          <icosahedronGeometry args={[1.8, 2]} />
          <meshStandardMaterial
            color="#3b82f6"
            transparent
            opacity={0.16}
            roughness={0.25}
            metalness={0.5}
          />
        </mesh>
      </Float>
    </>
  );
}

