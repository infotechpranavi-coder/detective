import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { serviceDetailMap } from "@/app/services/serviceData";

export const metadata = {
  title: "Matrimonial Checking | H S Detectives",
  description:
    "Matrimonial checking services for confidential pre- and post-marriage verification, relationship clarity, and fact-based personal intelligence.",
};

export default function MatrimonialCheckingPage() {
  return <ServiceDetailPage service={serviceDetailMap["matrimonial-checking"]} />;
}