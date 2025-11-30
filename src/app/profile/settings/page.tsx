"use client";

import { DeleteAccountCard } from "@/features/settings/ui/DeleteAccountCard";
import { DeleteDataCard } from "@/features/settings/ui/DeleteDataCard";
import { NotificationSettings } from "@/features/settings/ui/NotificationSettings";
import { Heading } from "@/shared/ui/heading/Heading";
import { Text } from "@/shared/ui/text/Text";

import * as styles from "./settings.css";

export default function SettingsPage() {
  const handleDeleteAccount = () => {
    if (confirm("Вы уверены, что хотите удалить аккаунт? Это действие необратимо.")) {
      console.log("Deleting account...");
    }
  };

  const handleDeleteData = () => {
    if (confirm("Вы уверены, что хотите удалить все свои данные?")) {
      console.log("Deleting data...");
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <Heading as="h1" className={styles.title}>
          Настройки профиля
        </Heading>
        <Text className={styles.description}>
          Управляйте своими данными, ролями и безопасностью
        </Text>

        <NotificationSettings />

        <DeleteDataCard onDeleteData={handleDeleteData} />

        <DeleteAccountCard onDeleteAccount={handleDeleteAccount} />
      </div>
    </div>
  );
}
