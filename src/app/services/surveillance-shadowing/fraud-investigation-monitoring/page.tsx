import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "Fraud Investigation Monitoring | H S Detectives",
  description: "Surveillance-led fraud monitoring services to track, document, and expose fraudulent activities.",
};

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["fraud-investigation-monitoring"]} />;
}

