"use client";

import { OrderCard } from "@/features/search/ui/order-card/OrderCard";
import type { Order } from "@/shared/lib/types/order.types";
import { Text } from "@/shared/ui/text/Text";
import * as styles from "./orderList.css";
import { UserRole } from "@/shared/lib/types/user.types";

interface OrderListProps {
  orders: Order[];
  role: UserRole;
}

export const OrderList = ({ orders, role }: OrderListProps) => {
  if (orders.length === 0) {
    return (
      <div className={styles.empty}>
        <div className={styles.emptyIcon}>🔍</div>
        <Text className={styles.emptyTitle}>Ничего не найдено</Text>
        <Text className={styles.emptyDescription}>
          Попробуйте изменить параметры поиска или сбросить фильтры
        </Text>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text className={styles.resultsCount}>
          Найдено {orders.length} {getResultsText(orders.length)}
        </Text>
      </div>

      <div className={styles.list}>
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} role={role} />
        ))}
      </div>
    </div>
  );
};

const getResultsText = (count: number) => {
  if (count % 10 === 1 && count % 100 !== 11) return "объявление";
  if (
    count % 10 >= 2 &&
    count % 10 <= 4 &&
    (count % 100 < 10 || count % 100 >= 20)
  )
    return "объявления";
  return "объявлений";
};
