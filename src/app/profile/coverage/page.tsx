"use client";

import { useState } from "react";

import { Search, SearchCheck, X } from "lucide-react";

import { Button } from "@/shared/ui/button/Button";
import { Card } from "@/shared/ui/card/Card";
import { Heading } from "@/shared/ui/heading/Heading";
import { Input } from "@/shared/ui/input/Input";
import { Text } from "@/shared/ui/text/Text";


import * as styles from "./coverage.css";

const regions = [
  "Москва",
  "Санкт-Петербург",
  "Новосибирск",
  "Екатеринбург",
  "Казань",
  "Нижний Новгород",
  "Челябинск",
  "Самара",
  "Омск",
  "Республика Татарстан",
  "Республика Башкортостан",
  "Краснодарский край",
  "Ростовская область",
  "Республика Саха (Якутия)",
  "Хабаровский край",
];

export default function CoveragePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);

  const filteredRegions = regions.filter((region) =>
    region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addRegion = (region: string) => {
    if (!selectedRegions.includes(region)) {
      setSelectedRegions([...selectedRegions, region]);
      setSearchQuery("");
    }
  };

  const removeRegion = (region: string) => {
    setSelectedRegions(selectedRegions.filter((r) => r !== region));
  };

  return (
    <div className={styles.container}>
      <Heading as="h1" className={styles.title}>
        Зоны охвата
      </Heading>
      <Text className={styles.description}>Укажите регионы, где вы готовы работать</Text>

      <Card className={styles.coverageCard}>
        <div className={styles.selectedRegions}>
          {/* <Text as="p" size="body1">Выбранные зоны:</Text> */}
          {selectedRegions.map((region) => (
            <div key={region} className={styles.regionBadge}>
              <Text className={styles.regionBadgeText}>{region}</Text>
              <Button
                variant="white"
                size="sm"
                onClick={() => removeRegion(region)}
                className={styles.removeButton}
              >
                <X size={16} />
              </Button>
            </div>
          ))}
        </div>

        <Input
          label="Поиск региона или города"
          placeholder="Например: Москва, Татарстан..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          rightIcon={<Search />}
          className={styles.searchInput}
        />

        {searchQuery && (
          <div className={styles.regionList}>
            {filteredRegions.map((region) => (
              <div key={region} className={styles.regionItem}>
                <Text>{region}</Text>
                {!selectedRegions.includes(region) && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addRegion(region)}
                    className={styles.addButton}
                  >
                    Выбрать
                  </Button>
                )}
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
