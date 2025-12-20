import { useEffect } from "react";

import { useSpecializationsStore } from "../store/specializations-store";

export const useSpecializations = (enabled: boolean = true) => {
  const store = useSpecializationsStore();
  const { loadSpecializations, specializations, isLoading, error } = store;

  useEffect(() => {
    if (enabled && specializations.length === 0 && !isLoading && !error) {
      loadSpecializations();
    }
  }, [enabled, specializations.length, isLoading, error, loadSpecializations]);

  return {
    specializations,
    isLoading,
    error,
    specializationOptions: [
      { value: "", label: "Не выбрано" },
      ...specializations.map((spec) => ({
        value: spec.id,
        label: spec.name,
      })),
    ],
  };
};