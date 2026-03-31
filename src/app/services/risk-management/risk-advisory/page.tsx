import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "Risk Advisory | H S Detectives",
  description: "Strategic risk advisory services to identify, assess, and mitigate threats to your business.",
};

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["risk-advisory"]} />;
}

