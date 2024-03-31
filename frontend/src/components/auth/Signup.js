import axios from "axios";
import "./Auth.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import React from "react";
import loadingGif from "../assets/Loading_2.gif";

function Signup() {
  const [deptDetails, setDeptDetails] = useState([]);
  const [facultyName, setFacultyName] = useState("");
  const [facultyContact, setFacultyContact] = useState("");
  const [facultyEmail, setFacultyEmail] = useState("");
  const [facultyDept, setFacultyDept] = useState("");
  const [facultyPass, setFacultyPass] = useState("");
  const [facultyCpass, setFacultyCpass] = useState("");
  const [passStatus, setPassStatus] = useState("");

  const [loadingStatus, setLoadingStatus] = useState(false);

  const successMsg = () => toast.success("New faculty account created!");
  const errorMsg = () => toast.error("Error creatin new faculty!");


  useEffect(() => {
    const getDepartmentDetails = async () => {
      // Define an async function
      try {
        const response = await axios.get(
          "http://localhost:8000/getDepartmentsList"
        );
        setDeptDetails(response.data); // Assuming the response contains data directly
        console.log("Response is: ", response.data);
      } catch (error) {
        console.log("Error occurred retrieving the department details.", error);
      }
    };

    getDepartmentDetails();
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  useEffect(() => {
    document.getElementById('sub_btn').setAttribute('class', 'ui disabled button');
    if (facultyPass === facultyCpass && facultyPass != "") {
      console.log("Password match!");
      document.getElementById('sub_btn').setAttribute('class', 'ui positive button');
      setPassStatus(true);
    } else {
      console.log("Password is not matching");
      setPassStatus(false);
    }
  }, [facultyCpass, passStatus]);

  const facultyData = {
    faculty_name: facultyName,
    faculty_department_id: facultyDept,
    faculty_email: facultyEmail,
    faculty_contact: facultyContact,
    faculty_password: facultyCpass,
 
  };

 function createFacultyProfile(e) {
   setLoadingStatus(true);
    
    e.preventDefault();
   
    setInterval(() => {
      setLoadingStatus(false);
    }, 2000);

    const postFacultyData = axios
      .post("http://localhost:8000/createFacultyProfile", facultyData)
      .then((response) => {
        
        console.log(response);
        successMsg();
        setTimeout(() => {
          window.location.href = "http://localhost:3000/login";
        }, 2000);
      }).catch((error)=>{
        console.log("Error in creating faculty :", error);
        errorMsg();
      });
      
  }

  return (
    <div className="" id="signup-form">
    {loadingStatus == true ?   <div className="" id="loading-gif">
        <img src={loadingGif}></img>
      </div> : <></>}
       <ToastContainer />
      <h1 className="ui header" id="signup-form-header">
        <div>
          <i class="user outline icon"></i> Create a new account
        </div>
      </h1>
      <form class="ui form" id="signup-form-form" onSubmit={createFacultyProfile}>
        <div class="field" id="faculty-name">
          <label>Faculty Name</label>
          <input 
            type="text"
            name="faculty-name"
            placeholder="Enter full name"
            value={facultyName}
            onChange={(e) => setFacultyName(e.target.value)}
            required
          />
        </div>

        <div class="field" id="faculty-email">
          <label>Faculty Email</label>
          <input 
            type="text"
            name="faculty-email"
            placeholder="Email"
            value={facultyEmail}
            onChange={(e) => setFacultyEmail(e.target.value)}
            required
          />
        </div>

        <div class="field">
          <label>Contact No</label>
          <input 
            type="number"
            name="faculty-contact"
            placeholder="Contact Number"
            value={facultyContact}
            onChange={(e) => setFacultyContact(e.target.value)}
            required
          />
        </div>

        <div class="field">
          <label>Faculty Department</label>
          <select 
            class="ui dropdown"
            value={facultyDept}
            onChange={(e) => setFacultyDept(e.target.value)}
            required
          >
            <option value="">Select department</option>
            {deptDetails.map((dept, index) => {
              return (
                <option key={index} value={dept.dept_id}>
                  {dept.dept_name}
                </option>
              );
            })}
          </select>
        </div>

        <div class="field">
          <label>Set Password</label>
          <input 
            type="password"
            name="faculty-pass"
            placeholder="Set password"
            value={facultyPass}
            onChange={(e) => setFacultyPass(e.target.value)}
            required
          />
        </div>

        <div class="field">
          <label>Confirm Password</label>
          <input 
            type="password"
            name="cfaculty-pass"
            placeholder="Set password"
            value={facultyCpass}
            onChange={(e) => {
              setFacultyCpass(e.target.value);
            }}
            required
          />
        </div>
        {passStatus == true ? (
          <></>
        ) : (
          <div class="ui negative message">
            <div class="header">Password didn't matched</div>
            <p>Please check your password</p>
          </div>
        )}

        <div class="field">
          <label>
            <a href="/login">Already have an account ? Click here to login.</a>
          </label>
        </div>
        <button
        id="sub_btn"
          class=""
          type="submit"
          
        >
          Create account
        </button>
      </form>
    </div>
  );
}

export default Signup;
