import type { Metadata } from "next";
import Navbar from "./components/navigation/Navbar";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/sections/FooterNew";
import Hero from "./components/sections/Hero";
import Products from "./components/sections/Products";
import PlatformCapabilities from "./components/sections/PlatformCapabilities";
import AgenticExplainer from "./components/sections/AgenticExplainer";
import ServicesSection from "./components/sections/ServicesSection";
import EnterpriseTrust from "./components/sections/EnterpriseTrust";
import JsonLd from "./components/JsonLd";
import { faqSchema, productSuiteSchema } from "./lib/schema";
import { faqs } from "./lib/faqs";
import { pageMetadata } from "./lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Agentic AI Platform for Enterprise Workflows",
    description:
      "Indus AI is an enterprise agentic AI platform. Deploy AI agents that run real workflows across voice, lead management, financial operations, and multi-agent orchestration — integrated with your CRM and telephony.",
    path: "/",
    keywords: [
      "agentic AI platform",
      "enterprise AI agents",
      "AI agents for enterprise workflows",
      "multi-agent orchestration",
      "AI workflow automation platform",
      "autonomous AI agents for business",
    ],
  }),
  // The root layout already declares "/" as canonical; this keeps the
  // homepage title free of the "| Indus AI" template suffix duplication.
  title: {
    absolute: "Agentic AI Platform for Enterprise Workflows | Indus AI",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-white">
        <Hero />
        <Products />
        <AgenticExplainer />
        <PlatformCapabilities />
        <ServicesSection />
        <EnterpriseTrust />
        <FAQ />
      </main>
      <Footer />
      <JsonLd data={[productSuiteSchema(), faqSchema(faqs)]} />
    </>
  );
}
