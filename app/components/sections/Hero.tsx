"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Model";
import Container from "../ui/Container";
import Button from "../ui/Button";

function Enhanced3DScene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={12} />
      <Model />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

const metrics = [
  { value: "4", label: "Core Products", tone: "text-blue-600" },
  { value: "22+", label: "Languages", tone: "text-emerald-600" },
  { value: "24/7", label: "Autonomous Ops", tone: "text-violet-600" },
  { value: "Enterprise", label: "Deployment Ready", tone: "text-amber-600" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 pt-28 pb-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl animate-pulse delay-1000" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="lg:w-1/2">
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2">
              <span className="text-sm font-medium text-blue-900 font-raleway">
                Enterprise Agentic AI Products for Real Business Workflows
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl font-raleway">
              The{" "}
              <span className="bg-gradient-to-r from-blue-700 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                Agentic AI Product Suite
              </span>{" "}
              for Modern Enterprises
            </h1>

            <p className="mb-8 text-xl leading-relaxed text-gray-700 font-raleway">
              IndusAI builds agentic AI products that help enterprises automate
              conversations, workflows, and decisions across customer support,
              finance, operations, and growth.
            </p>

            <p className="mb-8 text-lg leading-relaxed text-gray-600 font-raleway">
              Deploy voice agents, lead management automation, financial
              workflow automation, and autonomous enterprise systems from a
              single AI product ecosystem.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-gray-100 bg-white/70 p-4 text-center backdrop-blur-sm"
                >
                  <div className={`text-2xl font-bold font-raleway ${metric.tone}`}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600 font-raleway">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="#products" size="lg" className="font-raleway">
                Explore Products
              </Button>
              <Button
                href="/solutions"
                variant="secondary"
                size="lg"
                className="font-raleway"
              >
                Explore Use Cases
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative aspect-square w-full max-w-[400px] overflow-visible lg:max-w-[600px]">
              <div className="absolute inset-0 scale-150 rounded-full bg-gradient-to-r from-blue-400/20 via-cyan-400/10 to-emerald-400/20 blur-3xl animate-pulse" />

              <Canvas
                camera={{ position: [20, -10, 40], fov: 45 }}
                style={{ width: "100%", height: "100%" }}
                className="relative z-10"
              >
                <Enhanced3DScene />
              </Canvas>

              <div className="absolute top-4 right-4 rounded-lg bg-white/90 p-3 shadow-lg backdrop-blur-sm animate-bounce">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-medium text-gray-700">
                    Product Suite Active
                  </span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 p-3 shadow-lg backdrop-blur-sm animate-bounce delay-1000">
                <div className="text-xs font-medium text-gray-700">
                  Voice, Leads, Finance, and Workflows
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
