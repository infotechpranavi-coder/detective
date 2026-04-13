import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { serviceDetailMap } from "@/app/services/serviceData";
import GoogleTagHead from "@/components/GoogleTagHead";
import ServicesSchema from "@/components/ServicesSchema";

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
      <>
      <ServiceDetailPage service={serviceDetailMap["corporate-investigation"]} />
    </>
    </>
  );
}
