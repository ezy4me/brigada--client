"use client";

import { Search, MapPin, CheckCircle, Loader2, X } from "lucide-react";

import { Button } from "@/shared/ui/button/Button";
import { Heading } from "@/shared/ui/heading/Heading";
import { Input } from "@/shared/ui/input/Input";
import { Section } from "@/shared/ui/section/Section";
import { Text } from "@/shared/ui/text/Text";

import { getHeroFinderConfig } from "../lib/config";
import { UserRole } from "../lib/types";
import { useHeroFinder } from "../lib/use-hero-finder";

import * as styles from "./heroFinder.css";

export interface HeroFinderProps {
  role: UserRole;
  defaultCity?: string;
  className?: string;
}

export const HeroFinder = ({ role, defaultCity, className }: HeroFinderProps) => {
  const {
    city,
    searchQuery,
    isDetectingCity,
    setSearchQuery,
    handleSearch,
    handlePopularRequest,
    handleChangeCity,
    clearSearch,
  } = useHeroFinder({ role, defaultCity });

  const config = getHeroFinderConfig(role);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    clearSearch();
  };

  const showClearButton = searchQuery.length > 0;

  return (
    <Section className={`${styles.section} ${className || ""}`}>
      <div className={styles.content}>
        <div className={styles.top}>
          <Heading as="h1" className={styles.title}>
            {config.title}
          </Heading>

          <button
            className={styles.locationBlock}
            onClick={handleChangeCity}
            type="button"
            aria-label={isDetectingCity ? "Определение местоположения" : `Сменить город: ${city}`}
          >
            {isDetectingCity ? (
              <Loader2 className={styles.cityIcon} size={16} />
            ) : (
              <MapPin className={styles.cityIcon} aria-hidden="true" />
            )}
            <span className={styles.city}>
              {isDetectingCity ? "Определение..." : city}
            </span>
          </button>
        </div>

        <div className={styles.popularRequests}>
          {config.popularRequests.map((request, index) => (
            <button
              key={index}
              type="button"
              className={styles.requestTag}
              onClick={() => handlePopularRequest(request)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handlePopularRequest(request);
                }
              }}
            >
              {request}
            </button>
          ))}
        </div>

        <div className={styles.searchContainer}>
          <div className={styles.inputRow}>
            <div className={styles.inputWrapper}>
              <Input
                placeholder={config.placeholder}
                value={searchQuery}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                size="lg"
                rightIcon={
                  showClearButton ? (
                    <button 
                      type="button" 
                      onClick={handleClearSearch} 
                      className={styles.clearButton}
                      aria-label="Очистить поиск"
                    >
                      <X size={16} />
                    </button>
                  ) : (
                    <Search size={20} />
                  )
                }
                aria-label={config.placeholder}
              />
            </div>
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={handleSearch} 
              className={styles.searchButton}
            >
              Найти
            </Button>
          </div>
        </div>

        <div className={styles.stats}>
          {config.stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <CheckCircle className={styles.statIcon} size={20} aria-hidden="true" />
              <Text size="body2">
                {stat} {index === 0 && `в ${city}`}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};