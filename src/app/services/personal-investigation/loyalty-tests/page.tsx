import { createPageMetadata } from "@/lib/pageSeo";
import GoogleTagHead from "@/components/GoogleTagHead";
import ServicesSchema from "@/components/ServicesSchema";
﻿import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = createPageMetadata({
  title: "Loyalty Test Services in Mumbai - HS Detectives",
  description:
    "HS Detectives Mumbai loyalty test services in Mumbai offering discreet investigations, partner verification, and confidential reports to ensure trust and peace of mind.",
  keywords: [
    "loyalty test services in Mumbai",
    "partner loyalty test Mumbai",
    "relationship investigation Mumbai",
    "cheating partner test Mumbai",
    "private investigator Mumbai",
    "detective agency Mumbai",
    "trust verification services Mumbai",
    "personal investigation Mumbai",
    "loyalty test detective Mumbai",
    "best detective agency Mumbai",
  ],
  canonical: "https://www.hsdetectives.com/services/personal-investigation/loyalty-tests-services",
});

export default function Page() {
  return (
    <>
      <GoogleTagHead />
      <ServicesSchema />
      <>
      <SubServiceDetailPage service={subServiceMap["loyalty-tests"]} />
    </>
    </>
  );
}

