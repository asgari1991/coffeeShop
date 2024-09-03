import React from "react";

export default function CoffeeClubBanner() {
  return (
    <section className="mb-8 md:mb-20">
      <div className="container">
        <div className="flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white h-36 px-3 md:px-11 rounded-2xl">
          <div className="flex items-center gap-x-3 md:gap-x-6">
            <img
              src="./images/club/diamond.png"
              className="w-[87px] md:w-[110px]"
              alt="Coffee club"
            />
            <div>
              <h4 className="font-MorabbaBold text-2xl md:text-5xl mb-2">
                کافی کلاب
              </h4>
              <p className="font-MorabbaLight text-lg md:text-2xl">
                میدونستی میتونی با امتیاز هات قهوه بگیری ؟
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-2 md:gap-x-5">
              <div className="w-[72px] h-[72px] md:w-[98px] md:h-[98px] text-center text-emerald-600 bg-white py-1.5 md:pt-5 md:pb-1 rounded-2xl">
                <svg
                  className="w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-1.5 mx-auto"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 4c11.04 0 20 8.96 20 20 0 11.06-8.96 20-20 20-11.06 0-20-8.94-20-20C4 12.96 12.94 4 24 4zm7.7 13.42c.22-.7-.42-1.36-1.12-1.14l-10.24 3.2c-.42.14-.76.46-.88.88l-3.2 10.26c-.22.68.44 1.34 1.12 1.12l10.2-3.2c.42-.12.76-.46.88-.88l3.24-10.24z"
                    fill="#059669"
                  />
                </svg>
                <span className="text-xs md:text-sm ">چرخ و بخت</span>
              </div>
              <div className="w-[72px] h-[72px] md:w-[98px] md:h-[98px] text-center text-emerald-600 bg-white py-1.5 md:pt-5 md:pb-1 rounded-2xl">
                <svg
                  className="w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-1.5 mx-auto"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.9 7.56c-.08.5-.12 1-.12 1.5 0 4.5 3.64 8.139 8.12 8.139.5 0 .98-.058 1.48-.138v16.138c0 6.782-4 10.802-10.8 10.802H14.801C8 44 4 39.98 4 33.199V18.4C4 11.6 8 7.56 14.802 7.56H30.9zm.402 12.16c-.543-.06-1.08.18-1.402.62l-4.838 6.26-5.543-4.36a1.58 1.58 0 00-1.14-.32 1.55 1.55 0 00-1 .599l-5.918 7.702-.122.18c-.34.638-.18 1.458.42 1.9.28.18.58.3.92.3.463.02.9-.222 1.18-.6l5.02-6.462 5.7 4.282.18.118c.64.34 1.44.182 1.9-.42l5.78-7.458-.08.04c.32-.44.38-1 .16-1.5-.218-.5-.7-.84-1.217-.88zM39.18 4C41.84 4 44 6.16 44 8.82s-2.16 4.82-4.82 4.82-4.82-2.16-4.82-4.82S36.52 4 39.18 4z"
                    fill="#059669"
                  />
                </svg>
                <span className="text-xs md:text-sm "> ماموریت ها</span>
              </div>
              <div className="w-[72px] h-[72px] md:w-[98px] md:h-[98px] text-center text-emerald-600 bg-white py-1.5 md:pt-5 md:pb-1 rounded-2xl">
                <svg
                  className="w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-1.5 mx-auto"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.712 6c4.568 0 8.286 3.684 8.286 8.21L44 19.565c0 .392-.158.773-.438 1.05-.282.28-.662.436-1.062.436-1.642 0-2.978 1.324-2.978 2.951s1.336 2.95 2.978 2.95c.828 0 1.5.667 1.5 1.487v5.353C44 38.318 40.284 42 35.716 42h-23.43C7.718 42 4 38.318 4 33.792v-5.353c0-.82.672-1.486 1.5-1.486 1.644 0 2.98-1.324 2.98-2.951 0-1.585-1.282-2.778-2.98-2.778-.398 0-.778-.157-1.06-.436a1.48 1.48 0 01-.44-1.05l.004-5.528C4.004 9.684 7.72 6 12.288 6h23.424zM24.004 16.307a1.48 1.48 0 00-1.33.816l-1.458 2.927-3.252.47a1.47 1.47 0 00-1.2.995 1.448 1.448 0 00.374 1.506l2.358 2.275-.556 3.216c-.096.555.13 1.106.59 1.437.26.184.562.28.868.28.234 0 .47-.058.686-.17L24 28.54l2.91 1.514a1.466 1.466 0 001.56-.107c.462-.329.688-.88.592-1.435l-.558-3.216 2.358-2.275a1.44 1.44 0 00.374-1.506 1.46 1.46 0 00-1.192-.993l-3.258-.472-1.458-2.925a1.474 1.474 0 00-1.324-.818z"
                    fill="#059669"
                  />
                </svg>
                <span className="text-xs md:text-sm "> جایزه ها</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
