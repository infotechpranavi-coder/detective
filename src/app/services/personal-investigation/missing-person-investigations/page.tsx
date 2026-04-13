import { createPageMetadata } from "@/lib/pageSeo";
import GoogleTagHead from "@/components/GoogleTagHead";
import ServicesSchema from "@/components/ServicesSchema";
﻿import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = createPageMetadata({
  title: "Missing person investigation services in Mumbai - HS Detectives",
  description:
    "HS Detectives Mumbai missing person investigation services in Mumbai offering fast, discreet, and reliable tracing solutions with advanced techniques and confidential handling.",
  keywords: [
    "missing person investigation services Mumbai",
    "missing person detective Mumbai",
    "locate missing person Mumbai",
    "tracing services Mumbai",
    "private investigator Mumbai",
    "detective agency Mumbai",
    "person search services Mumbai",
    "confidential investigation Mumbai",
    "surveillance services Mumbai",
    "background tracing services Mumbai",
    "investigation services Mumbai",
  ],
  canonical: "https://www.hsdetectives.com/services/personal-investigation/missing-person-investigations-services",
});

export default function Page() {
  return (
    <>
      <GoogleTagHead />
      <ServicesSchema />
      <>
      <SubServiceDetailPage service={subServiceMap["missing-person-investigations"]} />
    </>
    </>
  );
}

