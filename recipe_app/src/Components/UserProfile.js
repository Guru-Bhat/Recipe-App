import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { getProfileImage } from "../customHooks/GetImage"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import routes from '../Routes/RoutesList'

export default function UserProfile() {
    const navigate = useNavigate()

    const [open, setOpen] = React.useState(null);
    const isOpen = Boolean(open);

    const userName = useSelector(state => state.session.userName) || JSON.parse(sessionStorage.getItem("userData"))?.userName || ''


    useEffect(
        () => {
        }, [userName]
    )

    console.log("userName", userName)

    const toggle = (event) => {
        open ? setOpen(null) : setOpen(event.currentTarget);
    }


    const navigateToMyAccount = () => {
        // window.location.href = "/recipe/myaccount";
        setOpen(null);
        navigate(routes.user_account_page)
    }

    const logoutHandler = () => {
        setOpen(null);
        sessionStorage.clear("userData")
        window.location.href = "/recipe/";
    }

    return (

        <>
            <Avatar aria-controls={isOpen ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isOpen ? 'true' : undefined}
                onClick={toggle}
                className={userName ? 'profileDropdown' : "hide"}>{userName.charAt(0).toUpperCase()}</Avatar>
            <Menu
                id="basic-menu"
                anchorEl={open}
                open={isOpen}
                onClose={toggle}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => { setOpen(null) }}>{userName}</MenuItem>
                <MenuItem onClick={navigateToMyAccount}>My account</MenuItem>
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </Menu>


        </>

    );
}