// import { useContext, useEffect } from "react";
// import { Themecontext } from "../../contexts/Themecontext";
import sidebarImg from "../../assets/images/Sidebar.svg";
import sidebardark from "../../assets/images/Sidebardark.svg";
import starImg from "../../assets/images/Star.svg";
import stardark from "../../assets/images/Stardark.svg";
import bell from "../../assets/images/Bell.svg";
import belldark from "../../assets/images/Belldark.svg";
import sun from "../../assets/images/Sun.svg";
import sundark from "../../assets/images/Sundark.svg";
import clock from "../../assets/images/ClockCounterClockwise.svg";
import clockdark from "../../assets/images/Clockdark.svg";
import search from "../../assets/images/Search.svg";

const Headernav = () => {
  // const { theme, setTheme } = useContext(Themecontext);

  // useEffect(() => {
  //   console.log("theme", theme);
  // });
  return (
    <>
      <div>
        <div className=" px-7 py-5 w-full border-b-2 dark:border-[#333333] flex items-center justify-between ">
          <div className=" flex gap-2">
            {/* {theme === "light" ? ( */}
              <>
                <img
                  src={sidebarImg}
                  className=" w-[28px] h-[28px] cursor-pointer"
                />
                <img
                  src={starImg}
                  className=" w-[28px] h-[28px] cursor-pointer"
                />
              </>
            {/* ) : ( */}
              <>
                <img
                  src={sidebardark}
                  className=" w-[28px] h-[28px] cursor-pointer"
                />
                <img
                  src={stardark}
                  className=" w-[28px] h-[28px] cursor-pointer"
                />
              </>
            {/* )} */}

            <p className="text-[#A4A4A4] cursor-pointer">DashBoards</p>
            <span className="text-[#A4A4A4]"> / </span>
            <p className=" dark:text-white">Default</p>
          </div>
          <div className="flex">
            <div className=" mr-5 relative">
              <div className=" absolute left-1 top-2">
                <img className="" src={search} />
              </div>
              <input
                className=" dark:bg-[#333333] dark:text-white rounded-lg bg-[#F4F4F4] pl-6 py-1 outline-none cursor-pointer"
                placeholder="Search"
              />
            </div>
            <div className=" flex gap-2">
              {/* {theme === "light" ? ( */}
                <>
                  <img
                    src={sun}
                    onClick={() => {
                      setTheme("dark");
                      localStorage.setItem("theme", "dark");
                    }}
                    className=" w-[28px] h-[28px] cursor-pointer"
                  />
                  <img
                    src={clock}
                    className=" w-[28px] h-[28px] cursor-pointer"
                  />
                  <img
                    src={bell}
                    className=" w-[28px] h-[28px] cursor-pointer"
                  />
                  <img
                    src={sidebarImg}
                    className=" w-[28px] h-[28px] cursor-pointer"
                  />
                </>
              {/* ) : ( */}
                <>
                  <img
                    src={sundark}
                    onClick={() => {
                      setTheme("light");
                      localStorage.setItem("theme", "light");
                    }}
                    className=" w-[28px] h-[28px] cursor-pointer"
                  />
                  <img
                    src={clockdark}
                    className=" w-[28px] h-[28px] cursor-pointer"
                  />
                  <img
                    src={belldark}
                    className=" w-[28px] h-[28px] cursor-pointer"
                  />
                  <img
                    src={sidebardark}
                    className=" w-[28px] h-[28px] cursor-pointer"
                  />
                </>
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headernav;
