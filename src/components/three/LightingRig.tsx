export default function LightingRig() {
  return (
    <>
      <ambientLight intensity={0.45} />
      <pointLight position={[-4, 3, 4]} intensity={6} color="#8b5cf6" />
      <pointLight position={[4, -2, 3]} intensity={4} color="#3b82f6" />
      <spotLight
        position={[0, 6, 6]}
        angle={0.4}
        penumbra={0.7}
        intensity={3}
        color="#a855f7"
      />
    </>
  );
}

