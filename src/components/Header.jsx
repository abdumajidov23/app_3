import React from "react";

const Header = () => {
  return (
    <div className="w-[100%] mx-auto sticky top-0 mb-5 shadow-lg z-50">
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <div className="bg-[#f0f9ff] rounded-full p-2 shadow-md">
              <img
                src="https://montikea.com/images/partials/cart.svg"
                className="h-8"
                alt="Logo"
              />
            </div>
            <span className="self-center text-2xl font-bold text-[#2d68f0] whitespace-nowrap">
              Flowbite
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-[#2d68f0] rounded-lg md:hidden hover:bg-[#e0f2fe] focus:outline-none focus:ring-2 focus:ring-[#93c5fd]"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#f9fafb] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-[#2d68f0] rounded hover:bg-[#e0f2fe] md:hover:bg-transparent md:border-0 md:hover:text-[#1e3a8a] md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://linkfly.to/61017rmBQbZ"
                  className="block py-2 px-3 text-[#2d68f0] rounded hover:bg-[#e0f2fe] md:hover:bg-transparent md:border-0 md:hover:text-[#1e3a8a] md:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-[#2d68f0] rounded hover:bg-[#e0f2fe] md:hover:bg-transparent md:border-0 md:hover:text-[#1e3a8a] md:p-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-[#2d68f0] rounded hover:bg-[#e0f2fe] md:hover:bg-transparent md:border-0 md:hover:text-[#1e3a8a] md:p-0"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="https://linkfly.to/61017rmBQbZ"
                  className="block py-2 px-3 text-[#000000] rounded hover:bg-[#e0f2fe] md:hover:bg-transparent md:border-0 md:hover:text-[#1e3a8a] md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
