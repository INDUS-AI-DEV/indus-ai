import type { Metadata } from "next";
import Navbar from "./components/navigation/Navbar";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/sections/FooterNew";
import Hero from "./components/sections/Hero";
import Products from "./components/sections/Products";
import PlatformCapabilities from "./components/sections/PlatformCapabilities";
import AgenticExplainer from "./components/sections/AgenticExplainer";
import ServicesSection from "./components/sections/ServicesSection";
import HomeAcademySection from "./components/sections/HomeAcademySection";
import HomeAboutSection from "./components/sections/HomeAboutSection";
import HomeBlogSection from "./components/sections/HomeBlogSection";
import HomeContactSection from "./components/sections/HomeContactSection";
import EnterpriseTrust from "./components/sections/EnterpriseTrust";
import JsonLd from "./components/JsonLd";
import { faqSchema, productSuiteSchema } from "./lib/schema";
import { faqs } from "./lib/faqs";
import { pageMetadata } from "./lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Enterprise Agentic AI Platform — Autonomous AI Agents for Business",
    description:
      "Indus AI deploys autonomous AI agents that execute real enterprise operations: multilingual voice agents in 29+ languages, BFSI lending workflows, and multi-agent orchestration.",
    path: "/",
    keywords: [
      "enterprise agentic AI platform",
      "autonomous AI agents",
      "AI voice agents India",
      "multilingual voice AI",
      "BFSI AI agents",
      "multi-agent orchestration",
      "Indus AI",
      "IndusLabs",
      "FinoLabs",
    ],
  }),
  title: {
    absolute: "Indus AI — Enterprise Agentic AI Platform & Autonomous AI Agents",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-white">
        {/* 0. Hero: Identity & Product Ecosystem Bar */}
        <Hero />

        {/* 1. Products: The 4 Autonomous Agent Products */}
        <Products />

        {/* 2. Platform: Agentic Architecture & Shared Capabilities */}
        <AgenticExplainer />
        <PlatformCapabilities />

        {/* 3. Use Cases: Enterprise Operational Workflows */}
        <ServicesSection />

        {/* 4. Academy: Corporate Upskilling & Certifications */}
        <HomeAcademySection />

        {/* 5. About: Company Mission, IIT Delhi Leadership, Offices */}
        <HomeAboutSection />

        {/* 6. Blog: Engineering Insights & Architectural Blueprints */}
        <HomeBlogSection />

        {/* 7. Contact: Direct Solutions Engineering & Call Booking */}
        <HomeContactSection />

        {/* 8. Trust & FAQ Layer */}
        <EnterpriseTrust />
        <FAQ />
      </main>
      <Footer />
      <JsonLd data={[productSuiteSchema(), faqSchema(faqs)]} />
    </>
  );
}
