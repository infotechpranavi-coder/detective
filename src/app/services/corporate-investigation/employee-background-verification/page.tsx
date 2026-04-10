import { createPageMetadata } from "@/lib/pageSeo";
﻿import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = createPageMetadata({
  title: "Employee Background Verification Services in Mumbai - HS Detectives",
  description:
    "HS Detectives Mumbai employee background verification services in Mumbai offering accurate checks on employment history, education, identity, and criminal records with complete confidentiality.",
  keywords: [
    "employee background verification services Mumbai",
    "employee verification Mumbai",
    "pre-employment background check Mumbai",
    "corporate background verification Mumbai",
    "employment verification services Mumbai",
    "HR background screening Mumbai",
    "candidate verification Mumbai",
    "education verification Mumbai",
    "business verification services Mumbai",
    "detective agency Mumbai",
  ],
  canonical: "https://www.hsdetectives.com/services/corporate-investigation/employee-background-verification-services",
});

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["employee-background-verification"]} />;
}

