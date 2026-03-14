import type { Metadata } from "next";
import { Playfair_Display, Inter, Space_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space",
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "H S Detectives | Cinematic Detective Agency Since 2011",
  description: "A cinematic, fully animated multi-page detective agency.",
};

import Cursor from "@/components/ui/Cursor";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Scanline from "@/components/ui/Scanline";
import PageTransition from "@/components/ui/PageTransition";
import AppShell from "../components/AppShell";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfair.variable} ${inter.variable} ${spaceMono.variable} ${bebasNeue.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <Cursor />
        <Scanline />
        <AppShell navbar={<Navbar />} footer={<Footer />}>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
