import React from "react";
import { ClipLoader } from "react-spinners";
const Loading = ({
  isLoading,
  size,
  color,
}: {
  isLoading: boolean;
  size: number;
  color: string;
}) => {
  return (
    <div className="z-50 absolute inset-0 flex items-center justify-center h-screen">
      {isLoading && <ClipLoader size={size} color={color} className="" />}
    </div>
  );
};

export default Loading;
