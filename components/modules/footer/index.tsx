"use client";
import Container from "@/components/custom/Container";
import Toast from "@/components/custom/Toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { Mail, MapPin, MoveRight, PhoneCall } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { z } from "zod";
import Loading from "@/components/custom/Loading";
import { m } from "framer-motion";
const Footer = () => {
  const { isSignedIn } = useUser();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const Email = z.object({
      email: z.string().email().min(5).max(100),
    });

    const validatedFields = Email.safeParse({
      email: email,
    });

    if (!validatedFields.success) {
      toast.custom(
        <Toast message="Validation error. Try again" status="error" />
      );
      setLoading(false);
      return;
    }

    try {
      await SendEmail();
      toast.custom(
        <Toast message="Subscribed successfully!" status="success" />
      );
    } catch {
      toast.custom(
        <Toast message="Failed to subscribe. Try again later." status="error" />
      );
    } finally {
      setLoading(false);
    }
  };

  const SendEmail = async () => {
    const values = {
      subject: "Subscription",
      email: email,
      message: "Just subscribed to e-commerce Newsletter",
    };

    await axios.post(
      process.env.NEXT_PUBLIC_API_URL + "/api/sendEmail",
      values
    );
  };

  return (
    <>
      {loading && <Loading isLoading={loading} size={100} color="red" />}
      <m.footer
        initial={{
          opacity: 1,
          y: 100,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-black pb-10"
      >
        <Container>
          <div className="grid grid-cols-1 text-slate-400 lg:grid-cols-4 md:grid-cols-2">
            <ul className="flex flex-col gap-4 py-10">
              <li className="mb-10">
                <h4 className="text-white text-4xl">E-Commerce</h4>
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
              <li className="mt-10">
                <h4 className="text-white text-2xl">Informations</h4>
              </li>
              <li className="flex gap-4">
                <Link
                  className="hover:text-primary-500"
                  href="/account/dashboard"
                >
                  My account
                </Link>
              </li>
              <li className="flex gap-4">
                <Link
                  className="hover:text-primary-500"
                  href={isSignedIn ? "/account/dashboard" : "sign-in"}
                >
                  {isSignedIn ? "Dashboard" : "Login"}
                </Link>
              </li>
              <li className="flex gap-4">
                <Link className="hover:text-primary-500" href="/cart">
                  My cart
                </Link>
              </li>
              <li className="flex gap-4">
                <Link className="hover:text-primary-500" href="/checkout">
                  Checkout
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-2 mt-10">
              <li className="flex gap-4">
                <h6 className="text-2xl text-white">Services</h6>
              </li>
              <li className="flex gap-4">
                <Link href="/" className="hover:text-primary-500">
                  About us
                </Link>
              </li>
              <li className="flex gap-4">
                <Link href="/" className="hover:text-primary-500">
                  Careers
                </Link>
              </li>
              <li className="flex gap-4">
                <Link href="/" className="hover:text-primary-500">
                  Delivery Information
                </Link>
              </li>
              <li className="flex gap-4">
                <Link href="/" className="hover:text-primary-500">
                  Privacy policy
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col gap-5">
              <li className="flex gap-4 mt-10">
                <h6 className="text-2xl text-white">Subscribe</h6>
              </li>
              <li className="flex gap-4">
                <Link href="#">
                  Enter your email to get apps, product and latest updates
                </Link>
              </li>
              <li className="flex gap-4">
                <form className="w-full flex bg-transparent border border-white rounded-xl gap-4 items-center p-3">
                  <Mail size={40} />
                  <Input
                    name="email"
                    value={email}
                    max={40}
                    className="rounded-xl py-4  text-base"
                    placeholder="Enter your email here"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button
                    variant="outline"
                    type="submit"
                    size="icon"
                    disabled={loading}
                    onClick={handleSave}
                  >
                    <MoveRight
                      size={40}
                      className={cn("block", loading && "hidden animate-spin")}
                    />
                  </Button>
                </form>
              </li>
            </ul>
          </div>
        </Container>
      </m.footer>
    </>
  );
};

export default Footer;
