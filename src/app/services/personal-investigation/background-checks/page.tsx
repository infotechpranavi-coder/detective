import { createPageMetadata } from "@/lib/pageSeo";
﻿import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = createPageMetadata({
  title: "Background Check Services in Mumbai - HS Detectives",
  description:
    "HS Detectives Mumbai background verification services in Mumbai for individuals and businesses. Get reliable screening, document checks, and detailed reports with discreet handling.",
  keywords: [
    "background check services Mumbai",
    "background verification Mumbai",
    "employee background verification Mumbai",
    "personal background check Mumbai",
    "corporate verification services Mumbai",
    "employment verification Mumbai",
    "detective agency Mumbai",
    "confidential verification services Mumbai",
    "pre employment screening Mumbai",
    "best background check services Mumbai",
  ],
  canonical: "https://www.hsdetectives.com/services/personal-investigation/background-checks-services",
});

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["background-checks"]} />;
}

