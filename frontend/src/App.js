import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import QnM111 from "./components/criterias/criterion_1/key_indicator_1.1/QnM111";
import Navbar from "./components/navbar/Navbar";
import QnM121 from "./components/criterias/criterion_1/key_indicator_1.2/QnM121";
import QnM122 from "./components/criterias/criterion_1/key_indicator_1.2/QnM122";
import QnM131 from "./components/criterias/criterion_1/key_indicator_1.3/QnM131";
import QnM132 from "./components/criterias/criterion_1/key_indicator_1.3/QnM132";
import QnM141 from "./components/criterias/criterion_1/key_indicator_1.4/QnM141";
import QnM231 from "./components/criterias/criterion_2/key_indicator_2.3/QnM231";
import QnM251 from "./components/criterias/criterion_2/key_indicator_2.5/QnM251";
import QnM261 from "./components/criterias/criterion_2/key_indicator_2.6/QnM261";
import QnM262 from "./components/criterias/criterion_2/key_indicator_2.6/QnM262";
import QnM263 from "./components/criterias/criterion_2/key_indicator_2.6/QnM263";
import Help from "./components/help/Help";
import Default from "./components/Default";
import DashboardMain from "./components/dashboard/DashboardMain";
import PageNotFound from "./components/PageNotFound";
import HomePage from "./components/pages/HomePage";
import SignUpM from "./components/auth/SignUpM";
import LoginM from "./components/auth/LoginM";
import DashboardTPL from "./components/pages/DashboardTPL";
import AdminDashboard from "./components/utils/AdminDashboard";
import DefaultCriteria from "./components/pages/DefaultCriteria";
import NaacHome from "./components/pages/NaacHome";


function App() {
  const fdetails = localStorage.getItem("fid");

  return (
    <>
      <BrowserRouter>
        <Routes>

        {/* <Route path="*" element={<PageNotFound></PageNotFound>}></Route> */}
        
          {fdetails != null ? (
            <>
                 <Route
                path="/"
                element={<HomePage></HomePage>}
              ></Route>
                <Route
                path="/home"
                element={<HomePage></HomePage>}
              ></Route>

                 <Route
                path="/admin-dashboard"
                element={<AdminDashboard></AdminDashboard>}
              ></Route>
               
              <Route
                path="/admin-panel"
                element={<DashboardMain></DashboardMain>}
              ></Route>

              <Route
              path="/dashboard"
              element={<DashboardTPL></DashboardTPL>}
              ></Route>

                <Route
                path="/criterias"
                element={<DefaultCriteria></DefaultCriteria>}
              ></Route>

              <Route
                path="/dashboard/criterion-1/key-indicator-1.1/metric-1.1.1"
                element={<QnM111></QnM111>}
              ></Route>

              <Route
                path="/dashboard/criterion-1/key-indicator-1.2/metric-1.2.1"
                element={<QnM121></QnM121>}
              ></Route>

              <Route
                path="/dashboard/criterion-1/key-indicator-1.2/metric-1.2.2"
                element={<QnM122></QnM122>}
              ></Route>

              <Route
                path="/dashboard/criterion-1/key-indicator-1.3/metric-1.3.1"
                element={<QnM131></QnM131>}
              ></Route>

              <Route
                path="/dashboard/criterion-1/key-indicator-1.3/metric-1.3.2"
                element={<QnM132></QnM132>}
              ></Route>

              <Route
                path="/dashboard/criterion-1/key-indicator-1.4/metric-1.4.1"
                element={<QnM141></QnM141>}
              ></Route>

              <Route
                path="/dashboard/criterion-2/key-indicator-2.3/metric-2.3.1"
                element={<QnM231></QnM231>}
              ></Route>

              <Route
                path="/dashboard/criterion-2/key-indicator-2.5/metric-2.5.1"
                element={<QnM251></QnM251>}
              ></Route>

              <Route
                path="/dashboard/criterion-2/key-indicator-2.6/metric-2.6.1"
                element={<QnM261></QnM261>}
              ></Route>

              <Route
                path="/dashboard/criterion-2/key-indicator-2.6/metric-2.6.2"
                element={<QnM262></QnM262>}
              ></Route>

              <Route
                path="/dashboard/criterion-2/key-indicator-2.6/metric-2.6.3"
                element={<QnM263></QnM263>}
              ></Route>

              <Route path="*" element={<HomePage></HomePage>}></Route>

            
            </>
          ) : (
            <>
                   {/* <Route path="/login" element={<Login></Login>}></Route> */}
                   <Route path="/home" element={<NaacHome></NaacHome>}></Route>
                   <Route path="/login" element={<LoginM></LoginM>}></Route>
                   <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          {/* <Route path="/signup" element={<Signup></Signup>}></Route> */}
            <Route path="/signup" element={<SignUpM></SignUpM>}></Route>
          <Route path="/" element={<LoginM></LoginM>}></Route>  
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
