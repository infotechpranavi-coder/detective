import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "Home Bug Sweep | H S Detectives",
  description: "Comprehensive home bug sweep services to secure your residence from hidden recording devices.",
};

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["home-bug-sweep"]} />;
}

