import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "Corporate TSCM Services | H S Detectives",
  description: "Advanced corporate TSCM sweep services to protect boardrooms and offices from unauthorized surveillance.",
};

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["corporate-tscm-services"]} />;
}

