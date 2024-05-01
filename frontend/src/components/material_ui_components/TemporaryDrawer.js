import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import EditNoteIcon from '@mui/icons-material/EditNote';

const links = [
  { text: 'Home', link: '/home' },
  { text: 'Dashboard', link: '/dashboard' },
  { text: 'Admin Panel', link: '/admin-dashboard' },
  {text: 'Criteria Data Filling', link: '/criterias'},
  { text: 'Reports', link: '/api/reports' },
  { text: 'College Details', link: '/api/college-details' },
];

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const renderIconBasedOnText = (text) => {
    // Check text and return corresponding icon
    if (text === "Home") {
      return <HomeIcon />;
    } else if (text === "Dashboard") {
      return <DashboardIcon />;
    } else if (text === "Reports") {
      return <AssessmentIcon />;
    }
    else if (text === "Admin Panel") {
      return <AdminPanelSettingsIcon></AdminPanelSettingsIcon>;
    }else if (text == "Criteria Data Filling"){
      return <EditNoteIcon></EditNoteIcon>
    }
    // Add more conditions as needed
    else {
      return <HomeIcon/>;
    }
  };
  

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {links.map(({ text, link }, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component="a" href={link}>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                {renderIconBasedOnText(text)}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button variant="contained" onClick={toggleDrawer(true)}><MenuIcon></MenuIcon></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
