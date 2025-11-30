import { HeroFinder } from "@/features/hero-finder/ui/HeroFinder";
import { CallToAction } from "@/widgets/call-to-action/ui/CallToAction";
import { FAQSection } from "@/widgets/faq/ui/FaqSection";
import { HowItWorks } from "@/widgets/how-it-works/ui/HowItWorks";
import { HowToUse } from "@/widgets/how-to-use/ui/HowToUse";
import { businessPartners, generalPartners } from "@/widgets/partner-carousel/model";
import { PartnerCarousel } from "@/widgets/partner-carousel/ui/PartnerCarousel";
import { PopularServices } from "@/widgets/popular-services/ui/PopularServices";

import * as styles from "../role.css";

export default function CustomerPage() {
  return (
    <div className={styles.page}>
      <HeroFinder role="customer" />
      <PopularServices />
      <HowItWorks />
      <CallToAction
        text="Работайте с исполнителями — мы берём остальное на себя"
        buttonText="Стать заказчиком"
        signupHref="/register"
      />
      <HowToUse />
      <PartnerCarousel
        title="Наши кадровые партнёры"
        description="С нами работают строительные компании, поставщики и сервисные организации по всей России. Мы ценим партнёрство и развиваем рынок вместе."
        partners={generalPartners}
      />
      <FAQSection />
    </div>
  );
}
