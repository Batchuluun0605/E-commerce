"use client";
import Container from "@/components/custom/Container";
import Logo from "@/components/custom/Logo";
// import Mobilebutton from "@/components/custom/Mobilebutton";
import Row from "@/components/custom/Row";
import React, { useState } from "react";
import IconsGroup from "./IconsGroup";
import MainMenu from "./MainMenu";
import MobileButton from "./MobileButton";

const Main = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [openCartBar, setOpenCartBar] = useState(false);

  return (
    <section className="h-full">
      <Container>
        <Row className="flex justify-between">
          <MobileButton />
          <Logo />
          <MainMenu />
          <IconsGroup
            openSearchBar={openSearchBar}
            setOpenSearchBar={setOpenSearchBar}
            openCartBar={openCartBar}
            setOpenCartBar={setOpenCartBar}
          />
        </Row>
      </Container>
    </section>
  );
};

export default Main;
