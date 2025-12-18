import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { Specialization } from "@/features/specializations/api/specializations-api";

interface SpecializationsStore {
  specializations: Specialization[];
  isLoading: boolean;
  error: string | null;
  lastRequestTime: number | null;

  // Actions
  loadSpecializations: () => Promise<void>;
  setSpecializations: (specializations: Specialization[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

// Минимальный интервал между запросами (5 секунд)
const MIN_REQUEST_INTERVAL = 5000;

export const useSpecializationsStore = create<SpecializationsStore>()(
  devtools(
    (set, get) => ({
      specializations: [],
      isLoading: false,
      error: null,
      lastRequestTime: null,

      loadSpecializations: async () => {
        const { setLoading, setError, setSpecializations, lastRequestTime } = get();

        // Проверяем время последнего запроса
        const now = Date.now();
        if (lastRequestTime && now - lastRequestTime < MIN_REQUEST_INTERVAL) {
          console.log("Слишком частые запросы, пропускаем...");
          return;
        }

        setLoading(true);
        setError(null);

        try {
          const { specializationsApi } = await import(
            "@/features/specializations/api/specializations-api"
          );
          const data = await specializationsApi.getSpecializations();

          // Проверяем, что это массив
          if (Array.isArray(data)) {
            setSpecializations(data);
            set({ lastRequestTime: Date.now() }); // Обновляем время последнего запроса
          } else {
            console.error("Invalid data format received:", data);
            setError("Неверный формат данных от сервера");
            setSpecializations([]);
          }
        } catch (error: any) {
          console.error("Error loading specializations:", error);

          // Проверяем, если это 429 ошибка
          if (error?.response?.status === 429) {
            setError("Слишком много запросов. Попробуйте позже.");
          } else {
            setError("Ошибка загрузки специализаций");
          }

          setSpecializations([]);
        } finally {
          setLoading(false);
        }
      },

      setSpecializations: (specializations) => {
        set({ specializations });
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
      enabled: process.env.NODE_ENV !== "production",
    }
  )
);
