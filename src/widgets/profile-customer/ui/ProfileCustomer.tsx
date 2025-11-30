import { User, Briefcase, Star, Calendar } from "lucide-react";

import { Button } from "@/shared/ui/button/Button";
import { Card } from "@/shared/ui/card/Card";
import { Heading } from "@/shared/ui/heading/Heading";
import { Section } from "@/shared/ui/section/Section";
import { Text } from "@/shared/ui/text/Text";

import * as styles from "./profileCustomer.css";


const stats = [
  { icon: User, label: "Профиль", value: "Активен" },
  { icon: Briefcase, label: "Активные заказы", value: "3" },
  { icon: Star, label: "Отзывы", value: "2" },
  { icon: Calendar, label: "Запланировано", value: "1" },
];

export const ProfileCustomer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Heading as="h1" className={styles.title}>
          Личный кабинет заказчика
        </Heading>
        <Text className={styles.description}>
          Отслеживайте заказы, работайте с исполнителями и управляйте проектами
        </Text>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <Card key={index} className={styles.statCard}>
            <div className={styles.shineElement} />
            <stat.icon className={styles.statIcon} size={32} />
            <div>
              <Text className={styles.statLabel}>{stat.label}</Text>
              <Heading as="h4" className={styles.statValue}>
                {stat.value}
              </Heading>
            </div>
          </Card>
        ))}
      </div>

      <div className={styles.footer}>
        <Button variant="outline" size="md">
          Мои заказы
        </Button>
        <Button variant="primary" size="md">
          Найти исполнителя
        </Button>
      </div>
    </div>
  );
};
