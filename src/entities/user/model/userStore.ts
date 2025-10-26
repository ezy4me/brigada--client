import { create } from "zustand";

interface UserState {
  name: string;
  role: "customer" | "company" | "worker" | null;
  setUser: (name: string, role: UserState["role"]) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  name: "",
  role: null,
  setUser: (name, role) => set({ name, role }),
  logout: () => set({ name: "", role: null }),
}));
