"use client";

import { useEffect, ReactNode } from "react";

import { useAuthStore } from "@/features/auth/store/auth-store";
import { apiClient } from "@/shared/api/api-client";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const loadAuthFromStorage = useAuthStore((state) => state.loadAuthFromStorage);
  const refreshAuth = useAuthStore((state) => state.refreshAuth);

  useEffect(() => {
    apiClient.loadTokenFromStorage();
    
    loadAuthFromStorage();
    
    refreshAuth();
  }, [loadAuthFromStorage, refreshAuth]);

  return <>{children}</>;
};