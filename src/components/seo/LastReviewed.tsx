"use client";

import { useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";

const FALLBACK_LABEL = "Last Reviewed Recently";
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const JSON_LD_ID = "last-reviewed-jsonld";

const getIsoToday = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = `${now.getMonth() + 1}`.padStart(2, "0");
  const day = `${now.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getMetaOverride = () => {
  if (typeof document === "undefined") return null;
  const content = document.querySelector('meta[name="last-reviewed"]')?.getAttribute("content");
  if (!content) return null;
  return DATE_PATTERN.test(content) ? content : null;
};

const formatLabel = (isoDate: string) => {
  const parsed = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return FALLBACK_LABEL;
  const monthYear = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(parsed);
  return `Last Reviewed on ${monthYear}`;
};

const upsertJsonLd = (pathname: string, isoDate: string) => {
  if (typeof document === "undefined") return;

  const url = `${window.location.origin}${pathname}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    dateModified: isoDate,
    url,
  };

  const existing = document.getElementById(JSON_LD_ID);
  if (existing) existing.remove();

  const script = document.createElement("script");
  script.id = JSON_LD_ID;
  script.type = "application/ld+json";
  script.text = JSON.stringify(jsonLd);
  document.head.appendChild(script);
};

export default function LastReviewed() {
  const pathname = usePathname();
  const isoDate = getMetaOverride() ?? getIsoToday();

  useEffect(() => {
    upsertJsonLd(pathname, isoDate);
  }, [pathname, isoDate]);

  const label = useMemo(() => formatLabel(isoDate), [isoDate]);

  return (
    <section
      className="border-t border-white/10 bg-black/95 px-6 py-4 text-center lg:px-12"
      aria-label="Last reviewed freshness label"
    >
      <p className="font-space text-[11px] uppercase tracking-[0.16em] text-white/70">{label}</p>
      <noscript>
        <p className="font-space text-[11px] uppercase tracking-[0.16em] text-white/70">
          Last Reviewed Recently
        </p>
      </noscript>
    </section>
  );
}
