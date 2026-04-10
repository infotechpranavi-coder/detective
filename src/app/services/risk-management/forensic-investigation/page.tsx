import { createPageMetadata } from "@/lib/pageSeo";
﻿import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = createPageMetadata({
  title: "Forensic Investigation Services in Mumbai - HS Detectives",
  description:
    "HS Detectives Mumbai forensic investigation services in Mumbai offering financial fraud detection, digital forensics, and evidence analysis with complete confidentiality and accuracy.",
  keywords: [
    "forensic investigation services Mumbai",
    "forensic audit Mumbai",
    "financial fraud investigation Mumbai",
    "corporate forensic investigation Mumbai",
    "cyber forensics services Mumbai",
    "fraud detection services Mumbai",
    "forensic accountant Mumbai",
    "detective agency Mumbai",
    "corporate fraud detection Mumbai",
    "confidential investigation Mumbai",
  ],
  canonical: "https://www.hsdetectives.com/services/risk-management/forensic-investigation-services",
});

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["forensic-investigation"]} />;
}

