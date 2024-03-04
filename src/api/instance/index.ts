import axios, { AxiosError } from "axios";

export const customHeader = {
  Accept: "application/json",
};

export const httpAxios = () => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: customHeader,
    withCredentials: true,
  });
  instance.interceptors.request.use(
    (requestConfig) => {
      const updatedConfig = { ...requestConfig };
      const token = localStorage.getItem("token");
      if (token) {
        updatedConfig.headers.Authorization = `Bearer ${token}`;
      }
      if (!(updatedConfig.data instanceof FormData)) {
        updatedConfig.headers["Content-Type"] = "application/json";
      }
      if (!token && updatedConfig.method === "get") {
        // Stop the GET request when no authorization header is present
        return Promise.reject(new Error("Authorization header is missing"));
      }
      return updatedConfig;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        window.location.href = "/signin";
      }
      return Promise.reject(error);
    }
  );
  return instance;
};
