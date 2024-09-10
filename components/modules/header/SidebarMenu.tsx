"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RiMenu2Line } from "react-icons/ri";
import { cn } from "@/lib/utils";
import useSWR, { Fetcher } from "swr";
import { Category, Page, SubCategory } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

function SidebarMenu() {
  const [show, setShow] = useState(false);
  const [subCategories, setSubCategories] = useState<SubCategory[]>();
  const router = useRouter();
  const fetcher: Fetcher<Category[], string> = (args) =>
    fetch(args)
      .then((res) => res.json())
      .then((res) => res.data);

  const { data, error, isLoading } = useSWR<Category[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/categories",
    fetcher
  );
  const pageApi = useSWR<Page[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/pages",
    fetcher
  );

  if (error) return <div>fetching error category data!</div>;
  if (pageApi.error) return <div>fetching error page data!</div>;

  return (
    <>
      {isLoading && "Loading..."}
      <Sheet>
        <SheetTrigger>
          <RiMenu2Line size={34} />
        </SheetTrigger>
        <SheetContent
          className={cn("px-4 w-full [&>#closeBtn]:text-3xl", "md:w-[400px]")}
        >
          <div className="mt-10">
            <Tabs defaultValue="category">
              <TabsList className="grid grid-cols-2">
                <TabsTrigger value="category">Categories</TabsTrigger>
                <TabsTrigger value="page">Pages</TabsTrigger>
              </TabsList>
              <TabsContent value="category">
                <div className="flex flex-col gap-8 h-full">
                  {data &&
                    data.slice(0, 20).map((item: Category, idx: number) => (
                      <div key={item._id} className="group px-4 py-2">
                        <div className="flex items-center gap-4">
                          <span
                            onClick={() =>
                              router.push(`/categories/${item.link}/products`)
                            }
                            className=" capitalize hover:text-primary-500 cursor-pointer"
                          >
                            {item.name}
                          </span>
                          {item?.submenu && item.submenu.length > 0 && (
                            <ChevronRight
                              className=" ms-auto h-5 w-5 text-icon"
                              onClick={() => {
                                setShow(!show);
                                setSubCategories(item.submenu);
                              }}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="page">
                {pageApi.data &&
                  pageApi.data.map((item: Page, idx: number) => (
                    <div
                      key={item._id}
                      id={item._id}
                      className="group inline-flex items-center px-4 py-2 gap-4 w-full hover:text-primary-700 cursor-pointer capitalize"
                    >
                      <div className="flex items-center gap-4 w-full">
                        <span onClick={() => router.push(`${item.link}`)}>
                          {item.name}
                        </span>
                        {item?.subpage && item.subpage.length > 0 && (
                          <ChevronRight
                            size={14}
                            className="text-icon ms-auto"
                          />
                        )}
                      </div>
                    </div>
                  ))}
              </TabsContent>
            </Tabs>
          </div>
        </SheetContent>
      </Sheet>

      <Sheet open={show}>
        <SheetTrigger></SheetTrigger>
        <SheetContent
          className="px-4 w-full [&>#closeBtn]:hidden md:w-[400px] "
          side="left"
        >
          <div className="duration-300 ease-in absolute p-8 top-0 h-screen left-0 bg-white w-[260px]">
            <Button
              onClick={() => setShow(!show)}
              variant="default"
              title="back"
              className=" hover:bg-black hover:text-white"
            >
              <ChevronLeft />
            </Button>
            <div className="flex flex-col gap-8 justify-center mt-12">
              {subCategories &&
                subCategories.map((item: SubCategory, idx: number) => (
                  <Link
                    className=" capitalize hover:text-primary-800"
                    key={idx}
                    href={`/category${item.link}/products`}
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default SidebarMenu;
