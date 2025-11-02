"use client"

import { Section } from "@/shared/ui/section/Section";
import { Heading } from "@/shared/ui/heading/Heading";
import { Text } from "@/shared/ui/text/Text";
import { cn } from "@/shared/lib/utils";
import * as styles from "./hero.css";
import BackgroundLines from "@/shared/ui/background-lines/BackgroundLines";
import { Button } from "@/shared/ui/button/Button";

interface HeroProps {
  className?: string;
}

export const Hero = ({ className }: HeroProps) => {
  const handleBecomeExecutor = () => {
    console.log("Become executor clicked");
  };

  return (
    <Section className={cn(styles.hero, className)}>
      <BackgroundLines />
      <div className={styles.content}>
        <Heading as="h1" className={styles.heading}>
          Получайте строительные заказы{" "}
          <span className={styles.headingAccent}>
            без рекламы и звонков
          </span>
        </Heading>

        <Text className={styles.description}>
          Подключитесь к платформе и начните получать заявки
          <span className={styles.descriptionBreak}> </span>
          от реальных клиентов уже сегодня.
        </Text>

        <Text className={styles.subDescription}>
          Всё официально: чат, договор, документы
        </Text>

        <div className={styles.buttonWrapper}>
          <Button onClick={handleBecomeExecutor} size="lg">
            Зарегистрироваться
          </Button>
        </div>
      </div>
    </Section>
  );
};