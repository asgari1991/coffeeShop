import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProductCard from "../ProductCard/ProductCard";
import 'swiper/css';
import 'swiper/css/navigation';
export default function TopSelling() {
  return (
    <section className="mb-9 md:mb-20">
      <div className="container">
        {/*Section Head */}
        <div className="flex justify-between items-end mb-5 md:mb-12">
          <div>
            <h3 className="section-title">محصولات پرفروش </h3>
            <span className="section-subtitle"> پیشنهاد قهوه خورها</span>
          </div>
         
        </div>
        {/*Slider main Container */}
        <Swiper
        slidesPerView={2}
        spaceBetween={14}
        breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 14,
            },
            768:{
                slidesPerView: 3,
                spaceBetween:20
            },
            
            1024: {
              slidesPerView: 4,
              spaceBetween:20
             
            },
          }}
        
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
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
