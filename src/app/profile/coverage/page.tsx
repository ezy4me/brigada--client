import { Card } from "@/shared/ui/card/Card";
import { Heading } from "@/shared/ui/heading/Heading";
import { Text } from "@/shared/ui/text/Text";
import { Button } from "@/shared/ui/button/Button";
import * as styles from "./coverage.css";

export default function CoveragePage() {
  return (
    <div className={styles.container}>
      <Heading as="h1" className={styles.title}>
        Зоны охвата
      </Heading>
      <Text className={styles.description}>
        Укажите регионы, где вы готовы работать
      </Text>

      <Card className={styles.coverageCard}>
        <div className={styles.regionList}>
          <div className={styles.regionItem}>
            <Text>Москва</Text>
            <Button variant="ghost" size="sm">Удалить</Button>
          </div>
          <div className={styles.regionItem}>
            <Text>Санкт-Петербург</Text>
            <Button variant="ghost" size="sm">Удалить</Button>
          </div>
        </div>

        <Button variant="outline" size="md" className={styles.addButton}>
          + Добавить регион
        </Button>
      </Card>
    </div>
  );
}