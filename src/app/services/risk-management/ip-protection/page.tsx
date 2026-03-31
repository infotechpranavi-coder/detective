import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "IP Protection | H S Detectives",
  description: "Expert intellectual property protection investigation services to safeguard your IP from theft and infringement.",
};

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["ip-protection"]} />;
}

