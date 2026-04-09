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

const nextConfig: NextConfig = {
  compress: true,
  async redirects() {
    return [
      {
        source: "/ethics",
        destination: "/ethics-HS-Detectives-Standard-Legal-Compliance",
        permanent: true,
      },
      {
        source: "/case-study",
        destination: "/case-Investigation-Notes",
        permanent: true,
      },
      {
        source: "/certificate",
        destination: "/certificate-of-hs-detectives",
        permanent: true,
      },
      {
        source: "/regulation",
        destination: "/regulation-Private-Detective-Agencies-Regulation-Bill",
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
        destination: "/contact-detectives-mumbai",
        permanent: true,
      },
      {
        source: "/packages",
        destination: "/packages-detectives-mumbai",
        permanent: true,
      },
      {
        source: "/locations",
        destination: "/locations-detectives-agency-in-mumbai",
        permanent: true,
      },
      {
        source: "/clients",
        destination: "/clients-hs-detectives",
        permanent: true,
      },
      {
        source: "/information",
        destination: "/information-Intelligence-brief-services",
        permanent: true,
      },
      {
        source: "/warning-signs",
        destination: "/warning-signs-Red-Flag-Detection",
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
        destination: "/about-HS-detectives-mumbai",
        permanent: true,
      },
      {
        source:
          "/services/corporate-investigation/fraud-investigation-company-support-services",
        destination: "/services/Corporate-Fraud-Investigation-services-in-mumbai",
        permanent: true,
      },
      {
        source: "/services/Corporate Fraud-Investigation-services-in-mumbai",
        destination: "/services/Corporate-Fraud-Investigation-services-in-mumbai",
        permanent: true,
      },
      {
        source: "/services/:category/:slug((?!.*-services$).+)",
        destination: "/services/:category/:slug-services",
        permanent: true,
      },
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
        destination: `/locations/${slug}-detectives-agency-in-mumbai`,
        permanent: true,
      })),
      ...locationSeoSlugs.map((slug) => ({
        source: `/locations/${slug}-detectives-agency-in-${slug}`,
        destination: `/locations/${slug}-detectives-agency-in-mumbai`,
        permanent: true,
      })),
    ];
  },
  async rewrites() {
    return [
      {
        source: "/ethics-HS-Detectives-Standard-Legal-Compliance",
        destination: "/ethics",
      },
      {
        source: "/case-Investigation-Notes",
        destination: "/case-study",
      },
      {
        source: "/certificate-of-hs-detectives",
        destination: "/certificate",
      },
      {
        source: "/regulation-Private-Detective-Agencies-Regulation-Bill",
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
        source: "/contact-detectives-mumbai",
        destination: "/contact",
      },
      {
        source: "/packages-detectives-mumbai",
        destination: "/packages",
      },
      {
        source: "/locations-detectives-agency-in-mumbai",
        destination: "/locations",
      },
      {
        source: "/clients-hs-detectives",
        destination: "/clients",
      },
      {
        source: "/information-Intelligence-brief-services",
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
        source: "/about-HS-detectives-mumbai",
        destination: "/about",
      },
      {
        source: "/warning-signs-Red-Flag-Detection",
        destination: "/warning-signs",
      },
      {
        source: "/services/Corporate-Fraud-Investigation-services-in-mumbai",
        destination:
          "/services/corporate-investigation/fraud-investigation-company-support",
      },
      ...locationSeoSlugs.map((slug) => ({
        source: `/locations/${slug}-detectives-agency-in-mumbai`,
        destination: `/locations/${slug}`,
      })),
      {
        source: "/services/:category/:slug-services",
        destination: "/services/:category/:slug",
      },
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
