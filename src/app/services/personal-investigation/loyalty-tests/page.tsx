import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "Loyalty Tests | H S Detectives",
  description: "Professional loyalty test services to verify the faithfulness and trust of your partner.",
};

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["loyalty-tests"]} />;
}

