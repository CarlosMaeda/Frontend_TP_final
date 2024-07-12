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
import { register } from "../../fetching/auth.fetching";

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
    console.log(username, email, password, name, lastname);
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

      const response = await register(
        user
      ); 
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
    const form = document.getElementById("form");
    console.log("Se ha enviado el formulario");
  };

  const handleClickPsw = (e) => {
    e.preventDefault();
    console.log("Se ha pulsado el botón");
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
    console.log("Se ha pulsado el botón");
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
    console.log(inputPassword.value, inputPassword2.value);
    if (inputPassword.value !== inputPassword2.value) {
      console.log("Las contraseñas no coinciden");
    } else {
      console.log("Las contraseñas coinciden");
    }
  };

  return (
    <div className="formulario--contenedor">
      <h3>Formulario</h3>
      <form id="formulario" className="formulario" onSubmit={handleSubmit}>
        <div className="formulario--grupo" id="grupo--usuario">
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
            <FaTimesCircle className="formulario--validacion-estado" />
          </div>
          <p className="formulario--input-error">
            El nombre debe estar compuesto por 4 a 16 caracteres y solo puede
            letras.
          </p>
        </div>

        <div className="formulario--grupo" id="grupo--usuario">
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
            <FaTimesCircle className="formulario--validacion-estado" />
          </div>
          <p className="formulario--input-error">
            El apellido debe estar compuesto por 4 a 16 caracteres y solo puede
            letras.
          </p>
        </div>
        <div className="formulario--grupo" id="grupo--usuario">
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
            <FaTimesCircle className="formulario--validacion-estado" />
          </div>
          <p className="formulario--input-error">
            El ususario debe estar compuesto por 4 a 16 caracteres y solo puede
            contener numeros, letras y guion bajo.
          </p>
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
            <FaTimesCircle className="formulario--validacion-estado" />
          </div>
          <p className="formulario--input-error">
            El correo solo puede contener letras, numeros, puntos, guiones y
            guion bajo.
          </p>
        </div>

        <div className="formulario--grupo" id="grupo-password">
          <Label
            htmlFor="password"
            className="formulario--label"
            text="Ingresa tu contraseña"
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
            <FaTimesCircle className="formulario--validacion-estado" />
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

            <p className="formulario--input-error">
              La contraseña debe tener netre 4 y 12 caracteres.
            </p>
          </div>
        </div>
        <div className="formulario--grupo" id="grupo--password2">
          <Label
            htmlFor="password2"
            className="formulario--label"
            text="Repite tu contraseña"
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
            <FaTimesCircle className="formulario--validacion-estado" />
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

            <p className="formulario--input-error">
              Ambas contraseñas deben ser iguales.
            </p>
          </div>
        </div>
        <div className="formulario--mensaje" id="formulario--mensaje">
          <p>
            <FaExclamationTriangle /> <b>Error:</b> Por favor rellena el
            formulario correctamente.
          </p>
        </div>

        <div className="formulario--grupo formulario--grupo-btn-enviar">
          <Boton text="Registrarse" className="formulario--btn" type="submit" />

          <p
            className="formulario--mensaje-exito"
            id="formulario--mensaje-exito"
          >
            Formulario enviado exitosamente!
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
