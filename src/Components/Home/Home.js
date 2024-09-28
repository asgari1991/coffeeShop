import React from 'react'

export default function Home() {
  return (
    <section className="home relative h-200 xs:h-auto xs:aspect-[2/1] md:aspect-auto bg-home-mobile md:bg-home-desktop bg-no-repeat bg-cover bg-[center_top] ">
    <div className="container relative h-full md:min-h-screen flex justify-end items-center overflow-y-hidden">
{/*Text in Banner */}
      <div className="text-white ">
        <h2 className="font-MorabbaBold text-2xl md:text-6xl/[62px] mb-0.5 md:mb-2">قهوه عربیکا تانزانیا</h2>
        <span className="font-MorabbaLight text-xl md:text-5xl/[64px] ">یک فنجان بالانس!</span>
        <span className="block w-[100px] h-px md:h-0.5 bg-orange-300 my-3 md:my-8"></span>
        <p className="max-w-[201px] md:max-w-[460px] text-xs md:text-2xl">قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت میشود.</p>
      </div>
      {/*circle */}
      <div className="circle circle--lg circle--main">
<div className="circle circle--md">
<div className="circle circle--sm">

</div>
</div>
</div>
    </div>
    {/*Curve */}
    <svg width="100" height="22" viewBox="0 0 100 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className=" absolute w-[100px] h-[20px] bottom-0 left-0 right-0 mx-auto hidden md:inline-block text-gray-100 dark:text-zinc-800 ">
<path d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z" />
</svg>


{/*arrow circle */}
<div className="absolute bottom-0 left-0 right-0 mx-auto translate-y-2/4 hidden md:flex items-center justify-center w-[30px] h-[30px] border-2 border-orange-300 rounded-full">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-zinc-700 dark:text-white">
<path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>
</div>
  </section>
  )
}
