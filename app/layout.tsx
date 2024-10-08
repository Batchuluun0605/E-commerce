import type { Metadata } from "next";
import "./globals.css";
import { kanit } from "./font";
import React from "react";
import Providers from "@/providers";
import { cn } from "@/lib/utils";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen overflow-x-hidden", kanit.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
