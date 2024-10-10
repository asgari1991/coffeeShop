import React from "react";
import Home from "../Home/Home";
import Products from "../Products/Products";
import CategoryBanner from "../CategoryBanner/CategoryBanner";
import ProductsCategory from "../ProductsCategoty/ProductsCategory";
import TopSelling from "../TopSelling/TopSelling";
import CoffeeClubBanner from "../CoffeeClubBanner/CoffeeClubBanner";
import Blogs from "../Blogs/Blogs";
import ContactUs from "../ContactUs/ContactUs";
import Services from "../Services/Services";
import ProductsSection from "../ProductsSection/ProductsSection";

export default function Main() {
  return (
    <main>
      <Home/>
      <ProductsSection/>
      <CategoryBanner/>
      <ProductsCategory/>
      <TopSelling/>
      <CoffeeClubBanner/>
      <Blogs/>
      <ContactUs/>
      <Services/>
    </main>
  );
}
