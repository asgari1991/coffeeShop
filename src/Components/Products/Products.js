import React from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function Products() {
  return (
    <section className="products pt-8 md:24 lg:pt-48 pb-20">
      <div className="container">
        {/*Section Head */}
        <div className="flex justify-between items-end mb-5 md:mb-12">
          
          <div>
            <h3 className="section-title">جدیدترین محصولات</h3>
            <span className="section-subtitle">فرآوری شده از دانه قهوه</span>
          </div>
          <a href="#" className="section-link">
            <span className="hidden md:inline-block">مشاهده همه محصولات</span>
            <span className=" inline-block md:hidden">مشاهده همه</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        {/*Section Body */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 child:h-[200px] child:md:h-[460px] ">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </section>
  );
}
