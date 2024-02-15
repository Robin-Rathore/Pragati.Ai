import "regenerator-runtime";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Home/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Components/login/Login";
import Register from "./Components/register/Register";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
// import state from "./state/state";

function App() {
  const [count, setCount] = useState(0);
  const isUserAuthenticated = Boolean(useSelector((state) => state.auth.user));
  useEffect(() => {
    // const isUserAuthenticated = Boolean(useSelector((state) => state.auth.user));
    if (!isUserAuthenticated) {
      toast.error("User Is Already Exist's. Please Login");
    }
  }, [isUserAuthenticated]);
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            isUserAuthenticated ? 
            <>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="video"
                src="./Image/space.mp4"
              ></video>
              <Home />
            </>
            :
            <Navigate to={"/"} />
          }
        />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
