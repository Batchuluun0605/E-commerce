import HeadingSideBar from "@/components/custom/HeadingSideBar";
import ProductsCatAccordions from "@/components/custom/ProductsCatAccordions";
import ProductsFilter from "@/components/custom/ProductsFilter";
import { cn } from "@/lib/utils";
import React from "react";

const ProductsSidebarLeft = ({
  minPrice,
  setMinPrice,
  setMaxPrice,
  loading,
  className,
}: {
  minPrice: number;
  maxPrice: number;
  setMinPrice: (v: number) => void;
  setMaxPrice: (v: number) => void;
  loading: boolean;
  setLoading: (v: boolean) => void;
  className: string;
}) => {
  return (
    <div className={cn("lg:max-w-[300px] h-full", className)}>
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-2 items-center w-full">
          <HeadingSideBar name="Products categories" />
          <ProductsCatAccordions />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <HeadingSideBar name="Filter by price" />
          <ProductsFilter
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsSidebarLeft;
