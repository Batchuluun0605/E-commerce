import Loading from "@/components/custom/Loading";
import ProductsContent from "@/components/custom/ProductsContent";
import ProductsTopBar from "@/components/custom/ProductsTopBar";
import usePagination from "@/hook/usePagination";
import { cn } from "@/lib/utils";
import { Product } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";

const ProductsMainContent = ({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  loading,
  setLoading,
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
  const [products, setProducts] = useState<Product[]>([]);
  const [perPage, setPerPages] = useState<number>(10);
  const [filter, setFilter] = useState<string>("latest");
  const [page, setPage] = useState<number>(1);
  const count = Math.ceil(products.length / perPage);
  const _DATA = usePagination(products, perPage);
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      await axios
        .get(process.env.NEXT_PUBLIC_API_URL + "/api/products", {
          params: {
            filter: filter,

            minPrice: minPrice,
            maxPrice: maxPrice,
          },
        })
        .then((response) => setProducts(response.data.data))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    };

    getProducts();
  }, [page, filter, perPage, minPrice, maxPrice]);

  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <>
      {loading && <Loading isLoading={loading} color="red" size={100} />}
      <div className={cn("", className)}>
        <div className="flex flex-col gap-4">
          <ProductsTopBar
            minPrice={minPrice}
            setMaxPrice={setMinPrice}
            maxPrice={maxPrice}
            setMinPrice={setMaxPrice}
            loading={loading}
            setLoading={setLoading}
            perPage={perPage}
            filter={filter}
            setPerPages={setPerPages}
            setFilter={setFilter}
            maxPage={Number(_DATA.maxPage)}
            page={page}
            products={products}
          />
          <ProductsContent products={_DATA.currentData()} />
          <div className="py-10 flex justify-between mt-auto">
            <Pagination
              count={count}
              variant="outlined"
              color="primary"
              page={page}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsMainContent;
