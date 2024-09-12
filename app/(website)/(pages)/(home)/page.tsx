import Payments from "@/components/custom/Payments";
import Categories from "@/components/modules/home/Categories";
import CtaOne from "@/components/modules/home/CtaOne";
import CtaTwo from "@/components/modules/home/CtaTwo";
import FeatureProducts from "@/components/modules/home/FeatureProducts";
import HomeSlide from "@/components/modules/home/HomeSlide";

import React from "react";
export default function Home() {
  return (
    <>
      <HomeSlide />
      <Payments />
      <Categories />
      <FeatureProducts />
      <CtaTwo />
      <CtaOne />
    </>
  );
}
