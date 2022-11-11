import React from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { app } from "../authent/firebase";

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
    const [currentBlogs, setCurrentBlogs] = useState();

    useEffect(() => {
        const db = getDatabase(app);
        const userRef = ref(db, "blogs/")
        onValue(userRef, (snapshot) => {
            const blogs = snapshot.val();
            const blogL = [];
            for (let id in blogs) {
                blogL.push({ id, ...blogs[id] });
            }
            //   console.log(blogL);
            setCurrentBlogs(blogL);
            // setIsLoading(false)
        })
    }, [])

    function getOneBlog(id) {
        const result = currentBlogs?.filter((item) => item.id === id);
        return result;
    }


    return (
        <BlogContext.Provider value={{ currentBlogs, getOneBlog }}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContextProvider;
