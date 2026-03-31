import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "Employee Surveillance | H S Detectives",
  description: "Legally compliant employee surveillance services to protect your organization from internal risk.",
};

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["employee-surveillance"]} />;
}

