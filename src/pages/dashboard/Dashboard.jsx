import React from "react";
import arrowdown from "../../assets/images/ArrowLineDown.svg";
import Card from "../../components/cards/Card";
import MultiLineChart from "../../components/lineChart/MultiLineChart";
import BarChartCom from "../../components/barChart/BarChart";
import PieChartCom from "../../components/pieChart/PieChartCom";
import StreetLineChart from "../../components/StreetLineChart/StreetLineChart";
import HeaderBreadCrumb from "../../components/BreadCrumbs/HeaderBreadCrumb";

const Dashboard = () => {
  return (
    <>
      
        <div className=" pl-7 md:hidden lg:flex xl:hidden">
          <HeaderBreadCrumb />
        </div>
        <div className=" p-7">
          <div className=" flex gap-2 items-center pl-2 mb-5">
            <p className=" text-[18px] font-semibold">Today</p>
            <div>
              <img className="text-center cursor-pointer" src={arrowdown} />
            </div>
          </div>
          <div className="grid ms:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="grid grid-cols-1 my-7 xl:grid-cols-7 xl:gap-7">
            <div className="bg-[#F7F9FB] col-span-1 p-6 rounded-2xl xl:col-span-5">
              <div className=" flex justify-between mb-3">
                <p className=" font-semibold text-[12px] sm:text-[18px]">Total Users</p>
                <p className=" text-[#C1C1C1] text-[8px] sm:text-[18px]">Total Projects</p>
                <p className=" text-[#C1C1C1] text-[8px] sm:text-[18px]">Operating Status</p>
                <div className=" border-l-2 border-slate-300"></div>
                <ul className="flex flex-row gap-2 list-dot-black">
                  <li className="text-[12px] sm:text-[18px]">Current Week</li>
                  <li className="text-[12px] sm:text-[18px]">Previous Week</li>
                </ul>
              </div>
              {/* Line chart Secction */}
              <MultiLineChart />
              {/* End Line chart Secction */}
            </div>
            {/* Street Line chart Secction */}
            <StreetLineChart />
            {/* Street Line chart Secction */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bar chart Secction */}
            <div className=" p-6 bg-[#F7F9FB] rounded-2xl">
              <p className="text-[18px] text-center font-bold">
                Traffic by Device
              </p>
              <BarChartCom />
            </div>
            {/* End Bar chart Secction */}

            {/* pie char section */}
            <div className="p-6 bg-[#F7F9FB] rounded-2xl">
              <p className="text-[18px] text-center font-bold">
                Traffic by Location
              </p>
              <PieChartCom />
            </div>
            {/* End pie char section */}
          </div>
        </div>
      
    </>
  );
};

export default Dashboard;
