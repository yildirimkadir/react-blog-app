import { Paper } from "@mui/material";
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import blogPng from "../assets/blok.png";
import {updateBlog} from "../authent/firebase";
import { BlogContext } from "../context/BlogContext";
import { AuthContext } from "../context/AuthContextProvider";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBlog = () => {
  const { getOneBlog } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const result = getOneBlog(id);
  const [data, setData] = useState({
    author: currentUser.displayName,
    title: result[0].title,
    content: result[0].content,
    get_comment_count: 0,
    get_like_count: 0,
    image: result[0].image,
    published_date: Date.now(),
  })

  const handleSubmit = () => {
    updateBlog(id, data);
    navigate("/");
  }
  useEffect(() => {
    setData(result[0])
  }, [])
  




  return (
    <div>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
       <Paper sx={{ marginTop: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",}}>
        <Avatar sx={{  padding: 13,
                       height: 200,
                       width: 200,
                       backgroundColor: "#046582"}}>
          <img src={data.image} alt="blog" sx={{width: 200}} />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{fontSize: 35,
            fontFamily: "Girassol",
            color: "#046582"}}>
          ── Update Blog ──
        </Typography>
        <form sx={{ width: "100%",
                    marginTop: 3,}} Validate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                value={data.title}
                autoFocus
                onChange={(e) =>
                  setData({ ...data, title: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="image"
                label="Image URL"
                type="text"
                id="image"
                value={data.image}
                onChange={(e) =>
                  setData({ ...data, image: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                required
                label="Content"
                multiline
                value={data.content}
                fullWidth
                rows={15}
                onChange={(e) =>
                  setData({ ...data, content: e.target.value })
                }
                // defaultValue="Default Value"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{marginTop: 5,
                marginBottom: 5,
                backgroundColor: "#046582",
                color: "white",
                fontWeight: "bold"}}
          >
            Update
          </Button>
        </form>
      </Paper>
    </Container>
    </div>
  )
}

export default UpdateBlog
