"use client";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text3D, Environment, Sparkles } from "@react-three/drei";
import { Model } from "./Model";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Enhanced 3D Scene Component
function Enhanced3DScene() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <>
      <Environment preset="city" />
      <Sparkles count={50} scale={10} size={2} speed={0.4} opacity={0.6} color="#3B38A0" />
      <group ref={groupRef}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Model />
        </Float>
      </group>
      <OrbitControls
        autoRotate
        autoRotateSpeed={1}
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="flex flex-col-reverse lg:flex-row gap-x-16 items-center">
          <div className="max-w-2xl">
            {/* Trust badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
              <span className="text-sm font-medium text-blue-800 font-raleway">
                Trusted by India's Leading Enterprises
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 font-raleway leading-tight">
              Automate{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                80% of Customer
              </span>{" "}
              Conversations
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600 font-raleway">Increase Sales</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                <span className="text-sm font-medium text-gray-600 font-raleway">Reduce Costs by 40%</span>
              </div>
            </div>
            
            <p className="text-xl text-gray-700 mb-10 leading-relaxed font-raleway">
              The{" "}
              <span className="font-semibold text-gray-900">Proven Voice AI Platform</span>{" "}
              for India's Leading Enterprises. Deploy intelligent, human-like voice agents that work 24/7.
            </p>
            
            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 font-raleway">80%</div>
                <div className="text-sm text-gray-600 font-raleway">Automation Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 font-raleway">40%</div>
                <div className="text-sm text-gray-600 font-raleway">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 font-raleway">24/7</div>
                <div className="text-sm text-gray-600 font-raleway">Availability</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
                <a href="https://calendly.com/indusai-app/meet" className="relative z-10">
                  Request a Demo
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button variant="secondary" size="lg" className="border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                <a href="https://www.linkedin.com/company/indus-ai/">
                  See How It Works
                </a>
              </Button>
            </div>
            
            {/* Security badges */}
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-200">
              <span className="text-sm text-gray-500 font-raleway">Enterprise Security:</span>
              <div className="flex items-center gap-3">
                <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-700">SOC 2</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-700">GDPR</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-700">PCI-DSS</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end relative">
            <div className="relative aspect-square w-full max-w-[400px] lg:max-w-[600px] overflow-visible">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl scale-150 animate-pulse"></div>
              
              <Canvas
                camera={{ position: [20, -10, 40], fov: 45 }}
                style={{ width: "100%", height: "100%" }}
                className="relative z-10"
              >
                <Enhanced3DScene />
              </Canvas>
              
              {/* Floating UI elements */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-bounce">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-gray-700">AI Active</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-bounce delay-1000">
                <div className="text-xs font-medium text-gray-700">40+ Languages</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
