import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "Business Continuity BCMS | H S Detectives",
  description: "Business continuity management support and investigative intelligence to strengthen organizational resilience.",
};

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["business-continuity-bcms"]} />;
}

