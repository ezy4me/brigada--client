// features/auth/store/auth-store.ts
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
  // УДАЛИТЬ: loadAuthFromStorage: () => void;
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

      register: async (data: RegisterRequest) => {
        set({ isLoading: true, error: null });

        try {
          const response = await authApi.register(data);

          const updatedUser = response.user;
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

        //   if (!updatedUser.name && data.name) {
        //     updatedUser = { ...updatedUser, name: data.name };
        //   }

          set({
            user: updatedUser,
            token,
            isAuthenticated,
            isLoading: false,
          });
        } catch (error: any) {
          const errorMessage = error.errors
            ? Object.values(error.errors).flat().join(", ")
            : error.message || "Ошибка регистрации";

          set({
            error: errorMessage,
            isLoading: false,
          });
          throw error;
        }
      },

      logout: async () => {
        set({ isLoading: true });

        try {
          await authApi.logout();
        } finally {
          // Всегда очищаем локальное состояние
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

      // УДАЛИТЬ ВЕСЬ МЕТОД loadAuthFromStorage

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
              // При 401 - разлогиниваем
              get().logout();
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
      // Добавляем миграцию для очистки старых ключей
      migrate: (persistedState, version) => {
        // Очищаем старые ключи localStorage
        if (typeof window !== "undefined") {
          localStorage.removeItem("auth_token");
          localStorage.removeItem("user");
        }
        return persistedState;
      },
    }
  )
);
