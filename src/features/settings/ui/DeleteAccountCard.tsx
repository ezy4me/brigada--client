"use client";

import { Button } from "@/shared/ui/button/Button";
import { Card } from "@/shared/ui/card/Card";
import { Heading } from "@/shared/ui/heading/Heading";
import { Text } from "@/shared/ui/text/Text";

import * as styles from "./deleteAccountCard.css";

interface DeleteAccountCardProps {
  onDeleteAccount: () => void;
}

export const DeleteAccountCard = ({ onDeleteAccount }: DeleteAccountCardProps) => {
  return (
    <Card className={styles.settingCard}>
      <div className={styles.cardHeader}>
        <Heading as="h2" className={styles.cardTitle}>
          Удалить аккаунт
        </Heading>
        <Text className={styles.cardDescription}>
          Удалить ваш аккаунт и все связанные данные навсегда
        </Text>
      </div>
      <div className={styles.cardContent}>
        <Button
          variant="destructive"
          size="md"
          onClick={onDeleteAccount}
          className={styles.deleteButton}
        >
          Удалить аккаунт
        </Button>
      </div>
    </Card>
  );
};
