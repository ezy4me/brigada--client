import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { LoginRequest, RegisterRequest, User, LoginResponse } from "@/shared/lib/types/auth.types";

import { authApi } from "../api/auth-api";

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  login: (credentials: LoginRequest) => Promise<void>;
  register: (data: RegisterRequest) => Promise<void>;
  logout: () => Promise<void>;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  clearError: () => void;
  loadAuthFromStorage: () => void;
  refreshAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (credentials: LoginRequest) => {
        set({ isLoading: true, error: null });

        try {
          const response: LoginResponse = await authApi.login(credentials);

          const userWithDefaults = {
            ...response.user,
            name: response.user.name || response.user.email.split("@")[0],
          };

          set({
            user: userWithDefaults,
            token: response.accessToken,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error: any) {
          const errorMessage = error.errors
            ? Object.values(error.errors).flat().join(", ")
            : error.message || "Неверный email или пароль";

          set({
            error: errorMessage,
            isLoading: false,
          });
          throw error;
        }
      },

      // В auth-store.ts исправляем метод register
      register: async (data: RegisterRequest) => {
        set({ isLoading: true, error: null });

        try {
          const response = await authApi.register(data);

          // Проверяем наличие user и token
          const token = response.accessToken || null;
          const isAuthenticated = !!response.accessToken;

          if (!isAuthenticated) {
            set({
              error:
                "Регистрация успешна! Пожалуйста, проверьте вашу почту для подтверждения email.",
              isLoading: false,
            });
            return;
          }

          // Проверяем что user существует
          if (!response.user) {
            throw new Error("Ошибка регистрации: данные пользователя не получены");
          }

          // Обновляем user
          const updatedUser: User = {
            ...response.user,
            name: response.user.name || response.user.email.split("@")[0],
          };

          set({
            user: updatedUser,
            token,
            isAuthenticated,
            isLoading: false,
          });
        } catch (error: any) {
          let errorMessage = "Ошибка регистрации";

          if (error.message) {
            errorMessage = error.message;
          }

          if (error.errors) {
            const errorList = Object.values(error.errors).flat();
            errorMessage = errorList.join(", ");
          }

          set({
            error: errorMessage,
            isLoading: false,
          });

          throw new Error(errorMessage);
        }
      },

      logout: async () => {
        set({ isLoading: true });

        try {
          await authApi.logout();
        } finally {
          set({
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
          });
        }
      },

      setUser: (user: User | null) => {
        set({ user });
      },

      setToken: (token: string | null) => {
        set({ token });
      },

      clearError: () => {
        set({ error: null });
      },

      loadAuthFromStorage: () => {
        if (typeof window !== "undefined") {
          const token = localStorage.getItem("auth_token");
          const userStr = localStorage.getItem("user");

          if (token && userStr) {
            try {
              const user = JSON.parse(userStr) as User;
              const userWithDefaults = {
                ...user,
                name: user.name || user.email.split("@")[0],
              };

              set({
                user: userWithDefaults,
                token,
                isAuthenticated: true,
              });
            } catch (error) {
              console.error("Error parsing user from localStorage:", error);
              localStorage.removeItem("user");
              localStorage.removeItem("auth_token");
            }
          }
        }
      },

      refreshAuth: async () => {
        const { token } = get();

        if (token) {
          set({ isLoading: true });
          try {
            const user = await authApi.getCurrentUser();
            const userWithDefaults = {
              ...user,
              name: user.name || user.email.split("@")[0],
            };

            set({
              user: userWithDefaults,
              isAuthenticated: true,
              isLoading: false,
            });
          } catch (error: any) {
            if (error.status === 401) {
              set({
                user: null,
                token: null,
                isAuthenticated: false,
                isLoading: false,
              });
            } else {
              set({ isLoading: false });
            }
          }
        }
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
