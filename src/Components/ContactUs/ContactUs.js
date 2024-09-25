import React from 'react'

function ContactUs() {
  return (
    <section className='mb-16 md:mb-28'>
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-y-8 lg:gap-x-5">
<img src="./images/contact.png" alt="contact" className='shrink-0 w-[296px]' />
<div className='text-zinc-700 dark:text-white'>
    <h3 className='font-MorabbaBold text-2xl md:text-5xl mb-0.5 md:mb-1.5'>یکی از بهترین قهوه ها !</h3>
    <span className='font-MorabbaLight text-lg md:text-3xl/[48px]'>کیفیت قهوه را از ما بخواهید ...</span>
    <div className='flex gap-x-2.5 my-5 md:my-6'>
        <span className='inline-block w-1 h-1 bg-zinc-700 dark:bg-gray-400 rounded-full'></span>
        <span className='inline-block w-1 h-1 bg-zinc-700 dark:bg-gray-400 rounded-full'></span>
        <span className='inline-block w-1 h-1 bg-zinc-700 dark:bg-gray-400 rounded-full'></span>
    </div>
    <p className='text-lg md:text-2xl mb-5 md:mb-6'>فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما را می سازد!</p>
    <a href="#" className=' inline-flex items-center justify-center gap-x-2 py-4 px-6 h-[50px] md:h-[60px] md:text-xl tracking-tightest text-orange-300 rounded-full border md:border-2 border-orange-300'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 md:w-8 h-5 md:h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

    ثبت سفارش تلفنی
    </a>
</div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
