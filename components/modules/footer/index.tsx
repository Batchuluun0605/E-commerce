"use client";
import Container from "@/components/custom/Container";
import { useUser } from "@clerk/nextjs";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const { isSignedIn } = useUser();
  return (
    <footer>
      <Container>
        <div className="grid grid-cols-1">
          <ul className="flex flex-col gap-4">
            <li className="my-10">
              <h4>E-Commerce</h4>
            </li>
            <li className="flex gap-4">
              <PhoneCall />
              (704) 555-0127
            </li>
            <li className="flex gap-4">
              <Mail />
              Ecommerce@Ecommerce
            </li>
            <li className="flex gap-4">
              <MapPin />
              UlaanBaatar, Bayngol, 8, 19
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="my-10">
              <h4>Informations</h4>
            </li>
            <li className="flex gap-4">
              <Link href="/account/dashboard">My account</Link>
            </li>
            <li className="flex gap-4">
              <Link href={isSignedIn ? "/account/dashboard" : "sign-in"}>
                {isSignedIn ? "Dashboard" : "Login"}
              </Link>
            </li>
            <li className="flex gap-4">
              <Link href="/cart">My cart</Link>
            </li>
            <li className="flex gap-4">
              <Link href="/checkout">Checkout</Link>
            </li>
            <li>
              <h6>Services</h6>
            </li>
            <li>
              <h6>About us</h6>
            </li>
            <li>
              <h6>Careers</h6>
            </li>
            <li>
              <h6>Delivery Information</h6>
            </li>
            <li>
              <h6>Privacy policy</h6>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
