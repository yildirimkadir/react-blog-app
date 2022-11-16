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
import React from "react";
import blogPng from "../assets/blok.png";


export default function BlogForm({ newBlog, setNewBlog, newBlogHandler }) {

  return (
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
          <img src={blogPng} alt="blog" sx={{width: 200}} />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{fontSize: 35,
            fontFamily: "Girassol",
            color: "#046582"}}>
          ── New Blog ──
        </Typography>
        <form sx={{ width: "100%",
                    marginTop: 3,}} Validate onSubmit={newBlogHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                value={newBlog.title}
                autoFocus
                onChange={(e) =>
                  setNewBlog({ ...newBlog, title: e.target.value })
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
                value={newBlog.image}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, image: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                required
                label="Content"
                multiline
                value={newBlog.content}
                fullWidth
                rows={15}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, content: e.target.value })
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
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
