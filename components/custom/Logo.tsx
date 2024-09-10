import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link className="" href="/">
      <Image src="/assest/images/star.svg" width="40" height="40" alt="logo" />
    </Link>
  );
}

export default Logo;
