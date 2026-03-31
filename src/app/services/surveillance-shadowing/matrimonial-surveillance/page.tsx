import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "Matrimonial Surveillance | H S Detectives",
  description: "Discreet matrimonial surveillance services to uncover the truth in sensitive marital situations.",
};

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["matrimonial-surveillance"]} />;
}

