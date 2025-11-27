"use client";

import { useState, useEffect, useCallback } from "react";
import {
  useRouter,
  useSearchParams as useNextSearchParams,
} from "next/navigation";
import { SearchParams, UserRole } from "./types";

interface UseHeroFinderProps {
  role: UserRole;
  defaultCity?: string;
}

export const useHeroFinder = ({
  role,
  defaultCity = "Москва",
}: UseHeroFinderProps) => {
  const router = useRouter();
  const searchParams = useNextSearchParams();

  const [city, setCity] = useState(
    searchParams.get("city") || defaultCity
  );
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("q") || ""
  );
  const [isDetectingCity, setIsDetectingCity] = useState(!defaultCity);

  useEffect(() => {
    if (defaultCity) return;

    const detectCity = async () => {
      setIsDetectingCity(true);
      try {
        const detectedCity = await detectUserCity();
        setCity(detectedCity);
      } catch (error) {
        console.warn("Не удалось определить город:", error);
        setCity("Москва");
      } finally {
        setIsDetectingCity(false);
      }
    };

    detectCity();
  }, [defaultCity]);

  const handleSearch = useCallback(() => {
    const params = new URLSearchParams();

    if (searchQuery.trim()) {
      params.set("q", searchQuery.trim());
    } else {
      params.delete("q");
    }

    if (city) {
      params.set("city", city);
    }

    params.set("role", role);

    router.push(`/find-orders?${params.toString()}`);
  }, [searchQuery, city, role, router]);

  const handlePopularRequest = useCallback(
    (request: string) => {
      setSearchQuery(request);
      setTimeout(() => handleSearch(), 100);
    },
    [handleSearch]
  );

  const handleChangeCity = useCallback(() => {
    console.log("Открыть выбор города");
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery("");
    const params = new URLSearchParams();
    if (city) params.set("city", city);
    params.set("role", role);
    router.push(`/find-orders?${params.toString()}`);
  }, [city, role, router]);

  return {
    city,
    searchQuery,
    isDetectingCity,
    setSearchQuery,
    handleSearch,
    handlePopularRequest,
    handleChangeCity,
    clearSearch,
  };
};

const detectUserCity = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Казань"), 1000);
  });
};
