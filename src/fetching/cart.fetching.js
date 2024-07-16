import { HTTP, URL } from "./http";

const URL_API = URL.URL_API_dev;
const CART_ROUTE = "/api/cart";

const addToCart = async (pid, cantidad) => {
  try {
    const response = await HTTP.POST_TOKEN(URL_API + CART_ROUTE, {
      producto_id: pid,
      cantidad: cantidad,
    });
    console.log("addToCart", response);
    return response;
  } catch (error) {
    throw { message: error.message };
  }
};

export { addToCart };
