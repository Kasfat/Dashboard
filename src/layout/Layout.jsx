// import { useEffect, useState } from "react";
import Headernav from "../components/headernav/Headernav";
import Rightbar from "../components/rightbar/Rightbar";
import Sidebar from "../components/sidebar/Sidebar";
// import { Themecontext } from "../contexts/Themecontext";


const Layout = () => {
  // const [theme, setTheme] = useState("light");
  // useEffect(()=>{
  //   setTheme( localStorage.getItem('theme') ? localStorage.getItem('theme'): 'light')
  // })
  return (
    // <Themecontext.Provider value={{theme, setTheme}}>
    //   <div className={`${theme} ${theme === 'dark' ? 'bg-[#121212]': null} w-full h-[100vh] grid grid-cols-[212px_minmax(auto,1fr)_280px] `}>
    //     <Sidebar />
    //     <Headernav/>
    //     <Rightbar />
    //   </div>
    // </Themecontext.Provider>
    <>
    
      <Sidebar />
      <Headernav/>
      <Rightbar />
    </>
  );
};

export default Layout;
