import { Children, useEffect, useState } from "react";
import Headernav from "../headernav/Headernav";
import Rightbar from "../rightbar/Rightbar";
import Sidebar from "../sidebar/Sidebar";
import { Themecontext } from "../../contexts/Themecontext";

const Layout = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [showRightSideBar, setRightSideBar] = useState(true);

  // Set default show sidebar bool value depends screen size
  let screenWidth = window.innerWidth;
  useEffect(() => {
    screenWidth < 1024 ? setShowSideBar(false) : setShowSideBar(true);
  }, [screenWidth]);

  const handleClick = () => {
    setShowSideBar(!showSideBar);
  };

  const handleClickRight = () => {
    setRightSideBar(!showRightSideBar);
  };
  // const [theme, setTheme] = useState("light");
  // useEffect(()=>{
  //   setTheme( localStorage.getItem('theme') ? localStorage.getItem('theme'): 'light')
  // })
  return (
    // <Themecontext.Provider value={{theme, setTheme}}>
    // <div className={`${theme} ${theme === 'dark' ? 'bg-[#121212]': null} w-full h-[100vh] grid grid-cols-[212px_minmax(auto,1fr)_280px] `}>
    //   <Sidebar />
    //   <Headernav/>
    //   <Rightbar />
    // </div>
    // </Themecontext.Provider>
    <div
      className={`w-full relative grid grid-cols-[minmax(auto,1fr)] ${
        showSideBar && showRightSideBar
          ? `lg:grid-cols-[212px_minmax(auto,1fr)_280px]`
          : !showSideBar && showRightSideBar
          ? `lg:grid-cols-[minmax(auto,1fr),280px]`
          : showSideBar && !showRightSideBar
          ? `lg:grid-cols-[212px,minmax(auto,1fr)]`
          : null
      }`}
    >
      <Sidebar showSideBar={showSideBar} />
      <div className="col-span-3 lg:col-span-1">
        <Headernav
          onClickSidebar={handleClick}
          onClickRightBar={handleClickRight}
        />
        {children}
      </div>
      {showRightSideBar && <Rightbar />}
    </div>
  );
};

export default Layout;
