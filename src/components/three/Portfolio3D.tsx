"use client";

import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import { person, skills, projects } from "@/content/site";
import CameraRig from "./CameraRig";
import LightingRig from "./LightingRig";
import NeonEnvironment from "./NeonEnvironment";
import FloatingGlassDashboard from "./FloatingGlassDashboard";
import HologramSkills from "./HologramSkills";
import ProjectPlanets from "./ProjectPlanets";
import PortfolioSections from "./PortfolioSections";

export default function Portfolio3D() {
  return (
    <div className="h-screen w-full bg-[#050814] text-white">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ScrollControls pages={8} damping={0.18}>
          <LightingRig />
          <CameraRig />
          <NeonEnvironment />

          <FloatingGlassDashboard />
          <HologramSkills />
          <ProjectPlanets />

          <Scroll html>
            <PortfolioSections person={person} skills={skills} projects={projects} />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
