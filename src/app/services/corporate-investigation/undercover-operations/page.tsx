import { createPageMetadata } from "@/lib/pageSeo";
﻿import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = createPageMetadata({
  title: "Undercover Operations Services in Mumbai - HS Detectives",
  description:
    "HS Detectives Mumbai undercover operations services in Mumbai providing discreet surveillance, intelligence gathering, and covert investigations for corporate and personal cases.",
  keywords: [
    "undercover operations services Mumbai",
    "covert investigation Mumbai",
    "undercover surveillance Mumbai",
    "corporate undercover investigation Mumbai",
    "private investigator Mumbai",
    "detective agency Mumbai",
    "confidential investigation Mumbai",
    "surveillance and intelligence Mumbai",
    "secret investigation services Mumbai",
    "personal undercover operations Mumbai",
    "fraud detection undercover Mumbai",
    "evidence collection services Mumbai",
  ],
  canonical: "https://www.hsdetectives.com/services/corporate-investigation/undercover-operations-services",
});

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["undercover-operations"]} />;
}

