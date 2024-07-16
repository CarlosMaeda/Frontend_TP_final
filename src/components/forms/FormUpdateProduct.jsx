import React, { useEffect, useState } from "react";
import "./forms.css";
import { Input, Label } from "../customInput/Input";
import Boton from "../customButtons/Boton";
import { getproductById, putProduct } from "../../fetching/product.fetching";

const FormUpdateProduct = () => {
  const [state, setState] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [product, setProduct] = useState([]);
  const [pid, setPid] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getproductById(pid)
      .then((producto) => {
        setProduct(producto);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    console.log(pid);
    if (!!!pid) {
      setErrorMessage("Debe agregar un ID de producto");
      console.log(errorMessage);
      setPid("");
      return;
    }
    try {
      const response = await getproductById(pid);
      setProduct(response);
      setPid("");
      setErrorMessage("");
    } catch (error) {
      console.log("Error del catch:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state, price, stock);
    if (!!!state || !!!price || !!!stock) {
      setErrorMessage("Todos los campos son obligatorios");
      console.log(errorMessage);
      setState("");
      setPrice("");
      setStock("");
      return;
    }

    try {
      const producto = { state, price, stock };
      const response = await putProduct(producto);
      setState("");
      setPrice("");
      setStock("");
      setErrorMessage("");
    } catch (error) {
      console.log("Error del catch:", error);
    }
  };

  return (
    <div className="formulario--contenedor">
      <h2>Buscar producto</h2>
      <form
        id="formulario"
        className="formulario"
        onSubmit={handleSearchSubmit}
      >
        <div className="formulario--grupo" id="grupo--usuario">
          <Label
            htmlFor="pid"
            className="formulario--label"
            text="ID del producto"
          ></Label>
          <div className="formulario--grupo-input">
            <Input
              type="number"
              name="pid"
              id="pid"
              className="formulario--input"
              placeholder="activo o inactivo"
              value={pid}
              onChange={(e) => setPid(e.target.value)}
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

      <h2>Actualizar Producto</h2>
      <form id="formulario" className="formulario" onSubmit={handleSubmit}>
        <div className="formulario--grupo" id="grupo--usuario">
          <Label
            htmlFor="state"
            className="formulario--label"
            text="Estado"
          ></Label>
          <div className="formulario--grupo-input">
            <Input
              type="text"
              name="state"
              id="state"
              className="formulario--input"
              placeholder="activo o inactivo"
              value={state}
              onChange={(e) => setState(e.target.value)}
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

export default FormUpdateProduct;
