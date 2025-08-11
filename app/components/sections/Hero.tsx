"use client";
import { useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Model";
import Container from "../ui/Container";
import Button from "../ui/Button";

// 3D Scene Component
function Enhanced3DScene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={12} />
      <Model />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
      />
    </>
  );
}

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play().then(() => setIsPlaying(true));
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            {/* Trust badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
              <span className="text-sm font-medium text-blue-800 font-raleway">
                Trusted by India's Leading Enterprises
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 font-raleway leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Elevate Your Customer Experience
              </span>{" "}
              with AI Voice Agents
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed font-raleway">
              Multilingual, intelligent, and always available – your next-gen support partner.
              Perfect for businesses of all sizes, now speaking <span className="font-semibold text-gray-900">22+ languages</span> with human-like clarity.
            </p>
            
            {/* Key metrics */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
                <div className="text-2xl font-bold text-blue-600 font-raleway">22+</div>
                <div className="text-sm text-gray-600 font-raleway">Languages</div>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
                <div className="text-2xl font-bold text-green-600 font-raleway">45%</div>
                <div className="text-sm text-gray-600 font-raleway">Cost Savings</div>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
                <div className="text-2xl font-bold text-purple-600 font-raleway">24/7</div>
                <div className="text-sm text-gray-600 font-raleway">Availability</div>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
                <div className="text-2xl font-bold text-orange-600 font-raleway">&lt;1s</div>
                <div className="text-sm text-gray-600 font-raleway">Response Time</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="https://calendly.com/indusai-app/meet">
                <Button size="lg" className="font-raleway group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">
                    Book a Demo
                  </span>
                  <svg className="w-5 h-5 ml-2 -mr-1 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Button>
              </a>
              <a href="#contact">
                <Button variant="secondary" size="lg" className="font-raleway group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">
                    Contact Sales
                  </span>
                  <svg className="w-5 h-5 ml-2 -mr-1 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Button>
              </a>
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
                <div className="text-xs font-medium text-gray-700">22+ Languages</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
