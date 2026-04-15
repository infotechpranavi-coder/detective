import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Space_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "H S Detectives | Best Private Detective Agency in Mumbai & Pan-India",
  description: "H S Detectives is a premier private investigation agency in Mumbai offering 100% confidential personal, corporate, and surveillance services since 2011. Professional investigators for matrimonial, fraud, and technical sweeping cases.",
  keywords: "Private Detective Mumbai, Private Investigator Thane, Investigation Agency Navi Mumbai, Matrimonial Investigation Mumbai, Corporate Detective India, HS Detectives",
  icons: {
    icon: [
      { url: "/favicon-white.svg", type: "image/svg+xml" },
      { url: "/HS-Logo.webp", type: "image/webp" },
    ],
    shortcut: "/favicon-white.svg",
    apple: "/HS-Logo.webp",
  },
  openGraph: {
    title: "H S Detectives | Expert Private Investigation Services in Mumbai",
    description: "Professional and confidential detective services. Specialized in personal, corporate, and matrimonial investigations since 2011.",
    url: "https://hsdetectives.com",
    siteName: "H S Detectives",
    type: "website",
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};


import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Scanline from "@/components/ui/Scanline";
import FloatingContactButtons from "@/components/ui/FloatingContactButtons";
import AppShell from "../components/AppShell";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <style
          id="critical-css"
          dangerouslySetInnerHTML={{
            __html:
              "html{font-size:16px;-webkit-text-size-adjust:100%;scroll-behavior:smooth;overflow-x:hidden}body{background-color:#000;color:#fff;overflow-x:hidden;min-width:320px}.img-noir{filter:grayscale(15%) contrast(1.1) brightness(.85)}",
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='/non-critical.css';l.media='print';l.onload=function(){this.media='all'};document.head.appendChild(l);}());",
          }}
        />
        <noscript>
          <link rel="stylesheet" href="/non-critical.css" />
        </noscript>
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} ${spaceMono.variable} ${bebasNeue.variable} bg-background pb-20 font-sans text-foreground antialiased overflow-x-hidden lg:pb-0`}
      >
        <Scanline />
        <FloatingContactButtons />
        <AppShell navbar={<Navbar />} footer={<Footer />}>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
