"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { SITE_URL, getBreadcrumbItems } from "@/lib/breadcrumbs";

export default function BreadcrumbSchema() {
  const pathname = usePathname();

  const jsonLd = useMemo(() => {
    // Skip homepage and non-content utility routes.
    if (!pathname || pathname === "/" || pathname.startsWith("/api")) return null;

    const breadcrumbs = getBreadcrumbItems(pathname);
    if (!breadcrumbs.length) return null;

    const itemListElement = breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    }));

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}${pathname}#breadcrumb`,
      itemListElement,
    };
  }, [pathname]);

  if (!jsonLd) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
