"use client";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import FraamerMotionProvider from "./FraamerMotionProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsPlacement: "bottom",
            socialButtonsVariant: "blockButton",
            logoImageUrl: "/assest/images/star.svg",
          },
        }}
        signInFallbackRedirectUrl="/account/dashboard"
        afterSignOutUrl="/sign-in"
        signInUrl={`${process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}`}
        signUpUrl={`${process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}`}
        signUpFallbackRedirectUrl="/"
      >
        <FraamerMotionProvider>{children}</FraamerMotionProvider>
      </ClerkProvider>
    </div>
  );
};

export default Providers;
