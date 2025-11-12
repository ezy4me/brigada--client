"use client";

import { useState } from "react";
import { Card } from "@/shared/ui/card/Card";
import { Heading } from "@/shared/ui/heading/Heading";
import { Text } from "@/shared/ui/text/Text";
import { Button } from "@/shared/ui/button/Button";
import { Switch } from "@/shared/ui/switch/Switch";
import * as styles from "./notifications.css";

const initialNotifications = [
  { id: "orders", label: "Новые заказы", enabled: true },
  { id: "messages", label: "Новые сообщения", enabled: true },
  { id: "promotions", label: "Скидки и акции", enabled: false },
  { id: "reminders", label: "Напоминания", enabled: true },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleToggle = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, enabled: !notification.enabled }
          : notification
      )
    );
  };

  return (
    <div className={styles.container}>
      <Heading as="h1" className={styles.title}>
        Уведомления
      </Heading>
      <Text className={styles.description}>
        Выберите, какие уведомления вы хотите получать
      </Text>

      <Card className={styles.notificationsCard}>
        {notifications.map((item) => (
          <div key={item.id} className={styles.notificationItem}>
            <Text className={styles.notificationText}>{item.label}</Text>
            <div className={styles.notificationActions}>
              <Switch
                checked={item.enabled}
                onCheckedChange={() => handleToggle(item.id)}
              />
              <Button variant="ghost" size="sm">
                Изменить
              </Button>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
