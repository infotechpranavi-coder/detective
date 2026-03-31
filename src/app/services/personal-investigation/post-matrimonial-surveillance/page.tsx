import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "Post-Matrimonial Surveillance | H S Detectives",
  description: "Discreet post-matrimonial surveillance services to uncover the truth in your marital relationship.",
};

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["post-matrimonial-surveillance"]} />;
}

