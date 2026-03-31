import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "Employee Background Verification | H S Detectives",
  description: "Reliable employee background verification services to protect your organization during hiring.",
};

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["employee-background-verification"]} />;
}

