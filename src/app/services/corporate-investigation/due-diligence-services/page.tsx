import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "Due Diligence Services | H S Detectives",
  description: "Comprehensive due diligence investigation services to verify business partners and opportunities.",
};

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["due-diligence-services"]} />;
}

