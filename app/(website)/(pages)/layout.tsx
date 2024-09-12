import React from "react";
import Footer from "@/components/modules/footer";
import Header from "@/components/modules/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
