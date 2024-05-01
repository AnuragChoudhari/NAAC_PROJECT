import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { LineChart, Line } from "recharts";
import PiechartDiag from "../assets/charts/PieChartDiag";
import { Badge, Button } from "@mui/material";
import { Mail } from "@mui/icons-material";
import BasicTabs from "../material_ui_components/BasicTabs";
import BasicPopover from "../material_ui_components/BasicPopover";
import AdminPanel from "../utils/AdminPanel";

function DashboardMain() {
 
  return (
    <>
      <Navbar></Navbar>
      <div className="" id="dashboard-main">
        

        {/*------------------------ TAB 1 END --------------------- */}
        <div className="" id="tabs-menu">
                <AdminPanel></AdminPanel>
                  
        </div>
      </div>
    </>
  );
}

export default DashboardMain;
