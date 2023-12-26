import React from "react";
import Header from "../../common/Header";
import searchbutton from '../../../assets/image/hero/searchbutton.svg'
function Hero() {
  return (
    <>
      <div className=" bg-hero-sec h-[1084px] bg-no-repeat bg-cover bg-bottom   ">
        <Header />
        <div className="pt-[86px] lg-text-start text-center">
          <h1 className="max-w-[861px] max-h-[208px] text-white font-Gilroy-Bold lg:text-[80px]  leading-[130%] mx-auto tracking-[-0.01em] md:text-[53px]  sm:text-[47px] max-[640px]:text-[40px] max-[438px]:text-[32px] max-[375px]:text-[26px]">
            Make your interior more minimalistic & modern
          </h1>
          <div className="mt-[14px]">
            <p className="max-w-[606px]  font-Gilroy-Regular leading-[160%] opacity-[0.8] text-[16px] text-white mx-auto  sm:text-[24px] max-[640px]:text-[20px] px-[25px] max-[425px]:text-[17px] max-[375px]:text-[16px] ">
              Turn your room with panto into a lot more minimalist and modern
              with ease and speed
            </p>
            <div className="mt-[45px] w-[344px] mx-auto relative max-[344px]:w-[289px]">
              <input
                className="w-[344px]  h-[56px] border-[0.861538px]  bg-white/20  placeholder:text-white text-white rounded-full   mx-auto py-[15.5px] ps-[20px] placeholder:text-[18px] placeholder:font-Gilroy-Regular placeholder:leading-[150%] placeholder:opacity-[.8] max-[344px]:w-[289px] max-[344px]:h-[53px]  "
                placeholder="Search furniture"
              />
              <button className="absolute w-[40px] h-[40px] top-[8px] max-[344px]:w-[36px] max-[344px]:top-[7px] right-[8px] rounded-full">
                <img src={searchbutton} alt="button" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
