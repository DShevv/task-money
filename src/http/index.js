import axios from "axios";

const api = axios.create({
  // withCredentials: true,
  headers: { "Access-Control-Allow-Credentials": true },
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  //config.headers.Authorization = localStorage.getItem("token");
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error;
  }
);

export default api;
