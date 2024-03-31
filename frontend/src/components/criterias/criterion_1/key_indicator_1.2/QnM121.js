import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./QnM1.2.css";
import Dashboard from '../../../dashboard/Dashboard';
import Navbar from '../../../navbar/Navbar';

function QnM121() {
  const [value, setValue] = useState('');
  useEffect(()=>{
    console.log(value);
  },[value]);
  return (
<>
<Navbar></Navbar>
<div className='' id='dashboard-container'>
<Dashboard></Dashboard>
      <div className='ui container' id='qnm-1-2-1'>
        <div className='ui large header' id='key-indicator-header'>Key Indicator - 1.2 Academic Flexibility</div>
        <div className='ui header'>
          1.2.1 QnM - Number of Certificates/Value added courses offered and online courses of MOOCs, SWAYAM, NPTEL
          etc. where the students of the institution have enrolled and successfully completed during the last five years.
            <div className="sub header" id="sub-header">1.2.1.1:Number of Certificates/Value added courses offered and online courses of MOOCs, SWAYAM, NPTEL
          etc. where the students of the institution have enrolled and successfully completed during the last five years.
            </div>
        </div>
        <form>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
        <input type='file' id='upload-btn'></input>
          <div className='ui small header'>
            File Description

              <div className='ui sub header'>
                <ul>
                  <li>Upload Additional information</li>
                  <li>Provide Link for Additional information</li>
                </ul>
              </div>
      
          </div>
          <button className='ui positive button'>Submit</button>
        </form>
      </div>
    </div>

</>
  )
}

export default QnM121