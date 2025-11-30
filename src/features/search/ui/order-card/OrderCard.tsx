// src/features/search/ui/order-card/OrderCard.tsx
"use client";

import { Star, MapPin, Calendar, User } from "lucide-react";

import type { Order, UserRole } from "@/shared/lib/types/order.types";
import { Button } from "@/shared/ui/button/Button";
import { Card } from "@/shared/ui/card/Card";
import { Heading } from "@/shared/ui/heading/Heading";
import { Text } from "@/shared/ui/text/Text";


import * as styles from "./orderCard.css";

interface OrderCardProps {
  order: Order;
  role: UserRole;
}

export const OrderCard = ({ order, role }: OrderCardProps) => {
  const getActionButtonText = () => {
    switch (role) {
      case "executor":
        return order.author.type === "customer" ? "Откликнуться" : "Смотреть";

      case "customer":
        return order.author.type !== "customer" ? "Заказать" : "Смотреть";

      case "company":
        if (order.author.type === "customer") {
          return "Взять в работу";
        } else if (order.author.type === "executor") {
          return "Анализировать";
        } else {
          return "Смотреть";
        }

      default:
        return "Подробнее";
    }
  };

  const getAuthorTypeText = (type: string) => {
    switch (type) {
      case "customer":
        return "Заказчик";
      case "executor":
        return "Исполнитель";
      case "company":
        return "Компания";
      default:
        return type;
    }
  };

  const handleAction = () => {
    console.log("Действие с заказом:", { orderId: order.id, role, action: getActionButtonText() });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ru-RU");
  };

  return (
    <Card className={styles.card}>
      <div className={styles.shineElement} />

      <div className={styles.header}>
        <div className={styles.titleSection}>
          <Heading as="h3" className={styles.title}>
            {order.title}
          </Heading>
          <div className={styles.rating}>
            <Star size={16} fill="currentColor" />
            <Text>{order.rating.toFixed(1)}</Text>
          </div>
        </div>
        <div className={styles.price}>
          <Text className={styles.priceText}>{order.price.toLocaleString()} ₽</Text>
        </div>
      </div>

      <div className={styles.author}>
        <User size={16} />
        <Text className={styles.authorName}>{order.author.name}</Text>
        <Text className={styles.authorType}>({getAuthorTypeText(order.author.type)})</Text>
      </div>

      <Text className={styles.description}>{order.description}</Text>

      <div className={styles.details}>
        <div className={styles.detail}>
          <MapPin size={16} />
          <Text>{order.region}</Text>
        </div>
        <div className={styles.detail}>
          <Calendar size={16} />
          <Text>{formatDate(order.createdAt)}</Text>
        </div>
      </div>

      <div className={styles.keywords}>
        {order.keywords.map((keyword, index) => (
          <span key={index} className={styles.keyword}>
            {keyword}
          </span>
        ))}
      </div>

      <div className={styles.footer}>
        <Button variant="primary" size="sm" onClick={handleAction} className={styles.actionButton}>
          {getActionButtonText()}
        </Button>
      </div>
    </Card>
  );
};
