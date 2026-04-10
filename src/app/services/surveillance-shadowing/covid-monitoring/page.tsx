import { createPageMetadata } from "@/lib/pageSeo";
﻿import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = createPageMetadata({
  title: "COVID Monitoring Services in Mumbai - HS Detectives",
  description:
    "HS Detectives Mumbai COVID monitoring services in Mumbai offering real-time health tracking, safety compliance audits, and risk mitigation solutions for workplaces and public spaces.",
  keywords: [
    "COVID monitoring services Mumbai",
    "COVID safety compliance Mumbai",
    "workplace COVID monitoring Mumbai",
    "infection tracking services Mumbai",
    "pandemic monitoring services Mumbai",
    "health and safety monitoring Mumbai",
    "COVID risk assessment Mumbai",
    "private investigator Mumbai",
    "COVID surveillance services Mumbai corporate COVID monitoring Mumbai",
  ],
  canonical: "https://www.hsdetectives.com/services/surveillance-shadowing/covid-monitoring-services",
});

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["covid-monitoring"]} />;
}

