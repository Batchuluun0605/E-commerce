"use client";
import Container from "@/components/custom/Container";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import useSWR, { Fetcher } from "swr";
import { Slide } from "@/types";
import "swiper/css/navigation";
import "swiper/css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { m } from "framer-motion";
import "./style.css";

const HomeSlide = () => {
  const animation = {
    hide: {
      opacity: 0,
      x: 82,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  };
  const fetcher: Fetcher<Slide[], string> = (args) =>
    fetch(args)
      .then((res) => res.json())
      .then((res) => res.data);

  const { data, error } = useSWR<Slide[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/slides",
    fetcher
  );
  if (error) {
    return <div>Data fetching slides error!</div>;
  }
  return (
    <section>
      <Container>
        <Swiper
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {data &&
            data
              .filter((item: Slide) => item.slug === "banner-home")
              .map((item: Slide) => (
                <SwiperSlide
                  key={item._id}
                  className=" relative [&>button]:block hover:animate-heart-beating"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    height: "700px",
                    width: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                  }}
                >
                  {item.title !== "" ? (
                    <div className="absolute drop-shadow-2xl grid grid-cols-1 place-content-start justify-items-center lg:justify-items-start gap-8 m-auto capitalize top-100 lg:top-30 lg:left-20 w-fit text-white">
                      <m.h4
                        initial={animation.hide}
                        whileInView={animation.show}
                        transition={{ delay: 0.4 }}
                        className="max-w-60 text-2xl lg:max-w-screen-md"
                      >
                        {item.subtitle.substring(0, 65)}
                      </m.h4>
                      <m.h1
                        initial={animation.hide}
                        whileInView={animation.show}
                        transition={{ delay: 0.6 }}
                        className="text-3xl lg:text-h1"
                      >
                        {item.subtitle.substring(0, 65)}
                      </m.h1>
                      <m.h6
                        initial={animation.hide}
                        whileInView={animation.show}
                        transition={{ delay: 1 }}
                        className="font-normal"
                      >
                        {item.description}
                      </m.h6>
                      <m.a
                        initial={animation.hide}
                        whileInView={animation.show}
                        transition={{ delay: 1.2, type: "spring" }}
                        className="rounded-sm p-4 bg-white hover:bg-black text-black hover:text-white"
                        href={item.link}
                      >
                        {item.btn}
                      </m.a>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Button
                        variant="default"
                        size="lg"
                        className="hover:shadow-button px-12 py-8 bg-white text-black hover:text-white"
                      >
                        <Link className="text-xl" href={item.link}>
                          BUY NOW
                        </Link>
                      </Button>
                    </div>
                  )}
                </SwiperSlide>
              ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default HomeSlide;
