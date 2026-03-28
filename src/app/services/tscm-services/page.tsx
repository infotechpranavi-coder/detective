import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { serviceDetailMap } from "@/app/services/serviceData";

export const metadata = {
  title: "TSCM Services (Indiebim) | H S Detectives",
  description:
    "Technical surveillance counter-measure services including bug sweeping, GPS tracker detection, sanitization, and technical vulnerability reviews.",
};

export default function TscmServicesPage() {
  return <ServiceDetailPage service={serviceDetailMap["tscm-services"]} />;
}
