import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ArrowDownZa } from "lucide-react";
import ProductsFilter from "./ProductsFilter";

const MobileSidebarLeft = ({
  minPrice,
  setMinPrice,
  setMaxPrice,
  loading,
}: {
  minPrice: number;
  maxPrice: number;
  setMinPrice: (v: number) => void;
  setMaxPrice: (v: number) => void;
  loading: boolean;
  setLoading: (v: boolean) => void;
}) => {
  return (
    <div className="xl:hidden">
      <Sheet>
        <SheetTrigger>
          <span className="flex gap-2 items-center">
            <ArrowDownZa className="w-4 h-4 hover:text-primary-900 hover:font-bold" />
            Filters
          </span>
        </SheetTrigger>
        <SheetContent className="px-4 w-full md:w-[400px] p-0" side="left">
          <SheetHeader className="bg-backgroundDisable p-1 border-b flex justify-start">
            <SheetTitle className="text-sm">Filters</SheetTitle>
            <SheetDescription>Filters by price</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col h-screen p-4">
            <ProductsFilter
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
              loading={loading}
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebarLeft;
