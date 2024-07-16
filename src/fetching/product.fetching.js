import { HTTP, URL } from "./http";

const URL_API = URL.URL_API_dev;
const PRODUCTS_ROUTE = "/api/products";

const getProducts = async () => {
  try {
    const response = await HTTP.GET(URL_API + PRODUCTS_ROUTE);
    console.log("getproducts", response);
    return response.productos;
  } catch (error) {
    throw { message: error.message };
  }
};

const getproductById = async (pid) => {
  try {
    const response = await HTTP.GET(URL_API + PRODUCTS_ROUTE + "/" + pid);
    console.log("getproductById", response);
    return response.data;
  } catch (error) {
    throw { message: error.message };
  }
};

const getCategories = async () => {
  try {
    const response = await HTTP.GET(URL_API + PRODUCTS_ROUTE + "/categories");
    console.log("getCategories", response);
    return response.categorias;
  } catch (error) {
    throw { message: error.message };
  }
};

const postCategory = async (body) => {
  try {
    const response = await HTTP.POST_TOKEN(
      URL_API + PRODUCTS_ROUTE + "/categories",
      body
    );
    console.log("postCategory", response);
    return response;
  } catch (error) {
    throw { message: error.message };
  }
};

const postProduct = async (body) => {
  try {
    const response = await HTTP.POST_TOKEN(URL_API + PRODUCTS_ROUTE, body);
    console.log("postProduct", response);
    return response;
  } catch (error) {
    throw { message: error.message };
  }
};

const putProduct = async (pid, body) => {
  try {
    const response = await HTTP.PUT_TOKEN(
      URL_API + PRODUCTS_ROUTE + "/" + pid,
      body
    );
    console.log("putProduct", response);
    return response;
  } catch (error) {
    throw { message: error.message };
  }
};

export {
  getProducts,
  getproductById,
  getCategories,
  postCategory,
  postProduct,
  putProduct,
};
