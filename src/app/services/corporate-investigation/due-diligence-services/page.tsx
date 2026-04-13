import { createPageMetadata } from "@/lib/pageSeo";
import GoogleTagHead from "@/components/GoogleTagHead";
﻿import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = createPageMetadata({
  title: "Due Diligence Services in Mumbai - HS Detectives",
  description:
    "HS Detectives Mumbai due diligence services in Mumbai for businesses and investors, offering thorough background checks, financial analysis, and risk assessment to ensure informed decisions.",
  keywords: [
    "due diligence services Mumbai",
    "corporate due diligence Mumbai",
    "financial due diligence Mumbai",
    "legal due diligence Mumbai",
    "business verification services Mumbai",
    "investment due diligence Mumbai",
    "risk assessment services Mumbai",
    "background verification for companies Mumbai",
    "vendor due diligence Mumbai",
    "business intelligence services Mumbai",
  ],
  canonical: "https://www.hsdetectives.com/services/corporate-investigation/due-diligence-services",
});

export default function Page() {
  return (
    <>
      <GoogleTagHead />
      <>
      <SubServiceDetailPage service={subServiceMap["due-diligence-services"]} />
    </>
    </>
  );
}

