import React from "react";
import { Toaster } from "react-hot-toast";
function Toastprovider() {
  return (
    <Toaster
      containerStyle={{ top: 50 }}
      toastOptions={{
        position: "top-center",
        duration: 3000,
      }}
    />
  );
}

export default Toastprovider;
