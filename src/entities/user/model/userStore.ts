import { create } from "zustand";

export type UserRole = "executor" | "customer" | "company";

interface AuthState {
  user: { id: string; name: string; role: UserRole } | null;
  isAuthenticated: boolean;
  login: (role: UserRole) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (role) =>
    set({
      user: { id: "mock-user-id", name: "Иван Петров", role },
      isAuthenticated: true,
    }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));
