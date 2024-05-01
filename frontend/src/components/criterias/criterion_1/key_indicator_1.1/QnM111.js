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

  const fdata = localStorage.getItem("fid");

  const dataObj = JSON.parse(fdata);

  const uploadData = async (e) => {
    
    e.preventDefault();
    if (value !== "" && filesData.length > 0) {
      const formData = new FormData();

      formData.append("faculty_id", dataObj.data[0].faculty_id);

      // Append files with correct keys
      filesData.forEach((file, index) => {
        formData.append(`files`, file.file); // Append files under "file${index}" key
        formData.append(`file_desc${index}`, file.file_desc); // Append file descriptions under "file_desc${index}" key
        formData.append('m_desc', value);
        formData.append('m_files', file.file_name);
      });

      try {
        const response = await axios.post(
          "http://localhost:8000/uploadData/qnm1_1_1",
          formData
        );
        console.log("Response", response.data);
        successMsg();
      } catch (error) {
        setErrMsg(errmsg);
        console.log("Error: ", error);
        errorMsg();
      }
    } else {
      alert("Both description and files are required.");
    }
  };

  const handleDelete = (e, i) => {
    e.preventDefault();
    const updatedFilesData = [...filesData];
    updatedFilesData.splice(i, 1);
    setFilesData(updatedFilesData);
    // Recalculate serial numbers
    const updatedFilesDataWithSerialNumbers = updatedFilesData.map(
      (file, index) => ({
        ...file,
        sr_no: index + 1,
      })
    );

    setFilesData(updatedFilesDataWithSerialNumbers);
    setCount(updatedFilesData.length); // Update count to reflect the new length
  };

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    const newFilesData = [...filesData];
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const fileDesc = prompt(
        `Enter the description for the file "${file.name}"`
      );
      if (fileDesc !== null) {
        newFilesData.push({
          sr_no: newFilesData.length + 1,
          file_name: file.name,
          file_desc: fileDesc,
          file: file, // Add the file object
        });
      }
    }
    setFilesData(newFilesData);
  };
  useEffect(() => {
    console.log(filesData);
  }, [filesData]);
  return (
    <>
      <Navbar></Navbar>
      
      <div className="" id="main container">
       
        <div className="" id="dashboard-container">
          <ToastContainer />
          <Dashboard></Dashboard>
          <div className="ui container" id="qnm-1-1-1">
            <div className="ui large header" id="key-indicator-header">
              Key Indicator - 1.1 Curricular Planning and Implementation (100)
            </div>
            <div className="ui header">
              1.1.1 QnM - The institution ensures effective curriculum planning
              and delivery through a well-planned and documented process
              including Academic calendar and conduct of continuous internal
              Assessment.
              <div className="sub header" id="sub-header">
                Write description in a maximum of 500 words.
              </div>
            </div>
            <form
              action=""
              method="post"
              enctype="multipart/form-data"
              name="qnm1_1_1"
              id="qnm1_1_1"
            >
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                required
              />
              {/* <input
              type="file"
              name="files"
              id="upload-btn"
              value={files}
              onChange={(e) => {
                const file_details = e.target.files[0];
                const fileDesc = prompt(
                  "Enter the description for the file you provided "
                );
                setFileDesc(fileDesc);
                const filesDatas = [
                  ...filesData,
                  {
                    sr_no: filesData.length + 1,
                    file_name: file_details.name,
                    file_desc: fileDesc,
                  },
                ];
                setFilesData(filesDatas);
              }}
              multiple
            ></input> */}

              <input
                type="file"
                name="files"
                id="upload-btn"
                onChange={handleFileChange}
                multiple
              ></input>

              <table class="ui celled table">
                <thead>
                  <tr>
                    <th>Sr No.</th>
                    <th>File Name</th>
                    <th>File Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filesData.map((f, i) => {
                    return (
                      <tr key={i} id={i}>
                        <td>{f.sr_no}</td>
                        <td>{f.file_name}</td>
                        <td>{f.file_desc}</td>
                        <td>
                          <button
                            className="ui red button"
                            onClick={(e) => handleDelete(e, i)}
                          >
                            <i class="close icon"></i>
                          </button>
                        </td>
                      </tr>
                    );
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
      </div>
    </>
  );
}

export default QnM111;
