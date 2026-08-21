import type { Metadata } from "next";
import { absoluteUrl } from "./site";

type PageMetaInput = {
  title: string;
  description: string;
  /** Site-relative path, used for the canonical URL. */
  path: string;
  keywords?: string[];
  noIndex?: boolean;
};

/**
 * Builds per-page metadata with a canonical URL and matching OG/Twitter tags.
 * `title` is passed through the root layout's "%s | Indus AI" template.
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...(noIndex
      ? { robots: { index: false, follow: false, nocache: true } }
      : {}),
  };
}
