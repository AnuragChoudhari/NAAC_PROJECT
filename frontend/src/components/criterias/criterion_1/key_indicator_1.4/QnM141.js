import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./QnM1.4.css";
import Dashboard from "../../../dashboard/Dashboard";
import Navbar from "../../../navbar/Navbar";

function QnM141() {
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <>
      <Navbar></Navbar>
      <div className="" id="dashboard-container">
        <Dashboard></Dashboard>
        <div className="ui container" id="qnm-1-4-1">
          <div className="ui large header" id="key-indicator-header">
            Key Indicator - 1.4 Feedback System (20)
          </div>
          <div className="ui header">
            1.4.1 QnM - Institution obtains feedback on the academic performance
            and ambience of the institution from various stakeholders such as
            Students, Teachers, Employers, Alumni, etc. and action taken report
            on the feedback is made available on institutional website.
          </div>
          <div className="" id="feedback-process">
            <h3 className="ui header">
              Feedback processes of the institution may be classified as
              follows.
            </h3>
            <ol type="A">
              <li>
                Feedback collected, analysed, action taken & communicated to the
                relevant bodies and feedback hosted on the institutional
                website.
              </li>

              <li>
                Feedback collected, analysed, action has been taken &
                communicated to the relevant bodies.
              </li>

              <li>Feedback collected, analysed.</li>

              <li>Feedback collected.</li>

              <li>Feedback not collected.</li>
            </ol>
          </div>
          <form>
            <ReactQuill theme="snow" value={value} onChange={setValue} />

            <div className="" id="upload-desc">
              <h3 className="ui header">
                Upload the specific document as per description given below
              </h3>
              <ul>
                <li>
                  Institutional data in the prescribed format(data template)
                </li>

                <li>
                  At least 4 filled-in feedback form from different stake
                  holders like Students, Teachers, Employers, Alumni, etc.
                </li>

                <li>
                  Feedback analysis report submitted to appropriate bodies
                </li>

                <li>Action taken report on the feedback analysis</li>

                <li>
                  Link of institution's website where comprehensive feedback,
                  its analytics and action taken report are hosted.
                </li>
              </ul>
              <div class="ui message" id="apart-msg">
                <div class="header">Apart from the above</div>
                <p>
                  Provide links for any other relevant document to support the
                  claim (if any)
                </p>
              </div>
            </div>

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

            <div class="ui warning message" id="note-msg">
    
              <div class="header">
                Note
              </div>
              The institution is expected to take feedback from at least two stake holders
            </div>
            <button className="ui positive button">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default QnM141;
