import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "Forensic Investigation | H S Detectives",
  description: "Expert forensic investigation services delivering evidence-grade findings for legal and corporate proceedings.",
};

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["forensic-investigation"]} />;
}

