import { HeroFinder } from "@/features/hero-finder/ui/HeroFinder";
import { CallToAction } from "@/widgets/call-to-action/ui/CallToAction";
import { FAQSection } from "@/widgets/faq/ui/FaqSection";
import { HowItWorks } from "@/widgets/how-it-works/ui/HowItWorks";
import { businessPartners, generalPartners } from "@/widgets/partner-carousel/model";
import { PartnerCarousel } from "@/widgets/partner-carousel/ui/PartnerCarousel";
import { WhyChooseUs } from "@/widgets/why-choose-us/ui/WhyChooseUs";

import * as styles from "../role.css";

export default function ExecutorPage() {
  return (
    <div className={styles.page}>
      <HeroFinder role="executor" />
      <HowItWorks />
      <CallToAction
        text="Работайте с клиентами — мы берём остальное на себя"
        buttonText="Стать исполнителем"
        signupHref="/register"
      />
      <PartnerCarousel
        title="С какими бизнесами мы работаем"
        description="Мы работаем только с исполнителями, которые реально выполняют задачи, а не размещают 'пустые' анкеты."
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
