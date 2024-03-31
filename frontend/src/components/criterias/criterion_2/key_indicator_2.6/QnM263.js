import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./QnM2.6.css";
import Dashboard from "../../../dashboard/Dashboard";
import Navbar from "../../../navbar/Navbar";

function QnM263() {
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log(value);
  }, [value]);


  
  return (
    <>
      <Navbar></Navbar>
      <div className="" id="dashboard-container">
        <Dashboard></Dashboard>
        <div className="ui container" id="qnm-2-6-3">
          <div className="ui large header" id="key-indicator-header">
            Key Indicator - 2.6 Student Performance and Learning Outcome (90)
          </div>
          <div className="ui header">
            2.6.3 QnM - Pass percentage of students during last five years (excluding backlog students).
            
          </div>
          <div className="sub header" id="sub-header-1">
              2.6.3.1: Number of final year students who passed the university examination year wise during the
              last five years
            </div>
          <form>
            <table class="ui celled table">
              <thead>
                <tr>
                    <th>Id</th>
                  <th>Year</th>
                  <th>Number</th>
             
                </tr>
              </thead>
              <tbody>
                
                <tr>
                  <td>1</td>
                  <td data-label="Year"><input type="number" max={5} min={0}></input></td>
                  <td data-label="Number"><input type="number"  min={0}></input></td>
        
                </tr>

                <tr>
                <td>2</td>
                <td data-label="Year"><input type="number" max={5} min={0}></input></td>
                  <td data-label="Number"><input type="number"  min={0}></input></td>
          
                </tr>
                
                <tr>
                <td>3</td>
                <td data-label="Year"><input type="number" max={5} min={0}></input></td>
                  <td data-label="Number"><input type="number"  min={0}></input></td>

                </tr>

                <tr>
                <td>4</td>
                <td data-label="Year"><input type="number" max={5} min={0}></input></td>
                  <td data-label="Number"><input type="number"  min={0}></input></td>

                </tr>
                <tr>
                <td>5</td>
                <td data-label="Year"><input type="number" max={5} min={0}></input></td>
                  <td data-label="Number"><input type="number"  min={0}></input></td>

                </tr>

              </tbody>
            </table>


{/* Table 2 ------------------------------------------------ */}
            <div className="sub header" id="sub-header-2">
              2.6.3.2: Number of final year students who appeared the university examination year wise during the
              last five years
            </div>
 
            <table class="ui celled table">
              <thead>
                <tr>
                    <th>Id</th>
                  <th>Year</th>
                  <th>Number</th>
             
                </tr>
              </thead>
              <tbody>
                
                <tr>
                  <td>1</td>
                  <td data-label="Year"><input type="number" max={5} min={0}></input></td>
                  <td data-label="Number"><input type="number"  min={0}></input></td>
        
                </tr>

                <tr>
                <td>2</td>
                <td data-label="Year"><input type="number" max={5} min={0}></input></td>
                  <td data-label="Number"><input type="number"  min={0}></input></td>
          
                </tr>
                
                <tr>
                <td>3</td>
                <td data-label="Year"><input type="number" max={5} min={0}></input></td>
                  <td data-label="Number"><input type="number"  min={0}></input></td>

                </tr>

                <tr>
                <td>4</td>
                <td data-label="Year"><input type="number" max={5} min={0}></input></td>
                  <td data-label="Number"><input type="number"  min={0}></input></td>

                </tr>
                <tr>
                <td>5</td>
                <td data-label="Year"><input type="number" max={5} min={0}></input></td>
                  <td data-label="Number"><input type="number"  min={0}></input></td>

                </tr>

              </tbody>
            </table>
            

            <div className="ui tiny header" id="formula">
                <div className="" id="left-side">
                    Pass Percentage &nbsp; =   
                </div>
                <div className="" id="formula-left">
                Percentage = Total number of final year students who passed the university examination
                <hr></hr>
                Total number of final year students who appeared the university examination
                </div>
                <div id="formula-right"> x 100</div>
            </div>  <br></br>

            <div className="" id="upload-desc">
              <h3 className="ui header">
                Upload the specific document as per description given below
              </h3>
              <ul>
                <li>
                  Institutional data in the prescribed format(data template)
                </li>

                <li>
                  Annual report of Controller of Examinations (COE) highlighting the pass percentage
                  of final year students
                </li>

                <li>
                  Certified report from the COE indicating the pass percentage of students of the final year
                  (final semester) eligible for the degree program-wise / year wise
                </li>

          
              </ul>
              </div>
              <div class="ui message" id="apart-msg">
                <div class="header">Apart from the above</div>
                <p>
                  Provide links for any other relevant document to support the
                  claim (if any)
                </p>
              </div>
            <input type='file' id='upload-btn' multiple></input>
            <div id="file-list"></div>
          <div className='ui small header'>
            File Description

              <div className='ui sub header'>
                <ul>
                  <li>Institutional data in the prescribed format (template merged with 1.2.1)</li>
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

export default QnM263;
