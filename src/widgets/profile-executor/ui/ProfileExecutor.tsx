import { User, Briefcase, Star, Calendar } from "lucide-react";

import { Button } from "@/shared/ui/button/Button";
import { Card } from "@/shared/ui/card/Card";
import { Heading } from "@/shared/ui/heading/Heading";
import { Text } from "@/shared/ui/text/Text";

import * as styles from "./profileExecutor.css";


const stats = [
  { icon: User, label: "Профиль", value: "Активен" },
  { icon: Briefcase, label: "Активные заказы", value: "5" },
  { icon: Star, label: "Рейтинг", value: "4.8" },
  { icon: Calendar, label: "Запланировано", value: "3" },
];

export const ProfileExecutor = () => {
  return (
    <div className={styles.container}>
      <Heading as="h1" className={styles.title}>
        Личный кабинет исполнителя
      </Heading>
      <Text className={styles.description}>Управляйте своими заказами, профилем и статистикой</Text>

      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.shineElement} />
            <stat.icon className={styles.statIcon} size={32} />
            <div>
              <Text className={styles.statLabel}>{stat.label}</Text>
              <Heading as="h4" size="h4" className={styles.statValue}>
                {stat.value}
              </Heading>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <Button variant="outline" size="md">
          Настройки профиля
        </Button>
        <Button variant="primary" size="md">
          Найти заказы
        </Button>
      </div>
    </div>
  );
};
