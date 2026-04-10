import { createPageMetadata } from "@/lib/pageSeo";
﻿import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = createPageMetadata({
  title: "Pre Matrimonial Investigation Services - HS Detectives",
  description:
    "HS Detectives Mumbai pre matrimonial investigation services to verify background, lifestyle, financial status, and personal history before marriage. Ensure trust and make informed decisions.",
  keywords: [
    "pre matrimonial investigation services",
    "pre marriage investigation",
    "matrimonial background verification",
    "pre wedding investigation services",
    "bride and groom verification",
    "matrimonial detective services",
    "personal investigation before marriage",
    "marriage investigation services Mumbai",
    "confidential matrimonial investigation",
    "pre matrimonial detective agency",
  ],
  canonical: "https://www.hsdetectives.com/services/personal-investigation/pre-matrimonial-investigations-services",
});

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["pre-matrimonial-investigations"]} />;
}

