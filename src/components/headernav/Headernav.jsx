import sidebarImg from "../../assets/images/Sidebar.svg";

import starImg from "../../assets/images/Star.svg";

import bell from "../../assets/images/Bell.svg";

import sun from "../../assets/images/Sun.svg";

import clock from "../../assets/images/ClockCounterClockwise.svg";

import search from "../../assets/images/Search.svg";
import HeaderBreadCrumb from "../BreadCrumbs/HeaderBreadCrumb";

const Headernav = ({onClickSidebar, onClickRightBar}) => {
  // const { theme, setTheme } = useContext(Themecontext);

  // useEffect(() => {
  //   console.log("theme", theme);
  // });

  return (
    <>
      <div className=" px-7 py-5 w-full border-b-2 dark:border-[#333333] flex items-center justify-between header_nav">
        <div className=" flex gap-1 sm:gap-2">
          <img onClick={onClickSidebar} src={sidebarImg} className=" w-[28px] h-[28px] cursor-pointer" />
          <img src={starImg} className=" w-[28px] h-[28px] cursor-pointer" />
          <div className=" hidden md:flex lg:hidden xl:flex">
            <HeaderBreadCrumb />
          </div>
        </div>
        <div className="flex">
          <div className=" mr-0 sm:mr-5 relative">
            <div className=" absolute left-1 top-2">
              <img className="" src={search} />
            </div>
            <input
              className=" dark:bg-[#333333] dark:text-white rounded-lg bg-[#F4F4F4] pl-7 py-1 outline-none cursor-pointer"
              placeholder="Search"
            />
          </div>
          <div className=" flex gap-1 sm:gap-2">
            <img
              src={sun}
              onClick={() => {
                setTheme("dark");
                localStorage.setItem("theme", "dark");
              }}
              className=" w-[28px] h-[28px] cursor-pointer"
            />
            <img src={clock} className=" w-[28px] h-[28px] cursor-pointer" />
            <img src={bell} className=" w-[28px] h-[28px] cursor-pointer" />
            <img onClick={onClickRightBar}
              src={sidebarImg}
              className=" w-[28px] h-[28px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Headernav;
