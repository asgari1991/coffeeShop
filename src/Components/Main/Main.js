import React from "react";

export default function Main() {
  return (
    <main>
      <section className="home relative h-200 overflow-y-hidden xs:h-auto xs:aspect-[2/1] md:aspect-auto bg-home-mobile md:bg-home-desktop bg-no-repeat bg-cover bg-[center_top] ">
        <div className="container h-full md:min-h-screen flex justify-end items-center">
          <div className="text-white ">
            <h2 className="font-MorabbaBold text-2xl md:text-6xl mb-0.5 md:mb-2">قهوه عربیکا تانزانیا</h2>
            <span className="font-MorabbaLight text-xl md:text-5xl ">یک فنجان بالانس!</span>
            <span className="block w-[100px] h-px md:h-0.5 bg-orange-300 my-3 md:my-8"></span>
            <p className="max-w-[201px] md:max-w-[460px] text-xs md:text-2xl">قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت میشود.</p>
          </div>
        </div>
        <svg width="100" height="22" viewBox="0 0 100 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className=" absolute w-[100px] h-[20px] bottom-0 left-0 right-0 mx-auto text-gray-100 dark:text-zinc-800 ">
<path d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z" />
</svg>
<div className="circle circle--lg circle--main">
  <div className="circle circle--md">
    <div className="circle circle--sm">

    </div>
  </div>
</div>

      </section>
    </main>
  );
}
