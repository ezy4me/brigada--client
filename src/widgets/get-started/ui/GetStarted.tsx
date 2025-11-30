"use client";

import { useRouter } from "next/navigation";

import { ArrowRight } from "lucide-react";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button/Button";
import { Heading } from "@/shared/ui/heading/Heading";
import { Section } from "@/shared/ui/section/Section";
import { Text } from "@/shared/ui/text/Text";

import * as styles from "./getStarted.css";


export interface GetStartedProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
  className?: string;
  imageUrl?: string;
}

export const GetStarted = ({
  title = "Начните получать заказы уже сегодня",
  description = "Создайте профиль, пройдите верификацию и получите первые заявки без вложений в рекламу. Мы делаем всё, чтобы вы просто работали и зарабатывали.",
  buttonLabel = "Зарегистрироваться",
  buttonHref = "/register",
  className,
  imageUrl = "/buildings.png",
}: GetStartedProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(buttonHref);
  };

  return (
    <Section className={cn(styles.section, className)}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <Heading as="h2" className={styles.title}>
            {title}
          </Heading>
          <Text className={styles.description}>{description}</Text>
          <Button
            size="lg"
            rightIcon={<ArrowRight size={20} />}
            onClick={handleClick}
            className={styles.buttonLink}
          >
            {buttonLabel}
          </Button>
        </div>

        <div className={styles.imagePlaceholder}>
          <div className={styles.backgroundImage} style={{ backgroundImage: `url(${imageUrl})` }} />
        </div>
      </div>
    </Section>
  );
};
