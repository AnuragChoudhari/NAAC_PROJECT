import React from "react";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { Badge, Button, Typography } from "@mui/material";
import { Home, Mail } from "@mui/icons-material";
import "./HomePage.css";

import CenteredTabs from "../material_ui_components/CenteredTabs";
import BasicTabs from "../material_ui_components/CustomTabPanel";
import HomeTPL from "../material_ui_components/HomeTPL";

function HomePage() {
  return (
    <>
      <Navbar></Navbar>

      <div className="" id="home-page-container">
        {/* <Typography pt={5} m={20}>
        Karmaveer Bhaurao Patil College of Engineering , Satara is one of the
        esteemed educational institutions in the state of Maharashtra. The
        institute was established in year 1983 and has continued its prestigious
        journey for the last 35 years, and is affiliated to Dr. Babasaheb
        Ambedkar Technological University, Lonere and approved by AICTE, New
        Delhi.
        </Typography> */}
        <HomeTPL></HomeTPL>
      </div>
    </>
  );
}

export default HomePage;
