import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContextProvider';


const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
 const { currentUser } = useContext(AuthContext);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog-App
          </Typography>
            <div>
            
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {currentUser ? (
                    <>
                <Link  style={{
            textDecoration: "none",
            color: 'black',
                }} to="/profile"><MenuItem onClick={handleClose}
                >Profile</MenuItem>
                </Link>
                <Link  style={{
            textDecoration: "none",
            color: 'black',
                }} to="/new"><MenuItem onClick={handleClose}
                >New</MenuItem>
                </Link>
                <Link  style={{
            textDecoration: "none",
            color: 'black',
                }} to="/"><MenuItem onClick={handleClose}
                >Logout</MenuItem></Link> 
        </> ) : (
             <>
                <Link  style={{
            textDecoration: "none",
            color: 'black',
                }} to="/login"><MenuItem onClick={handleClose}
                >Login</MenuItem></Link> 
            <Link  style={{
            textDecoration: "none",
            color: 'black',
                }} to="/register"><MenuItem onClick={handleClose}
                >Register</MenuItem></Link> 
        </> )}

              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar