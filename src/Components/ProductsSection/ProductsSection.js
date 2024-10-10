import React from 'react'
import Products from '../Products/Products'

export default function ProductsSection() {
  return (
    <div>
        <section className="products pt-8 md:pt-24 lg:pt-48">
      <div className="container">
        {/*Section Head */}
        <h3 className="section-title">جدیدترین محصولات</h3>
       <Products/>
       
      </div>
    </section>
      
    </div>
  )
}
