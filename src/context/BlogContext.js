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




    return (
        <BlogContext.Provider value={{ currentBlogs }}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContextProvider;
