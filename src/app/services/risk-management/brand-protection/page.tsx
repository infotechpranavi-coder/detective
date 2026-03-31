import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "Brand Protection | H S Detectives",
  description: "Comprehensive brand protection services to defend your brand from counterfeiting and unauthorized use.",
};

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["brand-protection"]} />;
}

