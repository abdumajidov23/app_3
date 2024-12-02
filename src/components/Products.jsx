import React, { useEffect, useState } from "react";
import axios from "axios";
import Stars from "./Stars";

const API_URl = "https://fakestoreapi.com";

const Products = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    try {
      axios.get(`${API_URl}/products`).then((res) => {
        setData(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const productItem = data?.map((pro) => (
    <div
      key={pro.id}
      className="flex flex-col justify-between shadow-2xl border-gray-800 border rounded px-1 py-2 text-center bg-white "
    >
      <img
        src={pro.image}
        alt=""
        className="h-[60%] w-[65%] mx-auto object-contain"
      />
      <h3 className="text-center p-2 max-w-[80%] overflow-hidden text-nowrap mx-auto max-lg:p-1 max-md:p-[2px]">
        {pro.title}
      </h3>
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-1">
          {<Stars rating={pro.rating.rate} />}
          <div className="bg-amber-500 text-black rounded-lg px-2 py-1 text-[12px] font-[700]">
            {pro.rating.rate}
          </div>
        </div>
      </div>
      <h3 className="text-center max-md:p-[1px]">{pro.price} $</h3>
      <div className="flex items-center justify-center rounded-md bg-[#22313f] px-5 py-2.5 text-center cursor-pointer text-sm font-medium text-white hover:bg-[#393e46] focus:outline-none focus:ring-4 focus:ring-blue-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
    </div>
  ));
  return (
    <div className="container mb-20">
      <div className="grid grid-cols-4 gap-8 mx-auto w-[80%] p-3 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
        {productItem}
      </div>
    </div>
  );
};

export default Products;
