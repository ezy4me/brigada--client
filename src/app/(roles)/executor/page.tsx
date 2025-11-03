import { HeroExecutor } from "@/widgets/hero-executor/ui/HeroExecutor";
import * as styles from "../role.css";
import { HowItWorks } from "@/widgets/how-it-works/ui/HowItWorks";
import { CallToAction } from "@/widgets/call-to-action/ui/CallToAction";
import { FAQSection } from "@/widgets/faq/ui/FaqSection";
import { WhyChooseUs } from "@/widgets/why-choose-us/ui/WhyChooseUs";
import { PartnerCarousel } from "@/widgets/partner-carousel/ui/PartnerCarousel";
import {
  businessPartners,
  generalPartners,
} from "@/widgets/partner-carousel/model";

export default function ExecutorPage() {
  return (
    <div className={styles.page}>
      <HeroExecutor />

      <HowItWorks />

      <CallToAction text="Работайте с клиентами — мы берём остальное на себя" />

      <PartnerCarousel
        title="С какими бизнесами мы работаем"
        description="Мы работаем только с исполнителями, которые реально выполняют задачи, а не размещают “пустые” анкеты."
        partners={businessPartners}
      />

      <WhyChooseUs />

      <PartnerCarousel
        title="Наши кадровые партнёры"
        description="С нами работают строительные компании, поставщики и сервисные организации по всей России. Мы ценим партнёрство и развиваем рынок вместе."
        partners={generalPartners}
      />
      
      <FAQSection />
    </div>
  );
}
