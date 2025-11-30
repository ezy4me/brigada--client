"use client";

import Link from "next/link";

import { cn } from "@/shared/lib/utils";
import BackgroundLines from "@/shared/ui/background/background-lines/BackgroundLines";
import { Button } from "@/shared/ui/button/Button";
import { Heading } from "@/shared/ui/heading/Heading";
import { Section } from "@/shared/ui/section/Section";
import { Text } from "@/shared/ui/text/Text";

import * as styles from "./hero.css";



interface HeroProps {
  className?: string;
}

export const Hero = ({ className }: HeroProps) => {
  const handleBecomeExecutor = () => {
    console.log("Become executor clicked");
  };

  return (
    <Section className={cn(styles.hero, className)}>
      {/* <BackgroundLines /> */}
      <div className={styles.content}>
        <Heading as="h1" className={styles.heading}>
          Получайте строительные заказы{" "}
          <span className={styles.headingAccent}>без рекламы и звонков</span>
        </Heading>

        <Text className={styles.description}>
          Подключитесь к платформе и начните получать заявки
          <span className={styles.descriptionBreak}> </span>
          от реальных клиентов уже сегодня.
        </Text>

        <Text className={styles.subDescription}>Всё официально: чат, договор, документы</Text>

        <div className={styles.buttonWrapper}>
          <Link href="/register">
            <Button onClick={handleBecomeExecutor} size="lg">
              Зарегистрироваться
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};
