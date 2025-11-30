import { Check } from "lucide-react";

import { Button } from "@/shared/ui/button/Button";
import { Heading } from "@/shared/ui/heading/Heading";
import { Section } from "@/shared/ui/section/Section";
import { Text } from "@/shared/ui/text/Text";


import * as styles from "./tariffs.css";


interface Tariff {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  price: string;
  isPopular?: boolean;
}

const tariffData: Tariff[] = [
  {
    id: "basic",
    title: "Базовый",
    subtitle: "Для старта и теста сервиса",
    features: [
      "Профиль и верификация",
      "Доступ к платформе",
      "До 3 заявок в месяц",
      "Чат и договор",
    ],
    price: "Бесплатно",
  },
  {
    id: "pro",
    title: "PRO",
    subtitle: "Для активной работы с заказами",
    features: [
      "Всё из Базового",
      "До 20 заявок в месяц",
      "Приоритет в каталоге",
      'Значок "PRO"',
      "Портфолио и лицензии",
      "Статистика просмотров",
    ],
    price: "от 3 000 ₽ / 30 дней",
    isPopular: true,
  },
  {
    id: "subscription-plus",
    title: "Подписка +",
    subtitle: "Максимум заявок и возможностей",
    features: [
      "Всё из PRO",
      "Неограниченные заявки",
      "Продвижение и баннер в каталоге",
      "Автообновление профиля",
      "Поддержка 24/7",
      "Аналитика спроса",
    ],
    price: "от 7 000 ₽ / 30 дней",
  },
];

export const Tariffs = () => {
  return (
    <Section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Heading as="h2" className={styles.title}>
            Тарифы
          </Heading>
          <Text className={styles.subtitle}>Простые тарифы — платите только за результат</Text>
        </div>

        <div className={styles.tariffsGrid}>
          {tariffData.map((tariff) => (
            <div key={tariff.id} className={styles.tariffCard}>
              <div className={styles.tariffHeader}>
                <Heading as="h3" size="h3" className={styles.tariffTitle}>
                  {tariff.title}
                </Heading>
                <Text className={styles.tariffSubtitle}>{tariff.subtitle}</Text>
              </div>

              <div className={styles.divider} />

              <ul className={styles.featuresList}>
                {tariff.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    <Check size={16} className={styles.featureItemIcon} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className={styles.divider} />

              <Button variant="black" className={styles.button}>
                <Text className={styles.price}>{tariff.price}</Text>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
