"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Box, Torus, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingGeometry({ position, color, shape = "sphere" }: { 
  position: [number, number, number]; 
  color: string; 
  shape?: "sphere" | "box" | "torus" 
}) { 
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  const GeometryComponent = () => {
    switch (shape) {
      case "box":
        return <Box ref={meshRef} args={[1, 1, 1]} />;
      case "torus":
        return <Torus ref={meshRef} args={[0.5, 0.2, 16, 100]} />;
      default:
        return <Sphere ref={meshRef} args={[0.5, 32, 32]} />;
    }
  };

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={position}>
        <GeometryComponent />
        <meshStandardMaterial color={color} transparent opacity={0.7} />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#3B38A0" size={0.05} transparent opacity={0.6} />
    </points>
  );
}

export default function FloatingElements3D({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Floating geometric shapes */}
        <FloatingGeometry position={[-3, 2, 0]} color="#3B38A0" shape="sphere" />
        <FloatingGeometry position={[3, -1, -2]} color="#06B6D4" shape="box" />
        <FloatingGeometry position={[0, 3, -1]} color="#8B5CF6" shape="torus" />
        <FloatingGeometry position={[-2, -2, 1]} color="#10B981" shape="sphere" />
        <FloatingGeometry position={[4, 1, -3]} color="#F59E0B" shape="box" />
        
        {/* Particle field */}
        <ParticleField />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
