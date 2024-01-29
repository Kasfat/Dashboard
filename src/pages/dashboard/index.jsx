import React from 'react'
import Layout from '../../layout/Layout'
import Card from '../../components/cards/Card'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Headernav from '../../components/headernav/Headernav'

const Dashboard = () => {
  return (
    <>
    <div className= "w-full h-[100vh] grid grid-cols-[212px_minmax(auto,1fr)_280px] ">
        {/* <Layout/> */}
        <Sidebar/>
        <Headernav/>
        <Rightbar/>
    
    {/* <Card/> */}
    </div>
    </>
    
  )
}

export default Dashboard