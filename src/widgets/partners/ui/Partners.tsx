"use client";

import { Button } from "@/shared/ui/button/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/shared/ui/section/Section";
import { Heading } from "@/shared/ui/heading/Heading";
import { Text } from "@/shared/ui/text/Text";
import * as styles from "./partners.css";
import { useState } from "react";
import Image from "next/image";

const partnersData = [
  {
    name: "Российские Студенческие Отряды (РСО)",
    image: "/partners/rso.jpg",
    badges: ["Молодёжь", "Образование", "Патриотизм"],
    benefits: [
      "мотивация молодежи",
      "патриотическое воспитание",
      "развитие потенциала",
      "трудоустройство студентов",
      "формирование кадрового резерва",
    ],
  },
  {
    name: "СтройКорпус",
    image: "/partners/noimage.webp",
    badges: ["Строительство", "Инженерия", "Новостройки"],
    benefits: [
      "качественная отделка",
      "надёжные материалы",
      "опытные специалисты",
      "сжатые сроки",
      "гарантия качества",
    ],
  },
];

export const Partners = () => {
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentPartnerIndex((prev) =>
      prev === 0 ? partnersData.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentPartnerIndex((prev) =>
      prev === partnersData.length - 1 ? 0 : prev + 1
    );
  };

  const current = partnersData[currentPartnerIndex];

  return (
    <Section className={styles.section}>
      <div className={styles.intro}>
        <Heading as="h2" className={styles.title}>
          Наши кадровые партнёры
        </Heading>
        <Text className={styles.description}>
          С нами работают строительные компании, поставщики и сервисные
          организации по всей России. Мы ценим партнёрство и развиваем
          рынок вместе.
        </Text>
      </div>

      <div className={styles.partnerSection}>
        <div className={styles.imageContainer}>
          <Image
            src={current.image}
            alt={current.name}
            fill
            className={styles.partnerImage}
            priority
          />
          <div className={styles.overlay} />

          <div className={styles.content}>
            <div className={styles.textBlock}>
              <Heading as="h3" className={styles.partnerName}>
                {current.name}
              </Heading>

              <div className={styles.badges}>
                {current.badges.map((badge, index) => (
                  <span key={index} className={styles.badge}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.navButtons}>
              <Button variant="white" size="sm" onClick={goToPrevious}>
                <ChevronLeft size={16} />
              </Button>
              <Button variant="white" size="sm" onClick={goToNext}>
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};