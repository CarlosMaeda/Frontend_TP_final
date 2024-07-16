import React from "react";
import FormInsertCategory from "../../../components/forms/FormInsertCategory";
import FormCreateProduct from "../../../components/forms/FormCreateProduct";
import FormUpdateProduct from "../../../components/forms/FormUpdateProduct";

const Admin = () => {
  return (
    <div>
      <h1>Pantalla de Administración</h1>
      <hr />
      <h2>Administración de Productos</h2>
      <FormCreateProduct />
      <hr />
      <FormUpdateProduct />
      <hr />
      <h2>Administración de Categorias</h2>
      <FormInsertCategory />
      <hr />
      <h2>Tabla de productos, estado, stock, precio, categoria</h2>
    </div>
  );
};

export default Admin;
