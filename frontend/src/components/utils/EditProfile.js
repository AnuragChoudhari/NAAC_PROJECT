import React, { useState } from 'react';
import "./EditProfile.css";
import Navbar from '../navbar/Navbar';
import OTPInput from '../material_ui_components/OTPInput';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

function EditProfile() {

  const successMsg = () => toast.success("OTP sent to your email!");
  const errorMsg = () => toast.error("Error sending OTP to your mail");

  const emailVerificationSuccess = () => toast.success("Email verification successfull!");
  const emailVerificationFailed = () => toast.error("Wrong otp! Email verification failed!");

  const fdata = localStorage.getItem("fid");
  const dataObj = JSON.parse(fdata);
  const faculty_name = dataObj.data[0].faculty_name;
  const faculty_email = dataObj.data[0].faculty_email;
  // State for form fields
  const [firstName, setFirstName] = useState(faculty_name);
  const [facultyEmail, setFacultyEmail] = useState(faculty_email);


  const [sendOtp, setSendOtp] = useState(false);
  const [otpVal, setOtpVal] = useState("");
  const [generatedOtp, setGenratedOtp] = useState("");

  // Email verification status

  const [emailVerified, setEmailVerified] = useState(false);

  // Handle input change for first name
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  // Handle input change for last name
  const handleFacultyEmailChange = (e) => {
    setFacultyEmail(e.target.value);
  };



//   Send otp handler
  const sendOtpHandler = async (e) =>{
      e.preventDefault();
     

      setSendOtp(true);
      const generated_otp = Math.floor(Math.random()*90000) + 10000;
      setGenratedOtp(generated_otp);
      successMsg();
      const data = {
        service_id: 'service_9uy246q',
        template_id: 'template_o8eilkm',
        user_id: 'pSYNJmSqqfZCr7oBT',
        template_params: {
            'user_name': faculty_name,
            'verification_otp': generated_otp,
            'send_email': facultyEmail,
            'reply_to': facultyEmail,
            'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
        }
      }
      console.log(generated_otp);
      const result = await axios.post("https://api.emailjs.com/api/v1.0/email/send",data);
      console.log(result);
      
  }

  const verifyOtpHandler = (e) =>{
    e.preventDefault();
    if(generatedOtp == otpVal){
        emailVerificationSuccess();
        setEmailVerified(true);
    }else{
      emailVerificationFailed();
    }
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <>
    <Navbar></Navbar>
    <ToastContainer></ToastContainer>
      <div className='ui container'>
        <form className="ui form">
        <div className='ui dividing header'>
            Edit Your Profile
        </div>
          <div className="required field">
            <label>Full Name</label>
            <input
              type="text"
              name="faculty_name"
              placeholder="Full Name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="required field">
          
            <label>Email {emailVerified ? <i class="check circle icon"></i> : <></>} </label>
            <input
              type="email"
              name="faculty_email"
              placeholder="Email"
              value={facultyEmail}
              onChange={handleFacultyEmailChange}
            />
          </div>

          {/* Check if email is verified and if not display appropriate options of sending and verifying otp*/}
          {emailVerified ?<>
          
          </> : <>
          <div className='field'>
          {sendOtp ?  <div className='field' id='otp-input'>
          <label>Enter OTP sent to your email</label>
            <input
              type="number"
              name="verification_otp"
              placeholder="Enter otp"
              value={otpVal}
              onChange={(e)=>setOtpVal(e.target.value)}
            /> 
            <br></br><br></br><button className='ui green button' onClick={verifyOtpHandler}>Verify OTP</button>
          </div>
          : <div className='field'><button className='ui green button' onClick={sendOtpHandler}>Send OTP to verify</button></div>}
          </div>
          </>}
         
      
          <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default EditProfile;
