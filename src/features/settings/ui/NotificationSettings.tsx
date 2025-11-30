"use client";

import { useState } from "react";

import { Button } from "@/shared/ui/button/Button";
import { Card } from "@/shared/ui/card/Card";
import { Heading } from "@/shared/ui/heading/Heading";
import { Switch } from "@/shared/ui/switch/Switch";
import { Text } from "@/shared/ui/text/Text";

import * as styles from "./notificationSettings.css";

const initialNotifications = [
  { id: "orders", label: "Новые заказы", enabled: true },
  { id: "messages", label: "Новые сообщения", enabled: true },
  { id: "promotions", label: "Скидки и акции", enabled: false },
  { id: "reminders", label: "Напоминания", enabled: true },
];

export const NotificationSettings = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleToggle = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, enabled: !notification.enabled } : notification
      )
    );
  };

  return (
    <Card className={styles.notificationsCard}>
      <div className={styles.cardHeader}>
        <Heading as="h2" className={styles.cardTitle}>
          Уведомления
        </Heading>
        <Text className={styles.cardDescription}>
          Выберите, какие уведомления вы хотите получать
        </Text>
      </div>
      <div className={styles.cardContent}>
        {notifications.map((item) => (
          <div key={item.id} className={styles.notificationItem}>
            <Text className={styles.notificationText}>{item.label}</Text>
            <div className={styles.notificationActions}>
              <Switch checked={item.enabled} onCheckedChange={() => handleToggle(item.id)} />
            </div>
          </div>
        ))}
      </div>
      <Button className={styles.cardButton} variant="primary" size="md">
        Изменить
      </Button>
    </Card>
  );
};
