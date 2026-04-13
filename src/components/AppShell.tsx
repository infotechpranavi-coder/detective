"use client";

import { usePathname } from "next/navigation";
import OurClients from "@/components/home/OurClients";

interface AppShellProps {
  children: React.ReactNode;
  navbar: React.ReactNode;
  footer: React.ReactNode;
}

export default function AppShell({ children, navbar, footer }: AppShellProps) {
  const pathname = usePathname();
  const isIntroRoute = pathname === "/logointor";
  const isClientsRoute =
    pathname === "/clients" ||
    pathname === "/clients-hs-detectives" ||
    pathname === "/our-corporate-clients";
  const showClientsSection = !isClientsRoute;

  if (isIntroRoute) {
    return <>{children}</>;
  }

  return (
    <>
      {navbar}
      {children}
      {showClientsSection ? <OurClients /> : null}
      {footer}
    </>
  );
}
