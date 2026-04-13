import GoogleTagHead from "@/components/GoogleTagHead";
import ServicesSchema from "@/components/ServicesSchema";

﻿import SubServiceDetailPage from "@/components/services/SubServiceDetailPage";
import { subServiceMap } from "@/app/services/subServiceData";

export const metadata = {
  title: "Debugging Service | H S Detectives",
  description: "Full-spectrum debugging services to eliminate all electronic surveillance threats from any environment.",
};

export default function Page() {
  return (
    <>
      <GoogleTagHead />
      <ServicesSchema />
      <>
      <SubServiceDetailPage service={subServiceMap["debugging-service"]} />
    </>
    </>
  );
}

