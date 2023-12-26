import React, { useState } from "react";
import Slider from "react-slick";

import star from "../../../assets/image/bestproducts/star.svg";
import addcart from "../../../assets/image/bestproducts/addcart.svg";
import aro from "../../../assets/image/choosingus/aro.svg";
import { product } from "../../../constant/bestproduct";
function BestProduct() {
  const [radioValue, setRadioValue] = useState(0);

  const radios = [
    { name: "Chair", value: "1" },
    { name: "Beds", value: "2" },
    { name: "Sofa", value: "3" },
    { name: "Lamp", value: "4" },
  ];

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#f7f7f7] min-h-[906px]">
      <div className="container mx-auto min-[1280px]:max-w-[1198px]">
        <div className="pt-[50px] max-[375px]:min-h-[955px]">
          <div className="mb-[32px]">
            <h3 className="section-title text-center ">Best Selling Product</h3>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center items-center  bg-[#eeeeee] rounded-[44px] w-[348px] min-h-[57px]  max-[348px]:w-[300px] max-[280px]:w-[278px]">
              {radios.map((radio, idx) => (
                <button
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  name="radio"
                  onClick={() => setRadioValue(idx)}
                  className={`w-[84px] h-[45px] font-Gilroy-Medium bg-[#eeeeee] text-[18px] leading-[185%] text-lite-black opacity-[.8] border-none rounded-[32px] pt-[4px] max-[348px]:w-[70px] focus:border-transparent focus:outline-tarnsperent focus:outlne-0 focus:border-none  focus:ring-0 focus:ring-transperent  ${
                    radioValue === idx && `bg-white focus:border-none `
                  }`}
                >
                  {radio.name}
                </button>
              ))}
            </div>
          </div>
          <div>
            <Slider {...settings} className="bestproduct">
              {product &&
                product.map((item) => (
                  <div>
                    <div className="w-[268.09px] h-[441.73px] rounded-[20px] bg-[#fafafa]">
                      <div className="rounded-t-[20px] relative h-[241px]">
                        <img
                          src={item.img}
                          alt="img"
                          className=" h-[256px] absolute bottom-[33px] right-[24px] w-[218px]"
                        />
                      </div>
                      <div className="h-[203px] bg-white rounded-b-[20px]">
                        <div className="pt-[13px] px-[21px] ">
                          <p className="font-Inter-Regular font-[400] text-[16.75px] leading-[20px] text-[#8d8d8d] mb-[6px]">
                            {" "}
                            {item.product}
                          </p>
                          <h5 className="font-Inter-Medium font-[600] text-[21.32px] leading-[26px] text-[#0d1b39]">
                            {item.name}
                          </h5>
                          <div className="flex mt-[8px] gap-x-[6px]">
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                          </div>
                          <div className="mt-[38px] flex justify-between items-center">
                            <p className="font-Inter-Medium font-[600] text-[21.32px] leading-[26px] text-[#0d1b39] m-0">
                              <sup className="font-Inter-Medium font-[600] text-[15.32px] leading-[18px] text-[#0d1b39] me-[3px]">
                                $
                              </sup>
                              {item.price}
                            </p>
                            <img src={addcart} alt="addcart" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
          <div className="mt-[60px] text-center">
            <a href="..#" className="more-info no-underline text-[18px]">
              View All <img src={aro} className="ml-[16px] inline" alt="aro" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestProduct;
