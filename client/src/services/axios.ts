import useAuthStore from "@/store/authStore";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const baseURL = import.meta.env.VITE_OUR_API_URL || 'https://our-recet-api.onrender.com/api/v1';


const configureAxios = () => {
  const api = axios.create({
    baseURL,
    withCredentials: true,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      if (!config.url?.includes('/auth')) {
        const token = useAuthStore.getState().token;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  )

  api.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error) => {
      if (error.response?.status === 401) {
          const logout = useAuthStore.getState().logout;
          logout();
          window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  )

  return api;
}

export default configureAxios;
