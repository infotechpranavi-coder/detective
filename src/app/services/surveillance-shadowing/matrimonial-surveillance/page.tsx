import { createPageMetadata } from "@/lib/pageSeo";
import GoogleTagHead from "@/components/GoogleTagHead";
﻿import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = createPageMetadata({
  title: "Matrimonial Surveillance Services in Mumbai - HS Detectives",
  description:
    "HS Detectives Mumbai matrimonial surveillance services in Mumbai to help verify backgrounds, investigate relationships, and uncover the truth with complete confidentiality and discretion.",
  keywords: [
    "Matrimonial Surveillance Services Mumbai",
    "Matrimonial Investigation Mumbai",
    "Pre Marriage Investigation Mumbai",
    "Post Marriage Investigation Mumbai",
    "Relationship Investigation Services Mumbai",
    "Background verification for marriage Mumbai",
  ],
  canonical: "https://www.hsdetectives.com/services/surveillance-shadowing/matrimonial-surveillance-services",
});

export default function Page() {
  return (
    <>
      <GoogleTagHead />
      <>
      <SubServiceDetailPage service={subServiceMap["matrimonial-surveillance"]} />
    </>
    </>
  );
}

