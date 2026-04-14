"use client";

import { usePathname } from "next/navigation";
import OurClients from "@/components/home/OurClients";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

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
      <BreadcrumbSchema />
      {navbar}
      <div className="relative">
        <Breadcrumbs />
        {children}
      </div>
      {showClientsSection ? <OurClients /> : null}
      {footer}
    </>
  );
}
