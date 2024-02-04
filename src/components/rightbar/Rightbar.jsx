import bugbeetle from "../../assets/images/BugBeetle.svg";
import user from "../../assets/images/User.svg";
import broadcast from "../../assets/images/Broadcast.svg";
import userone from "../../assets/images/user1.png";
import femaleimg from "../../assets/images/Female15.png";
import female08 from "../../assets/images/Female08.png";
import female09 from "../../assets/images/Female09.png";
import male06 from "../../assets/images/Male06.png";
import male08 from "../../assets/images/Male08.png";
import male10 from "../../assets/images/3D03.png";

const Rightbar = ({ showRightSideBar }) => {
  return (
    <div
      className={`${
        showRightSideBar === true 
          ? " absolute bg-slate-50 z-10 p-5 h-screen overflow-auto top-[75px] right-0 transition-transform translate-x-0 duration-1000 ease-in-out lg:relative lg:top-0 lg:flex lg:flex-col lg:border-l-2 lg:bg-white lg:h-full lg:p-5 dark:border-[#333333] "
          : " absolute bg-slate-50 z-10 h-screen overflow-auto top-[75px] right-0 translate-x-[288px] duration-1000 ease-in-out lg:hidden "
      }`}
    >
      <div>
        <p className=" px-1 py-2 font-semibold">Notification</p>
        <div className="px-1 py-2 mt-2 flex flex-col gap-4">
          <div className=" cursor-pointer">
            <div className=" rounded-lg w-[30px] h-[25px] bg-[#E3F5FF] flex justify-center items-center float-left">
              <img src={bugbeetle} className="" />
            </div>
            <p className="text-[14px] pl-2 font-semibold truncate">
              You have a bug that needs to be fixed.
            </p>
            <p className=" pl-10 text-[12px] text-[#A4A4A4]">Just now</p>
          </div>
          <div className=" cursor-pointer">
            <div className=" rounded-lg w-[30px] h-[25px] bg-[#E3F5FF] flex justify-center items-center float-left">
              <img src={user} className="" />
            </div>
            <p className="text-[14px] pl-2 font-semibold truncate">
              New user registered
            </p>
            <p className=" pl-10 text-[12px] text-[#A4A4A4]">59 minutes ago</p>
          </div>
          <div className=" cursor-pointer">
            <div className=" rounded-lg w-[30px] h-[25px] bg-[#E3F5FF] flex justify-center items-center float-left">
              <img src={bugbeetle} className="" />
            </div>
            <p className="text-[14px] pl-2 font-semibold truncate">
              You have a bug that needs to be fixed.
            </p>
            <p className=" pl-10 text-[12px] text-[#A4A4A4]">12 hours ago</p>
          </div>
          <div className=" cursor-pointer">
            <div className=" rounded-lg w-[30px] h-[25px] bg-[#E3F5FF] flex justify-center items-center float-left">
              <img src={broadcast} className="" />
            </div>
            <p className="text-[14px] pl-2 font-semibold truncate">
              Andi Lane subscribed to you
            </p>
            <p className=" pl-10 text-[12px] text-[#A4A4A4]">Today, 11:59 AM</p>
          </div>
        </div>
      </div>

      <div>
        <p className=" px-1 py-2 font-semibold">Activities</p>
        <div className="px-1 py-2 mt-2 flex flex-col">
          <div>
            <div className=" rounded-lg w-[30px] h-[25px] bg-[#E3F5FF] flex justify-center items-center float-left">
              <img src={userone} className="" />
            </div>
            <p className="text-[14px] pl-2 font-semibold truncate">
              You have a bug that needs to be fixed.
            </p>
            <p className=" pl-10 text-[12px] text-[#A4A4A4]">Just now</p>
          </div>
          <div className=" border-l-2 h-4 ml-[13px] mt-[-6px] mb-[6px]"></div>
          <div className="cursor-pointer">
            <div className=" rounded-lg w-[30px] h-[25px] bg-[#E3F5FF] flex justify-center items-center float-left">
              <img src={userone} className="" />
            </div>
            <p className="text-[14px] pl-2 font-semibold truncate">
              Released a new version
            </p>
            <p className=" pl-10 text-[12px] text-[#A4A4A4]">59 minutes ago</p>
          </div>
          <div className="border-l-2 h-4 ml-[13px] mt-[-6px] mb-[6px]"></div>
          <div className="cursor-pointer">
            <div className=" rounded-lg w-[30px] h-[25px] bg-[#E3F5FF] flex justify-center items-center float-left">
              <img src={userone} className="" />
            </div>
            <p className="text-[14px] pl-2 font-semibold truncate">
              Submitted a bug
            </p>
            <p className=" pl-10 text-[12px] text-[#A4A4A4]">12 hours ago</p>
          </div>
          <div className=" border-l-2 h-4 ml-[13px] mt-[-6px] mb-[6px]"></div>
          <div className="cursor-pointer">
            <div className=" rounded-lg w-[30px] h-[25px] bg-[#E3F5FF] flex justify-center items-center float-left">
              <img src={userone} className="" />
            </div>
            <p className="text-[14px] pl-2 font-semibold truncate">
              Modified A data in Page X
            </p>
            <p className=" pl-10 text-[12px] text-[#A4A4A4]">Today, 11:59 AM</p>
          </div>
          <div className=" border-l-2 h-4 ml-[13px] mt-[-6px] mb-[6px]"></div>
          <div className="cursor-pointer">
            <div className=" rounded-lg w-[30px] h-[25px] bg-[#E3F5FF] flex justify-center items-center float-left">
              <img src={userone} className="" />
            </div>
            <p className="text-[14px] pl-2 font-semibold truncate">
              Deleted a page in Project X
            </p>
            <p className=" pl-10 text-[12px] text-[#A4A4A4]">Feb 2, 2023</p>
          </div>
        </div>
      </div>

      <div>
        <p className=" px-1 py-2 font-semibold">Contacts</p>

        <ul className="flex flex-col gap-4 px-2 py-2 mt-2 ">
          <li>
            <div className="flex gap-2 cursor-pointer">
              <img src={femaleimg} />
              <p>Natali Craig</p>
            </div>
          </li>
          <li>
            <div className="flex gap-2 cursor-pointer">
              <img src={male06} />
              <p>Drew Cano</p>
            </div>
          </li>
          <li>
            <div className="flex gap-2 cursor-pointer">
              <img src={female08} />
              <p>Orlando Diggs</p>
            </div>
          </li>
          <li>
            <div className="flex gap-2 cursor-pointer">
              <img src={female09} />
              <p>Andi Lane</p>
            </div>
          </li>
          <li>
            <div className="flex gap-2 cursor-pointer">
              <img src={male08} />
              <p>Kate Morrison</p>
            </div>
          </li>
          <li>
            <div className="flex gap-2 cursor-pointer">
              <img src={male10} />
              <p>Koray Okumus</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
