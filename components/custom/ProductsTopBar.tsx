import { Product } from "@/types";
import React from "react";
import MobileSidebarLeft from "./MobileSidebarLeft";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";

const ProductsTopBar = ({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  loading,
  setLoading,
  perPage,
  setPerPages,
  setFilter,
  filter,
  maxPage,
  page,
  products,
}: {
  minPrice: number;
  maxPrice: number;
  setMinPrice: (v: number) => void;
  setMaxPrice: (v: number) => void;
  loading: boolean;
  setLoading: (v: boolean) => void;
  perPage: number;
  filter: string;
  setPerPages: (v: number) => void;
  setFilter: (v: string) => void;
  page: number;
  maxPage: number;
  products: Product[];
}) => {
  return (
    <div className="lg:flex items-center justify-between w-full">
      <div className="flex items-center gap-4 flex-1 justify-between">
        <MobileSidebarLeft
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          loading={loading}
          setLoading={setLoading}
        />
        <div className="hidden lg:block">
          Showing {maxPage === page ? products.length : perPage * page} of{" "}
          {products.length} results
        </div>
        <div className="ms-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">{filter ? filter : ""}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value="bottom">
                <DropdownMenuRadioItem
                  value="top"
                  onClick={() => setFilter("alphabetic")}
                >
                  Alphabetic
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="top"
                  onClick={() => setFilter("priceLowToHigh")}
                >
                  price:Low to high
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="top"
                  onClick={() => setFilter("priceHighToLow")}
                >
                  price:Price to low
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="top"
                  onClick={() => setFilter("latest")}
                >
                  latest
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <span>Show:</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">{perPage}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value="bottom">
                <DropdownMenuRadioItem
                  value="30"
                  onClick={() => setPerPages(30)}
                >
                  30
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="20"
                  onClick={() => setPerPages(20)}
                >
                  20
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="10"
                  onClick={() => setPerPages(10)}
                >
                  10
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default ProductsTopBar;
