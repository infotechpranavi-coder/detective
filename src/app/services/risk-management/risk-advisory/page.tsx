import { createPageMetadata } from "@/lib/pageSeo";
﻿import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = createPageMetadata({
  title: "Risk Advisory Services in Mumbai - HS Detectives",
  description:
    "HS Detectives Mumbai risk advisory services in Mumbai helping businesses identify, assess, and mitigate operational, financial, and strategic risks with expert guidance.",
  keywords: [
    "risk advisory services Mumbai",
    "business risk assessment Mumbai",
    "operational risk advisory Mumbai",
    "financial risk management Mumbai",
    "corporate risk solutions Mumbai",
    "strategic risk advisory Mumbai",
    "private investigator Mumbai",
    "detective agency Mumbai",
    "risk mitigation services Mumbai",
    "enterprise risk consulting Mumbai",
    "fraud risk advisory Mumbai",
    "corporate intelligence Mumbai",
  ],
  canonical: "https://www.hsdetectives.com/services/risk-management/risk-advisory-services",
});

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["risk-advisory"]} />;
}

