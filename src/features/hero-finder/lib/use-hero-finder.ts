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

  const [city, setCity] = useState(defaultCity);
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
    if (!searchQuery.trim()) return;

    const params = new URLSearchParams();
    params.set("q", searchQuery.trim());
    params.set("city", city);
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

  return {
    city,
    searchQuery,
    isDetectingCity,
    setSearchQuery,
    handleSearch,
    handlePopularRequest,
    handleChangeCity,
  };
};

const detectUserCity = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Казань"), 1000);
  });
};
