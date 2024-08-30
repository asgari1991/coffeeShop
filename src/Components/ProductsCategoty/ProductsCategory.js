import React from 'react'
import CategoryItem from '../CategoryItem/CategoryItem'

export default function ProductsCategory() {
  return (
    <section className='mb-10 md:mb-20'>
      <div className="container">
        <div className='flex items-center justify-center flex-wrap gap-y-6 gap-x-[29px] md:gap-[65px]'>
<CategoryItem img="./images/categories/category1.png" title="قهوه دمی و اسپرسو"/>
<CategoryItem img="./images/categories/category2.png" title="لوازم جانبی و تجهیزات"/>
<CategoryItem img="./images/categories/category3.png" title="اسپرسوساز"/>
<CategoryItem img="./images/categories/category4.png" title="پک تستر قهوه"/>
<CategoryItem img="./images/categories/category5.png" title="قهوه ترک"/>
        </div>
      </div>
    </section>
  )
}
