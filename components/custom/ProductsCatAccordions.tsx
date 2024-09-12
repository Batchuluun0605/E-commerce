import { Category, SubCategory } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const ProductsCatAccordions = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      await axios
        .get(process.env.NEXT_PUBLIC_API_URL + "/api/categories", {})
        .then((response) => setCategories(response.data.data))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    };

    getCategories();
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton className=" w-full h-screen" />
      ) : (
        <Accordion type="single" collapsible className="w-full">
          {categories &&
            categories.slice(0, 20).map((item: Category) => (
              <AccordionItem key={item._id} value={item._id}>
                <AccordionTrigger className="!py-0">
                  <Link
                    className="text-xl text-left"
                    href={`/categories/${item.link}/products`}
                  >
                    <span className="text-xl capitalize ">
                      {item.name.substring(0, 18)}
                    </span>
                  </Link>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-4 ms-10">
                    {item.submenu?.map((itemSub: SubCategory) => (
                      <Link
                        key={itemSub.link}
                        className="text-xl min-w-40 hover:text-primary-900 capitalize"
                        href={`/categories/${itemSub.link}/products`}
                      >
                        {itemSub.name}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      )}
    </>
  );
};

export default ProductsCatAccordions;
