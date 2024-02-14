import "regenerator-runtime";
import { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Home/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/login/Login";
import Register from "./Components/register/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
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
          }
        />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
