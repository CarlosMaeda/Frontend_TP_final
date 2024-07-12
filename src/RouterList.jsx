import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./screens/home/Home";
import Register from "./screens/public/register/Register";
import Login from "./screens/public/login/Login";

const RouterList = () => {
  const navigate = useNavigate();

  /*   useEffect(() => {
    verificarToken().then((resultado) => {
      console.log("verificar token", resultado.status);
      console.log("verificar token", resultado);
      if (resultado.status === 200) {
        navigate("/home");
      } else {
        navigate("/login");
      }
    });
  }, []); */

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default RouterList;
