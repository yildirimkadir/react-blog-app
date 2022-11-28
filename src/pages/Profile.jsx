import React, { useContext } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { Card, CardContent, Typography,Avatar,CardMedia } from "@mui/material";
import { AuthContext } from '../context/AuthContextProvider';
import photoURL from "../assets/avatar.png"


const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div style={{
                    width: "fit-content",
                    marginLeft: 3,
                    marginTop: 4,
                    border:"3px solid black",
                }}>
      <CssBaseline />
      <Avatar sx={{ marginTop: 4,
                    marginLeft: 3,
                    height: 400,
                    width: 400}}>
        <img
          src={photoURL}
          alt="profile"
        /></Avatar>
        <CardContent sx={{ marginTop: 1,
                    marginLeft:15}}>
          <Typography
           sx={{fontSize: 14}}
            color="textSecondary"
            gutterBottom
          >
            Display Name
          </Typography>
          <Typography variant="h6" component="h2">
            {currentUser?.displayName || "Not Found!"}
          </Typography>
          <Typography sx={{marginBottom:1, marginTop: 3, fontSize: 14}} color="textSecondary">
            Email
          </Typography>
          <Typography variant="h6" component="h2">
            {currentUser?.email || "Not Found!"}
          </Typography>
        </CardContent>
    </div>
  );
}


export default Profile



