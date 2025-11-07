import { Card, CardContent } from "@/shared/ui/card/Card";
import { Button } from "@/shared/ui/button/Button";
import { Text } from "@/shared/ui/text/Text";
import { Heading } from "@/shared/ui/heading/Heading";
import { Section } from "@/shared/ui/section/Section";
import { User, Briefcase, Star, Calendar } from "lucide-react";
import * as styles from "./executorDashboard.css";

export default function ExecutorDashboardPage() {
  return (
    <Section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Heading as="h1" className={styles.title}>
            Личный кабинет исполнителя
          </Heading>
          <Text className={styles.description}>
            Управляйте своими заказами, профилем и статистикой
          </Text>
        </div>

        <div className={styles.statsGrid}>
          <Card className={styles.statCard}>
            <User className={styles.statIcon} size={32} />
            <div>
              <Text className={styles.statLabel}>Ваши профили</Text>
              <Heading as="h3" className={styles.statValue}>
                1
              </Heading>
            </div>
          </Card>

          <Card className={styles.statCard}>
            <Briefcase className={styles.statIcon} size={32} />
            <div>
              <Text className={styles.statLabel}>Активные заказы</Text>
              <Heading as="h3" className={styles.statValue}>
                5
              </Heading>
            </div>
          </Card>

          <Card className={styles.statCard}>
            <Star className={styles.statIcon} size={32} />
            <div>
              <Text className={styles.statLabel}>Рейтинг</Text>
              <Heading as="h3" className={styles.statValue}>
                4.8
              </Heading>
            </div>
          </Card>

          <Card className={styles.statCard}>
            <Calendar className={styles.statIcon} size={32} />
            <div>
              <Text className={styles.statLabel}>Запланировано</Text>
              <Heading as="h3" className={styles.statValue}>
                3
              </Heading>
            </div>
          </Card>
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
    </Section>
  );
}