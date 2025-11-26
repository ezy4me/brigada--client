"use client";

import { useState, useMemo } from "react";
import { OrderFilters } from "@/features/search/ui/order-filters/OrderFilters";
import { OrderList } from "@/features/search/ui/order-list/OrderList";
import { getMockOrders } from "@/shared/lib/mocks/orders";
import type { UserRole, FilterValues } from "@/shared/lib/types/order.types";
import * as styles from "./orderSearch.css";

interface OrderSearchProps {
  role: UserRole;
}

export const OrderSearch = ({ role }: OrderSearchProps) => {
  const [filters, setFilters] = useState<FilterValues>({
    minPrice: "",
    maxPrice: "",
    region: "",
    keywords: "",
    executorType: undefined,
    highRatingOnly: false,
    contentType: role === "company" ? "jobs" : undefined
  });

  const allOrders = useMemo(() => getMockOrders(role), [role]);
  
  const filteredOrders = useMemo(() => {
    return allOrders.filter(order => {
      // Фильтрация по цене
      if (filters.minPrice && order.price < parseInt(filters.minPrice)) return false;
      if (filters.maxPrice && order.price > parseInt(filters.maxPrice)) return false;

      // Фильтрация по региону
      if (filters.region && !order.region.toLowerCase().includes(filters.region.toLowerCase())) {
        return false;
      }

      // Фильтрация по ключевым словам
      if (filters.keywords) {
        const keywords = filters.keywords.toLowerCase().split(" ");
        const searchableText = `${order.title} ${order.description} ${order.keywords.join(" ")}`.toLowerCase();
        if (!keywords.every(keyword => searchableText.includes(keyword))) {
          return false;
        }
      }

      // Фильтрация по типу исполнителя (для customer)
      if (filters.executorType && order.author.type !== filters.executorType) {
        return false;
      }

      // Фильтрация по рейтингу
      if (filters.highRatingOnly && order.rating < 4.5) {
        return false;
      }

      // Фильтрация по типу контента (для company)
      if (filters.contentType === "jobs" && order.orderType !== "job") return false;
      if (filters.contentType === "services" && order.orderType !== "service") return false;

      return true;
    });
  }, [allOrders, filters]);

  const handleFiltersChange = (newFilters: FilterValues) => {
    setFilters(newFilters);
  };

  const handleResetFilters = () => {
    setFilters({
      minPrice: "",
      maxPrice: "",
      region: "",
      keywords: "",
      executorType: undefined,
      highRatingOnly: false,
      contentType: role === "company" ? "jobs" : undefined
    });
  };

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <OrderFilters 
          role={role}
          filters={filters}
          onFiltersChange={handleFiltersChange}
          onResetFilters={handleResetFilters}
        />
      </aside>
      
      <main className={styles.content}>
        <OrderList orders={filteredOrders} role={role} />
      </main>
    </div>
  );
};