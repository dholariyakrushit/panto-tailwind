import React from "react";

import aro from "../../../assets/image/choosingus/aro.svg";
import mat from "../../../assets/image/experiences/mat.svg";
function Materials() {
  return (
    <div className="mt-[270px] max-[1024px]:mt-[150px]">
      <div className="grid grid-cols-2 justify-center items-center m-0 ">
        <div className="lg:col-span-1 col-span-2 lg:order-1 order-2  lg:text-start text-center max-[1024px]:mt-[50px] max-[1024px]:px-[25px] max-[768px]:mt-[20px] lg:ml-[80px]">
          <p className="golden-title ">Materials</p>
          <h5 className="section-title lg:w-[413px] mt-[20px]">
            Very serious materials for making furniture
          </h5>
          <p className="detail-text mt-[20px]">
            Because panto was very serious about designing furniture for our
            environment, using a very expensive and famous capital but at a
            relatively low price
          </p>
          <div className="more-info mt-6">
            <a href="..#">
              More Info{" "}
              <img src={aro} className="inline ml-[17.5px]" alt="aroo" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-1 col-span-2 lg:order-2 order-1">
          <div className="float-right">
            <img src={mat} alt="mat" className="m-0 max-w-[100%]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Materials;
