import React, {useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { getProfileImage } from "../customHooks/GetImage"
import { useSelector } from 'react-redux';

export default function UserProfile() {
    const [open, setOpen] = React.useState(null);
    const isOpen = Boolean(open);
    // const [userName,setUserName]=useState('')

    const userName=useSelector(state => state.session.userName)
    

    useEffect(
        ()=>{
    },[userName]
    )

    console.log("userName",userName)
    

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };
    const handleClose = () => {
        setOpen(null);
    };

    const navigateToMyAccount = () => {
        window.location.href = "/recipe/myaccount";
    }

    const logoutHandler = () => {
        // setUserName('');
        window.location.href = "/recipe/";
    }

    return (
         
        <>
        
            <Avatar aria-controls={isOpen ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isOpen ? 'true' : undefined}
                onClick={handleClick}
                className={ userName? 'profileDropdown' : "hideProfile"}>{userName.slice(0,1).toUpperCase()}</Avatar>
            <Menu
                id="basic-menu"
                anchorEl={open}
                open={isOpen}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem>{userName}</MenuItem>
                <MenuItem onClick={navigateToMyAccount}>My account</MenuItem>
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </Menu>


        </>
        
    );
}