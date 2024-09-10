import React from "react";
import SidebarMenu from "./SidebarMenu";

const MobileButton = () => {
  return (
    <div className="block lg:hidden">
      <SidebarMenu />
    </div>
  );
};

export default MobileButton;
