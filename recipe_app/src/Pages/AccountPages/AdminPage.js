import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { getProfileImage } from "../customHooks/GetImage"

export default function UserProfile() {
  const [open, setOpen] = React.useState(null);
  const isOpen = Boolean(open);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };


  const navigateToMyAccount=()=>{
    window.location.href="/recipe/myaccount";
  }

  const logoutHandler=()=>{

  }

  return (
    <>
    <Avatar aria-controls={isOpen ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : undefined}
        onClick={handleClick}
        className='profileDropdown'></Avatar>
      {/* <img src={getProfileImage("userName")}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='profileDropdown'
      /> */}
      <Menu
        id="basic-menu"
       open={open}
       isOpen={isOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={navigateToMyAccount}>My account</MenuItem>
        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
      </Menu>
    </>
  );
}