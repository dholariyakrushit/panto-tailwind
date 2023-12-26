import React from "react";
import Slider from "react-slick";

import boldstar from "../../../assets/image/testimonials/boldstar.svg";
import blankstar from "../../../assets/image/testimonials/blankstar.svg";
import { data } from "../../../constant/testimonials";
function Testimonials() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="container mx-auto min-[1440px]:max-w-[1240px] ">
        <div className="mt-[261px] text-center max-[768px]:mt-[100px]  ">
          <p className="golden-title">Testimonials</p>
          <h4 className="section-title mb-[60px]">Our Client Reviews</h4>

          <Slider {...settings} className="testimonials">
            {data.map((item) => (
              <div>
                <div
                  style={{ background: `url('${item.bg}')` }}
                  className="w-[370px] h-[476px] rounded-[18.1182px] relative max-[400px]:w-[289px] bg-cover"
                >
                  <div className="bg-[url('/src/assets/image/testimonials/avbg.svg')] w-[334px] h-[239px] absolute bottom-[18px]  right-[18px] max-[400px]:w-[270px] max-[400px]:bg-contain max-[400px]:bg-no-repeat max-[400px]:right-[10px] max-[400px]:bottom-[-27px]">
                    <img
                      src={item.image}
                      alt="av"
                      className="mx-auto mt-[8px] max-[400px]:mt-1 max-[400px]:w-[45px]"
                    />
                    <p className="mt-[13px] font-Gilroy-Bold text-[18px] leading-[21px]">
                      {item.title}
                    </p>
                    <p className="font-Gilroy-Regular text-[12px] leading-[14px] mt-[6px] opacity-[.6] max-[400px]:mb-2">
                      {item.name}
                    </p>
                    <p className="font-Gilroy-Regular text-[14px] leading-[16px] mx-[41px] mt-[22px] max-[400px]:mt-1 opacity-[.8] max-[400px]:h-[46px] max-[400px]:text-ellipsis max-[400px]:truncate max-[400px]:whitespace-break-spaces max-[400px]:text-[12px] ">
                      {item.review}
                    </p>
                    <div className="mt-[23px] flex justify-center gap-x-2 max-[400px]:mt-[10px]">
                      <img src={boldstar} alt="star" className="star" />
                      <img src={boldstar} alt="star" className="star" />
                      <img src={boldstar} alt="star" className="star" />
                      <img src={boldstar} alt="star" className="star" />
                      <img src={blankstar} alt="star" className="star" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
