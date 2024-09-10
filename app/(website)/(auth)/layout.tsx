"use client";
import { Button } from "@/components/ui/button";
import { MoveLeft, Router } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <div className="h-screen ">
      <div className="absolute top-10 left-10 flex items-center gap-4 group">
        <Button
          onClick={() => router.back()}
          variant="nostyle"
          className="text-2xl group-hover:text-primary-900 flex gap-8 "
        >
          <MoveLeft
            size={40}
            className="group-hover:text-primary-900 duration-100 ease-linear group-hover:translate-x-2"
          />
          Go Back
        </Button>
      </div>
      {children}
    </div>
  );
};

export default layout;
