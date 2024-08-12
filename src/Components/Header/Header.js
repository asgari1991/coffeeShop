import React from "react";
import NavLink from "../NavLink/NavLink";

export default function Header() {
  const darkModeHandler = () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <header className="fixed top-9 right-0 left-0 z-50 hidden md:flex items-center w-[98%] lg:w-[90%] h-24 px-5 lg:px-10 py-5 bg-black/50 mx-auto rounded-3xl backdrop-blur-[6px]">
      <div className="flex justify-between items-center w-full ">
        {/*logo and nav menu*/}
        <NavLink />

        {/* cart , theme , login link*/}
        <div className="flex text-orange-200 text-xl gap-x-4 lg:gap-x-5 xl:gap-x-10">
          {/*Cart icon & switch theme btn */}
          <div className="flex gap-x-4 lg:gap-x-5 items-center">
            {/*Cart */}
            <div className="relative group">
              {/*Cart icon Hover */}
              <div className="py-3 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </div>
              {/*Cart Box */}
              <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible w-[400px] p-5 bg-white text-zinc-700 dark:bg-zinc-700 dark:text-white border-t-[3px] border-t-orange-300 shadow-normal transition-all delay-75 rounded-2xl">
                {/*Cart Head */}
                <div className="flex justify-between items-center tracking-tighter font-DanaMedium text-xs">
                  <span className="text-gray-300 ">1 مورد</span>
                  <a href="#" className="flex items-center text-orange-300">
                    مشاهده سبد خرید
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                      />
                    </svg>
                  </a>
                </div>
                {/*Cart Body */}
                <div className="pb-1 border-b border-gray-300 dark:border-white/10 divide-y divide-gray-100 dark:divide-white/10 child:py-5">
                  <div className="font-DanaMedium flex gap-x-2.5   ">
                    <img
                      src="images/products/p1.png"
                      className="w-30 h-30"
                      alt="p1"
                    />
                    <div className="flex flex-col justify-between">
                      <h4 className=" text-zinc-700 dark:text-white line-clamp-2">
                        قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                      </h4>
                      <div>
                        <span className="text-teal-600 dark:text-emerald-500 text-xs tracking-tighter">
                          14.500 تومان تخفیف
                        </span>
                        <div className="text-zinc-700 dark:text-white font-DanaDemiBold">
                          175000
                          <span className="font-DanaMedium text-sm">
                            {" "}
                            تومان
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="font-DanaMedium flex gap-x-2.5   ">
                    <img
                      src="images/products/p2.png"
                      className="w-30 h-30"
                      alt="p1"
                    />
                    <div className="flex flex-col justify-between">
                      <h4 className=" text-zinc-700 dark:text-white line-clamp-2">
                        قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                      </h4>
                      <div>
                        <span className="text-teal-600 dark:text-emerald-500 text-xs tracking-tighter">
                          14.500 تومان تخفیف
                        </span>
                        <div className="text-zinc-700 dark:text-white font-DanaDemiBold">
                          175000
                          <span className="font-DanaMedium text-sm">
                            {" "}
                            تومان
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Cart Footer */}
                <div className="font-DanaMedium flex justify-between mt-5">
                  
                    <div>
                      <span className="font-DanaMedium  text-gray-300 text-xs tracking-tighter">
                       مبلغ قابل پرداخت
                      </span>
                      <div className="text-zinc-700 dark:text-white font-DanaDemiBold">
                        350000
                        <span className="font-DanaMedium text-sm"> تومان</span>
                      </div>
                    </div>
                  <a href="#" className="flex items-center justify-center w-[144px] h-14 text-white bg-teal-600 dark:bg-emerald-500 hover:bg-teal-700 dark:hover:bg-teal-600 transition-colors rounded-xl tracking-tightest">ثبت سفارش</a>
                </div>
              </div>
            </div>
            {/*Theme Switch btn */}
            <div className="cursor-pointer" onClick={darkModeHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 inline-block dark:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 hidden dark:inline-block "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            </div>
          </div>
          <span className="block w-px h-14 bg-white/20"></span>
          {/*Login Btn */}
          <a href="#" className="flex items-center gap-x-2.5 tracking-tightest">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
              />
            </svg>
            <span className="hidden xl:inline-block">ورود | ثبت‌نام</span>
          </a>
        </div>
      </div>
    </header>
  );
}
