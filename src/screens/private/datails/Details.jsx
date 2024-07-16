import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getproductById } from "../../../fetching/product.fetching";
import Boton from "../../../components/customButtons/Boton";
import { addToCart } from "../../../fetching/cart.fetching";

const Details = () => {
  const { pid } = useParams();
  const PID = parseInt(pid);

  console.log("Details", PID);
  console.log(typeof PID);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getproductById(PID)
      .then((data) => {
        setProduct(data);
        setLoading(false);
        console.log("Detalle del producto: ", [data]);
        console.log("useState", product[0]);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const añadirAlCarrito = async () => {
    console.log("Añadir al carrito");
    const cantidad = 1;
    await addToCart(PID, cantidad);
  };

  return (
    <div>
      <h1>Detalle del producto</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{product[0].Nombre}</h2>
          <p>
            <b>Código: </b> {product[0].Codigo}
          </p>
          <img src={product[0].Imagen} alt={product[0].Nombre} />
          <p>{product[0].Descripcion}</p>
          <span>
            <b> $ </b>
            {` ${product[0].Precio}`}
          </span>
          <Boton text="Añadir al carrito" onClick={añadirAlCarrito} />
        </div>
      )}
    </div>
  );
};

export default Details;
