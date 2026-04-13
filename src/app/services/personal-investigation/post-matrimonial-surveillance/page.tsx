import { createPageMetadata } from "@/lib/pageSeo";
import GoogleTagHead from "@/components/GoogleTagHead";
import ServicesSchema from "@/components/ServicesSchema";
﻿import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = createPageMetadata({
  title: "Post Matrimonial Surveillance Services - HS Detectives",
  description:
    "HS Detectives Mumbai post matrimonial surveillance services offering discreet tracking, behavior analysis, and evidence-based reports to help resolve marital disputes with confidence.",
  keywords: [
    "post matrimonial surveillance services",
    "post marriage investigation",
    "marital surveillance services",
    "spouse surveillance services",
    "cheating partner investigation",
    "matrimonial detective services",
    "post matrimonial detective agency",
    "relationship investigation services",
    "evidence collection for marital cases",
  ],
  canonical: "https://www.hsdetectives.com/services/personal-investigation/post-matrimonial-surveillance-services",
});

export default function Page() {
  return (
    <>
      <GoogleTagHead />
      <ServicesSchema />
      <>
      <SubServiceDetailPage service={subServiceMap["post-matrimonial-surveillance"]} />
    </>
    </>
  );
}

