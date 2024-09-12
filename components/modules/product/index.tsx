"use client";
import Container from "@/components/custom/Container";
import Row from "@/components/custom/Row";
import React, { useState } from "react";
import ProductsSidebarLeft from "./ProductsSidebarLeft";
import ProductsMainContent from "./ProductsMainContent";

const index = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [loading, setLoading] = useState(false);
  return (
    <section>
      <Container>
        <Row className="gap-12 items-start">
          {/* sidebar */}
          <ProductsSidebarLeft
            minPrice={minPrice}
            setMaxPrice={setMinPrice}
            maxPrice={maxPrice}
            setMinPrice={setMaxPrice}
            loading={loading}
            setLoading={setLoading}
            className="hidden lg:block"
          />
          {/* main content */}
          <ProductsMainContent
            minPrice={minPrice}
            setMaxPrice={setMinPrice}
            maxPrice={maxPrice}
            setMinPrice={setMaxPrice}
            loading={loading}
            setLoading={setLoading}
            className=""
          />
        </Row>
      </Container>
    </section>
  );
};

export default index;
