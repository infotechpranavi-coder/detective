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
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
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
        destination: "/hs-detectivs-locations",
        permanent: true,
      },
      {
        source: "/locations-detectives-agency-in-mumbai",
        destination: "/hs-detectivs-locations",
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
        destination: "/hs-detectivs-locations",
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
        source: "/hs-detectivs-locations",
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
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'th.bing.com',
      },
      {
        protocol: 'https',
        hostname: 'tse1.explicit.bing.net',
      },
      {
        protocol: 'https',
        hostname: 'tse1.mm.bing.net',
      },
      {
        protocol: 'https',
        hostname: 'tse2.mm.bing.net',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'companieslogo.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.brandfetch.io',
      },
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com',
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
      },
      {
        protocol: 'https',
        hostname: 'nida.nih.gov',
      },
      {
        protocol: 'http',
        hostname: 'www.madhavmineral.com',
      },
      {
        protocol: 'http',
        hostname: 'www.firstintelligence.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'insidepulse.com',
      },
      {
        protocol: 'https',
        hostname: 'www.freepnglogos.com',
      },
      {
        protocol: 'https',
        hostname: 'logonoid.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.law.asia',
      },
      {
        protocol: 'https',
        hostname: 'dharab.com',
      },
      {
        protocol: 'https',
        hostname: 'images.yourstory.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
      }
    ],
    formats: ['image/avif', 'image/webp'],
    qualities: [55, 68, 75],
  },
};

export default nextConfig;
