import React, { useContext } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { Card, CardContent, Typography } from "@mui/material";
import { AuthContext } from '../context/AuthContextProvider';


const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div sx={{ display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               alignItems: "center",
               height: 500,
               marginTop: 100}}>
      <CssBaseline />
      <Card sx={{minWidth: 275,
                 maxWidth: 500,
                 width: "50%",
                 display: "flex",
                 flexDirection: "column",
                 alignItems: "center",
                 padding: 25}}>
        <img
          src={currentUser?.photoURL}
          sx={{borderRadius: "50%",
               width: "100px"}}
          alt="profile"
        />
        <CardContent>
          <Typography
           sx={{fontSize: 14}}
            color="textSecondary"
            gutterBottom
          >
            Display Name
          </Typography>
          <Typography variant="h5" component="h2">
            {currentUser?.displayName || "Not Found!"}
          </Typography>
          <Typography sx={{marginBottom:3}} color="textSecondary">
            Email
          </Typography>
          <Typography variant="body2" component="p">
            {currentUser?.email || "Not Found!"}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}


export default Profile



