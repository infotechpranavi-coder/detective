import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { serviceDetailMap } from "@/app/services/serviceData";
import GoogleTagHead from "@/components/GoogleTagHead";

export const metadata = {
  title: "Debugging & Sweeping | H S Detectives",
  description:
    "Debugging and sweeping services to detect hidden surveillance devices, secure private spaces, and restore operational privacy.",
};

export default function DebuggingSweepingPage() {
  return (
    <>
      <GoogleTagHead />
      <>
      <ServiceDetailPage service={serviceDetailMap["debugging-sweeping"]} />
    </>
    </>
  );
}