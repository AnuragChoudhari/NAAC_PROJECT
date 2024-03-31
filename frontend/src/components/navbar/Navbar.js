import "./Navbar.css";

import React, { useEffect, useState } from "react";
import kbplogo from "../assets/new_logo_wide.png" 
import { useLocation } from "react-router-dom";
import Swal from 'sweetalert2'


function Navbar() {
  const fdata = localStorage.getItem('fid');
 
  const dataObj = JSON.parse(fdata);

  const [sessionName, setSessionName] = useState("");

  useEffect(()=>{
    setSessionName(dataObj.data[0].faculty_name);
  },[sessionName]);

  const location = useLocation();
  const handleLogout = ()=>{
    Swal.fire({
      title: "Are you sure you want to logout?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logged out successfully!",
          text: "",
          icon: "success"
        });
         setTimeout(()=>{
          localStorage.removeItem('fid');
          window.location.href = "http://localhost:3000/login";
         },1000)
      }
    });
 
  }
  return (
    <div className="navbar-ui">
      <div className="" id="logos">
      
      <img class="ui fluid image" src={kbplogo}/>
      </div>
      <div class="ui menu" id="menu-box">
        <div class="header item"></div>
        <a class={`item ${location.pathname === '/dashboard' ? 'active': ''}`} href="/dashboard">Dashboard</a>
        <a class={`item ${location.pathname.startsWith('/dashboard/criterion-1') || location.pathname.startsWith('/dashboard/criterion-2') ? 'active' : ''}`} href="/dashboard/criterion-1/key-indicator-1.1/metric-1.1.1">Crietria Data Filling</a>
        <a class="item" href="/help">Help</a>
        
        <div className="item" id="right-side-menu-box">
            <a id="notifications" href="#"><i class="bell outline icon"></i></a>
           <h3><i class="user icon"></i>{sessionName}</h3>
          <button id="logout-button" className="ui red button" onClick={()=>handleLogout()}>Logout</button></div>
      </div>
    </div>
  );
}

export default Navbar;
