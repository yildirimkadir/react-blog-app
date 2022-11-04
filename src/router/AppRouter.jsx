import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Profile from "../pages/Profile";
import NewBLog from "../pages/NewBlog";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

const AppRouter = () => {
  const { currentUser } = useContext(AuthContext);
  function PrivateRouter() {
    return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
