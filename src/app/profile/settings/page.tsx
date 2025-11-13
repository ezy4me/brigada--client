"use client";

import { Card } from "@/shared/ui/card/Card";
import { Heading } from "@/shared/ui/heading/Heading";
import { Text } from "@/shared/ui/text/Text";
import { Button } from "@/shared/ui/button/Button";
import { Avatar } from "@/shared/ui/avatar/Avatar";
import { User, Building, Briefcase } from "lucide-react";
import * as styles from "./settings.css";
import { RoleSelector } from "@/features/role-selector/ui/RoleSelector";

const accounts = [
  {
    id: 1,
    name: "Иван Петров",
    role: "Исполнитель",
    avatar: "/user-avatar.jpg",
  },
  {
    id: 2,
    name: "Иван Петров",
    role: "Заказчик",
    avatar: "/user-avatar.jpg",
  },
];

export default function SettingsPage() {
  const handleDeleteAccount = () => {
    if (
      confirm(
        "Вы уверены, что хотите удалить аккаунт? Это действие необратимо."
      )
    ) {
      console.log("Deleting account...");
    }
  };

  const handleDeleteData = () => {
    if (confirm("Вы уверены, что хотите удалить все свои данные?")) {
      console.log("Deleting data...");
    }
  };

  const handleSwitchAccount = (accountId: number) => {
    console.log(`Switching to account ID: ${accountId}`);
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

        <Card className={styles.settingCard}>
          <div className={styles.cardHeader}>
            <Heading as="h2" className={styles.cardTitle}>
              Ваши аккаунты
            </Heading>
            <Text className={styles.cardDescription}>
              Переключайтесь между аккаунтами разных ролей
            </Text>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.accountsList}>
              {accounts.map((account) => {
                let IconComponent;
                if (account.role === "executor") IconComponent = User;
                else if (account.role === "company")
                  IconComponent = Building;
                else if (account.role === "customer")
                  IconComponent = Briefcase;
                else IconComponent = User;

                return (
                  <div key={account.id} className={styles.accountItem}>
                    <div className={styles.accountInfo}>
                      <Avatar
                        src={account.avatar}
                        alt={account.name}
                        className={styles.accountAvatar}
                      />
                      <div>
                        <Text className={styles.accountName}>
                          {account.name}
                        </Text>
                        <Text className={styles.accountRole}>
                          {account.role}
                        </Text>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSwitchAccount(account.id)}
                    >
                      Сменить
                    </Button>
                  </div>
                );
              })}
            </div>
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
