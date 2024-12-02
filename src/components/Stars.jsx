import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Stars = ({ rating }) => {
  function calculateStar(n) {
    if (n === 0 || n.toString().length === 1) return n;

    let [whole, rest] = n.toString().split(".");

    return rest[0] < 3 ? +whole : rest[0] < 8 ? +whole + 0.5 : +whole + 1;
  }
  const setStar = (n) => {
    let number = calculateStar(n);
    let fill = Math.floor(number);
    let half = number - Math.floor(number) ? 1 : 0;
    let outline = 5 - Math.ceil(number);
    let fillStar = Array(fill)
      .fill()
      .map((_, inx) => (
        <FaStar key={`fill-${inx}`} className=" text-[#FF5722]" /> // To'ldirilgan yulduz rangi
      ));
    let halfStar = Array(half)
      .fill()
      .map((_, inx) => (
        <FaStarHalfAlt key={`half-${inx}`} className=" text-[#FFC107]" /> // Yarim yulduz rangi
      ));
    let outlineStar = Array(outline)
      .fill()
      .map((_, inx) => (
        <FaRegStar key={`outline-${inx}`} className=" text-[#9E9E9E]" /> // Bo'sh yulduz rangi
      ));
    return [...fillStar, ...halfStar, ...outlineStar];
  };

  return setStar(rating);
};

export default Stars;
