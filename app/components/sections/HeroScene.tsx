"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Model";

/**
 * The WebGL half of the hero. Split into its own module so the Three.js
 * bundle can be code-split away from the hero copy, which must render as
 * plain server HTML for LCP and crawlers.
 */
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [20, -10, 40], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
      className="relative z-10"
      aria-hidden="true"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={12} />
      <Model />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
