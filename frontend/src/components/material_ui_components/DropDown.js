import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { ArrowDropDown, Forward, PinDrop } from '@mui/icons-material';
import { useState } from 'react';

export default function DropDown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [optionsVal, setOptionsVal] = useState("Options");
  const [selectedOption,setSelectedOption] = useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    let option = e.target.getAttribute('aria-valuetext');
    if(option=="sendToAll"){
        setSelectedOption("Send to all faculty")
    }else{  
        setSelectedOption("Send to selected faculties");
    }
    

  };

  return (
    <div id='notification-send-container'>
      <Button
        id="fade-button"
        variant='contained'
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {optionsVal} <ArrowDropDown></ArrowDropDown>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose} aria-valuetext="sendToAll">Send to all</MenuItem>
        <MenuItem onClick={handleClose} aria-valuetext='sendToSelected'>Send to selected faculties</MenuItem>

      </Menu>
      <span id="selected-option">{selectedOption}</span>
    </div>
  );
}