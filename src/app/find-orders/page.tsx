"use client";

import { useSearchParams } from "next/navigation";

import { useUserRoleWithFallback } from "@/features/auth/lib/use-user-role";
import { HeroFinder } from "@/features/hero-finder/ui/HeroFinder";
import { Section } from "@/shared/ui/section/Section";
import { Footer } from "@/widgets/footer/ui/Footer";
import { Header } from "@/widgets/header/ui/Header";
import { OrderSearch } from "@/widgets/order-search/ui/OrderSearch";

import * as styles from "./findOrders.css";

export default function FindOrdersPage() {
  const searchParams = useSearchParams();
  const userRole = useUserRoleWithFallback("executor");

  const query = searchParams?.get("q") || "";
  const city = searchParams?.get("city") || "";
  const roleFromUrl = searchParams?.get("role") as any;

  const effectiveRole = roleFromUrl || userRole;

  return (
    <div className={styles.page}>
      <Header />
      <HeroFinder role={effectiveRole} defaultCity={city} />
      <Section>
        <OrderSearch role={effectiveRole} />
      </Section>
      <Footer />
    </div>
  );
}
