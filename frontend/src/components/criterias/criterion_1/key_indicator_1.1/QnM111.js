import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "./QnM111.css";
import "react-quill/dist/quill.snow.css";
import Dashboard from "../../../dashboard/Dashboard";
import Navbar from "../../../navbar/Navbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function QnM111() {
  const [value, setValue] = useState("");
  const [files, setFiles] = useState("");
  
  const [count, setCount] = useState(0);

  const [fileDesc, setFileDesc] = useState("");

  const [filesData, setFilesData] = useState([]);

  const [errmsg, setErrMsg] = useState("");

  const formData = new FormData();

  const successMsg = () => toast.success("Record uploaded successfully!");
  const errorMsg = () => toast.error("Error in uploading data ", errmsg);
 
  const fdata = localStorage.getItem('fid');
 
  const dataObj = JSON.parse(fdata);

//   const postData = {
//     filled_desc: value,
//     file_path: JSON.stringify(filesData),
//     faculty_id: dataObj.data[0].faculty_id
//   };
//   // Append postData properties to formData
// Object.keys(postData).forEach(key => {
//     formData.append(key, postData[key]);
// });

//   const uploadData = async (e) => {


    
//     e.preventDefault();
//     if (value != "" && filesData != "") {
//       const data = axios
//         .post("http://localhost:8000/uploadData", postData)
//         .then((response) => {
//           console.log("Response", response.data);
//           successMsg();
//         })
//         .catch((error) => {
//           setErrMsg(errmsg);
//           console.log("Error: ", error);
//           errorMsg();
//         });
//       }else{
//         alert("Both fields are needed");
//       }
//   };

const uploadData = async (e) => {
  e.preventDefault();
  if (value !== "" && filesData.length > 0) {
    // Construct FormData object
    const formData = new FormData();
    formData.append("filled_desc", value);
    formData.append("faculty_id", dataObj.data[0].faculty_id);
    
    // Append files to FormData object
    filesData.forEach(file => {
      formData.append("file", file);
    });

    // Send POST request with FormData
    const data = axios.post("http://localhost:8000/uploadData", formData)
      .then((response) => {
        console.log("Response", response.data);
        successMsg();
      })
      .catch((error) => {
        setErrMsg(errmsg);
        console.log("Error: ", error);
        errorMsg();
      });
  } else {
    alert("Both description and files are required.");
  }
};



  const handleDelete = (e, i) =>{
    e.preventDefault();
    const updatedFilesData = [...filesData];
    updatedFilesData.splice(i, 1);
    setFilesData(updatedFilesData); 
  // Recalculate serial numbers
  const updatedFilesDataWithSerialNumbers = updatedFilesData.map((file, index) => ({
    ...file,
    sr_no: index + 1
  }));

  setFilesData(updatedFilesDataWithSerialNumbers);
  setCount(updatedFilesData.length); // Update count to reflect the new length
  }

  useEffect(()=>{
    console.log(filesData);
  },[filesData]);
  return (
    <>
      <Navbar></Navbar>
      <div className="" id="dashboard-container">
        <ToastContainer />
        <Dashboard></Dashboard>
        <div className="ui container" id="qnm-1-1-1">
          <div className="ui large header" id="key-indicator-header">
            Key Indicator - 1.1 Curricular Planning and Implementation (100)
          </div>
          <div className="ui header">
            1.1.1 QnM - The institution ensures effective curriculum planning
            and delivery through a well-planned and documented process including
            Academic calendar and conduct of continuous internal Assessment.
            <div className="sub header" id="sub-header">
              Write description in a maximum of 500 words.
            </div>
          </div>
          <form>
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              required
            />
            <input
              type="file"
              id="upload-btn"
              value={files}
              onChange={(e) =>{
                const file_details = e.target.files[0];
                const fileDesc = prompt("Enter the description for the file you provided ");
                setFileDesc(fileDesc);
                const filesDatas = [
                  ...filesData, 
                  {
                    sr_no: filesData.length + 1,
                    file_name: file_details.name,
                    file_desc: fileDesc
                  }
                ];
                setFilesData(filesDatas);
                
                
              }}
            ></input>

            <table class="ui celled table">
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>File Name</th>
                  <th>File Description</th>
                </tr>
              </thead>
                <tbody>
                  {filesData.map((f,i)=>{
                    return(
                      <tr key={i} id={i}>
                        <td >{f.sr_no}</td>
                        <td>{f.file_name}</td>
                        <td>{f.file_desc}</td>
                        <td><button className="ui red button" onClick={(e)=>handleDelete(e, i)}><i class="close icon"></i></button></td>
                      </tr>
                    )
                  })}
                </tbody>
            </table>

            <div className="ui small header">
              File Description
              <div className="ui sub header">
                <ul>
                  <li>Upload Additional information</li>
                  <li>Provide Link for Additional information</li>
                </ul>
              </div>
            </div>
            <button
              className="ui positive button"
              type="submit"
              onClick={uploadData}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default QnM111;
