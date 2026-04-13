import { createPageMetadata } from "@/lib/pageSeo";
import GoogleTagHead from "@/components/GoogleTagHead";
﻿import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = createPageMetadata({
  title: "Business Continuity BCMS Services in Mumbai - HS Detectives",
  description:
    "HS Detectives Mumbai Business Continuity Management System (BCMS) services in Mumbai to ensure operational resilience, risk mitigation, and uninterrupted business operations.",
  keywords: [
    "business continuity services Mumbai",
    "BCMS services Mumbai",
    "business continuity planning Mumbai",
    "disaster recovery planning Mumbai",
    "operational resilience Mumbai",
    "risk management services Mumbai",
    "corporate continuity solutions Mumbai",
    "business continuity management Mumbai",
    "detective agency Mumbai",
  ],
  canonical: "https://www.hsdetectives.com/services/risk-management/business-continuity-bcms-services",
});

export default function Page() {
  return (
    <>
      <GoogleTagHead />
      <>
      <SubServiceDetailPage service={subServiceMap["business-continuity-bcms"]} />
    </>
    </>
  );
}

