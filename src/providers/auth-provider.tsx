"use client";

import { useEffect, ReactNode } from "react";

import { useAuthStore } from "@/features/auth/store/auth-store";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const refreshAuth = useAuthStore((state) => state.refreshAuth);

  useEffect(() => {
    
    const { token } = useAuthStore.getState();
    if (token) {
      refreshAuth().catch((error) => {
        console.log('Auto refresh auth failed:', error);
      });
    }
  }, [refreshAuth]);

  return <>{children}</>;
};