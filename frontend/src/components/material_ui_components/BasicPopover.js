import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Badge, Grid, List, ListItem } from '@mui/material';
import { ArrowRight, Mail } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import axios from 'axios';

export default function BasicPopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const fdata = localStorage.getItem("fid");
  const dataObj = JSON.parse(fdata);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const [notifications, setNotifications] = useState([]);
  const getNotifications = async ()=>{
    const faculty_data = {
      faculty_id: dataObj.data[0].faculty_id
    }
    const notifications = await axios.post("http://localhost:8000/api/get-notification-msgs",faculty_data);


    setNotifications(notifications.data);
  }

  const updateNotifications = async ()=>{
    const faculty_data = {
      faculty_id: dataObj.data[0].faculty_id
    }
    const update_status = await axios.post("http://localhost:8000/api/update-notification-status",faculty_data);
    setNotifications([]);
  
    console.log(update_status);
  
  }
  
  const handleClose = () => {
    setAnchorEl(null);
    updateNotifications();
  };
    
  useEffect(()=>{


        getNotifications();


  },[])

 
  






  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  

  return (
    <div>
      <Button aria-describedby={id} onClick={handleClick}>
      <Badge badgeContent={props.notificationCount} color="primary">
             
             <Mail style={{color: 'white'}} id="mail-icon"></Mail>
        </Badge>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Grid sx={{ p: 1 }} columns={2} >
          <Grid>
          {notifications.map((msg, i) => {
            return(
              <>
           
                
                <ListItem disablePadding={false} divider={true} alignItems='flex-start'><ArrowRight fontSize='small'></ArrowRight> &nbsp; {msg.notification_msg} &nbsp; {msg.notification_time}</ListItem>
       
              </>
            )
          })}
          </Grid>
    
        </Grid>
      </Popover>
    </div>
  );
}