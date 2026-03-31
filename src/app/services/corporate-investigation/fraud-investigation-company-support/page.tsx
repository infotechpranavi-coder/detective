import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "Fraud Investigation | H S Detectives",
  description: "Expert corporate fraud investigation services to detect and document fraud within your organization.",
};

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["fraud-investigation-company-support"]} />;
}

