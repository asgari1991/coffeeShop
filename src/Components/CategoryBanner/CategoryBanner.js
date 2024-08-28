import React from 'react'

export default function CategoryBanner() {
  return (
    <section className='my-20'>
      <div className="container">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 text-white'>
        <div className=' flex flex-col justify-center pr-12 bg-zinc-700 rounded-2xl h-[248px]'>
            <h5 className='font-DanaDemiBold text-2xl md:text-4xl mb-7'>انواع قهوه</h5>
            <span className='font-DanaMedium md:text-xl'>ترکیبی و تک خواستگاه</span>
        </div>
        <div className=' flex flex-col justify-center pr-12 bg-zinc-700 rounded-2xl h-[248px]'>
        <h5 className='font-DanaDemiBold text-2xl md:text-4xl mb-7'>پودرهای فوری</h5>
        <span className='font-DanaMedium md:text-xl'>نسکافه , هات چاکلت , ماسالا</span>
        </div>
        </div>
      </div>
    </section>
  )
}
