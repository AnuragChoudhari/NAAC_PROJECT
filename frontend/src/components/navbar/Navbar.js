import "./Navbar.css";

import React, { useEffect, useState } from "react";
import kbplogo from "../assets/new_logo_wide.png";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { Badge, Button } from "@mui/material";
import { Mail } from "@mui/icons-material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import BasicPopover from "../material_ui_components/BasicPopover";
import PersonIcon from "@mui/icons-material/Person";
import TemporaryDrawer from "../material_ui_components/TemporaryDrawer";
import MenuIcon from '@mui/icons-material/Menu';
import LoadingProgress from "../utils/LoadingProgress";


function Navbar() {
  const fdata = localStorage.getItem("fid");
  const [notificationCount, setNotificationCount] = useState(2);
  const[loadingStatus, setLoadingStatus] = useState(false);
  const dataObj = JSON.parse(fdata);

  const [sessionName, setSessionName] = useState("");

  useEffect(() => {
    setSessionName(dataObj.data[0].faculty_name);
  }, [sessionName]);

  const location = useLocation();
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoadingStatus(true);
        Swal.fire({
          title: "Logged out successfully!",
          text: "",
          icon: "success",
        });
        setTimeout(() => {
          
          localStorage.removeItem("fid");
          window.location.href = "http://localhost:3000/login";
          
        }, 2000);
      }
    });
  };
  const notificationHandler = () => {
    let count = notificationCount + 1;
    setNotificationCount(count);
  };
  return (
    <div className="navbar-ui">
      {/* <div className="" id="logos">
        <img class="ui fluid image" src={kbplogo} />
      </div> */}
      <div class="ui menu" id="menu-box">
        <TemporaryDrawer></TemporaryDrawer>

        <Typography variant="h6" component="h2" mx={2}>
          Karmveer Bhaurao Patil College Of Engineering, Satara
        </Typography>

        <div className="item" id="right-side-menu-box">
          <BasicPopover notificationCount={notificationCount}></BasicPopover>
          <h3>
            <i className="ui user icon"></i>
            {sessionName}
          </h3>
          <Button
            id="logout-button"
            variant="contained"
            color="error"
            onClick={() => handleLogout()}
          >
            Logout
          </Button>
        </div>
      </div>
      <LoadingProgress status={loadingStatus}></LoadingProgress>
    </div>
  );
}

export default Navbar;
