import React from "react";

import "../../assets/scss/App.scss";
import bag from "../../assets/image/header/bag.svg";

function Header() {
  return (
    <>
      <nav className="text-white  w-full z-20 top-0 left-0">
        <div className=" flex flex-wrap items-center justify-between  pt-[40px] mx-[20px] lg:mx-[80px] md:mx-[30px]   max-[768px]:px-2">
          <a href="https://flowbite.com/" className="flex items-center">
            <span className="self-center text-[28px] font-Gilroy-Bold heading-[33px] tracking-[0.01em]  whitespace-nowrap dark:text-white">
              Panto
            </span>
          </a>
          <div className="flex md:order-2  ">
            <button
              type="button"
              className="relative h-[31px] w-[36px] sm:mr-4 max-[767px]:mr-[20px]"
            >
              <img src={bag} alt="bag" className="h-[25.5px] w-[25.5px]" />

              <p className="w-[19px] h-[25px] font-[400]  bg-[#E58411] rounded-[50%]  absolute top-0 left-[15px]">
                0
              </p>
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 bg-white"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="text-white min-[860px]:gap-x-[60px] gap-x-[23px]   flex flex-col p-4 md:p-0  mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className=" text-white font-Gilroy-Medium text-[18px] leading-[21px] flex items-center justify-between w-full py-2 pl-3 pr-4 rounded hover:bg-golden md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white "
                >
                  Furniture{" "}
                  <svg
                    className="w-5 h-5 ml-3"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="..#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Shop
                      </a>
                    </li>
                    <li>
                      <a
                        href="..#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="..#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="..#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="..#"
                  className="text-white font-Gilroy-Medium text-[18px] leading-[21px] block py-2 pl-3 pr-4 md:p-0  md:rounded md:hover:bg-transparent rounded hover:bg-golden"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="..#"
                  className="text-white font-Gilroy-Medium text-[18px] leading-[21px] block py-2 pl-3 pr-4 md:p-0  md:rounded md:hover:bg-transparent rounded hover:bg-golden"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="..#"
                  className="text-white font-Gilroy-Medium text-[18px] leading-[21px] block py-2 pl-3 pr-4 md:p-0  md:rounded md:hover:bg-transparent rounded hover:bg-golden"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
