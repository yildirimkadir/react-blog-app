import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from '@mui/material/';
import { useState } from 'react';
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [show, setShow] = useState(true)

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
                {!show ? (
                    <>
                <MenuItem onClick={handleClose}
                ><Link  sx={{
            textDecoration: "none",
          }}
          href="#">Login
        </Link></MenuItem>
            <MenuItem onClick={handleClose}><Link  sx={{
            textDecoration: "none",
          }}
          href="#"
        >Register</Link></MenuItem> 
        </> ) : (
             <>
                <MenuItem onClick={handleClose}
                ><Link  sx={{
            textDecoration: "none",
          }}
          href="#">New Blog
        </Link></MenuItem>
            <MenuItem onClick={handleClose}><Link  sx={{
            textDecoration: "none",
          }}
          href="#"
        >Logout</Link></MenuItem> 
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