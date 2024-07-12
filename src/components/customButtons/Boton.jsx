import React from "react";
import "./boton.css";

const Boton = (props) => {
  return (
    <>
      <button {...props}>{props.text}</button>
    </>
  );
};

export default Boton;
