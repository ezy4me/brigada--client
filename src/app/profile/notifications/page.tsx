"use client";

import { Heading } from "@/shared/ui/heading/Heading";

import * as styles from "./notifications.css";

export default function NotificationsPage() {


  return (
    <div className={styles.container}>
      <Heading as="h1" className={styles.title}>
        Уведомления (теперь в настройках)
      </Heading>
    </div>
  );
}
