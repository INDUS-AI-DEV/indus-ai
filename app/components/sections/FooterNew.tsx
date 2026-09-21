import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";
import { siteConfig } from "../../lib/site";

const navigation = {
  products: [
    { name: "IndusLabs — Voice AI OS", href: "https://induslabs.io", external: true },
    { name: "FinoLabs — BFSI & Lending", href: "https://finolabs.ai", external: true },
    { name: "Agentic AI Suite", href: "/products#agentic-ai-sm" },
    { name: "Marketing Automation Agent", href: "/products#marketing-automation-agent" },
    { name: "Platform Capabilities", href: "/products#platform" },
  ],
  useCases: [
    { name: "BFSI & Collections Recovery", href: "/solutions#financial-workflows" },
    { name: "Hospitality Voice Concierge", href: "/solutions#customer-operations" },
    { name: "Automotive & Test Drives", href: "/solutions#industry-deployments" },
    { name: "Sales & Inbound Lead Ops", href: "/solutions#revenue-operations" },
    { name: "Enterprise Multi-Agent Systems", href: "/solutions#enterprise-automation" },
  ],
  company: [
    { name: "About Indus AI", href: "/about" },
    { name: "Indus AI Academy", href: "https://indusai.academy", external: true },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Trust Center", href: "https://induslabs.io/trust-center", external: true },
    { name: "Contact Us", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Book Architecture Call", href: siteConfig.demoUrl, external: true },
  ],
};

const offices = [
  {
    city: "Noida (HQ)",
    address: "7th Floor, Logix Cyber Park, Office No. B-715-716 (B-Tower), Sector 62, Noida, UP 201301",
  },
  {
    city: "Bengaluru",
    address: "51/4, Najappa Layout, Adugodi, Bengaluru, Karnataka 560030",
  },
  {
    city: "Mumbai",
    address: "B-402, Rock Garden, Dahisar (West), Mumbai, Maharashtra 400068",
  },
  {
    city: "New York",
    address: "742 West, 28th Street, New York, NY 10001, USA",
  },
];

const social = [
  {
    name: "LinkedIn",
    href: siteConfig.social.linkedin,
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/induslabs.io",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    name: "X (Twitter)",
    href: siteConfig.social.twitter,
    path: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
  },
  {
    name: "YouTube",
    href: siteConfig.social.youtube,
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const className = "text-xs font-medium text-slate-300 transition-colors hover:text-white";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function FooterNew() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#060b14] via-[#091424] to-[#040f1a] font-raleway text-white">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 right-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Top Grid: Brand info, Links & Offices */}
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-14">
          {/* Brand & Parent Entity Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="mb-4 block" aria-label="Indus AI — home">
              <Image
                src="/images/logo-dark.png"
                alt="Indus AI"
                width={190}
                height={44}
                className="h-10 w-auto"
              />
            </Link>

            <p className="mb-3 text-xs leading-relaxed text-slate-300">
              Indus AI (Indus AI Pvt Ltd) is the parent company deploying autonomous
              AI agents across mission-critical enterprise workflows.
            </p>

            <p className="mb-5 text-xs leading-relaxed text-slate-400">
              Home of{" "}
              <a href="https://induslabs.io" target="_blank" rel="noopener" className="text-cyan-400 hover:underline">
                IndusLabs
              </a>{" "}
              (Voice AI OS),{" "}
              <a href="https://finolabs.ai" target="_blank" rel="noopener" className="text-slate-200 hover:underline">
                FinoLabs
              </a>{" "}
              (BFSI &amp; Lending), Agentic AI Suite, and{" "}
              <a href="https://indusai.academy" target="_blank" rel="noopener" className="text-emerald-400 hover:underline">
                Indus AI Academy
              </a>{" "}
              (Corporate Enablement).
            </p>

            {/* Direct Contact Pills from induslabs.io */}
            <div className="mb-5 flex flex-col gap-2 text-xs text-slate-300">
              <a
                href="tel:+918105870564"
                className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-cyan-300"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10 text-cyan-400">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                +91-810-587-0564
              </a>

              <a
                href="mailto:hello@induslabs.io"
                className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-cyan-300"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10 text-cyan-400">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                hello@induslabs.io &bull; info@indusai.app
              </a>

              <a
                href="https://wa.me/918105870564?text=Hi%20Indus%20AI%2C%20I&#x27;d%20like%20to%20know%20more%20about%20your%20enterprise%20agentic%20AI%20platform."
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-emerald-400 transition-colors hover:text-emerald-300"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-400">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.896 9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.945c0 2.096.549 4.14 1.593 5.945L0 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.585 0 11.946-5.36 11.949-11.945a11.9 11.9 0 0 0-3.497-8.4" />
                  </svg>
                </span>
                Chat on WhatsApp (+91-810-587-0564)
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={item.name}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-slate-300 transition-colors hover:bg-white/20 hover:text-white"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={item.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links Column 1: Products */}
          <div className="lg:col-span-2">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">
              Product Suite
            </h3>
            <ul className="space-y-2">
              {navigation.products.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href} external={link.external}>
                    {link.name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Links Column 2: Solutions */}
          <div className="lg:col-span-2">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">
              Solutions
            </h3>
            <ul className="space-y-2">
              {navigation.useCases.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href}>
                    {link.name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Offices from induslabs.io */}
          <div className="lg:col-span-4">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">
              Corporate Offices
            </h3>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs">
              {offices.map((office) => (
                <div key={office.city} className="rounded-xl border border-white/10 bg-white/5 p-2.5">
                  <div className="mb-1 font-bold text-cyan-300">{office.city}</div>
                  <p className="text-[11px] leading-relaxed text-slate-400">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle CTA Section */}
        <div className="border-t border-white/10 py-8 text-center">
          <h2 className="mb-2 font-raleway text-xl font-bold text-white sm:text-2xl">
            Ready to deploy enterprise agentic AI?
          </h2>
          <p className="mx-auto mb-5 max-w-xl text-xs leading-relaxed text-slate-300 sm:text-sm">
            Tell us about your target workflow. Our engineering team will scope the right product,
            SIP/CRM integrations, and a live production pilot.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-[#2C514C] px-6 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-300 hover:from-emerald-700 hover:to-[#1a3832]"
            >
              Send an enquiry
            </Link>
            <a
              href={siteConfig.demoUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-2.5 text-xs font-bold text-white backdrop-blur-xs transition-all duration-300 hover:bg-white hover:text-slate-900"
            >
              Book technical call
            </a>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-slate-400 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
            IndusLabs, FinoLabs &amp; Indus AI Academy are operating divisions of Indus AI Pvt Ltd.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            {navigation.legal.map((link) => (
              <FooterLink key={link.name} href={link.href} external={link.external}>
                {link.name}
              </FooterLink>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
