"use client";
import Container from "@/components/custom/Container";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import useSWR, { Fetcher } from "swr";
import { m } from "framer-motion";
import { Slide } from "@/types";
import { useRouter } from "next/navigation";
import Row from "@/components/custom/Row";
import Heading from "@/components/custom/Heading";

const Categories = () => {
  const router = useRouter();
  const fetcher: Fetcher<Slide[], string> = (args) =>
    fetch(args)
      .then((res) => res.json())
      .then((res) => res.data);

  const { data } = useSWR<Slide[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/slides",
    fetcher
  );
  const animation = {
    hide: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1 },
  };

  const handleClick = (link: string) => {
    router.push(link);
  };
  return (
    <section className="py-10">
      <Container>
        <Row className="mb-10">
          <Heading name="Shop by categories" />
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
              .filter((item: Slide) => item.slug === "top-categories-home")
              .map((item: Slide, idx: number) => (
                <SwiperSlide
                  key={item._id}
                  className="relative [&>button]:block hover:scale-105 duration-300  ease-linear cursor-pointer"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    height: "600px",
                    width: "auto",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                  }}
                >
                  <div
                    className=" absolute bg-white rounded-md  p-4 bottom-10 shadow-xl cursor-pointer hover:bg-black hover:text-white drop-shadow-xl duration-300 ease-linear capitalize"
                    role="button"
                    onClick={() => handleClick(item.link)}
                  >
                    <m.h6
                      initial={animation.hide}
                      whileInView={animation.show}
                      transition={{ delay: 0.1 + idx / 6 }}
                    >
                      {item.title}
                    </m.h6>
                  </div>
                </SwiperSlide>
              ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Categories;
