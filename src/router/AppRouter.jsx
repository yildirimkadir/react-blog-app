import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
// import { PrivateRouter } from "../pages/PrivateRouter";
const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
            {/* <Route path="/newblog/:id" element={<PrivateRouter />}>
            <Route path="" element={<NewBlog />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
