import { User, Briefcase, Star, Calendar } from "lucide-react";

import { Card } from "@/shared/ui/card/Card";
import { Heading } from "@/shared/ui/heading/Heading";
import { Text } from "@/shared/ui/text/Text";

import * as styles from "./dashboardHome.css";

const stats = [
  { icon: User, label: "Ваши профили", value: "1" },
  { icon: Briefcase, label: "Активные заказы", value: "5" },
  { icon: Star, label: "Рейтинг", value: "4.8" },
  { icon: Calendar, label: "Запланировано", value: "3" },
];

export const DashboardHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Heading as="h1" className={styles.title}>
          Добро пожаловать!
        </Heading>
        <Text className={styles.description}>
          Выберите действие в меню слева или перейдите на главную
        </Text>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <Card key={index} className={styles.statCard}>
            <stat.icon className={styles.statIcon} size={32} />
            <div>
              <Text className={styles.statLabel}>{stat.label}</Text>
              <Heading as="h3" className={styles.statValue}>
                {stat.value}
              </Heading>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
