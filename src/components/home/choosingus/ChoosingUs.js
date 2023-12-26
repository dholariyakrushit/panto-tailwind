import React from "react";
import { choosingUs } from "../../../constant/choosingus";
import aro from "../../../assets/image/choosingus/aro.svg";
function ChoosingUs() {
  return (
    <>
      <div className="container mx-auto">
        <div className="my-[120px] max-[1200px]:text-center max-[640px]:text-start">
          <div className="grid grid-cols-4 lg-gap-x-[28px] gap-y-[40px]">
            <div className="lg:col-span-1 sm:col-span-4 col-span-4 xl:p-[26px] text-center max-[1295px]:[p-0]">
              <h3 className="section-title lg:w-[242px]"> Why Choosing Us</h3>
            </div>
            {choosingUs &&
              choosingUs.map((item) => (
                <div className="lg:col-span-1 sm:col-span-2  col-span-4 ">
                  <div className="max-w-[284px] max-[1200px]:mx-auto max-[1200px]:mt-16px  max-[1024px]:mb-[8px] ">
                    <h4 className=" text-[24px] leading-[28px] text-black mb-[20px] max-[1200px]:mb-[8px] font-Gilroy-Bold opacity-[.9] max-[640px]:text-start">
                      {item.title}
                    </h4>
                    <p className="font-Gilroy-Regular text-[16px]  leading-[185%] text-lite-black opacity-[.8]">
                      {item.text}
                    </p>
                    <a href="..#" className="more-info max-[320px]:float-left">
                      More Info{" "}
                      <img
                        src={aro}
                        className="ms-[17.5px] inline "
                        alt="aroo"
                      />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ChoosingUs;
