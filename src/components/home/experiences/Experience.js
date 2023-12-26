import React from "react";
import aro from "../../../assets/image/choosingus/aro.svg";
import expe from "../../../assets/image/experiences/expe.svg";
function Experience() {
  return (
    <>
      <div className="mt-[240px] max-[1024px]:mt-[120px] max-[768px]:mt-[70px]">
        <div className="grid grid-cols-2 items-center m-0 gap-x-[40px]">
          <div className="lg:col-span-1 col-span-2">
            <div className=" max-[768px]:mt-[100px] max-[768px]:pr-[26px]">
              <img src={expe} alt="experiaences" className="max-w-[100%]" />
            </div>
          </div>
          <div className="lg:col-span-1 col-span-2">
            <div className="lg:text-start text-center  max-[992px]:mt-[20px]  max-[1024px]:px-[25px]">
              <p className="golden-title mb-[20px]">experiences</p>
              <h5 className="section-title w-[413px]  ld:mb-[20px] max-[1024px]:w-auto ">
                we provide you the best experience
              </h5>
              <p className="detail-text mt-[20px]">
                You don’t have to worry about the result because all of thesemt
                interiors are made by people who are professionals in their
                fields with an elegant and lucurious style and with premium
                quality materials
              </p>
              <div className="more-info mt-6">
                <a href="..#" className="more-info">
                  More Info{" "}
                  <img src={aro} alt="aroo" className="inline ms-[17.5px] " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
