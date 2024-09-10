import Row from "@/components/custom/Row";
import { Button } from "@/components/ui/button";
import React from "react";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import SearchBar from "./SearchBar";
import CartBar from "./CartBar";
import { useRouter } from "next/navigation";

const IconsGroup = ({
  openSearchBar,
  setOpenSearchBar,
  openCartBar,
  setOpenCartBar,
}: {
  openSearchBar: boolean;
  setOpenSearchBar: (v: boolean) => void;
  openCartBar: boolean;
  setOpenCartBar: (v: boolean) => void;
}) => {
  const router = useRouter();

  return (
    <section>
      <Row className="lg:gap-4">
        <SearchBar
          openSearchBar={openSearchBar}
          setOpenSearchBar={setOpenSearchBar}
        />
        <Button
          variant="nostyle"
          size="icon"
          onClick={() => setOpenSearchBar(!openSearchBar)}
        >
          <CiSearch size={40} className="hover:text-primary-700" />
        </Button>
        <Button
          variant="nostyle"
          size="icon"
          className="hidden lg:block relative"
          onClick={() => setOpenCartBar(!openCartBar)}
        >
          <CiShoppingCart size={40} className="hover:text-primary-700" />
          <span className=" absolute flex items-center justify-center text-white bg-primary-500 w-6 h-6 rounded-full -right-1 -top-1">
            0
          </span>
        </Button>
        <Button
          variant="nostyle"
          size="icon"
          className="hidden lg:block "
          onClick={() => router.push("/account/dashbaord")}
        >
          <CiUser size={40} className="hover:text-primary-700" />
        </Button>
        <CartBar openCartBar={openCartBar} setOpenCartBar={setOpenCartBar} />
      </Row>
    </section>
  );
};

export default IconsGroup;
