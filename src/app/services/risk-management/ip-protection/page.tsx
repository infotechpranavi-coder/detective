import { createPageMetadata } from "@/lib/pageSeo";
import GoogleTagHead from "@/components/GoogleTagHead";
﻿import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = createPageMetadata({
  title: "Intellectual Property Protection Services in Mumbai - HS Detectives",
  description:
    "HS Detectives IP protection services in Mumbai offering comprehensive intellectual property surveillance, infringement detection, and legal support to secure your innovations and brand.",
  keywords: [
    "intellectual property protection services Mumbai",
    "IP protection Mumbai",
    "patent protection services Mumbai",
    "trademark protection Mumbai",
    "copyright protection services Mumbai",
    "trade secret protection Mumbai",
    "IP infringement detection Mumbai",
    "private investigator Mumbai",
    "detective agency Mumbai",
    "confidential IP protection Mumbai",
    "corporate IP security Mumbai",
    "brand protection services Mumbai",
  ],
  canonical: "https://www.hsdetectives.com/services/risk-management/ip-protection-services",
});

export default function Page() {
  return (
    <>
      <GoogleTagHead />
      <>
      <SubServiceDetailPage service={subServiceMap["ip-protection"]} />
    </>
    </>
  );
}

