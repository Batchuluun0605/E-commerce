import { cn } from "@/lib/utils";
import { CheckCheck, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

function Toast({
  status = "success",
  message,
  link,
  toastId,
}: {
  status?: "error" | "success";
  message: string;
  link?: string;
  toastId?: string;
}) {
  return (
    <div
      className={cn(
        "z-50 shadow-xl flex items-center justify-between gap-10 p-4 mb-4 border-border bg-white",
        status === "error" && "text-red-800 border-t-4 border-red-300"
      )}
      role="alert"
    >
      {status === "success" ? (
        <CheckCheck className="h-8 w-8 text-green-700" />
      ) : (
        <CheckCheck className="h-8 w-8 text-red-700" />
      )}
      <div className="sm-3 font-medium">
        {message}
        {link && (
          <Link
            href={link}
            className="font-semibold underline hover:no-underline"
          ></Link>
        )}
      </div>
      <Button
        onClick={() => toast.remove(toastId)}
        className="ms-auto rounded-lg"
        size="icon"
        variant="outline"
      >
        <X
          className={cn(
            "text-black h-8 w-8",
            status === "error" && "text-red-800"
          )}
        />
      </Button>
    </div>
  );
}

export default Toast;
