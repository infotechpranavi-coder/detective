import type { Metadata } from "next";

type SeoConfig = {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
};

const ROBOTS = {
  index: true,
  follow: true,
};

export const createPageMetadata = ({ title, description, keywords, canonical }: SeoConfig): Metadata => ({
  title,
  description,
  keywords,
  robots: ROBOTS,
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
