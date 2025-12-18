import { useEffect, useMemo, useRef } from "react";

import { useSpecializationsStore } from "../store/specializations-store";

export const useSpecializations = (options?: { autoLoad?: boolean; enabled?: boolean }) => {
  const { autoLoad = true, enabled = true } = options || {};

  const store = useSpecializationsStore();
  const { loadSpecializations, specializations, isLoading, error } = store;

  // Реф для предотвращения повторных вызовов
  const hasRequestedRef = useRef(false);
  const isLoadingRef = useRef(false);

  // Автозагрузка при необходимости
  useEffect(() => {
    // Если отключено или уже запрашивали - пропускаем
    if (!enabled || !autoLoad || hasRequestedRef.current || isLoadingRef.current) {
      return;
    }

    // Если данные уже есть - не загружаем повторно
    if (specializations.length > 0) {
      hasRequestedRef.current = true;
      return;
    }

    // Если загрузка уже идет - не запускаем новую
    if (isLoading) {
      isLoadingRef.current = true;
      return;
    }

    // Устанавливаем флаги и загружаем
    hasRequestedRef.current = true;
    isLoadingRef.current = true;

    console.log("Загружаем специализации...");
    loadSpecializations().finally(() => {
      isLoadingRef.current = false;
    });
  }, [enabled, autoLoad, loadSpecializations, specializations.length, isLoading]);

  // Мемоизируем опции для селекта
  const specializationOptions = useMemo(
    () => [
      { value: "", label: "Не выбрано" },
      ...specializations.map((spec) => ({
        value: spec.id,
        label: spec.name,
      })),
    ],
    [specializations]
  );

  return {
    // Состояние
    specializations,
    isLoading,
    error,

    // Удобные геттеры
    specializationOptions,

    // Действия
    loadSpecializations,
    refresh: () => {
      hasRequestedRef.current = false;
      return loadSpecializations();
    },

    // Флаги
    isReady: !isLoading && error === null,
    isError: error !== null,
  };
};
