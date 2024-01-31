import React from "react";
import arrowrise from "../../assets/images/ArrowRise.svg";

const Card = () => {
  return (
    <>
      <div className=" min-w-50 bg-[#E3F5FF] p-6 rounded-3xl">
        <div>
          <h3 className=" font-semibold text-xl mb-2">Views</h3>
          <div className=" flex justify-between mt-2">
            <h1 className=" font-bold text-2xl">721K</h1>
            <div className="flex items-center">
              <span className=" mr-1">+11.01%</span>
              <img src={arrowrise} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
