import React, { useContext } from "react";
import placeholder from "../assets/placeholder.png";
import moment from "moment";
import loadingGif from "../assets/loading.gif";
import { useNavigate, useParams } from "react-router-dom";
// import { toastSuccessNotify } from "../helpers/ToastNotify";
import noData from "../assets/no-data.png";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  CssBaseline,
  Typography,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { BlogContext } from "../context/BlogContext";
import { AuthContext } from "../context/AuthContextProvider";
import { deleteBlog } from "../authent/firebase";


export default function Details() {
  const { getOneBlog } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const result = getOneBlog(id);

  const deleteHandler = (id) => {
    console.log("DeleteHandler", id);
    deleteBlog(id);
    navigate("/");
  };

  const updateHandler = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div style={{ display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 70,
                  marginBottom: 20,}}>
      <CssBaseline />
      <Typography sx={{fontFamily: "Girassol",
                       textAlign: "center",
                       margin: 20,
                       color: "#046582",}} variant="h3" noWrap>
        ──── Details ────
      </Typography>
      {result?.length > 0 ? (
        result?.map((item, index) => (
          <div key={index}>
            <Card sx={{ minWidth: 250,
                        width: "75vw"}} key={index}>
              <div>
                <CardMedia
                  sx={{  height: "0",
                         paddingTop: "56.25%"}}
                  image={item.image || placeholder}
                  title={item.title}
                />
                <CardContent sx={{ backgroundColor: "#efeefe",
                                   minHeight: "100px",
                                   border: "2px solid red"}}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                     sx={{fontFamily: "Girassol",
                       textAlign: "center",
                       margin: 5,
                       color: "#046582",}}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                     sx={{ textAlign: "center"}}
                  >
                    {moment(item.published_date).format("MMM DD, YYYY")}
                  </Typography>
                  <p>{item.content}</p>
                </CardContent>
              </div>
              <CardActions>
                <AccountCircle sx={{ marginBottom: "0.35em"}} />
                <Typography gutterBottom variant="h6" component="h2">
                  {item.author}
                </Typography>
              </CardActions>
              <CardActions>
                <IconButton
                  aria-label="add to favorites"
                 sx={{ padding: 3,}}
                >
                  <FavoriteIcon
                    color={item.get_like_count > 0 ? "error" : "disabled"}
                  />
                </IconButton>
                <Typography variant="body2" color="textSecondary">
                  {item.get_like_count}
                </Typography>
                <IconButton
                  aria-label="comment count"
                  sx={{ padding: 3,}}
                >
                  <ChatBubbleOutlineIcon />
                </IconButton>
                <Typography variant="body2" color="textSecondary">
                  {item.get_comment_count}
                </Typography>
              </CardActions>
            </Card>
            {item.author === currentUser?.displayName ? (
              <div style={{display: "flex",
                           flexDirection: "row",
                           justifyContent: "space-evenly",
                           margin: 20}}>
                <Button
                  variant="contained"
                  onClick={() => updateHandler(item.id)}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => deleteHandler(item.id)}
                >
                  Delete
                </Button>
              </div>
            ) : null}
          </div>
        ))
      ) : result === undefined ? (
        <img src={loadingGif} alt="loading" />
      ) : (
        <>
          <img src={noData} alt="no data" />
        </>
      )}
    </div>
  );
}
