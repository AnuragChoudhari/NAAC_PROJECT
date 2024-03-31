import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./QnM1.2.css";
import Dashboard from "../../../dashboard/Dashboard";
import Navbar from "../../../navbar/Navbar";

function QnM121() {
  const [value, setValue] = useState("");

  const [fileDesc, setFileDesc] = useState("");

  const [filesData, setFilesData] = useState([]);
    
  const [count, setCount] = useState(0);

  const [files, setFiles] = useState("");
  useEffect(() => {
    console.log(value);
  }, [value]);

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

  useEffect(()=>{
    console.log(filesData);
  },[filesData]);

  return (
    <>
      <Navbar></Navbar>
      <div className="" id="dashboard-container">
        <Dashboard></Dashboard>
        <div className="ui container" id="qnm-1-2-1">
          <div className="ui large header" id="key-indicator-header">
            Key Indicator - 1.2 Academic Flexibility
          </div>
          <div className="ui header">
            1.2.1 QnM - Number of Certificates/Value added courses offered and
            online courses of MOOCs, SWAYAM, NPTEL etc. where the students of
            the institution have enrolled and successfully completed during the
            last five years.
            <div className="sub header" id="sub-header">
              1.2.1.1:Number of Certificates/Value added courses offered and
              online courses of MOOCs, SWAYAM, NPTEL etc. where the students of
              the institution have enrolled and successfully completed during
              the last five years.
            </div>
          </div>
          <form>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
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
            <button className="ui positive button">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default QnM121;
