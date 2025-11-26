import { HeroFinder } from "@/widgets/hero-finder/ui/HeroFinder";
import { OrderSearch } from "@/widgets/order-search/ui/OrderSearch";
import { Section } from "@/shared/ui/section/Section";
import { Header } from "@/widgets/header/ui/Header";
import { Footer } from "@/widgets/footer/ui/Footer";
import * as styles from "./findOrders.css";

export default function FindOrdersPage() {
  const userRole: "customer" | "executor" | "company" = "company";

  return (
    <div className={styles.page}>
      <Header />
      <HeroFinder role={userRole} />
      <Section>
        <OrderSearch role={userRole} />
      </Section>
      <Footer />
    </div>
  );
}