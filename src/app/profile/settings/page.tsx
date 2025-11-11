"use client"

import { Card } from "@/shared/ui/card/Card";
import { Heading } from "@/shared/ui/heading/Heading";
import { Text } from "@/shared/ui/text/Text";
import { Button } from "@/shared/ui/button/Button";
import { Section } from "@/shared/ui/section/Section";
import * as styles from "./settings.css";
import { RoleSelector } from "@/features/role-selector/ui/RoleSelector";

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
        {/* <div className={styles.header}> */}
          <Heading as="h1" className={styles.title}>
            Настройки профиля
          </Heading>
          <Text className={styles.description}>
            Управляйте своими данными, ролями и безопасностью
          </Text>
        {/* </div> */}

        <Card className={styles.settingCard}>
          <div className={styles.cardHeader}>
            <Heading as="h2" className={styles.cardTitle}>
              Сменить роль
            </Heading>
            <Text className={styles.cardDescription}>
              Выберите, под какой ролью вы хотите работать
            </Text>
          </div>
          <div className={styles.cardContent}>
            <RoleSelector
              initialRole="executors" 
              onRoleChange={(role) => console.log("New role:", role)}
            />
          </div>
        </Card>

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
              onClick={handleDeleteData}
              className={styles.deleteButton}
            >
              Удалить данные
            </Button>
          </div>
        </Card>

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
              onClick={handleDeleteAccount}
              className={styles.deleteButton}
            >
              Удалить аккаунт
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}