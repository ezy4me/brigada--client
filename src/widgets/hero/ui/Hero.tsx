"use client";

import { FC } from "react";
import { Button } from "@/shared/ui/button/button";
import { cn } from "@/shared/lib/utils";
import * as styles from "./hero.css";

export interface HeroProps {
  className?: string;
}

export const Hero: FC<HeroProps> = ({ className }) => {
  const handleBecomeExecutor = () => {
    console.log("Become executor clicked");
  };

  return (
    <section className={cn(styles.hero, className)}>
      {/* <div className={styles.backgroundPattern} /> */}

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Получайте строительные заказы{" "}
            <span className={styles.headingAccent}>
              без рекламы и звонков
            </span>
          </h1>

          <p className={styles.description}>
            Подключитесь к платформе и начните получать заявки
            <span className={styles.descriptionBreak}>
              {" "}
              <br />{" "}
            </span>
            от реальных клиентов уже сегодня.
          </p>

          <p className={styles.subDescription}>
            Всё официально: чат, договор, документы
          </p>

          <div className={styles.buttonWrapper}>
            <Button onClick={handleBecomeExecutor} size="lg">
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
