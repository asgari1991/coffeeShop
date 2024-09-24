import React from "react";
import Home from "../Home/Home";
import Products from "../Products/Products";
import CategoryBanner from "../CategoryBanner/CategoryBanner";
import ProductsCategory from "../ProductsCategoty/ProductsCategory";
import TopSelling from "../TopSelling/TopSelling";
import CoffeeClubBanner from "../CoffeeClubBanner/CoffeeClubBanner";
import Blogs from "../Blogs/Blogs";
import ContactUs from "../ContactUs/ContactUs";

export default function Main() {
  return (
    <main>
      <Home/>
      <Products/>
      <CategoryBanner/>
      <ProductsCategory/>
      <TopSelling/>
      <CoffeeClubBanner/>
      <Blogs/>
      <ContactUs/>
    </main>
  );
}
