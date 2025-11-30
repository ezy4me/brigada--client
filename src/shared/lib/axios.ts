import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const baseConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosInstance: AxiosInstance = axios.create(baseConfig);

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (process.env.NODE_ENV === "development") {
      console.log(`🚀 [API Request] ${config.method?.toUpperCase()} ${config.url}`, config);
    }

    return config;
  },
  (error) => {
    console.error("❌ [API Request Error]", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (process.env.NODE_ENV === "development") {
      console.log(`✅ [API Response] ${response.status} ${response.config.url}`, response.data);
    }
    return response;
  },
  (error) => {
    console.error("❌ [API Response Error]", error.response?.data || error.message);

    if (error.response?.status === 401) {
      localStorage.removeItem("auth-token");
      window.location.href = "/auth/login";
    } else if (error.response?.status === 500) {
      console.error("Server error occurred");
    }

    return Promise.reject(error);
  }
);

export const api = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    axiosInstance.get<T>(url, config).then((response) => response.data),

  post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    axiosInstance.post<T>(url, data, config).then((response) => response.data),

  put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    axiosInstance.put<T>(url, data, config).then((response) => response.data),

  patch: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    axiosInstance.patch<T>(url, data, config).then((response) => response.data),

  delete: <T>(url: string, config?: AxiosRequestConfig) =>
    axiosInstance.delete<T>(url, config).then((response) => response.data),
};

export default axiosInstance;
