import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./QnM1.3.css";
import Dashboard from "../../../dashboard/Dashboard";
import Navbar from "../../../navbar/Navbar";

function QnM131() {
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <>
      <Navbar></Navbar>
      <div className="" id="dashboard-container">
        <Dashboard></Dashboard>
        <div className="ui container" id="qnm-1-3-1">
          <div className="ui large header" id="key-indicator-header">
            Key Indicator - 1.3 Curriculum Enrichment (30)
          </div>
          <div className="ui header">
            1.3.1 QnM - Institution integrates crosscutting issues relevant to Professional Ethics, Gender,
            Human Values, Environment and Sustainability in transacting the Curriculum.
            <div className="sub header" id="sub-header">
              Write description in a maximum of 500 words.
            </div>
          </div>
          <form>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
            <input type="file" id="upload-btn"></input>
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

export default QnM131;
