export default function LightingRig() {
  return (
    <>
      <ambientLight intensity={0.45} />
      <pointLight position={[-4, 3, 4]} intensity={6} color="#e8b54a" />
      <pointLight position={[4, -2, 3]} intensity={4} color="#7dc4b2" />
      <spotLight
        position={[0, 6, 6]}
        angle={0.4}
        penumbra={0.7}
        intensity={3}
        color="#f2ce7f"
      />
    </>
  );
}

