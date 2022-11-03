import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Navbar from "../components/Navbar";
// import { PrivateRouter } from "../pages/PrivateRouter";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
            {/* <Route path="/newblog/:id" element={<PrivateRouter />}>
            <Route path="" element={<NewBlog />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
