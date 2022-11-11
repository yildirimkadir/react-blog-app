import React, { useState } from "react";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContextProvider';
import BlogForm from "../components/BlogForm";
import { useNavigate } from "react-router-dom";
// import { toastSuccessNotify } from "../helpers/ToastNotify";
import { addBlog } from "../authent/firebase";

const NewBlog = () => {
  const { currentUser } = useContext(AuthContext);
  const [newBlog, setNewBlog] = useState({
    author: currentUser.displayName,
    title: "",
    content: "",
    get_comment_count: 0,
    get_like_count: 0,
    image: "",
    published_date: Date.now(),
  });
  const navigate = useNavigate();

  const newBlogHandler = (e) => {
    e.preventDefault();
    try {
      addBlog(newBlog);
      // console.log(newBlog);
      navigate("/");
    } catch (error) {
      console.log("Error", error);
    }
  };

  // console.log("currentBlogs", currentBlogs);

  return (
    <div style={{ marginTop: 90 }}>
      <BlogForm
        newBlog={newBlog}
        setNewBlog={setNewBlog}
        newBlogHandler={newBlogHandler}
      />
    </div>
  );
};

export default NewBlog;
