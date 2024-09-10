import React from "react";
import { m, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Trash } from "lucide-react";
import CurrencyFormat from "@/components/custom/CurrencyFormat";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const CartBar = ({
  openCartBar,
  setOpenCartBar,
}: {
  openCartBar: boolean;
  setOpenCartBar: (v: boolean) => void;
}) => {
  const handleRemove = () => {};
  return (
    <AnimatePresence>
      {openCartBar && (
        <m.div
          onClick={() => setOpenCartBar(false)}
          initial={{
            opacity: 0,
            y: -15,
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { type: "spring", duration: 0.7 },
          }}
          exit={{
            opacity: 0,
            y: -20,
            filter: "blur(5px)",
            scale: "scale(0)",
            transition: { ease: "easeIn", duration: 0.22 },
          }}
          className=" absolute top-[60px] right-8 h-fit w-[360px] bg-white p-4 shadow-2xl"
        >
          <div className="flex flex-col justify-between gap-8">
            <span className="text-center">
              You have <strong>0</strong> items in your cart
            </span>

            <div className="flex overflow-y-auto flex-col snap-y gap-6 max-h-[360px] border-b border-gray-200 pb-4">
              <div className="flex justify-between gap-4 snap-center cursor-grab">
                <Image
                  src=""
                  width="200"
                  height="200"
                  alt="prod"
                  className="h-20 w-20 object-cover"
                />
                <div className="flex flex-col gap-1">
                  <span className=" capitalize">name here</span>

                  <div className=" inline-flex gap-4 font-bold">
                    <span>2</span>
                    <span>X</span>
                    <span className="font-bold">$200</span>
                  </div>

                  <div className="inline-flex justify-between">
                    <div className="inline-flex justify-between gap-1 items-center">
                      <span>Style:</span>
                      <span className="font-bold">stylename</span>
                    </div>
                    <div className="inline-flex gap-1">
                      <span>Option:</span>
                      <span className="font-bold">option name</span>
                    </div>
                  </div>
                </div>
                <div role="button" className="flex items-start to-violet-700">
                  <Trash
                    size={20}
                    className="hover:text-primary-500"
                    onClick={handleRemove}
                  />
                </div>
              </div>
              <div className="flex justify-between gap-4 snap-center cursor-grab">
                <Image
                  src=""
                  width="200"
                  height="200"
                  alt="prod"
                  className="h-20 w-20 object-cover"
                />
                <div className="flex flex-col gap-1">
                  <span className=" capitalize">name here</span>

                  <div className=" inline-flex gap-4 font-bold">
                    <span>2</span>
                    <span>X</span>
                    <span className="font-bold">$200</span>
                  </div>

                  <div className="inline-flex justify-between">
                    <div className="inline-flex justify-between gap-1 items-center">
                      <span>Style:</span>
                      <span className="font-bold">stylename</span>
                    </div>
                    <div className="inline-flex gap-1">
                      <span>Option:</span>
                      <span className="font-bold">option name</span>
                    </div>
                  </div>
                </div>
                <div role="button" className="flex items-start to-violet-700">
                  <Trash
                    size={20}
                    className="hover:text-primary-500"
                    onClick={handleRemove}
                  />
                </div>
              </div>
              <div className="flex justify-between gap-4 snap-center cursor-grab">
                <Image
                  src=""
                  width="200"
                  height="200"
                  alt="prod"
                  className="h-20 w-20 object-cover"
                />
                <div className="flex flex-col gap-1">
                  <span className=" capitalize">name here</span>

                  <div className=" inline-flex gap-4 font-bold">
                    <span>2</span>
                    <span>X</span>
                    <span className="font-bold">$200</span>
                  </div>

                  <div className="inline-flex justify-between">
                    <div className="inline-flex justify-between gap-1 items-center">
                      <span>Style:</span>
                      <span className="font-bold">stylename</span>
                    </div>
                    <div className="inline-flex gap-1">
                      <span>Option:</span>
                      <span className="font-bold">option name</span>
                    </div>
                  </div>
                </div>
                <div role="button" className="flex items-start to-violet-700">
                  <Trash
                    size={20}
                    className="hover:text-primary-500"
                    onClick={handleRemove}
                  />
                </div>
              </div>
              <div className="flex justify-between gap-4 snap-center cursor-grab">
                <Image
                  src=""
                  width="200"
                  height="200"
                  alt="prod"
                  className="h-20 w-20 object-cover"
                />
                <div className="flex flex-col gap-1">
                  <span className=" capitalize">name here</span>

                  <div className=" inline-flex gap-4 font-bold">
                    <span>2</span>
                    <span>X</span>
                    <span className="font-bold">$200</span>
                  </div>

                  <div className="inline-flex justify-between">
                    <div className="inline-flex justify-between gap-1 items-center">
                      <span>Style:</span>
                      <span className="font-bold">stylename</span>
                    </div>
                    <div className="inline-flex gap-1">
                      <span>Option:</span>
                      <span className="font-bold">option name</span>
                    </div>
                  </div>
                </div>
                <div role="button" className="flex items-start to-violet-700">
                  <Trash
                    size={20}
                    className="hover:text-primary-500"
                    onClick={handleRemove}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between font-bold">
                <span className="text-xl">SubTotal</span>
                <strong>
                  <CurrencyFormat value={2000} className="text-right" />
                </strong>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/cart"
                  className="rounded-sm capitalize text-base justify-center flex py-4 hover:bg-primary-500 hover:text-white  border border-border"
                >
                  View cart
                </Link>
                <Button
                  className="rounded-sm capitalize py-8  text-base "
                  variant="default"
                  size="lg"
                >
                  checkout
                </Button>
              </div>
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default CartBar;
