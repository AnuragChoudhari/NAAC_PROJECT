import React from 'react'
import Navbar from '../navbar/Navbar';
import BasicTabs from '../material_ui_components/BasicTabs';
import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <>
        <Navbar></Navbar>
        <BasicTabs></BasicTabs>
    </>
  )
}

export default AdminDashboard