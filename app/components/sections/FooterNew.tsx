import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";
import { siteConfig } from "../../lib/site";

const navigation = {
  products: [
    { name: "IndusLabs — Voice AI", href: "https://induslabs.io", external: true },
    { name: "Agentic AI SM", href: "/products#agentic-ai-sm" },
    { name: "FinoLabs — BFSI", href: "https://finolabs.ai", external: true },
    {
      name: "Marketing Automation Agent",
      href: "/products#marketing-automation-agent",
    },
    { name: "Platform capabilities", href: "/products#platform" },
  ],
  useCases: [
    { name: "Customer Operations", href: "/solutions#customer-operations" },
    { name: "Financial Workflows", href: "/solutions#financial-workflows" },
    { name: "Revenue Operations", href: "/solutions#revenue-operations" },
    { name: "Enterprise Automation", href: "/solutions#enterprise-automation" },
    { name: "Industry Deployments", href: "/solutions#industry-deployments" },
  ],
  company: [
    { name: "About Indus AI", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Live voice demos", href: "/demo" },
    { name: "Dashboard", href: siteConfig.dashboardUrl, external: true },
    { name: "Book a technical call", href: siteConfig.demoUrl, external: true },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const social = [
  {
    name: "LinkedIn",
    href: siteConfig.social.linkedin,
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
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
  const className = "text-sm text-blue-200 transition-colors hover:text-white";

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

function LinkColumn({
  heading,
  links,
}: {
  heading: string;
  links: { name: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-white">{heading}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <FooterLink href={link.href} external={link.external}>
              {link.name}
            </FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FooterNew() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 font-raleway">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-8 py-16 md:grid-cols-2 lg:grid-cols-6 lg:py-20">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="mb-6 block" aria-label="Indus AI — home">
              <Image
                src="/images/logo.png"
                alt="Indus AI"
                width={120}
                height={48}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-blue-100">
              The agentic AI platform for enterprise workflows — voice agents,
              lead management, financial operations, and multi-agent
              orchestration.
            </p>
            <p className="mb-8 text-sm leading-relaxed text-blue-300">
              IndusLabs, FinoLabs, Agentic AI SM and the Marketing Automation
              Agent are products of {siteConfig.legalName}.
            </p>

            <div className="flex space-x-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener"
                  className="rounded-lg bg-white/10 p-2 text-blue-300 transition-colors hover:bg-white/20 hover:text-white"
                >
                  <span className="sr-only">{item.name}</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d={item.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <LinkColumn heading="Products" links={navigation.products} />
          <LinkColumn heading="Use Cases" links={navigation.useCases} />
          <LinkColumn heading="Company" links={navigation.company} />
          <LinkColumn heading="Resources" links={navigation.resources} />
        </div>

        <div className="border-t border-white/20 py-12">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Ready to deploy agentic AI in production?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-blue-100">
              Tell us the workflow you want to automate. We will tell you which
              product fits, and what a scoped first deployment looks like.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-3 font-medium text-white transition-all duration-300 hover:from-blue-700 hover:to-emerald-700"
              >
                Send an enquiry
              </Link>
              <a
                href={siteConfig.demoUrl}
                target="_blank"
                rel="noopener"
                className="rounded-lg border-2 border-blue-300 px-8 py-3 font-medium text-blue-100 transition-all duration-300 hover:bg-blue-300 hover:text-slate-900"
              >
                Book a technical call
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-blue-300">
              © {new Date().getFullYear()} {siteConfig.legalName}. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-blue-300 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-blue-300 transition-colors hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
