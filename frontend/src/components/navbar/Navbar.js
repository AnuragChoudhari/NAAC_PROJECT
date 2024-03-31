import "./Navbar.css";

import React, { useEffect, useState } from "react";
import kbplogo from "../assets/new_logo_wide.png" 
import { useLocation } from "react-router-dom";


function Navbar() {
  const fdata = localStorage.getItem('fid');

  const dataObj = JSON.parse(fdata);

  const [sessionName, setSessionName] = useState("");

  useEffect(()=>{
    setSessionName(dataObj.data[0].faculty_name);
  },[sessionName]);

  const location = useLocation();
  const handleLogout = ()=>{
    localStorage.removeItem('fid');
    window.location.href = "http://localhost:3000/login";
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

        <div className="item">
          <button id="logout-button" className="ui button" onClick={()=>handleLogout()}>Logout</button>
        </div>
        <div className="item"><p>{sessionName}</p></div>
        </div>
        
      </div>
     
    </div>
  );
}

export default Navbar;
