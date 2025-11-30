"use client";

import { Button } from "@/shared/ui/button/Button";
import { Card } from "@/shared/ui/card/Card";
import { Heading } from "@/shared/ui/heading/Heading";
import { Text } from "@/shared/ui/text/Text";

import * as styles from "./deleteDataCard.css";

interface DeleteDataCardProps {
  onDeleteData: () => void;
}

export const DeleteDataCard = ({ onDeleteData }: DeleteDataCardProps) => {
  return (
    <Card className={styles.settingCard}>
      <div className={styles.cardHeader}>
        <Heading as="h2" className={styles.cardTitle}>
          Удалить данные
        </Heading>
        <Text className={styles.cardDescription}>
          Удалить все личные данные, связанные с вашим аккаунтом
        </Text>
      </div>
      <div className={styles.cardContent}>
        <Button
          variant="destructive"
          size="md"
          onClick={onDeleteData}
          className={styles.deleteButton}
        >
          Удалить данные
        </Button>
      </div>
    </Card>
  );
};
