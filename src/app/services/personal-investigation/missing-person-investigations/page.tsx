import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "Missing Person Investigations | H S Detectives",
  description: "Expert missing person tracing services to locate and reunite you with missing individuals.",
};

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["missing-person-investigations"]} />;
}

