import React from 'react'
import Navbar from '../navbar/Navbar';
import BasicTabs from '../material_ui_components/BasicTabs';
import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <>
      <div id='admin-dashboard-container'>
      <Navbar></Navbar>
        <div className='' id='admin-dashboard-tabs-container'>
        <BasicTabs></BasicTabs>
        </div>
      </div>
    </>
  )
}

export default AdminDashboard