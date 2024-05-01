import axios from "axios";
import "./Auth.css";
import loadingGif from "../assets/Loading_2.gif";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import uniImage from "../assets/casey-olsen-NlFyPKxXORo-unsplash.jpg";
import { Grid } from "@mui/material";

function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);


  const successMsg = () => toast.success("Logged in successfully!");
  const errorMsg = () => toast.error("Error: Username or password incorrect");

  const handleLogin = async (e) => {
    setLoadingStatus(true);

    e.preventDefault();

    setInterval(() => {
      setLoadingStatus(false);
    }, 1000);

    const userData = {
      user_email: userEmail,
      user_pwd: userPass,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/checkUserLogin",
        userData
      );
      console.log(response.data);
      localStorage.setItem("fid", JSON.stringify(response.data));
      successMsg();
      window.location.href = "http://localhost:3000/";
    } catch (error) {
      console.log("Error in logging in user", error);
      errorMsg();
    }
    // localStorage.setItem(
    //   "token-info",
    //   JSON.stringify(userData)
    // )
    // setIsLoggedIn(true);
    // setUserEmail("");
    // setUserPass("");
  };

  return (
    <>
      <div className="" id="login-main-container">
        <div className="login-form">
          {loadingStatus == true ? (
            <div className="" id="loading-gif">
              <img src={loadingGif}></img>
            </div>
          ) : (
            <></>
          )}
          <h1 className="ui header" id="login-form-header">
            Faculty Login
          </h1>
          <ToastContainer position="top-center"/>
          <form class="ui form" id="login-form">
            <div class="required field" id="user-email">
              <label>Email</label>
              <input
                type="email"
                name="user-email"
                placeholder="Email"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            
            </div>
            <div class="required field">
              <label>Password</label>
              <input
                type="password"
                name="user-pass"
                placeholder="Password"
                onChange={(e) => setUserPass(e.target.value)}
              />
            </div>
            <div class="field">
              <label>
                <a href="/signup">
                  New user ? Click here to create a new account.
                </a>
              </label>
            </div>
            <button
              onClick={(e) => handleLogin(e)}
              class="ui positive button"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
        <div className="" id="right-section">
          <div className="" id="right-sub-section">
            <div className="" id="right-sub-section-title"><h1 className="">NAAC <br></br> Assistant <br></br> Portal</h1></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
