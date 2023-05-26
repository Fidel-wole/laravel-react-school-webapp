import axios from "axios";
import router from "./router";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`, // Add backticks () to properly concatenate the base URL
});

axiosClient.interceptors.request.use((config) => {
  const token = "1234"; // TODO: Replace with actual token retrieval logic
  config.headers.Authorization = `Bearer ${token}`; // Add backticks () to properly concatenate the token
  return config;
});

axiosClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        router.push("/login");
      }
      const errorData = {
        // Extract relevant information from the error object
        message: error.message,
        status: error.response ? error.response.status : null,
        data: error.response ? error.response.data : null,
      };
      return Promise.reject(errorData);
    }
  );

export default axiosClient;