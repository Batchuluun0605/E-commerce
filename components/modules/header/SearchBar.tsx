import React, { useState } from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import useSWR, { Fetcher } from "swr";
import { Product } from "@/types";
import Image from "next/image";
import { getBestPriceWithDiscountFromProduct } from "@/lib/utils";
import Loading from "@/components/custom/Loading";

const SearchBar = ({
  openSearchBar,
  setOpenSearchBar,
}: {
  openSearchBar: boolean;
  setOpenSearchBar: (v: boolean) => void;
}) => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const fetcher: Fetcher<Product[], string> = (args) =>
    fetch(args)
      .then((res) => res.json())
      .then((res) => res.data);

  const { data, isLoading, isValidating } = useSWR<Product[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/products?search" + search,
    fetcher
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };
  return (
    <>
      {!isValidating ||
        (isLoading && <Loading isLoading={true} size={100} color="red" />)}
      <Dialog open={openSearchBar}>
        <DialogContent className="lg:max-w-screen-xl z-[99999] [&>.closeBtn:hidden]">
          <div className="flex items-center w-full gap-4">
            <Search className="text-slate-300" />
            <Input
              className="font-medium text-2xl"
              placeholder="type any product here"
              onInput={handleSearch}
            />
            <Button
              onClick={() => setOpenSearchBar(!openSearchBar)}
              className="hover:bg-primary-500 group"
              variant="outline"
              size="icon"
            >
              <X className="group-hover:text-white" />
            </Button>
          </div>
          <div className="flex overflow-y-auto w-full py-12 gap-12 flex-col justify-start h-[600px]">
            {data &&
              data.map((item: Product) => (
                <div
                  className="group flex flex-col justify-start gap-8 px-8 items-center lg:h-fit lg:flex-row lg:justify-between hover:border-gray-50 hover:scale-105 transition-all hover:shadow-lg py-4"
                  role="button"
                  onClick={() => router.push(`/products/${item.slug}`)}
                  key={item._id}
                >
                  <Image
                    src={item.subProducts[0].options[0].images[0]}
                    height={80}
                    width="60"
                    className=" object-contain"
                    alt="product"
                  />
                  <span className="text-center">
                    {item.name.substring(0, 100)}
                  </span>
                  <div className="w-40 font-bold text-xl text-center text-primary-900">
                    {getBestPriceWithDiscountFromProduct(item)}
                  </div>
                </div>
              ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SearchBar;
