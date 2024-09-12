import { SignUp } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  return (
    <div className="h-full grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden bg-cover bg-center lg:flex bg-[url('https://plus.unsplash.com/premium_photo-1661775820832-f971657b13f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8fDB8fHww')]"></div>
      <div className="flex justify-center items-center">
        <SignUp />
      </div>
    </div>
  );
}
