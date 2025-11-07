import { Card, CardContent } from "@/shared/ui/card/Card";
import { Button } from "@/shared/ui/button/Button";
import { Text } from "@/shared/ui/text/Text";
import { Heading } from "@/shared/ui/heading/Heading";
import { Section } from "@/shared/ui/section/Section";
import { User, Briefcase, Building, Calendar } from "lucide-react";
import * as styles from "./companyDashboard.css";

export default function CompanyDashboardPage() {
  return (
    <Section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Heading as="h1" className={styles.title}>
            Личный кабинет компании
          </Heading>
          <Text className={styles.description}>
            Управляйте командой, проектами и заказами
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
                12
              </Heading>
            </div>
          </Card>

          <Card className={styles.statCard}>
            <Building className={styles.statIcon} size={32} />
            <div>
              <Text className={styles.statLabel}>Команда</Text>
              <Heading as="h3" className={styles.statValue}>
                24
              </Heading>
            </div>
          </Card>

          <Card className={styles.statCard}>
            <Calendar className={styles.statIcon} size={32} />
            <div>
              <Text className={styles.statLabel}>Запланировано</Text>
              <Heading as="h3" className={styles.statValue}>
                5
              </Heading>
            </div>
          </Card>
        </div>

        <div className={styles.footer}>
          <Button variant="outline" size="md">
            Управление командой
          </Button>
          <Button variant="primary" size="md">
            Найти проекты
          </Button>
        </div>
      </div>
    </Section>
  );
}