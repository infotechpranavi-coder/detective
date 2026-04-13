import type { NextConfig } from "next";

const locationSeoSlugs = [
  "mumbai",
  "thane",
  "navi-mumbai",
  "pune",
  "delhi",
  "hyderabad",
  "palghar",
  "mira-bhayandar",
  "andheri",
  "bandra",
  "bkc",
  "borivali",
  "churchgate",
  "dadar",
  "vashi",
  "panvel",
  "mumbai-central",
  "powai",
  "mulund",
  "kurla",
  "goregaon",
  "malad",
  "juhu",
  "santacruz",
];

const serviceCategorySeoSlugs = [
  "business-investigation",
  "matrimonial-checking",
  "debugging-sweeping",
  "personal-investigation",
  "corporate-investigation",
  "tscm-services",
  "risk-management",
  "surveillance-shadowing",
];

const nextConfig: NextConfig = {
  compress: true,
  async redirects() {
    return [
      {
        source: "/ethics",
        destination: "/ethics-hs-detectives-standard-legal-compliance",
        permanent: true,
      },
      {
        source: "/case-study",
        destination: "/case-investigation-notes",
        permanent: true,
      },
      {
        source: "/certificate",
        destination: "/certificate-of-hs-detectives",
        permanent: true,
      },
      {
        source: "/regulation",
        destination: "/regulation-private-detective-agencies-regulation-bill",
        permanent: true,
      },
      {
        source: "/publication",
        destination: "/publication-media-channels-hs-detectives",
        permanent: true,
      },
      {
        source: "/membership",
        destination: "/membership-detectives-association",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/contact-detectives-mumbai",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/packages",
        destination: "/investigation-packages-india",
        permanent: true,
      },
      {
        source: "/packages-detectives-mumbai",
        destination: "/investigation-packages-india",
        permanent: true,
      },
      {
        source: "/locations",
        destination: "/locations-detectives-agency-in-mumbai",
        permanent: true,
      },
      {
        source: "/locations/detectives-agency-in-bkc",
        destination: "/locations-detectives-agency-in-bkc",
        permanent: true,
      },
      {
        source: "/clients",
        destination: "/our-corporate-clients",
        permanent: true,
      },
      {
        source: "/clients-hs-detectives",
        destination: "/our-corporate-clients",
        permanent: true,
      },
      {
        source: "/information",
        destination: "/public-intelligence-awareness",
        permanent: true,
      },
      {
        source: "/information-intelligence-brief-services",
        destination: "/public-intelligence-awareness",
        permanent: true,
      },
      {
        source: "/warning-signs",
        destination: "/warning-signs-red-flag-detection",
        permanent: true,
      },
      {
        source: "/privacy-rights",
        destination: "/legal-standards-right-of-privacy",
        permanent: true,
      },
      {
        source: "/legal-standards",
        destination: "/legal-standards-compliance-corner",
        permanent: true,
      },
      {
        source: "/investigation-protocol",
        destination: "/investigation-protocol-client-protocol",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/about-hs-detectives-mumbai",
        destination: "/about-us",
        permanent: true,
      },
      {
        source:
          "/services/corporate-investigation/fraud-investigation-company-support-services",
        destination: "/services/corporate-fraud-investigation-services-in-mumbai",
        permanent: true,
      },
      {
        source: "/services/corporate-fraud-investigation-services-in-mumbai",
        destination: "/services/corporate-fraud-investigation-services-in-mumbai",
        permanent: true,
      },
      {
        source: "/services/:category/:slug((?!.*-services$).+)",
        destination: "/services/:category/:slug-services",
        permanent: true,
      },
      ...serviceCategorySeoSlugs.map((slug) => ({
        source: `/services/${slug}`,
        destination: `/services/${slug}-services`,
        permanent: true,
      })),
      {
        source: "/publication-media-channels-hs-detectvies",
        destination: "/publication-media-channels-hs-detectives",
        permanent: true,
      },
      {
        source: "/membership-detectives-associantion",
        destination: "/membership-detectives-association",
        permanent: true,
      },
      {
        source: "/locations-detetcives-agency-in-mumbai",
        destination: "/locations-detectives-agency-in-mumbai",
        permanent: true,
      },
      ...locationSeoSlugs.map((slug) => ({
        source: `/locations/${slug}`,
        destination: `/locations-detectives-agency-in-${slug}`,
        permanent: true,
      })),
      ...locationSeoSlugs.map((slug) => ({
        source: `/locations/detectives-agency-in-${slug}`,
        destination: `/locations-detectives-agency-in-${slug}`,
        permanent: true,
      })),
      ...locationSeoSlugs.map((slug) => ({
        source: `/locations/${slug}-detectives-agency-in-mumbai`,
        destination: `/locations-detectives-agency-in-${slug}`,
        permanent: true,
      })),
      ...locationSeoSlugs.map((slug) => ({
        source: `/locations/${slug}-detectives-agency-in-${slug}`,
        destination: `/locations-detectives-agency-in-${slug}`,
        permanent: true,
      })),
    ];
  },
  async rewrites() {
    return [
      {
        source: "/ethics-hs-detectives-standard-legal-compliance",
        destination: "/ethics",
      },
      {
        source: "/case-investigation-notes",
        destination: "/case-study",
      },
      {
        source: "/certificate-of-hs-detectives",
        destination: "/certificate",
      },
      {
        source: "/regulation-private-detective-agencies-regulation-bill",
        destination: "/regulation",
      },
      {
        source: "/publication-media-channels-hs-detectives",
        destination: "/publication",
      },
      {
        source: "/membership-detectives-association",
        destination: "/membership",
      },
      {
        source: "/contact-us",
        destination: "/contact",
      },
      {
        source: "/investigation-packages-india",
        destination: "/packages",
      },
      {
        source: "/locations-detectives-agency-in-mumbai",
        destination: "/locations",
      },
      {
        source: "/our-corporate-clients",
        destination: "/clients",
      },
      {
        source: "/public-intelligence-awareness",
        destination: "/information",
      },
      {
        source: "/legal-standards-right-of-privacy",
        destination: "/privacy-rights",
      },
      {
        source: "/legal-standards-compliance-corner",
        destination: "/legal-standards",
      },
      {
        source: "/investigation-protocol-client-protocol",
        destination: "/investigation-protocol",
      },
      {
        source: "/about-us",
        destination: "/about",
      },
      {
        source: "/warning-signs-red-flag-detection",
        destination: "/warning-signs",
      },
      {
        source: "/services/corporate-fraud-investigation-services-in-mumbai",
        destination:
          "/services/corporate-investigation/fraud-investigation-company-support",
      },
      ...locationSeoSlugs
        .filter((slug) => slug !== "mumbai")
        .map((slug) => ({
          source: `/locations-detectives-agency-in-${slug}`,
          destination: `/locations/detectives-agency-in-${slug}`,
        })),
      {
        source: "/services/:category/:slug-services",
        destination: "/services/:category/:slug",
      },
      ...serviceCategorySeoSlugs.map((slug) => ({
        source: `/services/${slug}-services`,
        destination: `/services/${slug}`,
      })),
    ];
  },
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.(css|js|mjs|jpg|jpeg|png|webp|avif|gif|svg|ico|woff|woff2|ttf|eot)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      }
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
