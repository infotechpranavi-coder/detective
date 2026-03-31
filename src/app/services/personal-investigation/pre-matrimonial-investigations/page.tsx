import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "Pre-Matrimonial Investigations | H S Detectives",
  description: "Comprehensive pre-matrimonial investigation services to verify your future partner before marriage.",
};

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["pre-matrimonial-investigations"]} />;
}

