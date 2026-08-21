/**
 * JSON-LD builders. Everything here is rendered server-side into
 * <script type="application/ld+json"> tags so crawlers get it in the HTML.
 */

import { absoluteUrl, products, siteConfig } from "./site";

type Json = Record<string, unknown>;

/**
 * Declares Indus AI Pvt Ltd as the parent entity and links the product
 * domains to it, so induslabs.io and finolabs.ai are read as the same
 * organisation rather than unrelated brands competing for the same queries.
 */
export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: ["IndusAI", "Indus AI Pvt Ltd"],
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/images/logo.png"),
    },
    description: siteConfig.description,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.youtube,
      "https://induslabs.io",
      "https://finolabs.ai",
    ],
    subOrganization: [
      {
        "@type": "Organization",
        name: "IndusLabs",
        url: "https://induslabs.io",
        description: products[0].description,
      },
      {
        "@type": "Organization",
        name: "FinoLabs",
        url: "https://finolabs.ai",
        description: products[2].description,
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };
}

export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": absoluteUrl("/#organization") },
    inLanguage: "en-IN",
  };
}

/** One SoftwareApplication node per product in the suite. */
export function productSuiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Indus AI product suite",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: product.name,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: product.category,
        description: product.description,
        url: product.external ? product.url : absoluteUrl(product.url),
        provider: { "@id": absoluteUrl("/#organization") },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "INR",
          price: "0",
          description: "Enterprise pricing on request",
        },
      },
    })),
  };
}

export function faqSchema(faqs: readonly { question: string; answer: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbSchema(
  trail: readonly { name: string; path: string }[]
): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    url: absoluteUrl(article.path),
    mainEntityOfPage: absoluteUrl(article.path),
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    author: { "@id": absoluteUrl("/#organization") },
    publisher: { "@id": absoluteUrl("/#organization") },
    image: absoluteUrl("/opengraph-image"),
    inLanguage: "en-IN",
  };
}
