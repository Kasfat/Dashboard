import React from "react";
import starImg from "../../assets/images/Star.svg";

const HeaderBreadCrumb = () => {
  return (
    <>
      <div className="flex gap-2">
        <img src={starImg} className=" w-[28px] h-[28px] cursor-pointer" />
        <p className="text-[#A4A4A4] cursor-pointer">DashBoards</p>
        <span className="text-[#A4A4A4]"> / </span>
        <p className=" dark:text-white">Default</p>
      </div>
    </>
  );
};

export default HeaderBreadCrumb;
