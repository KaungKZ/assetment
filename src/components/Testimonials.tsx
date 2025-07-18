"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  cell: string;
  picture: {
    medium: string;
  };
  name: {
    first: string;
    last: string;
  };
  location: {
    country: string;
  };
};

interface TestimonialsProps {
  data: Testimonial[];
}

export default function Testimonials({ data }: TestimonialsProps) {
  console.log(data);

  return (
    <>
      <section className="mt-32">
        <MaxWidthWrapper>
          <div>
            <h1 className="section-title">Testimonials</h1>
          </div>
          <div className="mt-10 relative">
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              pagination={{
                el: `.category-custom-pagination`,

                clickable: true,
              }}
              // pagination={{
              //   clickable: true,
              // }}
              slidesPerGroup={4}
              breakpoints={{
                240: {
                  slidesPerView: 2,
                  spaceBetween: 7,
                  slidesPerGroup: 2,

                  allowTouchMove: true,
                },
                420: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                  slidesPerGroup: 2,

                  allowTouchMove: true,
                },

                768: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                  slidesPerGroup: 3,

                  allowTouchMove: true,
                },
                1280: {
                  slidesPerView: 4,
                  // spaceBetween: 25,
                  slidesPerGroup: 4,
                  allowTouchMove: false,
                },
              }}
              // modules={[Pagination]}
              modules={[Pagination, Navigation]}
              speed={800}
              navigation={{
                nextEl: `.swiper-navigation-next`,
                prevEl: `.swiper-navigation-prev`,
              }}
              className="mySwiper"
            >
              {data.map((d) => (
                <SwiperSlide key={d.cell}>
                  <div className="text-center flex flex-col justify-center items-center border border-[#e4e4e4] py-14 px-3 max-xlmx:py-9">
                    <Image
                      src={d.picture.medium || "/persondummy.jpg"}
                      width={120}
                      height={120}
                      style={{
                        width: 120,
                        height: 120,
                      }}
                      alt="avatar"
                      // className="rounded-full"
                    />
                    <span className="font-semibold text-sm block mt-3">
                      {d.name.first + d.name.last}
                    </span>
                    <span className="text-xs block mt-2">
                      {d.location.country}
                    </span>
                    <p className="text-sm mt-5">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Asperiores at veritatis
                    </p>
                    {/* <p>{d.message}</p> */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="category-custom-pagination flex space-x-1 my-8 justify-end smmx:hidden mdmx:my-5"></div>
            <div className="swiper-navigation-wrapper">
              <div className="swiper-navigation-prev absolute z-10 border border-secondary bg-white h-[45px] w-[45px] flex justify-center items-center rounded-full transform -translate-y-1/2 top-1/2 cursor-pointer group-hover:hidden transition duration-300 -left-5">
                <ChevronLeft className="h-5 w-5 text-secondary transition duration-300 mdmx-h-5 mdmx:w-5" />
              </div>
              <div className="swiper-navigation-next absolute z-10 bg-white0 bg-white border-secondary border h-[45px] w-[45px] flex justify-center items-center rounded-full transform -translate-y-1/2 top-1/2 cursor-pointer group-hover:hidden transition duration-300 -right-5">
                <ChevronRight className="h-5 w-5 text-secondary transition duration-300 mdmx-h-5 mdmx:w-5" />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
