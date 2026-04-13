import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { serviceDetailMap } from "@/app/services/serviceData";
import GoogleTagHead from "@/components/GoogleTagHead";

export const metadata = {
  title: "Surveillance & Shadowing | H S Detectives",
  description:
    "Elite surveillance and shadowing operations with time-stamped evidence, covert tracking, and flexible deployment durations.",
};

export default function SurveillanceShadowingPage() {
  return (
    <>
      <GoogleTagHead />
      <>
      <ServiceDetailPage service={serviceDetailMap["surveillance-shadowing"]} />
    </>
    </>
  );
}
