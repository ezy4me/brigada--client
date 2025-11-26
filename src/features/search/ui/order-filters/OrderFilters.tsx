"use client";

import { Input } from "@/shared/ui/input/Input";
import { Button } from "@/shared/ui/button/Button";
import { Text } from "@/shared/ui/text/Text";
import { Heading } from "@/shared/ui/heading/Heading";
import { Switch } from "@/shared/ui/switch/Switch";
import type { UserRole, FilterValues } from "@/shared/lib/types/order.types";
import * as styles from "./orderFilters.css";

export interface OrderFiltersProps {
  role: UserRole;
  filters: FilterValues;
  onFiltersChange: (filters: FilterValues) => void;
  onResetFilters: () => void;
}

export const OrderFilters = ({
  role,
  filters,
  onFiltersChange,
  onResetFilters,
}: OrderFiltersProps) => {
  const handleChange = (name: keyof FilterValues, value: any) => {
    onFiltersChange({
      ...filters,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Фильтры применяются автоматически через state
  };

  const handleReset = () => {
    onResetFilters();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.header}>
        <Heading as="h3" className={styles.title}>Фильтры</Heading>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleReset}
          className={styles.resetButton}
        >
          Сбросить
        </Button>
      </div>

      <div className={styles.section}>
        <Heading as="h4" className={styles.sectionTitle}>Цена</Heading>
        <div className={styles.rangeInputs}>
          <Input
            size="sm"
            type="number"
            placeholder="От"
            value={filters.minPrice}
            onChange={(e) => handleChange("minPrice", e.target.value)}
            className={styles.input}
          />
          <Text className={styles.dash}>—</Text>
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
        <Heading as="h4" className={styles.sectionTitle}>Регион</Heading>
        <Input
          placeholder="Например: Москва"
          value={filters.region}
          onChange={(e) => handleChange("region", e.target.value)}
          className={styles.input}
        />
      </div>

      <div className={styles.section}>
        <Heading as="h4" className={styles.sectionTitle}>Ключевые слова</Heading>
        <Input
          placeholder="Введите ключевые слова"
          value={filters.keywords}
          onChange={(e) => handleChange("keywords", e.target.value)}
          className={styles.input}
        />
      </div>

      {role === "customer" && (
        <>
          <div className={styles.section}>
            <Heading as="h4" className={styles.sectionTitle}>Тип исполнителя</Heading>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="executorType"
                  checked={filters.executorType === "executor"}
                  onChange={() => handleChange("executorType", "executor")}
                />
                <Text>Частный мастер</Text>
              </label>
              <label className={styles.radioLabel}>
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
            <Heading as="h4" className={styles.sectionTitle}>Рейтинг</Heading>
            <label className={styles.switchLabel}>
              <Switch
                checked={filters.highRatingOnly}
                onCheckedChange={(checked) =>
                  handleChange("highRatingOnly", checked)
                }
              />
              <Text>Только с рейтингом выше 4.5</Text>
            </label>
          </div>
        </>
      )}

      {role === "company" && (
        <div className={styles.section}>
          <Heading as="h4" className={styles.sectionTitle}>Тип контента</Heading>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="contentType"
                checked={filters.contentType === "jobs"}
                onChange={() => handleChange("contentType", "jobs")}
              />
              <Text>Заказы (для выполнения)</Text>
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="contentType"
                checked={filters.contentType === "services"}
                onChange={() => handleChange("contentType", "services")}
              />
              <Text>Услуги (для анализа)</Text>
            </label>
          </div>
        </div>
      )}

      <div className={styles.actions}>
        <Button type="submit" variant="primary" size="md" className={styles.applyButton}>
          Применить фильтры
        </Button>
      </div>
    </form>
  );
};