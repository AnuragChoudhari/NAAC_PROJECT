import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./QnM1.3.css";
import Dashboard from "../../../dashboard/Dashboard";
import Navbar from "../../../navbar/Navbar";

function QnM132() { 
    const [value, setValue] = useState('');
    useEffect(()=>{
      console.log(value);
    },[value]);
  return (
    <>
      <Navbar></Navbar>
      <div className="" id="dashboard-container">
        <Dashboard></Dashboard>
        <div className="ui container" id="qnm-1-3-2">
          <div className="ui large header" id="key-indicator-header">
            Key Indicator - 1.3 Curriculum Enrichment (30)
          </div>
          <div className="ui header">
            1.3.2 QnM - Percentage of students undertaking project work/field
            work/ internships (Data for the latest completed academic year)
            <div className="sub header" id="sub-header">
              1.3.2.1. Number of students undertaking project work/field
              work/internships.
              
            </div>
          </div>
          <form>
          <ReactQuill theme="snow" value={value} onChange={setValue} />
            <div className="ui tiny header" id="formula">
              <div className="" id="formula-left">
                Percentage = Number of students undertaking project work 
                / field work / internships
                <hr></hr>
                Total number of students during the latest completed academic year
              </div>
              <div id="formula-right"> x 100</div>
            </div>{" "}
            <br></br>
            <input type="file" id="upload-btn" multiple></input>
            <div id="file-list"></div>
            <div className="ui small header">
              File Description
              <div className="ui sub header">
                <ul>
                  <li>
                    Institutional data in the prescribed format
                  </li>
                  <li>Upload supporting document</li>
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

export default QnM132;
