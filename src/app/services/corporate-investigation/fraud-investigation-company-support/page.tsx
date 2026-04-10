import { createPageMetadata } from "@/lib/pageSeo";
﻿import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = createPageMetadata({
  title: "Corporate Fraud Investigation Services in Mumbai - HS Detectives",
  description:
    "HS Detectives Mumbai Expert corporate fraud investigation services in Mumbai to detect financial fraud, employee misconduct, and business risks with discreet, evidence-based reporting.",
  keywords: [
    "corporate fraud investigation services Mumbai",
    "fraud investigation Mumbai",
    "corporate investigation Mumbai",
    "financial fraud investigation Mumbai",
    "employee fraud investigation Mumbai",
    "business fraud detection Mumbai",
    "forensic investigation services Mumbai",
    "corporate risk investigation Mumbai",
    "private investigator Mumbai",
    "corporate intelligence services Mumbai",
    "fraud detection services Mumbai confidential corporate investigation Mumbai",
  ],
  canonical: "https://www.hsdetectives.com/services/corporate-investigation/fraud-investigation-company-support-services",
});

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["fraud-investigation-company-support"]} />;
}

