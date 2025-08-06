import Navbar from "./components/navigation/Navbar";
import ClientLogos from "./components/sections/ClientLogos";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/sections/FooterNew";

import Hero from "./components/sections/Hero";
import ServicesSection from "./components/sections/ServicesSection";
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ClientLogos />
      <ServicesSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
