import React from 'react'

export default function ProductCard() {
  return (
    <div className='p-5 bg-white dark:bg-zinc-700 rounded-2xl shadow-normal '>
      <div className=' relative mb-5'>
        <img src="./images/products/p1.png" alt="p1" />
        <span className=' absolute top-1.5 right-1.5 block h-[30px] leading-[34px] bg-orange-300 font-DanaDemiBold text-white dark:text-zinc-700 px-3.5 rounded-full'>12%</span>
      </div>
      <h5
      >قهوه ترک بن مانو مقدار 250 گرم
         خط دوم اسم طولانی
         </h5>
      <div>
        <div>
            <span>154,000 </span>
            <span>تومان</span>
        </div>
        <div>
        <span>175,000 </span>
            <span>تومان</span>
        </div>
      </div>
    </div>
  )
}
