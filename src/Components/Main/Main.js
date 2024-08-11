import React from "react";

export default function Main() {
  return (
    <main>
      <section className="home ">
        <div className="container md:min-h-screen flex justify-end items-center">
          <div className="text-white ">
            <h2 className="font-MorabbaBold text-2xl md:text-6xl mb-0.5 md:mb-2">قهوه عربیکا تانزانیا</h2>
            <span className="font-MorabbaLight text-xl md:text-5xl ">یک فنجان بالانس!</span>
            <span className="block w-[100px] h-px md:h-0.5 bg-orange-300 my-3 md:my-8"></span>
            <p className="max-w-[201px] md:max-w-[460px] text-xs md:text-2xl">قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت میشود.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
