import axios from "axios";
import { apiUrl } from "../../constant/constants";

export const customHeader = {
    Accept: 'application/json',
};

export const httpAxios = () => {
    const instance = axios.create({
        baseURL: apiUrl,
        headers: customHeader,
        withCredentials: true,
    });
    
    instance.interceptors.request.use((requestConfig) => {
        const updatedConfig = {...requestConfig}
        const token = localStorage.getItem('token');
        if (token) {
            updatedConfig.headers.Authorization = `Bearer ${token}`;
        } 
        if (!(updatedConfig.data instanceof FormData)) {
            updatedConfig.headers['Content-Type'] = 'application/json';
        }
        if (!token && updatedConfig.method === "get") {
            // Stop the GET request when no authorization header is present
            return Promise.reject(new Error("Authorization header is missing"));
          }
        return updatedConfig;
    }, (error) => {
        return Promise.reject(error);
    });
    return instance;
}