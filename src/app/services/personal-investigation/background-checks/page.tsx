import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "Background Checks | H S Detectives",
  description: "Thorough personal background check services for safe and informed decisions.",
};

export default function Page() {
  return <SubServiceDetailPage service={subServiceMap["background-checks"]} />;
}

