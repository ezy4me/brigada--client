"use client";

import { Input } from "@/shared/ui/input/Input";
import { Button } from "@/shared/ui/button/Button";
import { Text } from "@/shared/ui/text/Text";
import { Heading } from "@/shared/ui/heading/Heading";
import { Switch } from "@/shared/ui/switch/Switch";
import { X, Plus } from "lucide-react";
import type { UserRole, FilterValues } from "@/shared/lib/types/order.types";
import * as styles from "./orderFilters.css";
import { useState } from "react";

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
  const [keywordInput, setKeywordInput] = useState("");

  const handleChange = (name: keyof FilterValues, value: any) => {
    onFiltersChange({
      ...filters,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleReset = () => {
    onResetFilters();
  };

  const handleAddKeyword = () => {
    if (keywordInput.trim() && !filters.keywords.includes(keywordInput.trim())) {
      handleChange("keywords", [...filters.keywords, keywordInput.trim()]);
      setKeywordInput("");
    }
  };

  const handleRemoveKeyword = (keywordToRemove: string) => {
    handleChange(
      "keywords",
      filters.keywords.filter((keyword) => keyword !== keywordToRemove)
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddKeyword();
    }
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
        <div className={styles.keywordInputContainer}>
          <Input
            placeholder="Добавьте слово"
            value={keywordInput}
            onChange={(e) => setKeywordInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className={styles.input}
            rightIcon={
              <button
                type="button"
                onClick={handleAddKeyword}
                className={styles.addKeywordButton}
                disabled={!keywordInput.trim()}
              >
                <Plus size={16} />
              </button>
            }
          />
        </div>
        
        {filters.keywords.length > 0 && (
          <div className={styles.keywordsList}>
            {filters.keywords.map((keyword, index) => (
              <div key={index} className={styles.keywordTag}>
                <Text className={styles.keywordText}>{keyword}</Text>
                <button
                  type="button"
                  onClick={() => handleRemoveKeyword(keyword)}
                  className={styles.removeKeywordButton}
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
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