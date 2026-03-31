import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "Physical Surveillance | H S Detectives",
  description: "Expert physical surveillance services delivering real-time intelligence for any investigation.",
};

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["physical-surveillance"]} />;
}

