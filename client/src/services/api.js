import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status &&
    error.response.status < 500;
  console.log(expectedError);

  if (!expectedError) {
    console.log(`Interceptors - ${error}`);
    toast.error("Unexpected Error");
  } else {
    console.log(`${error?.response.data}`);
    toast.warn(`${error.response.data}`);
  }

  return Promise.reject(error);
});

export function setHeaderToken() {
  const token = localStorage.getItem("token");
  if (token) {
    api.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
}
setHeaderToken();

export default api;
