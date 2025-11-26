"use client";

import { useState } from "react";
import { OrderFilters } from "@/widgets/order-filters/ui/OrderFilters";
import { OrderCard } from "@/widgets/order-card/ui/OrderCard";
import { mockOrders } from "@/entities/order/model/order.mock";
import { Order } from "@/entities/order/model/order.types";
import * as styles from "./orderSearch.css";

export interface OrderSearchProps {
  role: "executor" | "customer" | "company" | "guest";
}

export const OrderSearch = ({ role }: OrderSearchProps) => {
  const [orders, setOrders] = useState<Order[]>(mockOrders);

  const handleApplyFilters = (filters: any) => {
    console.log("Applied filters:", filters);
  };

  const handleResetFilters = () => {
    console.log("Filters reset");
    setOrders(mockOrders);
  };

  return (
    <div className={styles.container}>
      <div className={styles.filtersColumn}>
        <OrderFilters
          role={role}
          onApplyFilters={handleApplyFilters}
          onResetFilters={handleResetFilters}
        />
      </div>

      <div className={styles.resultsColumn}>
        {orders.map((order) => (
          <OrderCard
            key={order.id}
            title={order.title}
            description={order.description}
            rating={order.rating}
            authorName={order.author.name}
            authorType={order.author.type}
            region={order.region}
            price={order.price}
            keywords={order.keywords}
            onShowContact={() => console.log("Show contact for", order.id)}
          />
        ))}
      </div>
    </div>
  );
};
