"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { OrderFilters } from "@/features/search/ui/order-filters/OrderFilters";
import { OrderList } from "@/features/search/ui/order-list/OrderList";
import { getMockOrders } from "@/shared/lib/mocks/orders";
import * as styles from "./orderSearch.css";
import { FilterValues } from "@/shared/lib/types/order.types";
import { UserRole } from "@/shared/lib/types/user.types";

interface OrderSearchProps {
  role: UserRole;
}

export const OrderSearch = ({ role }: OrderSearchProps) => {
  const searchParams = useSearchParams();
  const queryFromUrl = searchParams.get("q") || "";
  const cityFromUrl = searchParams.get("city") || "";

  const [filters, setFilters] = useState<FilterValues>({
    minPrice: "",
    maxPrice: "",
    region: cityFromUrl,
    keywords: queryFromUrl,
    executorType: undefined,
    highRatingOnly: false,
    contentType: role === "company" ? "jobs" : undefined,
  });

  useEffect(() => {
    if (queryFromUrl || cityFromUrl) {
      setFilters((prev) => ({
        ...prev,
        region: cityFromUrl || prev.region,
        keywords: queryFromUrl || prev.keywords,
      }));
    }
  }, [queryFromUrl, cityFromUrl]);

  const allOrders = useMemo(() => getMockOrders(role), [role]);

  const filteredOrders = useMemo(() => {
    return allOrders.filter((order) => {
      if (filters.minPrice && order.price < parseInt(filters.minPrice))
        return false;
      if (filters.maxPrice && order.price > parseInt(filters.maxPrice))
        return false;

      if (
        filters.region &&
        !order.region.toLowerCase().includes(filters.region.toLowerCase())
      ) {
        return false;
      }

      if (filters.keywords) {
        const keywords = filters.keywords.toLowerCase().split(" ");
        const searchableText =
          `${order.title} ${order.description} ${order.keywords.join(" ")}`.toLowerCase();
        if (
          !keywords.every((keyword) => searchableText.includes(keyword))
        ) {
          return false;
        }
      }

      if (
        filters.executorType &&
        order.author.type !== filters.executorType
      ) {
        return false;
      }

      if (filters.highRatingOnly && order.rating < 4.5) {
        return false;
      }

      if (filters.contentType === "jobs" && order.orderType !== "job")
        return false;
      if (
        filters.contentType === "services" &&
        order.orderType !== "service"
      )
        return false;

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
      region: cityFromUrl,
      keywords: queryFromUrl,
      executorType: undefined,
      highRatingOnly: false,
      contentType: role === "company" ? "jobs" : undefined,
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
