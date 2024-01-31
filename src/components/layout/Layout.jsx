import { Children, useEffect, useState } from "react";
import Headernav from "../headernav/Headernav";
import Rightbar from "../rightbar/Rightbar";
import Sidebar from "../sidebar/Sidebar";
import { Themecontext } from "../../contexts/Themecontext";

const Layout = ({ children }) => {
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
    <div className="w-full h-[100vh] grid grid-cols-[212px_minmax(auto,1fr)_280px] ">
      <Sidebar />
      <div className="col-span-3 lg:col-span-1">
        <Headernav />
        {children}
      </div>
      <Rightbar />
    </div>
  );
};

export default Layout;
