import userimg from "../../assets/images/useImg.png";
import book from "../../assets/images/BookOpen.svg";
import folder from "../../assets/images/FolderNotch.svg";
import shopping from "../../assets/images/ShoppingBagOpen.svg";
import chart from "../../assets/images/ChartPieSlice.svg";
import arrowright from "../../assets/images/ArrowLineRight.svg";
import arrowdown from "../../assets/images/ArrowLineDown.svg";
import identification from "../../assets/images/IdentificationBadge.svg";
import identificationcard from "../../assets/images/IdentificationCard.svg";
import userthree from "../../assets/images/UsersThree.svg";
import chat from "../../assets/images/ChatsTeardrop.svg";
import notebook from "../../assets/images/Notebook.svg";

const Sidebar = () => {
  return (
    <div className=" hidden lg:flex flex-col py-5 px-4 gap-4 border-r-2 dark:border-[#333333] ">
      <div className="flex ">
        <img src={userimg} className="w-6 h-6" />
        <p className=" text-[16px] text-[#1c1c1c] ml-2">ByeWind</p>
      </div>
      <div className=" px-2 pt-2">
        <div className="flex gap-2">
          <p className=" text-[#A4A4A4] text-'[16px]">Favorites</p>
          <p className=" text-[#A4A4A4] text-'[16px]">Recently</p>
        </div>
        <div>
          <ul className="list-dot p-2">
            <li className="mb-2 text-[16px] cursor-pointer">Overview</li>
            <li className="text-[16px] cursor-pointer">Projects</li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-[#A4A4A4] pl-3 mb-2">Dashboards</p>
        <div className=" pb-2">
          <ul className=" flex flex-col gap-2">
            <li className=" bg-[#F4F4F4] rounded-lg flex items-center relative px-2 py-1 cursor-pointer">
              <div className=" w-1 rounded-3xl h-4 bg-slate-950 absolute left-0"></div>
              <div className="flex pl-[28px]">
                <img src={chart} />
                <p>Default</p>
              </div>
            </li>

            <li className="flex items-center relative px-2 py-1 cursor-pointer">
              <div className="flex pl-3">
                <img src={arrowright} />
                <img src={shopping} />
                <p className="pl-1">eCommerce</p>
              </div>
            </li>

            <li className="flex items-center px-2 cursor-pointer">
              <div className="flex pl-3">
                <img src={arrowright} />
                <img src={folder} />
                <p className="pl-1">Projects</p>
              </div>
            </li>

            <li className="flex items-center px-2 cursor-pointer">
              <div className="flex pl-3">
                <img src={arrowright} />
                <img src={book} />
                <p className="pl-1">Online Courses</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-[#A4A4A4] pl-3 mb-2">Pages</p>
        <div className="flex flex-col gap-2">
          <div>
            <div className=" flex  pl-3 gap-1">
              <img src={arrowdown} />
              <img src={identification} />
              <p>User Profile</p>
            </div>
            <div className="pt-2 flex items-center justify-center">
              <ul className="flex-col flex gap-2">
                <li>Overview</li>
                <li>Projects</li>
                <li>Campaigns</li>
                <li>Documents</li>
                <li>Followers</li>
              </ul>
            </div>
          </div>
          <div className=" flex pl-3 gap-1">
            <img src={arrowright} />
            <img src={identificationcard} />
            <p>Account</p>
          </div>
          <div className=" flex pl-3 gap-1">
            <img src={arrowright} />
            <img src={userthree} />
            <p>Corporate</p>
          </div>
          <div className=" flex pl-3 gap-1">
            <img src={arrowright} />
            <img src={notebook} />
            <p>Blog</p>
          </div>
          <div className=" flex pl-3 gap-1">
            <img src={arrowright} />
            <img src={chat} />
            <p>Social</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
