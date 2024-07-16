import React, { useEffect, useState } from "react";
import "./forms.css";
import { Input, Label } from "../customInput/Input";
import Boton from "../customButtons/Boton";
import { getCategories, postProduct } from "../../fetching/product.fetching";

const FormCreateProduct = () => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [code, setCode] = useState("");
  const [valueCategory, setValueCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const seleccionarCategoria = (e) => {
    console.log(e.target.value);
    const Category = e.target.value;
    console.log("value:", Category);
    setCategory(Category);
  };

  useEffect(() => {
    getCategories()
      .then((categorias) => {
        setValueCategory(categorias);
        setLoading(false);
        console.log("useEffect", categorias);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, description, price, stock, category);
    if (!!!name || !!!description || !!!price || !!!stock) {
      setErrorMessage("Todos los campos son obligatorios");
      console.log(errorMessage);
      setName("");
      setDescription("");
      setPrice("");
      setStock("");
      setCategory("");
      setCode("");
      return;
    }

    try {
      const producto = { name, description, price, stock, category, code };
      const response = await postProduct(producto);
      setName("");
      setDescription("");
      setPrice("");
      setStock("");
      setCategory("");
      setErrorMessage("");
      setCode("");
    } catch (error) {
      console.log("Error del catch:", error);
    }
  };

  return (
    <div className="formulario--contenedor">
      <h2>Crear Producto</h2>
      <form id="formulario" className="formulario" onSubmit={handleSubmit}>
        <div className="formulario--grupo" id="grupo--usuario">
          <Label
            htmlFor="name"
            className="formulario--label"
            text="Producto"
          ></Label>
          <div className="formulario--grupo-input">
            <Input
              type="text"
              name="name"
              id="name"
              className="formulario--input"
              placeholder="Nombre del producto"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="formulario--grupo" id="grupo--usuario">
          <Label
            htmlFor="price"
            className="formulario--label"
            text="Precio"
          ></Label>
          <div className="formulario--grupo-input">
            <Input
              type="number"
              name="price"
              id="price"
              className="formulario--input"
              placeholder="$0.00"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="formulario--grupo" id="grupo--usuario">
          <Label
            htmlFor="stock"
            className="formulario--label"
            text="Stock"
          ></Label>
          <div className="formulario--grupo-input">
            <Input
              type="number"
              name="stock"
              id="stock"
              className="formulario--input"
              placeholder="Cantidad disponible"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
        </div>

        <div className="formulario--grupo" id="grupo--usuario">
          <Label
            htmlFor="code"
            className="formulario--label"
            text="Código"
          ></Label>
          <div className="formulario--grupo-input">
            <Input
              type="text"
              name="code"
              id="code"
              className="formulario--input"
              placeholder="AR-000"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
        </div>

        <div className="formulario--grupo" id="grupo--usuario">
          <Label
            htmlFor="description"
            className="formulario--label"
            text="Descripción"
          ></Label>
          <div className="formulario--grupo-input">
            <Input
              type="textarea"
              name="description"
              id="description"
              className="formulario--input"
              placeholder="Descripción del producto"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="formulario--grupo" id="grupo--usuario">
          <Label
            htmlFor="category"
            className="formulario--label"
            text="Categoría"
          ></Label>
          <div className="formulario--grupo-select">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <select
                id="category"
                className="formulario--input"
                onChange={seleccionarCategoria}
              >
                {valueCategory.map((element) => (
                  <option
                    key={element.Categoria_ID}
                    value={element[element.Categoria_ID]}
                  >
                    {element.Categoria}
                  </option>
                ))}
              </select>
            )}
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

export default FormCreateProduct;
