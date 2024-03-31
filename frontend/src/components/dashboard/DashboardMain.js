import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { LineChart, Line } from 'recharts';
import PiechartDiag from "../assets/charts/PieChartDiag";

function DashboardMain() {

  


  const [facultyData, setFacultyData] = useState([]);
  const getFacultyData = async () => {
    const response = await axios.get("http://localhost:8000/getFacultyDetails");
    setFacultyData(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getFacultyData();
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <div className="" id="dashboard-main">
        <div className="ui container" id="dashboard-content">
          <h1 className="ui header">Admin Panel</h1>

          <div className="ui container" id="table-container">
            <h2 className="ui header">Faculty Profiles</h2>
            <table class="ui celled table">
              <thead>
                <tr>
                  <th rowSpan={2}>Faculty ID</th>
                  <th rowSpan={2}>Faculty Name</th>
                  <th rowSpan={2}>Faculty Department</th>
                  <th rowSpan={2}>Faculty Email</th>
                  <th rowSpan={2}>Faculty Contact No</th>
                  <th rowSpan={2}>Date Of Faculty Registration</th>
                  <th className="ui centered small header" colSpan={10}>
                  Assign criterion filling to each faculty based on metrics.


                  </th>
               
                </tr>
                <tr>
                  <th>QNM 1.1.1</th>
                  <th>QNM 1.2.1</th>
                  <th>QNM 1.2.2</th>
                  <th>QNM 1.3.1</th>
                  <th>QNM 1.3.2</th>
                  <th>QNM 1.4.1</th>
      
             
               
                </tr>
              </thead>
              <tbody>
                {facultyData.map((f, i) => {
                  return (
                    <tr key={i}>
                      <td>{f.faculty_id}</td>
                      <td>{f.faculty_name}</td>
                      <td>{f.dept_name}</td>
                      <td>{f.faculty_email}</td>
                      <td>{f.faculty_contact}</td>
                      <td>{f.date_of_faculty_registration}</td>
                      <td>
                        <div class="ui toggle checkbox">
                          <input type="checkbox" name="public" />
                          <label></label>
                        </div>
                      </td>
                      <td>
                      <div class="ui toggle checkbox">
                          <input type="checkbox" name="public" />
                          <label></label>
                        </div>
                      </td>
                      <td>
                      <div class="ui toggle checkbox">
                          <input type="checkbox" name="public" />
                          <label></label>
                        </div>
                      </td>
                      <td>
                      <div class="ui toggle checkbox">
                          <input type="checkbox" name="public" />
                          <label></label>
                        </div>
                      </td>
                      <td>
                      <div class="ui toggle checkbox">
                          <input type="checkbox" name="public" />
                          <label></label>
                        </div>
                      </td>
                      <td>
                      <div class="ui toggle checkbox">
                          <input type="checkbox" name="public" />
                          <label></label>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button className="ui primary button">Update Data</button>
          </div>

  

        </div>
      </div>
    </>
  );
}

export default DashboardMain;
