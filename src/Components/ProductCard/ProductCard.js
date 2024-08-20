import React from 'react'

export default function ProductCard() {
  return (
    <div className='p-2 md:p-5 bg-white dark:bg-zinc-700 rounded-2xl shadow-normal '>
      <div className=' relative mb-2 md:mb-5'>
        <img src="./images/products/p1.png" className='w-32 mx-auto md:w-auto' alt="p1" />
        <span className=' absolute top-1.5 right-1.5 block h-5 md:h-[30px] text-xs/[24px] md:text-base/[34px] bg-orange-300 font-DanaDemiBold text-white dark:text-zinc-700 px-2.5 md:px-3.5 rounded-full'>12%</span>
      </div>
      <h5 className='font-DanaMedium text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2'>
        قهوه ترک بن مانو مقدار 250 گرم
         خط دوم اسم طولانی
         </h5>
      <div className='flex gap-2 md:gap-2.5 mt-1.5 md:mt-2.5'>
        <div className='text-teal-600 dark:text-emerald-500'>
            <span className='font-DanaDemiBold text-base md:text-xl'>154,000 </span>
            <span className='text-xs md:text-sm tracking-tighter'>تومان</span>
        </div>
        <div className='offer'>
        <span className='text-base md:text-xl'>175,000 </span>
            <span className='hidden xl:inline text-xs md:text-sm tracking-tighter'>تومان</span>
        </div>
      </div>
    </div>
  )
}
