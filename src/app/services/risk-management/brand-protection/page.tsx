import { createPageMetadata } from "@/lib/pageSeo";
import GoogleTagHead from "@/components/GoogleTagHead";
﻿import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = createPageMetadata({
  title: "Brand Protection Services in Mumbai - HS Detectives",
  description:
    "HS Detectives Mumbai brand protection services in Mumbai to safeguard trademarks, logos, and intellectual property from infringement, counterfeiting, and unauthorized use.",
  keywords: [
    "brand protection services Mumbai",
    "trademark protection Mumbai",
    "logo protection Mumbai",
    "intellectual property protection Mumbai",
    "brand monitoring services Mumbai",
    "brand infringement detection Mumbai",
    "detective agency Mumbai",
    "corporate brand security Mumbai",
    "brand reputation protection Mumbai",
    "confidential brand investigation Mumbai",
  ],
  canonical: "https://www.hsdetectives.com/services/risk-management/brand-protection-services",
});

export default function Page() {
  return (
    <>
      <GoogleTagHead />
      <>
      <SubServiceDetailPage service={subServiceMap["brand-protection"]} />
    </>
    </>
  );
}

