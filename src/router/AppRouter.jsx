import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Profile from "../pages/Profile";
import NewBLog from "../pages/NewBlog";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import UpdateBlog from "../pages/UpdateBlog";
import Detail from "../pages/Detail";


const AppRouter = () => {
  const { currentUser } = useContext(AuthContext);
  function PrivateRouter() {
    return currentUser ? <Outlet /> : <Navigate to="/" replace />;
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new" element={<PrivateRouter />}>
            <Route path="" element={<NewBLog />} />
        </Route>
        <Route path="/profile" element={<PrivateRouter />}>
            <Route path="" element={<Profile />} />
        </Route>
        <Route path="/detail/:id" element={<PrivateRouter />}>
            <Route path="" element={<Detail />} />
        </Route>
        <Route path="/update/:id" element={<PrivateRouter />}>
            <Route path="" element={<UpdateBlog />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
