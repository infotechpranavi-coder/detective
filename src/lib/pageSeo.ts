import type { Metadata } from "next";

type SeoConfig = {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  lastReviewed?: string;
};

const ROBOTS = {
  index: true,
  follow: true,
};

export const createPageMetadata = ({
  title,
  description,
  keywords,
  canonical,
  lastReviewed,
}: SeoConfig): Metadata => ({
  title,
  description,
  keywords,
  robots: ROBOTS,
  ...(lastReviewed ? { other: { "last-reviewed": lastReviewed } } : {}),
  alternates: {
    canonical,
  },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: "HS Detectives",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
});
