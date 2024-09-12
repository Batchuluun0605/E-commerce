"use client";
import Container from "@/components/custom/Container";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import useSWR, { Fetcher } from "swr";
import { Product } from "@/types";
import Loading from "@/components/custom/Loading";
import ProductCard from "@/components/custom/ProductCard";
import Row from "@/components/custom/Row";
import Heading from "@/components/custom/Heading";

const FeatureProducts = () => {
  const fetcher: Fetcher<Product[], string> = (args) =>
    fetch(args)
      .then((res) => res.json())
      .then((res) => res.data);

  const { data, error, isLoading } = useSWR<Product[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/products",
    fetcher
  );

  if (error) {
    return <div>Data fetching products error!</div>;
  }
  return (
    <section className="py-10">
      {isLoading && <Loading isLoading={isLoading} size={100} color="red" />}
      <Container>
        <Row className="mb-10">
          <Heading name="Featured products" />
        </Row>
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
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          spaceBetween={50}
          slidesPerView={4}
          navigation={false}
          pagination={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="shadow-xl w-full flex items-center justify-center border border-slate-300 rounded-md px-20 py-10"
        >
          {data &&
            data
              .filter((item: Product) => item.featured === true)
              .map((item: Product) => (
                <SwiperSlide key={item._id}>
                  <ProductCard item={item} />
                </SwiperSlide>
              ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default FeatureProducts;
