import { createPageMetadata } from "@/lib/pageSeo";
import GoogleTagHead from "@/components/GoogleTagHead";
import ServicesSchema from "@/components/ServicesSchema";
﻿import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = createPageMetadata({
  title: "Fraud Investigation & Monitoring Services in Mumbai - HS Detectives",
  description:
    "HS Detectives Mumbai Expert fraud investigation and monitoring services in Mumbai to detect financial fraud, prevent risks, and protect your business with confidential, technology-driven solutions.",
  keywords: [
    "Fraud Investigation Services Mumbai",
    "Fraud Monitoring Services Mumbai",
    "Corporate Fraud Investigation Mumbai",
    "Financial Fraud Detection Mumbai",
    "Fraud Risk Management Mumbai",
  ],
  canonical: "https://www.hsdetectives.com/services/surveillance-shadowing/fraud-investigation-monitoring-services",
});

export default function Page() {
  return (
    <>
      <GoogleTagHead />
      <ServicesSchema />
      <>
      <SubServiceDetailPage service={subServiceMap["fraud-investigation-monitoring"]} />
    </>
    </>
  );
}

