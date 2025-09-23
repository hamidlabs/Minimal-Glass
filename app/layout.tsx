import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

import localFont from "next/font/local";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const gifilka = localFont({
  src: "../public/fonts/Giflika-Regular.woff",
  weight: "400",
  style: "normal",
  variable: "--font-gifilka",
});

export const metadata: Metadata = {
  title: "LUXE - Premium Design & Craftsmanship",
  description:
    "Discover sophisticated design and premium craftsmanship that defines modern luxury.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${montserrat.variable} ${gifilka.variable} font-montserrat antialiased`}
      >
        <Navbar />
        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
