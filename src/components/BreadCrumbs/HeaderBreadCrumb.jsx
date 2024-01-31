import React from "react";

const HeaderBreadCrumb = () => {
  return (
    <>
      <div className="flex gap-2">
        <p className="text-[#A4A4A4] cursor-pointer">DashBoards</p>
        <span className="text-[#A4A4A4]"> / </span>
        <p className=" dark:text-white">Default</p>
      </div>
    </>
  );
};

export default HeaderBreadCrumb;
