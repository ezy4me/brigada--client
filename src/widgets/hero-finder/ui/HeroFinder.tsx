"use client";

import { useState, useEffect } from "react";
import { Search, MapPin, CheckCircle, Users } from "lucide-react";
import { Button } from "@/shared/ui/button/Button";
import { Input } from "@/shared/ui/input/Input";
import { Text } from "@/shared/ui/text/Text";
import { Heading } from "@/shared/ui/heading/Heading";
import { Section } from "@/shared/ui/section/Section";
import * as styles from "./heroFinder.css";

const executorRequests = [
  "ремонт кухни",
  "замена электрики",
  "натяжные потолки",
  "укладка плитки",
  "монтаж водопровода",
];

const customerRequests = [
  "найти плотника",
  "найти электрика",
  "найти сантехника",
  "найти отделочника",
  "найти строителя",
];

export type Role = 'executor' | 'customer';

export interface HeroFinderProps {
  role: Role;
}

export const HeroFinder = ({ role }: HeroFinderProps) => {
  const [city, setCity] = useState<string>("Определение...");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCity("Казань");
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = () => {
    console.log("Поиск:", { role, city, searchQuery });
  };

  const handleChangeCity = () => {
    console.log("Сменить город");
  };

  const title = role === 'executor' ? 'Найти клиента' : 'Найти исполнителя';
  const ctaText = role === 'executor' ? 'Начать поиск' : 'Начать поиск';
  const popularRequests = role === 'executor' ? executorRequests : customerRequests;

  return (
    <Section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.locationBlock} onClick={handleChangeCity}>
          <MapPin className={styles.cityIcon} aria-hidden="true" />
          <Text className={styles.city}>{city}</Text>
        </div>

        <Heading as="h1" className={styles.title}>
          {title}
        </Heading>

        <div className={styles.popularRequests}>
          {popularRequests.map((request, index) => (
            <span
              key={index}
              className={styles.requestTag}
              onClick={() => setSearchQuery(request)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSearchQuery(request);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Поиск по запросу: ${request}`}
            >
              {request}
            </span>
          ))}
        </div>

        <div className={styles.searchContainer}>
          <div className={styles.inputRow}>
            <Input
              placeholder={
                role === 'executor'
                  ? "Что нужно сделать?"
                  : "Кого ищете?"
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="lg"
              rightIcon={<Search />}
              aria-label={
                role === 'executor'
                  ? "Введите запрос для поиска клиентов"
                  : "Введите запрос для поиска исполнителей"
              }
            />
            <Button
              variant="secondary"
              size="lg"
              onClick={handleSearch}
              className={styles.button}
              aria-label={
                role === 'executor'
                  ? "Найти клиентов"
                  : "Найти исполнителей"
              }
            >
              {ctaText}
            </Button>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <CheckCircle
              className={styles.statIcon}
              size={20}
              aria-hidden="true"
            />
            <Text>Более 1000 заказов в {city}</Text>
          </div>
          <div className={styles.statItem}>
            <Users
              className={styles.statIcon}
              size={20}
              aria-hidden="true"
            />
            <Text>Без комиссии</Text>
          </div>
        </div>
      </div>
    </Section>
  );
};