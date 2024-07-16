import React from "react";
import Boton from "../customButtons/Boton";
import Login from "../../screens/public/login/Login";
import { Link, Navigate } from "react-router-dom";

const handleClick = () => {
  Navigate("/login");
};

const Banner = () => {
  return (
    <div className="banner--container">
      <div className="banner--content">
        <div className="banner--title">
          <h1>Te damos la bienvenida a nuestra tienda</h1>
        </div>

        <div className="banner--subtitle">
          <p>ESTA SEMANA</p>
          <p className="discount">20% OFF</p>
        </div>

        <div className="banner--button">
          <Boton text="Ir a la tienda" onClick={handleClick()} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
