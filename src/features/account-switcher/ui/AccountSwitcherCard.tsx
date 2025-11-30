"use client";

import { User, Building, Briefcase } from "lucide-react";

import { Avatar } from "@/shared/ui/avatar/Avatar";
import { Button } from "@/shared/ui/button/Button";
import { Card } from "@/shared/ui/card/Card";
import { Heading } from "@/shared/ui/heading/Heading";
import { Text } from "@/shared/ui/text/Text";


import * as styles from "./accountSwitcherCard.css";

interface Account {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

interface AccountSwitcherCardProps {
  accounts: Account[];
}

export const AccountSwitcherCard = ({ accounts }: AccountSwitcherCardProps) => {
  const handleSwitchAccount = (accountId: number) => {
    console.log(`Switching to account ID: ${accountId}`);
  };

  return (
    <Card className={styles.settingCard}>
      <div className={styles.cardHeader}>
        <Heading as="h2" className={styles.cardTitle}>
          Ваши аккаунты
        </Heading>
        <Text className={styles.cardDescription}>Переключайтесь между аккаунтами разных ролей</Text>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.accountsList}>
          {accounts.map((account) => {
            let IconComponent;
            if (account.role === "executor") IconComponent = User;
            else if (account.role === "company") IconComponent = Building;
            else if (account.role === "customer") IconComponent = Briefcase;
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
                    <Text className={styles.accountName}>{account.name}</Text>
                    <Text className={styles.accountRole}>{account.role}</Text>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => handleSwitchAccount(account.id)}>
                  Сменить
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};
