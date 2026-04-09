import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
        destination: "/publication-media-channels-hs-detectvies",
        permanent: true,
      },
      {
        source: "/membership",
        destination: "/membership-detectives-associantion",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-detectives-mumbai",
        permanent: true,
      },
      {
        source: "/clients",
        destination: "/clients-hs-detectives",
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
        source: "/services/:category/:slug((?!.*-services$).+)",
        destination: "/services/:category/:slug-services",
        permanent: true,
      },
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
        source: "/publication-media-channels-hs-detectvies",
        destination: "/publication",
      },
      {
        source: "/membership-detectives-associantion",
        destination: "/membership",
      },
      {
        source: "/contact-detectives-mumbai",
        destination: "/contact",
      },
      {
        source: "/clients-hs-detectives",
        destination: "/clients",
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
        source: "/services/:category/:slug-services",
        destination: "/services/:category/:slug",
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
