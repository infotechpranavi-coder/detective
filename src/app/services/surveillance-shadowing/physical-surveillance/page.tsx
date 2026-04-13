import { createPageMetadata } from "@/lib/pageSeo";
import GoogleTagHead from "@/components/GoogleTagHead";
﻿import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = createPageMetadata({
  title: "Physical Surveillance Services in Mumbai - HS Detectives",
  description:
    "HS Detectives Mumbai physical surveillance services in Mumbai offering discreet monitoring, real-time tracking, and reliable evidence gathering for personal and corporate investigations.",
  keywords: [
    "Physical Surveillance Services Mumbai",
    "Surveillance Services Mumbai",
    "Private Surveillance Mumbai",
    "Professional Surveillance Agency Mumbai",
  ],
  canonical: "https://www.hsdetectives.com/services/surveillance-shadowing/physical-surveillance-services",
});

export default function Page() {
  return (
    <>
      <GoogleTagHead />
      <>
      <SubServiceDetailPage service={subServiceMap["physical-surveillance"]} />
    </>
    </>
  );
}

