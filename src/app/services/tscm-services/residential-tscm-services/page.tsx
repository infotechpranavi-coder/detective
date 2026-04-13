import GoogleTagHead from "@/components/GoogleTagHead";
import ServicesSchema from "@/components/ServicesSchema";

﻿import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "Residential TSCM Services | H S Detectives",
  description: "Professional residential TSCM services to detect hidden surveillance devices in your home.",
};

export default function Page() {
  return (
    <>
      <GoogleTagHead />
      <ServicesSchema />
      <>
      <SubServiceDetailPage service={subServiceMap["residential-tscm-services"]} />
    </>
    </>
  );
}

