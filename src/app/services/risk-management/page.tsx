import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { serviceDetailMap } from "@/app/services/serviceData";

export const metadata = {
  title: "Risk Management | H S Detectives",
  description:
    "Comprehensive risk management services including IP protection, brand protection, risk advisory, business continuity support and forensic investigation.",
};

export default function RiskManagementPage() {
  return <ServiceDetailPage service={serviceDetailMap["risk-management"]} />;
}
