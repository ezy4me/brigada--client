"use client";

import { useState } from "react";
import { Input } from "@/shared/ui/input/Input";
import { Button } from "@/shared/ui/button/Button";
import { Text } from "@/shared/ui/text/Text";
import { Heading } from "@/shared/ui/heading/Heading";
import { Switch } from "@/shared/ui/switch/Switch";
import * as styles from "./orderFilters.css";

export interface FilterValues {
  minPrice: string;
  maxPrice: string;
  region: string;
  keywords: string;
  executorType?: "company" | "executor";
  highRatingOnly: boolean;
}

export interface OrderFiltersProps {
  role: "executor" | "customer" | "company" | "guest";
  initialFilters?: Partial<FilterValues>;
  onApplyFilters: (filters: FilterValues) => void;
  onResetFilters: () => void;
}

export const OrderFilters = ({
  role,
  initialFilters = {},
  onApplyFilters,
  onResetFilters,
}: OrderFiltersProps) => {
  const [filters, setFilters] = useState<FilterValues>({
    minPrice: initialFilters.minPrice || "",
    maxPrice: initialFilters.maxPrice || "",
    region: initialFilters.region || "",
    keywords: initialFilters.keywords || "",
    executorType: initialFilters.executorType,
    highRatingOnly: initialFilters.highRatingOnly || false,
  });

  const handleChange = (name: keyof FilterValues, value: any) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onApplyFilters(filters);
  };

  const handleReset = () => {
    const resetValues: FilterValues = {
      minPrice: "",
      maxPrice: "",
      region: "",
      keywords: "",
      executorType: undefined,
      highRatingOnly: false,
    };
    setFilters(resetValues);
    onResetFilters();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.section}>
        <Heading as="h3" className={styles.sectionTitle}>
          Цена
        </Heading>
        <div className={styles.rangeInputs}>
          <Input
            size="sm"
            type="number"
            placeholder="От"
            value={filters.minPrice}
            onChange={(e) => handleChange("minPrice", e.target.value)}
            className={styles.input}
          />
          <Text>—</Text>
          <Input
            size="sm"
            type="number"
            placeholder="До"
            value={filters.maxPrice}
            onChange={(e) => handleChange("maxPrice", e.target.value)}
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.section}>
        <Heading as="h3" className={styles.sectionTitle}>
          Регион
        </Heading>
        <Input
          placeholder="Например: Москва"
          value={filters.region}
          onChange={(e) => handleChange("region", e.target.value)}
          className={styles.input}
        />
      </div>

      <div className={styles.section}>
        <Heading as="h3" className={styles.sectionTitle}>
          Ключевые слова
        </Heading>
        <Input
          placeholder="Введите ключевые слова"
          value={filters.keywords}
          onChange={(e) => handleChange("keywords", e.target.value)}
          className={styles.keywordInput}
        />
      </div>

      {role === "customer" && (
        <>
          <div className={styles.section}>
            <Heading as="h3" className={styles.sectionTitle}>
              Тип исполнителя
            </Heading>
            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxLabel}>
                <input
                  type="radio"
                  name="executorType"
                  checked={filters.executorType === "executor"}
                  onChange={() => handleChange("executorType", "executor")}
                />
                <Text>Разнорабочий</Text>
              </label>
              <label className={styles.checkboxLabel}>
                <input
                  type="radio"
                  name="executorType"
                  checked={filters.executorType === "company"}
                  onChange={() => handleChange("executorType", "company")}
                />
                <Text>Компания</Text>
              </label>
            </div>
          </div>

          <div className={styles.section}>
            <Heading as="h3" className={styles.sectionTitle}>
              Рейтинг
            </Heading>
            <label className={styles.checkboxLabel}>
              <Switch
                checked={filters.highRatingOnly}
                onCheckedChange={(checked) =>
                  handleChange("highRatingOnly", checked)
                }
              />
              <Text>Показать заказы с рейтингом выше 4.5</Text>
            </label>
          </div>
        </>
      )}

      <div className={styles.section}>
        <Button type="submit" variant="primary" size="md">
          Применить
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="md"
          onClick={handleReset}
          className={styles.resetButton}
        >
          Сбросить
        </Button>
      </div>
    </form>
  );
};
