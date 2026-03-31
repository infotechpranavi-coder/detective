import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "Asset Tracing | H S Detectives",
  description: "Professional asset tracing services to locate hidden or undisclosed assets for recovery.",
};

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["asset-tracing"]} />;
}

