import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { ToastContainer, toast } from "react-toastify";
import Divider from '@mui/material/Divider';
import { Select } from "@mui/material";
import { event } from "jquery";
import "./AdminPanel.css";

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function AdminPanel() {
  const [facultyData, setFacultyData] = useState([]);
  const [checkboxData, setCheckboxData] = useState([]);

  const [loadingStatus, setLoadingStatus] = useState(false);
  const [departmentFilters, setDepartmentFilters] = useState([]);

  const successMsg = () => toast.success("Updated successfully!");
  const errorMsg = () => toast.error("Oops! Something went wrong..");


  const predefinedCheckboxes = [
    { id: "qnm1_1_1", name: "QNM 1.1.1" },
    { id: "qnm1_2_1", name: "QNM 1.2.1" },
    { id: "qnm1_2_2", name: "QNM 1.2.2" },
    { id: "qnm1_3_1", name: "QNM 1.3.1" },
    { id: "qnm1_3_2", name: "QNM 1.3.2" },
    { id: "qnm1_4_1", name: "QNM 1.4.1" },
  ];

  const getFacultyData = async () => {
    setLoadingStatus(true);
    setTimeout(async ()=>{
      const response =  await axios.get("http://localhost:8000/getFacultyDetails");
      setFacultyData(response.data);
      
      // Initialize checkboxData with faculty IDs and checkboxes based on the received data
      const initialCheckboxData = response.data.map((f) => {
        return {
          faculty_id: f.faculty_id,
          checkboxes: predefinedCheckboxes.map((checkbox) => ({
            id: checkbox.id,
            checked: f[checkbox.id] === 1, // Assuming 1 indicates true in your database
          })),
        };
      });
      setCheckboxData(initialCheckboxData);
      setLoadingStatus(false);
    },1000)

  };

  async function getDepartmentList(){
    const response = await axios.get("http://localhost:8000/getDepartmentsList");
    setDepartmentFilters(response.data);
  }

  useEffect(() => {
    getFacultyData();
    getDepartmentList();
    
    document
      .getElementById("table-container")
      .addEventListener("change", function (event) {
        if (event.target.type == "checkbox") {
          let id_details = event.target.id;
          const faculty_id = parseInt(id_details.substr(9, id_details.length));
        }
      });
    console.log(facultyData);
  }, []);

  // useEffect(()=>{
  //   console.log(checkboxData[0].checkboxes[0].checked);
  // },[facultyData]);

  // Function to handle checkbox change
  const handleCheckboxChange = (event, facultyId) => {
    const { id, checked } = event.target;

    // Update the checkbox value in checkboxData
    setCheckboxData((prevData) =>
      prevData.map((item) => {
        if (item.faculty_id === facultyId) {
          // Find the index of the checkbox in predefinedCheckboxes array
          const checkboxIndex = predefinedCheckboxes.findIndex(
            (checkbox) => checkbox.id === id
          );
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

  function handleFilterCs(event){
  //  if(csFilter.current.checked){
  //   const csData = facultyData.filter((elem,i)=>{
  //     return elem.faculty_department_id == 1
  //   })
  //   setFacultyData(csData);
  //  }else{
  //   getFacultyData();
  //  }
    departmentFilters.map((elem, i)=>{

      if(event.target.value==elem.dept_id){
        if(event.target.checked){
          const filteredData = facultyData.filter((fdept, j)=>{
            return fdept.faculty_department_id == event.target.value;
          })
          setFacultyData(filteredData);
        }else{
          getFacultyData();
        }
      
      }
    })
   
    
  }

  async function handleUpdateData() {
    try{
      const response = await axios.post(
        "http://localhost:8000/setFacultyCriterias",
        checkboxData
      );
      console.log(response.data);
      successMsg();
    }catch(error){
      console.log(error);
      errorMsg();
    }

  }

  return (
    <>

      <div id="dashboard-main-tab-1">
      <Box sx={{ width: '100%' }}>
      {loadingStatus ? <LinearProgress /> : <></>}
    </Box>
        {/* ------------------------- Tab 1 start -------------------- */}
        <div className="" id="dashboard-content">
        <ToastContainer position="top-center"/>
          <div className="ui container" id="table-container">
            <h2 className="ui header">College Faculty Profiles</h2>
            <Divider />
            <div className="" id="filters">
      <span id="filter-text">Filter by departments &nbsp;&nbsp; - </span>
            {/* <FormControlLabel control={<Checkbox inputRef={csFilter}/>} label="Computer Science" onChange={handleFilterCs} /> */}
            {departmentFilters.map((elem, i)=>{
               
              return(
                <FormControlLabel key={i} control={<Checkbox value={elem.dept_id} />} label={elem.dept_name} onChange={handleFilterCs}/>
              )
            })}
            </div>
            <table class="ui celled table">
              <thead>
                <tr>
                  <th rowSpan={2}>Faculty ID</th>
                  <th rowSpan={2}>Faculty Name</th>
                  <th rowSpan={2}>Faculty Department</th>
          
                  <th className="ui centered small header" colSpan={10}>
                    Metrics Assignment
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
                    
                      <td>
                        <div class="ui toggle checkbox">
                          <input
                            type="checkbox"
                            name="public"
                            id={"qnm1_1_1"}
                            onChange={(e) =>
                              handleCheckboxChange(e, f.faculty_id)
                            }
                            checked={
                              checkboxData
                                .find(
                                  (item) => item.faculty_id === f.faculty_id
                                )
                                ?.checkboxes.find((cb) => cb.id === "qnm1_1_1")
                                ?.checked || false
                            }
                          />
                          <label></label>
                        </div>
                      </td>
                      <td>
                        <div class="ui toggle checkbox">
                          <input
                            type="checkbox"
                            name="public"
                            id={"qnm1_2_1"}
                            onChange={(e) =>
                              handleCheckboxChange(e, f.faculty_id)
                            }
                            checked={
                              checkboxData
                                .find(
                                  (item) => item.faculty_id === f.faculty_id
                                )
                                ?.checkboxes.find((cb) => cb.id === "qnm1_2_1")
                                ?.checked || false
                            }
                          />
                          <label></label>
                        </div>
                      </td>
                      <td>
                        <div class="ui toggle checkbox">
                          <input
                            type="checkbox"
                            name="public"
                            id={"qnm1_2_2"}
                            onChange={(e) =>
                              handleCheckboxChange(e, f.faculty_id)
                            }
                            checked={
                              checkboxData
                                .find(
                                  (item) => item.faculty_id === f.faculty_id
                                )
                                ?.checkboxes.find((cb) => cb.id === "qnm1_2_2")
                                ?.checked || false
                            }
                          />
                          <label></label>
                        </div>
                      </td>
                      <td>
                        <div class="ui toggle checkbox">
                          <input
                            type="checkbox"
                            name="public"
                            id={"qnm1_3_1"}
                            onChange={(e) =>
                              handleCheckboxChange(e, f.faculty_id)
                            }
                            checked={
                              checkboxData
                                .find(
                                  (item) => item.faculty_id === f.faculty_id
                                )
                                ?.checkboxes.find((cb) => cb.id === "qnm1_3_1")
                                ?.checked || false
                            }
                          />
                          <label></label>
                        </div>
                      </td>
                      <td>
                        <div class="ui toggle checkbox">
                          <input
                            type="checkbox"
                            name="public"
                            id={"qnm1_3_2"}
                            onChange={(e) =>
                              handleCheckboxChange(e, f.faculty_id)
                            }
                            checked={
                              checkboxData
                                .find(
                                  (item) => item.faculty_id === f.faculty_id
                                )
                                ?.checkboxes.find((cb) => cb.id === "qnm1_3_2")
                                ?.checked || false
                            }
                          />
                          <label></label>
                        </div>
                      </td>
                      <td>
                        <div class="ui toggle checkbox">
                          <input
                            type="checkbox"
                            name="public"
                            id={"qnm1_4_1"}
                            onChange={(e) =>
                              handleCheckboxChange(e, f.faculty_id)
                            }
                            checked={
                              checkboxData
                                .find(
                                  (item) => item.faculty_id === f.faculty_id
                                )
                                ?.checkboxes.find((cb) => cb.id === "qnm1_4_1")
                                ?.checked || false
                            }
                          />
                          <label></label>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button className="ui primary button" onClick={handleUpdateData}>
              Update Data
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
