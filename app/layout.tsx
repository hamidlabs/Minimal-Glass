import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

import localFont from "next/font/local";


const gifilka = localFont({
  src: "../public/fonts/Giflika-Regular.otf",
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
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${gifilka.variable} antialiased`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
