import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AdminPanel from '../utils/AdminPanel';
import ReportsAnalytics from './ReportsAnalytics';
import BasicGrid from './BasicGrid';
import { Button, Input, InputLabel, OutlinedInput } from '@mui/material';
import { Label } from '@mui/icons-material';
import NotificationComponent from './NotificationComponent';
import SideBar from '../semantic-ui-components/SideBar';
import "./BasicTabs.css";
import FacultyLogs from '../semantic-ui-components/FacultyLogs';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} >
      <Box  sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >

          <Tab label="Criteria Access Control" {...a11yProps(0)} />
          <Tab label="Faculty Activity Logs" {...a11yProps(1)} />
          <Tab label="Faculty Management" {...a11yProps(2)} />
          <Tab label="Send Notification" {...a11yProps(3)} />
        </Tabs>
      </Box>

      {/* Criteria Access Control */}
      <CustomTabPanel value={value} index={0}>
      <AdminPanel></AdminPanel>
      </CustomTabPanel>

      {/* Faculty Activity Logs */}
      <CustomTabPanel value={value} index={1}>
       <div className='ui container'>
       <FacultyLogs></FacultyLogs>
       </div>
      </CustomTabPanel>

      {/* Faculty Management */}
      <CustomTabPanel value={value} index={2}>
       <div className='' id="faculty-management-container">

          <div id="side-menu">
          <SideBar></SideBar>

          </div>

          <div id='side-menu-main-content'>
            <div className='ui container'></div>
          </div>
  
       </div>
      </CustomTabPanel>

      {/* Send Notifications */}
      <CustomTabPanel value={value} index={3}>
        
        <div className='notification-fill-container'>
           
            <NotificationComponent></NotificationComponent>
        </div>

      </CustomTabPanel>
    </Box>
  );
}