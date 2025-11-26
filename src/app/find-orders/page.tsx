import { HeroFinder } from "@/widgets/hero-finder/ui/HeroFinder";
import { CallToAction } from "@/widgets/call-to-action/ui/CallToAction";
import { Section } from "@/shared/ui/section/Section";
import * as styles from "./findOrders.css";
import { OrderSearch } from "@/widgets/order-search/ui/OrderSearch";
import { Header } from "@/widgets/header/ui/Header";
import { Footer } from "@/widgets/footer/ui/Footer";

export default function FindOrdersPage() {
  const userRole = "executor";

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
