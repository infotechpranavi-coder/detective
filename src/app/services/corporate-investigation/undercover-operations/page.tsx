import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "Undercover Operations | H S Detectives",
  description: "Expert undercover investigation services to expose internal misconduct and corporate fraud.",
};

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["undercover-operations"]} />;
}

