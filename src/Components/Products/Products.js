import React, { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import productContext from "../../Contexts/ProductContext";

export default function Products() {
  const contextData=useContext(productContext)
  return (
 <>
 {contextData.allProducts.map(productType=>(
<>
{/*Section Head */}
<div className="flex justify-between items-end mt-5 md:mt-12 ">
          
          <div >
            <span className="section-subtitle">
              {productType.title==='espresso' ? "اسپرسو":"قهوه دمی"}
            </span>
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 ">
          {productType.infos.map(product=>(
            <ProductCard img={product.img} price={product.price} discount={product.discount}/>
          ))}
          
        
        </div>
</>
 ))}
 
 </>
        
     
  );
}
