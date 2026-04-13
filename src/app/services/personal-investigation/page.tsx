import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { serviceDetailMap } from "@/app/services/serviceData";
import GoogleTagHead from "@/components/GoogleTagHead";

export const metadata = {
  title: "Personal Investigation | H S Detectives",
  description:
    "Personal investigation services covering matrimonial verification, affair investigation, missing person tracing, child safety monitoring, and background checks.",
};

export default function PersonalInvestigationPage() {
  return (
    <>
      <GoogleTagHead />
      <>
      <ServiceDetailPage service={serviceDetailMap["personal-investigation"]} />
    </>
    </>
  );
}
