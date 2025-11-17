import * as styles from "../role.css";
import { HowItWorks } from "@/widgets/how-it-works/ui/HowItWorks";
import { CallToAction } from "@/widgets/call-to-action/ui/CallToAction";
import { FAQSection } from "@/widgets/faq/ui/FaqSection";
import { PartnerCarousel } from "@/widgets/partner-carousel/ui/PartnerCarousel";
import {
  businessPartners,
  generalPartners,
} from "@/widgets/partner-carousel/model";
import { HeroFinder } from "@/widgets/hero-finder/ui/HeroFinder";
import { PopularServices } from "@/widgets/popular-services/ui/PopularServices";
import { HowToUse } from "@/widgets/how-to-use/ui/HowToUse";

export default function ExecutorPage() {
  return (
    <div className={styles.page}>
      <HeroFinder role="customer" />;
      <PopularServices />
      <HowItWorks />
      <CallToAction
        text="Работайте с исполнителями — мы берём остальное на себя"
        buttonText="Стать заказчиком"
        signupHref="/register"
      />
      <HowToUse />
      {/* <PartnerCarousel
        title="С какими бизнесами мы работаем"
        description="Мы работаем только с исполнителями, которые реально выполняют задачи, а не размещают “пустые” анкеты."
        partners={businessPartners}
      /> */}
      <PartnerCarousel
        title="Наши кадровые партнёры"
        description="С нами работают строительные компании, поставщики и сервисные организации по всей России. Мы ценим партнёрство и развиваем рынок вместе."
        partners={generalPartners}
      />
      <FAQSection />
    </div>
  );
}
