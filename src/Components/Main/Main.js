import React from "react";
import Home from "../Home/Home";
import Products from "../Products/Products";
import CategoryBanner from "../CategoryBanner/CategoryBanner";
import ProductsCategory from "../ProductsCategoty/ProductsCategory";
import TopSelling from "../TopSelling/TopSelling";

export default function Main() {
  return (
    <main>
      <Home/>
      <Products/>
      <CategoryBanner/>
      <ProductsCategory/>
      <TopSelling/>
    </main>
  );
}
