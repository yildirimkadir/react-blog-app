import React, { useContext } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { BlogContext } from '../context/BlogContext';
import loadingGif from "../assets/loading.gif";
import { Grid } from "@mui/material";
import BlogCard from '../components/BlogCard'

const Home = () => {
  const { currentBlogs } = useContext(BlogContext);



  return (
    <div>
         <CssBaseline />
        <Grid
          container
          spacing={5}
          justifyContent="center"
          sx={{ mt: 0.5 }}
        >
          {currentBlogs === undefined ? (
            <img src={loadingGif} alt="loading" />
          ) : currentBlogs ? (
            currentBlogs?.map((item, id) => (
              <Grid key={id} item>
                <BlogCard post={item} />
              </Grid>
            ))
          ) : (
            <h3>No data available.</h3>
          )}
        </Grid>
    </div>
  )
}

export default Home