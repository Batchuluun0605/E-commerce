import React from "react";
import Mobilebutton from "@/components/custom/Mobilebuttom";
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
      {/* <Mobilebutton /> */}
      {children}
      <Footer />
    </>
  );
}
