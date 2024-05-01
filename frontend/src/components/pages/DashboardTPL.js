import React from 'react'
import BasicTabs from '../material_ui_components/BasicTabs'
import Navbar from '../navbar/Navbar'

function DashboardTPL() {
  return (
    <>
         <Navbar></Navbar> 
         <div className='' id='dashboard-container'>
         <BasicTabs></BasicTabs>
         </div>
    </>
  )
}

export default DashboardTPL