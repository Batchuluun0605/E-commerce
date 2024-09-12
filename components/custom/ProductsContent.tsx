import { Product } from "@/types";
import { ShoppingCart } from "lucide-react";
import React from "react";
import ProductCardTwo from "./ProductCardTwo";

const ProductsContent = ({ products }: { products: Product[] }) => {
  return (
    <>
      {products && products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-20 w-full">
          <ShoppingCart className="font-bold" size={100} />
          <h3 className="">No Product Found</h3>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-4 relative">
          {products &&
            products.map((item: Product) => (
              <ProductCardTwo item={item} key={item._id} />
            ))}
        </div>
      )}
    </>
  );
};

export default ProductsContent;
