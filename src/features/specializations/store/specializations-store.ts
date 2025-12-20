import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { Specialization } from "../api/specializations-api";

interface SpecializationsStore {
  specializations: Specialization[];
  isLoading: boolean;
  error: string | null;

  loadSpecializations: () => Promise<void>;
  setSpecializations: (specializations: Specialization[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useSpecializationsStore = create<SpecializationsStore>()(
  devtools(
    (set) => ({
      specializations: [], // Гарантируем, что это массив
      isLoading: false,
      error: null,

      loadSpecializations: async () => {
        set({ isLoading: true, error: null });

        try {
          const { specializationsApi } = await import("../api/specializations-api");
          const data = await specializationsApi.getSpecializations();

          // Гарантируем, что data - массив
          const specializationsArray = Array.isArray(data) ? data : [];

          set({
            specializations: specializationsArray,
            isLoading: false,
          });
        } catch (error: any) {
          console.error("Error loading specializations:", error);

          if (error?.response?.status === 429) {
            set({
              error: "Слишком много запросов. Попробуйте позже.",
              isLoading: false,
            });
          } else {
            set({
              error: "Ошибка загрузки специализаций",
              isLoading: false,
            });
          }
        }
      },

      setSpecializations: (specializations) => {
        const specializationsArray = Array.isArray(specializations) ? specializations : [];
        set({ specializations: specializationsArray });
      },

      setLoading: (loading) => {
        set({ isLoading: loading });
      },

      setError: (error) => {
        set({ error });
      },
    }),
    {
      name: "specializations-store",
    }
  )
);
