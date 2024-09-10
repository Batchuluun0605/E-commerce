import { SignOutButton, UserButton } from "@clerk/nextjs";
import React from "react";

function page() {
  return (
    <div>
      This is a protected page
      <UserButton />
      <SignOutButton />
    </div>
  );
}

export default page;
