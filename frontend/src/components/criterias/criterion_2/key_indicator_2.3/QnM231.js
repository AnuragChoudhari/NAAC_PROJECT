import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import "./QnM2.3.css";
import 'react-quill/dist/quill.snow.css';
import Dashboard from '../../../dashboard/Dashboard';
import Navbar from '../../../navbar/Navbar';

function QnM231() {
    const [value, setValue] = useState('');
  useEffect(()=>{
    console.log(value);
  },[value]);
  return (
    <>
      <Navbar></Navbar>
       <div className='' id='dashboard-container'>

       <Dashboard></Dashboard>
      <div className='ui container' id='qnm-2-3-1'>
        <div className='ui large header' id='key-indicator-header'>Key Indicator - 2.3 Teaching-Learning Process (40)</div>
        <div className='ui header' id=''>
          2.3.1 QnM - Student centric methods, such as experiential learning, participative learning and problem solving methodologies
          are used for enhancing learning experiences and teachers use ICT - enabled tools including online resources for effective teaching 
          and learning process.
            <div className="sub header" id="sub-header">Write description in a maximum of 500 words.</div>
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

export default QnM231