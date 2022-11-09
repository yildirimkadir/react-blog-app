import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
    const [currentBlogs, setCurrentBlogs] = useState();

    return (
        <BlogContext.Provider value={{ currentBlogs }}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContextProvider;
