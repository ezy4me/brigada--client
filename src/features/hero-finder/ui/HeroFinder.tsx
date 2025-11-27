"use client";

import { Search, MapPin, CheckCircle, Users, Loader2 } from "lucide-react";
import { Button } from "@/shared/ui/button/Button";
import { Input } from "@/shared/ui/input/Input";
import { Text } from "@/shared/ui/text/Text";
import { Heading } from "@/shared/ui/heading/Heading";
import { Section } from "@/shared/ui/section/Section";
import { useHeroFinder } from "../lib/use-hero-finder";
import { getHeroFinderConfig } from "../lib/config";
import { UserRole } from "../lib/types";
import * as styles from "./heroFinder.css";

export interface HeroFinderProps {
  role: UserRole;
  defaultCity?: string;
  className?: string;
}

export const HeroFinder = ({
  role,
  defaultCity,
  className,
}: HeroFinderProps) => {
  const {
    city,
    searchQuery,
    isDetectingCity,
    setSearchQuery,
    handleSearch,
    handlePopularRequest,
    handleChangeCity,
  } = useHeroFinder({ role, defaultCity });

  const config = getHeroFinderConfig(role);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Section className={`${styles.section} ${className || ""}`}>
      <div className={styles.content}>
        <div className={styles.top}>
          <Heading as="h1" className={styles.title}>
            {config.title}
          </Heading>

          <div
            className={styles.locationBlock}
            onClick={handleChangeCity}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === "Enter" && handleChangeCity()}
          >
            {isDetectingCity ? (
              <Loader2 className={styles.cityIcon} size={16} />
            ) : (
              <MapPin className={styles.cityIcon} aria-hidden="true" />
            )}
            <Text className={styles.city}>
              {isDetectingCity ? "Определение..." : city}
            </Text>
          </div>
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
            <Input
              placeholder={config.placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              size="lg"
              rightIcon={<Search />}
              aria-label={config.placeholder}
            />
            <Button
              variant="secondary"
              size="lg"
              onClick={handleSearch}
              className={styles.button}
              disabled={!searchQuery.trim()}
            >
              {config.searchLabel}
            </Button>
          </div>
        </div>

        <div className={styles.stats}>
          {config.stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <CheckCircle
                className={styles.statIcon}
                size={20}
                aria-hidden="true"
              />
              <Text>
                {stat} {index === 0 && `в ${city}`}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
