import { Option, SubProduct } from "./../types/index";
import { Product } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Get the discount from an option of a  product */
export const discountPrice = (price: number, discount: number): number => {
  let final_price: number = 0;
  final_price = (price * (100 * discount)) / 100;

  return parseInt(final_price.toFixed(2));
};

export const getBestPriceWithDiscountFromProduct = (
  product: Product
): number => {
  const data = product.subProducts.map((subProduct: SubProduct) => {
    return subProduct.options.map((options: Option) => {
      return options.discount
        ? discountPrice(options.price, options.discount)
        : options.price;
    });
  });

  const sort = data.map((item: Array<number>) => {
    return item.sort((a: number, b: number) => {
      return a - b;
    });
  });

  const finalSort = sort
    .map((item: Array<number>) => {
      return item[0];
    })
    .sort((a: number, b: number) => {
      return a - b;
    })[0];

  return finalSort;
};
export const getBestPriceWithoutDiscountFromProduct = (
  product: Product
): number => {
  const data = product.subProducts.map((subProduct: SubProduct) => {
    return subProduct.options.map((options: Option) => {
      return options.price;
    });
  });

  const sort = data.map((item: Array<number>) => {
    return item.sort((a: number, b: number) => {
      return a - b;
    });
  });

  const finalSort = sort
    .map((item: Array<number>) => {
      return item[0];
    })
    .sort((a: number, b: number) => {
      return a - b;
    })[0];

  return finalSort;
};

export const getDiscountRate = (
  price: number,
  discountPrice: number
): number => {
  const d = (price - discountPrice) * (100 / price);
  return parseFloat(d.toFixed(2));
};
