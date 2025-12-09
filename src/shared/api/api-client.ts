import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

import { API_BASE_URL } from "@/shared/config/env";

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
  status?: number;
}

class ApiClient {
  private client: AxiosInstance;
  private token: string | null = null;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      timeout: 30000,
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.client.interceptors.request.use(
      (config) => {
        if (this.token && config.headers) {
          config.headers.Authorization = `Bearer ${this.token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        const apiError: ApiError = {
          message: "Произошла ошибка",
          status: error.response?.status,
        };

        if (error.response?.data) {
          const data = error.response.data as any;
          if (data.message) {
            apiError.message = data.message;
          }
          if (data.errors) {
            apiError.errors = data.errors;
          }
        }

        if (error.response?.status === 401) {
          this.clearToken();
        }

        return Promise.reject(apiError);
      }
    );
  }

  setToken(token: string) {
    this.token = token;
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_token", token);
    }
  }

  clearToken() {
    this.token = null;
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user");
    }
  }

  loadTokenFromStorage() {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("auth_token");
      if (token) {
        this.token = token;
      }
    }
  }

  async get<T>(url: string, params?: object): Promise<T> {
    const response: AxiosResponse<T> = await this.client.get(url, { params });
    return response.data;
  }

  async post<T>(url: string, data?: object): Promise<T> {
    const response: AxiosResponse<T> = await this.client.post(url, data);
    return response.data;
  }

  async put<T>(url: string, data?: object): Promise<T> {
    const response: AxiosResponse<T> = await this.client.put(url, data);
    return response.data;
  }

  async patch<T>(url: string, data?: object): Promise<T> {
    const response: AxiosResponse<T> = await this.client.patch(url, data);
    return response.data;
  }

  async delete<T>(url: string, params?: object): Promise<T> {
    const response: AxiosResponse<T> = await this.client.delete(url, { params });
    return response.data;
  }

  async upload<T>(url: string, formData: FormData): Promise<T> {
    const response: AxiosResponse<T> = await this.client.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  }
}

export const apiClient = new ApiClient();
