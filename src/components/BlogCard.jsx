import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import placeholder from "../assets/placeholder.png";
import { AuthContext } from '../context/AuthContextProvider';
// import { toastErrorNotify } from "../helpers/ToastNotify";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  CssBaseline,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import moment from "moment";

const BlogCard = ({post}) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const {
    id,
    author,
    content,
    get_comment_count,
    get_like_count,
    image,
    published_date,
    title,
  } = post;

  const openDetails = () => {
    if (!currentUser) {
      alert("Login for detials of blog!");
    }
    navigate(`/detail/${id}`);
  };


  return (
    <div>
      <CssBaseline />
      <Card sx={{ minWidth: 345,
    maxWidth: 345}}>
      <CardActionArea onClick={openDetails}>
        <CardMedia
          sx={{  height: 140}}
          image={image || placeholder}
          title={title}
        />
        <CardContent sx={{ backgroundColor: "#efeefe",
    height: "125px"}}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            sx={{ fontFamily: "Girassol",
    color: "#046582"}}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {moment(published_date).format("MMM DD, YYYY")}
          </Typography>
          <p sx={{  display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    "text-overflow": "ellipsis",
    overflow: "hidden",}}>{content}</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <AccountCircle sx={{ marginBottom: "0.35em"}} />
        <Typography gutterBottom variant="h6" component="h2">
          {author}
        </Typography>
      </CardActions>
      <CardActions>
        <IconButton aria-label="add to favorites" sx={{padding: 3}}>
          <FavoriteIcon color={get_like_count > 0 ? "error" : "disabled"} />
        </IconButton>
        <Typography variant="body2" color="textSecondary">
          {get_like_count}
        </Typography>
        <IconButton aria-label="comment count"sx={{padding: 3}}>
          <ChatBubbleOutlineIcon />
        </IconButton>
        <Typography variant="body2" color="textSecondary">
          {get_comment_count}
        </Typography>
      </CardActions>
    </Card>
    </div>
  )
}

export default BlogCard