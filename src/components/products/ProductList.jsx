import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { getProducts } from "../../fetching/product.fetching";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((productos) => {
        setProducts(productos);
        setLoading(false);
        console.log("useEffect", productos);
        console.log("useState", products);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Lista de productos</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {products.map((product) => {
            return (
              <div key={product.Producto_ID}>
                <h2>{product.Nombre}</h2>
                <img src={product.Imagen} alt={product.Nombre} />
                <p>
                  <b>Código: </b> {product.Codigo}
                </p>
                <p>{product.Descripcion}</p>
                <span>
                  <b> $ </b>
                  {` ${product.Precio}`}
                </span>
                <Link to={`/details/${product.Producto_ID}`}>Detalles</Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductList;
