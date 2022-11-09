import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
    const [currentBlogs, setCurrentBlogs] = useState();

    useEffect(() => {
        const db = getDatabase(app);
        const userRef = ref(db, "blogs/")
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
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
