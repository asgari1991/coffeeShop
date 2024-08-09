import React from 'react'

export default function NavLink() {
  return (
    <nav className="flex gap-x-6 lg:gap-x-9 items-center h-14">
      {/*Logo */}
    <div className=' shrink-0'>
      <img src="./images/app-logo.png" alt="golden coffee" />
    </div>
    {/*Nav Menu */}
    <ul className="flex gap-x-5 lg:gap-x-9 h-full text-xl text-gray-300 tracking-tightest child:leading-[56px] font-DanaMedium">
      <li className=" text-orange-200">
        <a href="">صفحه اصلی</a>
      </li>
      <li className="relative group">
        <a
          href="#"
          className="group-hover:text-orange-300 transition-colors"
        >
          فروشگاه
        </a>
        <div className="absolute p-6 w-52 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible space-y-4 bg-white text-zinc-700 dark:bg-zinc-700 dark:text-white text-base rounded-2xl border-t-[3px] border-t-orange-300 tracking-normal shadow-normal transition-all delay-75 child:inline-block child:transition-colors child-hover:text-orange-300">
          {/*sub menu */}

          <a href="">قهوه ویژه</a>

          <a href="">ویژه در سطح جهانی</a>

          <a href="">قهوه درجه یک</a>

          <a href="">ترکیبات تجاری</a>

          <a href="">کپسول قهوه</a>

          <a href="">قهوه زینو برزیلی</a>
        </div>
      </li>
      <li>
        <a href="">دیکشنری</a>
      </li>
      <li>
        <a href="">بلاگ</a>
      </li>
      <li>
        <a href="">درباره ما</a>
      </li>
      <li>
        <a href="">تماس با ما</a>
      </li>
    </ul>
  </nav>
  )
}
