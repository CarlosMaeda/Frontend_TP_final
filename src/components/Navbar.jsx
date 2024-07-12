import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="link">
        Inicio
      </Link>
      <Link to="/register" className="link">
        Registro
      </Link>
      <Link to="/login" className="link">
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
