/**
 * JSON-LD builders. Everything here is rendered server-side into
 * <script type="application/ld+json"> tags so crawlers get it in the HTML.
 */

import { absoluteUrl, companyFacts, products, siteConfig } from "./site";

type Json = Record<string, unknown>;

/**
 * Declares Indus AI Pvt Ltd as the parent entity and links the product
 * domains to it, so induslabs.io and finolabs.ai are read as the same
 * organisation rather than unrelated brands competing for the same queries.
 */
export function organizationSchema(): Json {
  const {
    foundingDate,
    foundingLocation,
    founders,
    cin,
    streetAddress,
    addressLocality,
    addressRegion,
    postalCode,
  } = companyFacts;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: ["IndusAI", "Indus AI Pvt Ltd", "Indus AI Private Limited"],
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/images/logo.png"),
    },
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    // Tells a search engine what this entity is *not*, which is what resolves
    // a name shared with unrelated organisations.
    disambiguatingDescription:
      "Indus AI Pvt Ltd is an enterprise B2B software company in India. It builds agentic AI products for businesses — voice agents, lead management, and financial operations automation — under the IndusLabs, FinoLabs, Agentic AI SM, and Marketing Automation Agent brands. It is not a consumer AI assistant or chat application, and is not affiliated with any similarly named consumer product.",
    knowsAbout: [
      "Agentic AI",
      "Enterprise AI agents",
      "Multi-agent orchestration",
      "Conversational voice AI",
      "AI workflow automation",
      "Financial operations automation",
      "Lead management automation",
    ],
    email: siteConfig.email,
    ...(founders?.length
      ? {
          founder: founders.map((name) => ({ "@type": "Person", name })),
        }
      : {}),
    ...(foundingDate ? { foundingDate } : {}),
    ...(foundingLocation
      ? { foundingLocation: { "@type": "Place", name: foundingLocation } }
      : {}),
    // CIN is the Indian company registration number: a strong, verifiable
    // identifier that ties this entity to the MCA register.
    ...(cin ? { identifier: { "@type": "PropertyValue", propertyID: "CIN", value: cin } } : {}),
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      ...(streetAddress ? { streetAddress } : {}),
      ...(addressLocality ? { addressLocality } : {}),
      ...(addressRegion ? { addressRegion } : {}),
      ...(postalCode ? { postalCode } : {}),
    },
    areaServed: { "@type": "Country", name: "India" },
    // The product brands are far more distinctive than the company name, so
    // declaring them anchors the entity on names nothing else competes for.
    brand: products.map((product) => ({
      "@type": "Brand",
      name: product.name,
      description: product.description,
      ...(product.external ? { url: product.url } : {}),
    })),
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
