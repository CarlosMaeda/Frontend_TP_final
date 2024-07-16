import React from "react";
import ProductList from "../../components/products/ProductList";
import { Link } from "react-router-dom";
import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
    <div>
      {/* <h1>Home</h1>
      <p>Esta es la pantalla de inicio</p>
      <h2>
        <Link to="/admin">Admin</Link>
      </h2> */}
      <Banner />

      {/* <ProductList /> */}
    </div>
  );
};

export default Home;
