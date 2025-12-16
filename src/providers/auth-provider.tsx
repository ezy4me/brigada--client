// providers/auth-provider.tsx
"use client";

import { useEffect, ReactNode } from "react";

import { useAuthStore } from "@/features/auth/store/auth-store";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const refreshAuth = useAuthStore((state) => state.refreshAuth);

  useEffect(() => {
    // Только refreshAuth, без loadAuthFromStorage
    // Zustand persist автоматически восстановит состояние из localStorage
    
    // Проверяем токен при загрузке
    const { token } = useAuthStore.getState();
    if (token) {
      refreshAuth().catch((error) => {
        console.log('Auto refresh auth failed:', error);
        // При ошибке - ничего не делаем, пользователь будет разлогинен
      });
    }
  }, [refreshAuth]);

  return <>{children}</>;
};