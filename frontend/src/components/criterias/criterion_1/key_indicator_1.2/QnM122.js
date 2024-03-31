import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./QnM1.2.css";
import Dashboard from "../../../dashboard/Dashboard";
import Navbar from "../../../navbar/Navbar";

function QnM122() {
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log(value);
  }, [value]);


  
  return (
    <>
      <Navbar></Navbar>
      <div className="" id="dashboard-container">
        <Dashboard></Dashboard>
        <div className="ui container" id="qnm-1-2-2">
          <div className="ui large header" id="key-indicator-header">
            Key Indicator - 1.2 Academic Flexibility
          </div>
          <div className="ui header">
            1.2.2 QnM - Percentage of students enrolled in Certificate/Value
            added courses and also completed online courses of MOOCs, SWAYAM,
            NPTEL, etc. as against the total number of students during the last
            five years.
            <div className="sub header" id="sub-header">
              1.2.2.1:Number of students enrolled in Certificates/Value added
              courses offered and online courses of MOOCs, SWAYAM, NPTEL etc.
              where the students of the institution have enrolled and
              successfully completed during the last five years.
            </div>
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

            <div className="ui tiny header" id="formula">
                <div className="" id="formula-left">
                Percentage = Total number of students enrolled in such programs / during the last five years
                <hr></hr>
                Total number of students during the last five years
                </div>
                <div id="formula-right"> x 100</div>
            </div>  <br></br>
 
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

export default QnM122;
