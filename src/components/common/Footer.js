import React from "react";

import facebook from "../../assets/image/footer/facebook.svg";
import instagram from "../../assets/image/footer/instagram.svg";
import twitter from "../../assets/image/footer/twitter.svg";
function Footer() {
  return (
    <div className="mt-[244px] bg-[#f7f7f7] min-h-[462px] pt-[118px] max-[768px]:text-center max-[768px]:mt-[144px] max-[425px]:mt-[100px] max-[425px]:pt-[65px] ">
      <div className="container mx-auto lg:text-start text-center lg:max-w-[1040px]">
        <div className="grid lg:grid-cols-5 grid-cols-2 justify-between items-center gap-y-[20px]">
          <div className="lg:col-span-2 md:col-span-1 col-span-2 ">
            <h6 className="font-Gilroy-Bold text-[28px] leading-[33px] tracking--[0.01em]">
              Panto
            </h6>
            <p className="font-Gilroy-Medium w-[293px] max-[1023px]:mx-auto text-[15px] leading-[160%] text-lite-black opacity-[0.8] mt-[21px]">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
          </div>
          <div className="lg:col-span-1 md:col-span-1 col-span-2">
            <p className="footer-title">Services</p>
            <a href="..#" className="footer-text">
              Email Marketing
            </a>
            <a href="..#" className="footer-text">
              Campaigns
            </a>
            <a href="..#" className="footer-text">
              Branding
            </a>
          </div>
          <div className="lg:col-span-1 md:col-span-1 col-span-2">
            <p className="footer-title">Furniture</p>
            <a href="..#" className="footer-text">
              Beds
            </a>
            <a href="..#" className="footer-text">
              Chair
            </a>
            <a href="..#" className="footer-text">
              All
            </a>
          </div>
          <div className="lg:col-span-1 md:col-span-1 col-span-2 ">
            <p className="footer-title">Follow Us</p>
            <a href="..#" className="footer-text">
              <img src={facebook} alt="facebbok" className="me-3 inline" />
              Facebook
            </a>
            <a href="..#" className="footer-text">
              <img src={twitter} alt="facebbok" className="me-2 inline" />
              Twitter
            </a>
            <a href="..#" className="footer-text">
              <img src={instagram} alt="facebbok" className="me-2 inline" />
              Instagram
            </a>
          </div>
        </div>
        <div className="lg:mt-[118px] mt-[60px] max-[1024px]:pb-[20px]">  
        <div className="flex lg:flex-row flex-col ">
              <div className="lg:basis-1/2 basis-1">
                <p className="font-[400] font-DMSans-Regular text-[15px] leading-[20px] tracking-[-0.0204545px] text-[#1e2833] opacity-[0.5]">Copyright © 2021</p>
              </div>
              <div className="lg:basis-1/2 basis-1">
                <div className="flex justify-end lg:flex-row flex-col ">
                  <div className="lg:basis-1/3 basis-1">
                    <a href="..#" className="font-Gilroy-Medium text-[15px] leading-[160%] text-lite-black opacity-[.8]">
                      Terms & Conditions
                    </a>
                  </div>
                  <div className="lg:basis-1/3 basis-1">
                    <a href="..#" className="font-Gilroy-Medium text-[15px] leading-[160%] text-lite-black opacity-[.8]">
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
