"use client";
import Container from "@/components/custom/Container";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "./style.css";
import {
  Calendar,
  CreditCard,
  Headset,
  LockKeyhole,
  Truck,
} from "lucide-react";

const Payments = () => {
  return (
    <section className="py-4">
      <Container>
        <Swiper
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 1000,
            },
            575: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          spaceBetween={50}
          slidesPerView={5}
          navigation={false}
          pagination={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="shadow-xl w-full flex items-center justify-center border border-slate-300 rounded-md px-20 py-6"
        >
          <SwiperSlide className="relative py-6">
            <div className="flex items-center gap-4 lg:after:h-10 lg:after:w-[2px] after:translate-x-14 after:bg-neutral-200">
              <Headset className="text-primary-900 w-6 h-6" />
              <div className="flex flex-col ">
                <h6 className="uppercase text-base">24/7</h6>
                <span className="text-sm">Support every time</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="relative py-6">
            <div className="flex items-center gap-4 lg:after:h-10 lg:after:w-[2px] after:translate-x-14 after:bg-neutral-200">
              <CreditCard className="text-primary-900 w-6 h-6" />
              <div className="flex flex-col gap-2">
                <h6 className="uppercase text-base">accept payments</h6>
                <span className="text-sm">visa, paypal, master</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="relative py-6">
            <div className="flex items-center gap-4 lg:after:h-10 lg:after:w-[2px] after:translate-x-14 after:bg-neutral-200">
              <LockKeyhole className="text-primary-900 w-6 h-6" />
              <div className="flex flex-col gap-2">
                <h6 className="uppercase text-base">secure payments</h6>
                <span className="text-sm">100% secured</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="relative py-6">
            <div className="flex items-center gap-4 lg:after:h-10 lg:after:w-[2px] after:translate-x-14 after:bg-neutral-200">
              <Truck className="text-primary-900 w-6 h-6" />
              <div className="flex flex-col gap-2">
                <h6 className="uppercase text-base">Free shipping</h6>
                <span className="text-sm">order over $300</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="relative py-6">
            <div className="flex items-center gap-4 lg:after:h-10 lg:after:w-[2px] after:translate-x-14 after:bg-neutral-200">
              <Calendar className="text-primary-900 w-6 h-6" />
              <div className="flex flex-col gap-2">
                <h6 className="uppercase text-base">30 days return</h6>
                <span className="text-sm">30 days guarantee</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default Payments;
