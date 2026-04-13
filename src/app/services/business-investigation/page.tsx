import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { serviceDetailMap } from "@/app/services/serviceData";
import GoogleTagHead from "@/components/GoogleTagHead";
import ServicesSchema from "@/components/ServicesSchema";

export const metadata = {
  title: "Business Investigation | H S Detectives",
  description:
    "Business investigation services for discreet due diligence, fraud detection, risk assessment, and verified corporate intelligence.",
};

export default function BusinessInvestigationPage() {
  return (
    <>
      <GoogleTagHead />
      <ServicesSchema />
      <>
      <ServiceDetailPage service={serviceDetailMap["business-investigation"]} />
    </>
    </>
  );
}