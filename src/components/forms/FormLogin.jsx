import React, { useState } from "react";
import "./forms.css";
import {
  FaTimesCircle,
  FaCheckCircle,
  FaExclamationTriangle,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa";
import { Input, Label } from "../customInput/Input";
import Boton from "../customButtons/Boton";
import { login } from "../../fetching/auth.fetching";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!!!email || !!!password || !!!username) {
      setErrorMessage("Todos los campos son obligatorios");
      setEmail("");
      setPassword("");
      setUsername("");
      return;
    }

    try {
      const user = { username, email, password };
      await login(user);

      setUsername("");
      setEmail("");
      setPassword("");
      setErrorMessage("");
    } catch (error) {
      console.log("Error del catch:", error);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    const inputPassword = document.getElementById("password");
    const visible = document.getElementById("ver");
    const oculto = document.getElementById("ocultar");
    if (visible.classList.contains("oculto")) {
      visible.classList.remove("oculto");
      oculto.classList.add("oculto");
      inputPassword.type = "password";
    } else {
      visible.classList.add("oculto");
      oculto.classList.remove("oculto");
      inputPassword.type = "text";
    }
  };

  return (
    <div className="formulario--contenedor">
      <h2>Iniciar Sesión</h2>
      <form
        id="formulario"
        className="formulario  formulario-login"
        onSubmit={handleSubmit}
      >
        <div className="formulario--grupo" id="grupo--usuario">
          <Label
            htmlFor="usuario"
            className="formulario--label"
            text="Nombre de Usuario"
          ></Label>
          <div className="formulario--grupo-input">
            <Input
              type="text"
              name="username"
              id="username"
              className="formulario--input"
              placeholder="User123"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className="formulario--grupo" id="grupo--correo">
          <Label
            htmlFor="email"
            className="formulario--label"
            text="Correo Electrónico"
          ></Label>
          <div className="formulario--grupo-input">
            <Input
              type="email"
              name="email"
              id="email"
              className="formulario--input"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="formulario--grupo password" id="grupo--password">
          <Label
            htmlFor="password"
            className="formulario--label"
            text="Contraseña"
          ></Label>
          <div className="formulario--grupo-input">
            <Input
              type="password"
              name="password"
              id="password"
              className="formulario--input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaRegEye
              type="text"
              className="formulario--password-ver"
              id="ver"
              onClick={handleClick}
            />
            <FaRegEyeSlash
              type="text"
              className="formulario--password-ver oculto"
              id="ocultar"
              onClick={handleClick}
            />
          </div>
        </div>

        <div className="formulario--grupo formulario--grupo-btn-enviar">
          <Boton
            type="submit"
            className="formulario--btn"
            text="Iniciar Sesión"
          />

          <p>
            ¿No tienes una cuenta? <Link to="/register">Registrate</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
