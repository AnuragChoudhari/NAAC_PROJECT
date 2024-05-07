import React, { useState, useEffect} from 'react';
import { Button, TextField, Grid } from '@mui/material';
import DropDown from './DropDown';
import axios from 'axios';

import { ToastContainer, toast } from "react-toastify";
import { param } from 'jquery';

const NotificationComponent = () => {
  const [notificationMessage, setNotificationMessage] = useState('');

  
  const successMsg = () => toast.success("Notification sent!");
  const errorMsg = () => toast.error("Error sending notification!");

  const handleNotificationChange = (event) => {
    setNotificationMessage(event.target.value);
  };

  const handleSendNotification = async () => {
      const params = {
        message: notificationMessage
      }

 
      const response = await axios.post(
        "http://localhost:8000/api/send-notifications",
        params
      );
      successMsg();
     
      setNotificationMessage("");
  };

  return (
    <>
    <div id='notification-component-container'>
    <ToastContainer></ToastContainer>
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={4}>
        <TextField
          label="Enter Notification Message"
          variant="outlined"
          fullWidth
          value={notificationMessage}
          onChange={handleNotificationChange}
        />
      </Grid>
      <Grid item xs={4}>
        <DropDown></DropDown>
      </Grid>
      
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendNotification}
        >
          Send Notification
        </Button>
      </Grid>
    </Grid>

    </div>
    </>
  );
};

export default NotificationComponent;
