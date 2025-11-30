import { FAQSection } from "@/widgets/faq/ui/FaqSection";
import { Footer } from "@/widgets/footer/ui/Footer";
import { Header } from "@/widgets/header/ui/Header";
import { Hero } from "@/widgets/hero/ui/Hero";
import { generalPartners } from "@/widgets/partner-carousel/model";
import { PartnerCarousel } from "@/widgets/partner-carousel/ui/PartnerCarousel";
import { TargetAudience } from "@/widgets/target-audience/ui/TargetAudience";
import { WhyChooseUs } from "@/widgets/why-choose-us/ui/WhyChooseUs";

import * as styles from "./page.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <Hero />

        <TargetAudience />

        <PartnerCarousel
          title="Наши кадровые партнёры"
          description="С нами работают строительные компании, поставщики и сервисные организации по всей России. Мы ценим партнёрство и развиваем рынок вместе."
          partners={generalPartners}
        />

        <WhyChooseUs />

        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
