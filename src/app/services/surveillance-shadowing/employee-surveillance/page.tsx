import { createPageMetadata } from "@/lib/pageSeo";
﻿import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = createPageMetadata({
  title: "Employee Surveillance Services in Mumbai - HS Detectives",
  description:
    "Enhance workplace productivity with HS Detectives Mumbai employee surveillance services in Mumbai. Monitor staff activity, ensure security, and boost efficiency with advanced tracking solutions tailored for businesses.",
  keywords: [
    "Employee Surveillance Services Mumbai",
    "Employee Monitoring Mumbai",
    "Staff Monitoring Solutions Mumbai",
    "Workplace Surveillance Services Mumbai",
    "Employee Tracking Software Mumbai",
  ],
  canonical: "https://www.hsdetectives.com/services/surveillance-shadowing/employee-surveillance-services",
});

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["employee-surveillance"]} />;
}

