export const SITE_URL = "https://www.hsdetectives.com";

const ROUTE_LABELS: Record<string, string> = {
  "about-us": "About Us",
  services: "Services",
  "contact-us": "Contact Us",
  "investigation-packages-india": "Investigation Packages",
  "hs-detectives-locations": "Locations",
  "hs-detectivs-locations": "Locations",
  "our-corporate-clients": "Corporate Clients",
  "public-intelligence-awareness": "Information Hub",
  "warning-signs-red-flag-detection": "Warning Signs",
  "legal-standards-right-of-privacy": "Privacy Rights",
  "legal-standards-compliance-corner": "Legal Standards",
  "investigation-protocol-client-protocol": "Investigation Protocol",
  "certificate-of-hs-detectives": "Certification",
  "case-investigation-notes": "Case Study",
  "regulation-private-detective-agencies-regulation-bill": "Government Regulation",
  "publication-media-channels-hs-detectives": "Publication",
  "membership-detectives-association": "Membership",
  blog: "Blog",
  faq: "FAQ",
  "privacy-policy": "Privacy Policy",
  "terms-and-conditions": "Terms and Conditions",
  "refund-and-cancellation-policy": "Refund and Cancellation Policy",
  "sitemap-page": "Sitemap",
};

export type BreadcrumbItem = {
  name: string;
  path: string;
  url: string;
};

const formatSegment = (segment: string) => {
  const cleaned = segment
    .replace(/-services$/, "")
    .replace(/^locations-detectives-agency-in-/, "")
    .replace(/^detectives-agency-in-/, "");

  const mapped = ROUTE_LABELS[cleaned] ?? ROUTE_LABELS[segment];
  if (mapped) return mapped;

  return cleaned
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
};

export const getBreadcrumbItems = (pathname: string): BreadcrumbItem[] => {
  if (!pathname || pathname === "/") return [];

  const parts = pathname.split("/").filter(Boolean);

  return [
    {
      name: "Home",
      path: "/",
      url: `${SITE_URL}/`,
    },
    ...parts.map((part, index) => {
      const path = `/${parts.slice(0, index + 1).join("/")}`;
      return {
        name: formatSegment(decodeURIComponent(part)),
        path,
        url: `${SITE_URL}${path}`,
      };
    }),
  ];
};
