"use client";

import { useState, useMemo } from "react";

import { useSearchParams, useRouter } from "next/navigation";

import { Filter } from "lucide-react";

import { OrderFilters } from "@/features/search/ui/order-filters/OrderFilters";
import { OrderList } from "@/features/search/ui/order-list/OrderList";
import { getMockOrders } from "@/shared/lib/mocks/orders";
import { FilterValues } from "@/shared/lib/types/order.types";
import { UserRole } from "@/shared/lib/types/user.types";
import { Button } from "@/shared/ui/button/Button";
import { Drawer } from "@/shared/ui/drawer/Drawer";

import * as styles from "./orderSearch.css";

interface OrderSearchProps {
  role: UserRole;
}

export const OrderSearch = ({ role }: OrderSearchProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const queryFromUrl = searchParams?.get("q") || "";
  const cityFromUrl = searchParams?.get("city") || "";
  
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const [filters, setFilters] = useState<FilterValues>({
    minPrice: "",
    maxPrice: "",
    region: cityFromUrl,
    keywords: [],
    executorType: undefined,
    highRatingOnly: false,
    contentType: role === "company" ? "jobs" : undefined,
  });

  const allOrders = useMemo(() => getMockOrders(role), [role]);

  const filteredOrders = useMemo(() => {
    const currentRegion = cityFromUrl || filters.region;

    if (
      !queryFromUrl &&
      filters.keywords.length === 0 &&
      !currentRegion &&
      !filters.minPrice &&
      !filters.maxPrice
    ) {
      return allOrders;
    }

    return allOrders.filter((order) => {
      if (filters.minPrice && order.price < parseInt(filters.minPrice)) return false;
      if (filters.maxPrice && order.price > parseInt(filters.maxPrice)) return false;

      if (currentRegion && !order.region.toLowerCase().includes(currentRegion.toLowerCase())) {
        return false;
      }

      if (queryFromUrl) {
        const searchableText =
          `${order.title} ${order.description} ${order.keywords.join(" ")}`.toLowerCase();
        if (!searchableText.includes(queryFromUrl.toLowerCase())) {
          return false;
        }
      }

      if (filters.keywords.length > 0) {
        const searchableText =
          `${order.title} ${order.description} ${order.keywords.join(" ")}`.toLowerCase();
        const hasAllKeywords = filters.keywords.every((keyword) =>
          searchableText.includes(keyword.toLowerCase())
        );
        if (!hasAllKeywords) {
          return false;
        }
      }

      if (filters.executorType && order.author.type !== filters.executorType) {
        return false;
      }

      if (filters.highRatingOnly && order.rating < 4.5) {
        return false;
      }

      if (filters.contentType === "jobs" && order.orderType !== "job") return false;
      if (filters.contentType === "services" && order.orderType !== "service") return false;

      return true;
    });
  }, [allOrders, filters, queryFromUrl, cityFromUrl]);

  const handleFiltersChange = (newFilters: FilterValues) => {
    setFilters(newFilters);

    const params = new URLSearchParams(searchParams?.toString());

    if (queryFromUrl) {
      params.set("q", queryFromUrl);
    }

    if (newFilters.region) {
      params.set("city", newFilters.region);
    } else {
      params.delete("city");
    }

    params.set("role", role);

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
    if (queryFromUrl) params.set("q", queryFromUrl);
    params.set("role", role);
    router.replace(`/find-orders?${params.toString()}`, { scroll: false });
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.minPrice) count++;
    if (filters.maxPrice) count++;
    if (filters.region || cityFromUrl) count++;
    if (filters.keywords.length > 0) count++;
    if (filters.executorType) count++;
    if (filters.highRatingOnly) count++;
    if (filters.contentType) count++;
    return count;
  };

  const activeFiltersCount = getActiveFiltersCount();

  return (
    <div className={styles.container}>
      <div className={styles.mobileFilterButtonContainer}>
        <Button
          variant="outline"
          size="lg"
          leftIcon={<Filter size={20} />}
          onClick={() => setShowMobileFilters(true)}
          className={styles.mobileFilterButton}
        >
          Фильтры
          {activeFiltersCount > 0 && (
            <span className={styles.filterBadge}>{activeFiltersCount}</span>
          )}
        </Button>
      </div>

      <aside className={styles.sidebar}>
        <OrderFilters
          role={role}
          filters={{ ...filters, region: cityFromUrl || filters.region }}
          onFiltersChange={handleFiltersChange}
          onResetFilters={handleResetFilters}
        />
      </aside>

      <main className={styles.content}>
        <OrderList orders={filteredOrders} role={role} />
      </main>

      <Drawer
        isOpen={showMobileFilters}
        onClose={() => setShowMobileFilters(false)}
        title="Фильтры"
        size="full"
        position="right"
      >
        <div className={styles.drawerContent}>
          <OrderFilters
            role={role}
            filters={{ ...filters, region: cityFromUrl || filters.region }}
            onFiltersChange={(newFilters) => {
              handleFiltersChange(newFilters);
              setShowMobileFilters(false);
            }}
            onResetFilters={() => {
              handleResetFilters();
              setShowMobileFilters(false);
            }}
          />
        </div>
      </Drawer>
    </div>
  );
};