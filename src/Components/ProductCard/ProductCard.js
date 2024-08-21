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
      <div>
        <div>
          <span className='flex-center w-9 h-9 bg-gray-100 dark:bg-zinc-700 text-gray-400 rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[22px] h-[22px] ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

          </span>
        </div>
        <div></div>
      </div>
    </div>
  )
}
