import { apiClient } from "@/shared/api/api-client";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ApiError,
  User,
} from "@/shared/lib/types/auth.types";

export const authApi = {
  async login(data: LoginRequest): Promise<LoginResponse> {
    try {
      const response = await apiClient.post<LoginResponse>("/auth/login", data);

      console.log("Auth API: Login successful", response);

      if (response.accessToken) {
        apiClient.setToken(response.accessToken);

        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify(response.user));
        }
      }

      return response;
    } catch (error: any) {
      console.error("Auth API error:", error);

      const apiError: ApiError = {
        message: error.message || "Ошибка авторизации",
        errors: error.errors,
        status: error.status,
      };
      throw apiError;
    }
  },

  async register(data: RegisterRequest): Promise<RegisterResponse> {
    try {
      const requestData: any = {
        email: data.email,
        password: data.password,
        role: data.role,
      };

      if (data.role === "company") {
        if (data.companyName) {
          requestData.companyName = data.companyName;
        }
        if (data.inn) {
          requestData.inn = data.inn;
        }
      }

      console.log("Register request data:", requestData);

      const response = await apiClient.post<RegisterResponse>("/auth/register", requestData);

      if (response.accessToken) {
        apiClient.setToken(response.accessToken);

        if (typeof window !== "undefined" && response.user) {
          localStorage.setItem("user", JSON.stringify(response.user));
        }
      }

      return response;
    } catch (error: any) {
      console.error("Auth API register error:", error);

      const apiError: ApiError = {
        message: error.message || "Ошибка регистрации",
        errors: error.errors,
        status: error.status,
      };
      throw apiError;
    }
  },

  async logout(): Promise<void> {
    try {
      await apiClient.post("/auth/logout");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      apiClient.clearToken();
    }
  },

  async getCurrentUser(): Promise<User> {
    try {
      const user = await apiClient.get<User>("/auth/me");

      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(user));
      }

      return user;
    } catch (error: any) {
      const apiError: ApiError = {
        message: error.message || "Ошибка получения данных пользователя",
        errors: error.errors,
        status: error.status,
      };
      throw apiError;
    }
  },

  async refreshToken(): Promise<{ accessToken: string; expiresIn: number }> {
    try {
      const response = await apiClient.post<{ accessToken: string; expiresIn: number }>(
        "/auth/refresh"
      );
      if (response.accessToken) {
        apiClient.setToken(response.accessToken);
      }
      return response;
    } catch (error: any) {
      const apiError: ApiError = {
        message: error.message || "Ошибка обновления токена",
        errors: error.errors,
        status: error.status,
      };
      throw apiError;
    }
  },

  async forgotPassword(email: string): Promise<{ message: string }> {
    try {
      return await apiClient.post<{ message: string }>("/auth/forgot-password", { email });
    } catch (error: any) {
      const apiError: ApiError = {
        message: error.message || "Ошибка восстановления пароля",
        errors: error.errors,
        status: error.status,
      };
      throw apiError;
    }
  },

  async resetPassword(data: {
    token: string;
    email: string;
    password: string;
    password_confirmation: string;
  }): Promise<{ message: string }> {
    try {
      return await apiClient.post<{ message: string }>("/auth/reset-password", data);
    } catch (error: any) {
      const apiError: ApiError = {
        message: error.message || "Ошибка сброса пароля",
        errors: error.errors,
        status: error.status,
      };
      throw apiError;
    }
  },

  async verifyEmail(token: string): Promise<{ message: string }> {
    try {
      return await apiClient.post<{ message: string }>("/auth/verify-email", { token });
    } catch (error: any) {
      const apiError: ApiError = {
        message: error.message || "Ошибка подтверждения email",
        errors: error.errors,
        status: error.status,
      };
      throw apiError;
    }
  },
};
