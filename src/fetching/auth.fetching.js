import { HTTP, URL } from "./http";

const ROUTE = "/api/auth";

export const login = async (user) => {
  try {
    /* const response = await HTTP.POST(`${URL.URL_API}${ROUTE}/login`, user); */

    const response = await HTTP.POST(URL.URL_API_prod + ROUTE + "/login", user);
    console.log("Response del fetch:", response);
    if (!response.ok) {
      throw response;
    }
    localStorage.setItem("token", response.token);
  } catch (error) {
    console.log("Error en login", error);
    throw { message: error.message };
  }
};

export const register = async (user) => {
  try {
    /* const response = await HTTP.POST(`${URL.URL_API}${ROUTE}/login`, user); */

    const response = await HTTP.POST(
      URL.URL_API_prod + ROUTE + "/register",
      user
    );
    console.log(response);
    if (!response.ok) {
      throw response;
    }
  } catch (error) {
    console.log("Error al registrar", error);
    throw { message: error.message };
  }
};

export const verificarToken = async () => {
  try {
    const token = localStorage.getItem("token");
    console.log("localStorage.getItem", token);
    //const headers = new Headers({ Authorization: token });
    //headers.append("Authorization", `Bearer ${token}`);
    //headers.append("Authorization", token);
    const headers = {
      Authorization: token,
    };
    console.log("headers.append", headers);
    const response = await HTTP.GET(
      URL.URL_API_prod + ROUTE + "/verify-token",
      headers
    );
    console.log("virificar token", response);
    return response;
  } catch (error) {
    console.log("Error en virificar token", error);
  }
};
