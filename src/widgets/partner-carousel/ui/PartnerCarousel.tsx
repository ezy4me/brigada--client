"use client";

import { Button } from "@/shared/ui/button/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/shared/ui/section/Section";
import { Heading } from "@/shared/ui/heading/Heading";
import { Text } from "@/shared/ui/text/Text";
import * as styles from "./partnerCarousel.css";
import { useState } from "react";
import Image from "next/image";

export interface Partner {
  name: string;
  image: string;
  badges: string[];
  benefits: string[];
}

interface PartnerCarouselProps {
  title: string;
  description: string;
  partners: Partner[];
  className?: string;
}

export const PartnerCarousel = ({
  title,
  description,
  partners,
  className,
}: PartnerCarouselProps) => {
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentPartnerIndex((prev) =>
      prev === 0 ? partners.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentPartnerIndex((prev) =>
      prev === partners.length - 1 ? 0 : prev + 1
    );
  };

  const current = partners[currentPartnerIndex];

  return (
    <Section className={className}>
      <div className={styles.header}>
        <Heading as="h2" className={styles.title}>
          {title}
        </Heading>
        <Text className={styles.subtitle}>{description}</Text>
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