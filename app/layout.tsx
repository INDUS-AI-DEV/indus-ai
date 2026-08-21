import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
import JsonLd from "./components/JsonLd";
import { organizationSchema, websiteSchema } from "./lib/schema";
import { siteConfig } from "./lib/site";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Agentic AI Platform for Enterprise Workflows | Indus AI",
    template: "%s | Indus AI",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "agentic AI platform",
    "enterprise AI agents",
    "AI agents for enterprise workflows",
    "multi-agent orchestration",
    "AI workflow automation",
    "autonomous AI agents",
    "enterprise agentic AI",
    "AI agent platform India",
  ],
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: "Agentic AI Platform for Enterprise Workflows",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    site: "@indusai_app",
    creator: "@indusai_app",
    title: "Agentic AI Platform for Enterprise Workflows",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#2C514C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={`${raleway.variable}`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-gray-900 focus:shadow-lg focus:outline focus:outline-2 focus:outline-[#2C514C]"
        >
          Skip to main content
        </a>
        {children}
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
