import {
  getBestPriceWithDiscountFromProduct,
  getBestPriceWithoutDiscountFromProduct,
  getDiscountRate,
} from "@/lib/utils";
import { Product } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { Eye } from "lucide-react";
import CurrencyFormat from "./CurrencyFormat";
import { m } from "framer-motion";

const ProductCard = ({ item }: { item: Product }) => {
  const router = useRouter();
  const active = 0;
  const product = item?.subProducts[active];
  const options = product?.options[active];
  const images = options.images;
  const bestPriceWithDiscount = getBestPriceWithDiscountFromProduct(item);
  const bestPriceWithoutDiscount = getBestPriceWithoutDiscountFromProduct(item);
  const discountRate = getDiscountRate(
    bestPriceWithoutDiscount,
    bestPriceWithDiscount
  );

  return (
    <div className="flex flex-col gap-4 items-center cursor-pointer">
      <div className="flex group">
        <div
          className="relative overflow-hidden h-[500px] group"
          onClick={() => router.push(`/products/${item.slug}`)}
        >
          <Image
            src={images[0]}
            alt="product"
            width={300}
            height={450}
            className="duration-300 ease-linear group-hover/image:translate-x-full"
          />
          <Image
            src={images[1]}
            alt="product"
            width={300}
            height={450}
            className="top-0 absolute duration-300 ease-linear -translate-x-full group-hover:translate-x-0"
          />
          <m.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="hidden absolute top-4 right-16 flex-col gap-4 group-hover:flex duration-300 ease-in z-[9999]"
          >
            <Button
              onClick={() => router.push(`/products/${item.slug}`)}
              variant="outline"
              size="icon"
              className="hover:bg-black hover:text-white absolute z-[10000] rounded-md"
            >
              <Eye />
            </Button>
          </m.div>
        </div>
      </div>

      {/* content */}

      <div className="flex flex-col gap-4 items-start py-4">
        <h5 className=" capitalize">{item.name.substring(0, 20)}</h5>
        <p className=" capitalize text-sm">
          {item.description.substring(0, 30)}
        </p>
        <div className="inline-flex justify-center gap-4 items-center">
          {discountRate > 0 ? (
            <div className="flex  gap-4 justify-between">
              <CurrencyFormat
                value={bestPriceWithDiscount}
                className="font-bold text-primary-900 text-left w-20 text-3xl"
              />
              <CurrencyFormat
                value={bestPriceWithoutDiscount}
                className="line-through w-18 text-slate-600 hidden lg:flex"
              />
            </div>
          ) : (
            <div className="flex flex-wrap gap-4">
              <CurrencyFormat
                value={bestPriceWithDiscount}
                className="font-bold text-primary-900 text-left w-20 text-3xl"
              />
              <CurrencyFormat
                value={bestPriceWithoutDiscount}
                className="line-through w-18 text-slate-600 hidden lg:flex"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
