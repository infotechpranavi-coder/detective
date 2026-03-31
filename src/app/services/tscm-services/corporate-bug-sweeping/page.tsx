import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "Corporate Bug Sweeping | H S Detectives",
  description: "Expert corporate bug sweeping services to detect listening devices in your business premises.",
};

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["corporate-bug-sweeping"]} />;
}

