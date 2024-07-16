export const HTTP = {
  GET: async (url, headers) => {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    return response.json();
  },
  POST: async (url, body) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return response.json();
  },
  POST_TOKEN: async (url, body) => {
    const token = localStorage.getItem("token");
    //console.log("localStorage.getItem", token);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    });

    return response.json();
  },
  PUT_TOKEN: async (url, body) => {
    const token = localStorage.getItem("token");
    //console.log("localStorage.getItem", token);
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    });

    return response.json();
  },
  PATCH: async (url, body) => {},
  DELETE: async (url) => {},
};

export const URL = {
  URL_API_dev: "http://localhost:4500",
  URL_API_prod: "https://backend-tp-final.vercel.app",
};
