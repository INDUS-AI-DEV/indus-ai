"use client";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Model";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-visible">
      <Container className="relative">
        <div className="flex flex-col-reverse lg:flex-row gap-x-16 items-center">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 font-raleway">
              Voice AI for your business
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-raleway">
              Revolutionary AI-driven Voice solutions with multilingual support
              and seamless CRM integration.
              <span className="font-bold">Don’t just adapt—lead with AI.</span>
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                <a href="https://calendly.com/indusai-app/meet">
                  Schedule Demo
                </a>
              </Button>
              <Button variant="secondary" size="lg">
                <a href="https://www.linkedin.com/company/indus-ai/">
                  Learn More
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative aspect-square w-full max-w-[300px] lg:max-w-[540px] overflow-visible">
              <Canvas
                camera={{ position: [20, -10, 40], fov: 45 }}
                style={{ width: "100%", height: "100%" }}
              >
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={12} />
                <Model />
                <OrbitControls
                  // autoRotate
                  // autoRotateSpeed={2}
                  enableZoom={false}
                  enablePan={false}
                  // enableRotate={false}
                />
              </Canvas>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
