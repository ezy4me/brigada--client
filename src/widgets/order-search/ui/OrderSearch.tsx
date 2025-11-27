"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
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
  const router = useRouter();
  const queryFromUrl = searchParams.get("q") || "";
  const cityFromUrl = searchParams.get("city") || "";

  const [filters, setFilters] = useState<FilterValues>({
    minPrice: "",
    maxPrice: "",
    region: cityFromUrl,
    keywords: [], 
    executorType: undefined,
    highRatingOnly: false,
    contentType: role === "company" ? "jobs" : undefined,
  });

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      region: cityFromUrl,
    }));
  }, [cityFromUrl]);

  const allOrders = useMemo(() => getMockOrders(role), [role]);

  const filteredOrders = useMemo(() => {
    if (!queryFromUrl && filters.keywords.length === 0 && !filters.region && !filters.minPrice && !filters.maxPrice) {
      return allOrders;
    }

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

      if (queryFromUrl) {
        const searchableText = `${order.title} ${order.description} ${order.keywords.join(" ")}`.toLowerCase();
        if (!searchableText.includes(queryFromUrl.toLowerCase())) {
          return false;
        }
      }

      if (filters.keywords.length > 0) {
        const searchableText = `${order.title} ${order.description} ${order.keywords.join(" ")}`.toLowerCase();
        const hasAllKeywords = filters.keywords.every(keyword => 
          searchableText.includes(keyword.toLowerCase())
        );
        if (!hasAllKeywords) {
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
  }, [allOrders, filters, queryFromUrl]);

  const handleFiltersChange = (newFilters: FilterValues) => {
    setFilters(newFilters);
    
    const params = new URLSearchParams(searchParams.toString());
    
    if (queryFromUrl) {
      params.set('q', queryFromUrl);
    }
    
    if (newFilters.region) {
      params.set('city', newFilters.region);
    } else {
      params.delete('city');
    }
    
    params.set('role', role);
    
    router.replace(`/find-orders?${params.toString()}`, { scroll: false });
  };

  const handleResetFilters = () => {
    const resetFilters: FilterValues = {
      minPrice: "",
      maxPrice: "",
      region: "",
      keywords: [],
      executorType: undefined,
      highRatingOnly: false,
      contentType: role === "company" ? "jobs" : undefined,
    };
    
    setFilters(resetFilters);
    
    const params = new URLSearchParams();
    if (queryFromUrl) params.set('q', queryFromUrl);
    params.set('role', role);
    router.replace(`/find-orders?${params.toString()}`, { scroll: false });
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