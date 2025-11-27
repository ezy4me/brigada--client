"use client";

import { HeroFinder } from "@/features/hero-finder/ui/HeroFinder";
import { OrderSearch } from "@/widgets/order-search/ui/OrderSearch";
import { Section } from "@/shared/ui/section/Section";
import { useUserRoleWithFallback } from "@/features/auth/lib/use-user-role";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import * as styles from "./findOrders.css";

export default function FindOrdersPage() {
  const searchParams = useSearchParams();
  const userRole = useUserRoleWithFallback("executor");

  const query = searchParams.get("q") || "";
  const city = searchParams.get("city") || "";
  const roleFromUrl = searchParams.get("role") as any;

  const effectiveRole = roleFromUrl || userRole;

  return (
    <div className={styles.page}>
    
      <HeroFinder role={effectiveRole} defaultCity={city} />
      <Section>
        <OrderSearch role={effectiveRole} />
      </Section>
    </div>
  );
}
