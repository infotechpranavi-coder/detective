import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { serviceDetailMap } from "@/app/services/serviceData";
import GoogleTagHead from "@/components/GoogleTagHead";
import ServicesSchema from "@/components/ServicesSchema";

const corporateServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corporate Investigation",
  provider: {
    "@type": "LocalBusiness",
    name: "HS Detectives",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  description:
    "Expert corporate investigation services including employee background verification, fraud detection, due diligence, and asset tracing for businesses and BFSI institutions.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Corporate Investigation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Employee Background Verification",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Asset Tracing & Due Diligence",
        },
      },
    ],
  },
};

export const metadata = {
  title: "Corporate Investigation | H S Detectives",
  description:
    "Corporate investigation services covering employee screening, due diligence, internal fraud, IP protection, and litigation support.",
};

export default function CorporateInvestigationPage() {
  return (
    <>
      <GoogleTagHead />
      <ServicesSchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporateServiceSchema) }}
      />
      <ServiceDetailPage service={serviceDetailMap["corporate-investigation"]} />
    </>
  );
}
