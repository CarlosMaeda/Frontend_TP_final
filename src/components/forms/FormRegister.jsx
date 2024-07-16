import React, { useState } from "react";
import "./forms.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Input, Label } from "../customInput/Input";
import Boton from "../customButtons/Boton";
import { register } from "../../fetching/auth.fetching";
import { Link } from "react-router-dom";

const FormRegister = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  /* Datos de DB
-User_id
-User
-Name
-Surname
-Email
-Password
*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!!!email || !!!password || !!!username || !!!name || !!!lastname) {
      setErrorMessage("Todos los campos son obligatorios");
      console.log(errorMessage);
      setEmail("");
      setPassword("");
      setPassword2("");
      setUsername("");
      setName("");
      setLastname("");
      return;
    }

    try {
      const user = { username, name, lastname, email, password };

      const response = await register(user);
      setUsername("");
      setName("");
      setLastname("");
      setEmail("");
      setPassword("");
      setPassword2("");
      setErrorMessage("");
    } catch (error) {
      console.log("Error del catch:", error.message);
    }
  };

  const handleClickPsw = (e) => {
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
  const handleClickPsw2 = (e) => {
    e.preventDefault();
    const inputPassword = document.getElementById("password2");
    const visible = document.getElementById("ver2");
    const oculto = document.getElementById("ocultar2");
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

  const validarPassword2 = (e) => {
    setPassword2(e.target.value);
    const inputPassword = document.getElementById("password");
    const inputPassword2 = document.getElementById("password2");
    if (inputPassword.value !== inputPassword2.value) {
      console.log("Las contraseñas no coinciden");
    } else {
      console.log("Las contraseñas coinciden");
    }
  };

  return (
    <div className="formulario--contenedor">
      <h2>Formulario de Registro</h2>
      <form id="formulario" className="formulario" onSubmit={handleSubmit}>
        <div className="formulario--grupo" id="grupo--nombre">
          <Label
            htmlFor="nombre"
            className="formulario--label"
            text="Nombres"
          ></Label>
          <div className="formulario--grupo-input">
            <Input
              type="text"
              name="nombre"
              id="nombre"
              className="formulario--input"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="formulario--grupo" id="grupo--apellido">
          <Label
            htmlFor="apellido"
            className="formulario--label"
            text="Apellidos"
          ></Label>
          <div className="formulario--grupo-input">
            <Input
              type="text"
              name="apellido"
              id="apellido"
              className="formulario--input"
              placeholder="Doe"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>

        <div className="formulario--grupo" id="grupo--username">
          <Label
            htmlFor="username"
            className="formulario--label"
            text="Usuario"
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
            text="Correo electrónico"
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

        <div className="formulario--grupo" id="grupo-password">
          <Label
            htmlFor="password"
            className="formulario--label"
            text="Ingresa una contraseña"
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
              onClick={handleClickPsw}
            />
            <FaRegEyeSlash
              type="text"
              className="formulario--password-ver oculto"
              id="ocultar"
              onClick={handleClickPsw}
            />
          </div>
        </div>
        <div className="formulario--grupo" id="grupo--password2">
          <Label
            htmlFor="password2"
            className="formulario--label"
            text="Valida tu contraseña"
          ></Label>
          <div className="formulario--grupo-input">
            <Input
              type="password"
              name="password2"
              id="password2"
              className="formulario--input"
              value={password2}
              onChange={validarPassword2}
            />
            <FaRegEye
              type="text"
              className="formulario--password-ver"
              id="ver2"
              onClick={handleClickPsw2}
            />
            <FaRegEyeSlash
              type="text"
              className="formulario--password-ver oculto"
              id="ocultar2"
              onClick={handleClickPsw2}
            />
          </div>
        </div>

        <div className="formulario--grupo formulario--grupo-btn-enviar">
          <Boton text="Registrarse" className="formulario--btn" type="submit" />

          <p>
            ¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link>
          </p>
          <p>Debes completar todos los campos para poder registrarse.</p>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
