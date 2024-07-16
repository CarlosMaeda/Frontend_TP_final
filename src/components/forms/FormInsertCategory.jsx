import React, { useState } from "react";
import "./forms.css";
import { Input, Label } from "../customInput/Input";
import Boton from "../customButtons/Boton";
import { postCategory } from "../../fetching/product.fetching";

const FormInsertCategory = () => {
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(category);
    if (!!!category) {
      setErrorMessage("El campo debe ser obligatorio");
      console.log(errorMessage);
      setCategory("");
      return;
    }
    try {
      const categoria = { category };
      console.log(category);
      const response = await postCategory(categoria);
      setCategory("");
      setErrorMessage("");
    } catch (error) {
      console.log("Error del catch:", error);
    }
  };

  return (
    <div className="formulario--contenedor">
      <h2>Insertar categoría</h2>
      <form id="formulario" className="formulario" onSubmit={handleSubmit}>
        <div className="formulario--grupo" id="grupo--usuario">
          <Label
            htmlFor="category"
            className="formulario--label"
            text="Categoría"
          ></Label>
          <div className="formulario--grupo-input">
            <Input
              type="text"
              name="category"
              id="category"
              className="formulario--input"
              placeholder="Categoría"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>
        <div className="formulario--grupo formulario--grupo-btn-enviar">
          <Boton
            text="Crear Categoría"
            className="formulario--btn"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default FormInsertCategory;
