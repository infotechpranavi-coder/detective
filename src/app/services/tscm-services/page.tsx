import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { serviceDetailMap } from "@/app/services/serviceData";
import GoogleTagHead from "@/components/GoogleTagHead";
import ServicesSchema from "@/components/ServicesSchema";

export const metadata = {
  title: "TSCM Services (Indiebim) | H S Detectives",
  description:
    "Technical surveillance counter-measure services including bug sweeping, GPS tracker detection, sanitization, and technical vulnerability reviews.",
};

export default function TscmServicesPage() {
  return (
    <>
      <GoogleTagHead />
      <ServicesSchema />
      <ServiceDetailPage service={serviceDetailMap["tscm-services"]} />
    </>
  );
}
