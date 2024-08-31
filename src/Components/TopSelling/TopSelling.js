import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProductCard from "../ProductCard/ProductCard";
import 'swiper/css';
import 'swiper/css/navigation';
export default function TopSelling() {
  return (
    <section>
      <div className="container">
        {/*Section Head */}
        <div className="flex justify-between items-end mb-5 md:mb-12">
          <div>
            <h3 className="section-title">محصولات پرفروش </h3>
            <span className="section-subtitle"> پیشنهاد قهوه خورها</span>
          </div>
          <div className="flex gap-x-3 md:gap-x-[18px]">
            <div className="flex-center w-9 h-9 md:w-10 md:h-10 bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-700 dark:text-white dark:hover:bg-white dark:hover:text-zinc-700 shadow-normal rounded-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 md:w-[26px] md:h-[26px] rotate-180"
              >
                <path
                  fillRule="evenodd"
                  d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-center w-9 h-9 md:w-10 md:h-10 bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-700 dark:text-white dark:hover:bg-white dark:hover:text-zinc-700 shadow-normal rounded-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 md:w-[26px] md:h-[26px] "
              >
                <path
                  fillRule="evenodd"
                  d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        {/*Slider main Container */}
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true }
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
      </Swiper>
      </div>
    </section>
  );
}
