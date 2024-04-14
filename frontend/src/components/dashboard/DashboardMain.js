import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { LineChart, Line } from 'recharts';
import PiechartDiag from "../assets/charts/PieChartDiag";

function DashboardMain() {

  const [facultyData, setFacultyData] = useState([]);
  const [checkboxData, setCheckboxData] = useState([]);

  const predefinedCheckboxes = [
    { id: "qnm1_1_1", name: "QNM 1.1.1" },
    { id: "qnm1_2_1", name: "QNM 1.2.1" },
    { id: "qnm1_1_2", name: "QNM 1.1.2" },
    { id: "qnm1_3_1", name: "QNM 1.3.1" },
    { id: "qnm1_3_2", name: "QNM 1.3.2" },
    { id: "qnm1_4_1", name: "QNM 1.4.1" }
  ];




  const getFacultyData = async () => {
    const response = await axios.get("http://localhost:8000/getFacultyDetails");
    setFacultyData(response.data);
  
    // Initialize checkboxData with faculty IDs and checkboxes based on the received data
    const initialCheckboxData = response.data.map(f => {
      return {
        faculty_id: f.faculty_id,
        checkboxes: predefinedCheckboxes.map(checkbox => ({
          id: checkbox.id,
          checked: f[checkbox.id] === 1 // Assuming 1 indicates true in your database
        }))
      };
    });
    setCheckboxData(initialCheckboxData);
  };

  useEffect(() => {
    getFacultyData();

    document.getElementById("table-container").addEventListener("change", function(event){
      if(event.target.type == 'checkbox'){
        let id_details = event.target.id;
        const faculty_id = parseInt(id_details.substr(9, id_details.length));
        
      }
    })
    console.log(facultyData);
  }, [  ]);

    // useEffect(()=>{
    //   console.log(checkboxData[0].checkboxes[0].checked);
    // },[facultyData]);

 // Function to handle checkbox change
 const handleCheckboxChange = (event, facultyId) => {
  const { id, checked } = event.target;

  // Update the checkbox value in checkboxData
  setCheckboxData(prevData =>
    prevData.map(item => {
      if (item.faculty_id === facultyId) {
        // Find the index of the checkbox in predefinedCheckboxes array
        const checkboxIndex = predefinedCheckboxes.findIndex(checkbox => checkbox.id === id);
        if (checkboxIndex !== -1) {
          // Update the checkbox value
          const updatedCheckboxes = [...item.checkboxes];
          updatedCheckboxes[checkboxIndex].checked = checked;
          return { ...item, checkboxes: updatedCheckboxes };
        }
      }
      return item;
    })
  );

};

  async function handleUpdateData(){
    const response = await axios.post("http://localhost:8000/setFacultyCriterias", checkboxData);
    console.log(response.data)
  }

//   useEffect(()=>{
// console.log(facultyData.findIndex(obj=>obj.faculty_id==));
//   },[facultyData])

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
                    <tr key={i} id={f.faculty_id}>
                      <td>{f.faculty_id}</td>
                      <td>{f.faculty_name}</td>
                      <td>{f.dept_name}</td>
                      <td>{f.faculty_email}</td>
                      <td>{f.faculty_contact}</td>
                      <td>{f.date_of_faculty_registration}</td>
                      <td>
                        <div class="ui toggle checkbox" >
                          <input type="checkbox" name="public" id={"qnm1_1_1"} onChange={(e) => handleCheckboxChange(e, f.faculty_id)} checked={
            checkboxData.find(item => item.faculty_id === f.faculty_id)?.checkboxes.find(cb => cb.id === "qnm1_1_1")?.checked || false
        } />
                          <label></label>
                        </div>
                      </td>
                      <td>
                      <div class="ui toggle checkbox">
                          <input type="checkbox" name="public"id={"qnm1_2_1"} onChange={(e) => handleCheckboxChange(e, f.faculty_id)} checked={
            checkboxData.find(item => item.faculty_id === f.faculty_id)?.checkboxes.find(cb => cb.id === "qnm1_2_1")?.checked || false
        }/>
                          <label></label>
                        </div>
                      </td>
                      <td>
                      <div class="ui toggle checkbox">
                          <input type="checkbox" name="public" id={"qnm1_2_2"} onChange={(e) => handleCheckboxChange(e, f.faculty_id)} checked={
            checkboxData.find(item => item.faculty_id === f.faculty_id)?.checkboxes.find(cb => cb.id === "qnm1_2_2")?.checked || false
        }/>
                          <label></label>
                        </div>
                      </td>
                      <td>
                      <div class="ui toggle checkbox">
                          <input type="checkbox" name="public"id={"qnm1_3_1"} onChange={(e) => handleCheckboxChange(e, f.faculty_id)} checked={
            checkboxData.find(item => item.faculty_id === f.faculty_id)?.checkboxes.find(cb => cb.id === "qnm1_3_1")?.checked || false
        } />
                          <label></label>
                        </div>
                      </td>
                      <td>
                      <div class="ui toggle checkbox">
                          <input type="checkbox" name="public"id={"qnm1_3_2"} onChange={(e) => handleCheckboxChange(e, f.faculty_id)}  checked={
            checkboxData.find(item => item.faculty_id === f.faculty_id)?.checkboxes.find(cb => cb.id === "qnm1_3_2")?.checked || false
        } />
                          <label></label>
                        </div>
                      </td>
                      <td>
                      <div class="ui toggle checkbox">
                          <input type="checkbox" name="public"id={"qnm1_4_1"} onChange={(e) => handleCheckboxChange(e, f.faculty_id)}  checked={
            checkboxData.find(item => item.faculty_id === f.faculty_id)?.checkboxes.find(cb => cb.id === "qnm1_4_1")?.checked || false
        }  />
                          <label></label> 
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button className="ui primary button" onClick={handleUpdateData}>Update Data</button>
          </div>

  

        </div>
      </div>
    </>
  );
}

export default DashboardMain;
