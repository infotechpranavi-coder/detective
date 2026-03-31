import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "Covid Monitoring | H S Detectives",
  description: "Specialized health protocol compliance monitoring services for organizations and operational environments.",
};

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["covid-monitoring"]} />;
}

