import { createPageMetadata } from "@/lib/pageSeo";
import GoogleTagHead from "@/components/GoogleTagHead";
import ServicesSchema from "@/components/ServicesSchema";
﻿import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = createPageMetadata({
  title: "Asset tracing services in Mumbai - HS Detectives",
  description:
    "HS Detectives Mumbai asset tracing services in Mumbai to locate hidden, undisclosed, or misappropriated assets with confidential and accurate investigations for individuals and businesses.",
  keywords: [
    "asset tracing services Mumbai",
    "asset recovery Mumbai",
    "hidden asset detection Mumbai",
    "financial investigation services Mumbai",
    "property tracing services Mumbai",
    "corporate asset tracing Mumbai",
    "detective agency Mumbai",
    "fraud asset tracing Mumbai",
    "asset tracking services Mumbai",
    "confidential investigation services Mumbai",
    "forensic investigation Mumbai",
  ],
  canonical: "https://www.hsdetectives.com/services/corporate-investigation/asset-tracing-services",
});

export default function Page() {
  return (
    <>
      <GoogleTagHead />
      <ServicesSchema />
      <>
      <SubServiceDetailPage service={subServiceMap["asset-tracing"]} />
    </>
    </>
  );
}

