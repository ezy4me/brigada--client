import { HeroFinder } from "@/features/hero-finder/ui/HeroFinder";
import { CallToAction } from "@/widgets/call-to-action/ui/CallToAction";
import { FAQSection } from "@/widgets/faq/ui/FaqSection";
import { GetStarted } from "@/widgets/get-started/ui/GetStarted";
import { HowItWorks } from "@/widgets/how-it-works/ui/HowItWorks";
import { businessPartners, generalPartners } from "@/widgets/partner-carousel/model";
import { PartnerCarousel } from "@/widgets/partner-carousel/ui/PartnerCarousel";
import { Tariffs } from "@/widgets/tariffs/ui/Tariffs";
import { WhyChooseUs } from "@/widgets/why-choose-us/ui/WhyChooseUs";

import * as styles from "../role.css";

export default function CompanyPage() {
  return (
    <div className={styles.page}>
      <HeroFinder role="company" />

      <HowItWorks />
      <CallToAction
        text="Работайте с клиентами — мы берём остальное на себя"
        buttonText="Создать компанию"
        signupHref="/register"
      />
      <PartnerCarousel
        title="С какими бизнесами мы работаем"
        description="Мы работаем только с исполнителями, которые реально выполняют задачи, а не размещают 'пустые' анкеты."
        partners={businessPartners}
      />
      <WhyChooseUs />
      <Tariffs />
      <PartnerCarousel
        title="Наши кадровые партнёры"
        description="С нами работают строительные компании, поставщики и сервисные организации по всей России. Мы ценим партнёрство и развиваем рынок вместе."
        partners={generalPartners}
      />
      <FAQSection />
      <GetStarted />
    </div>
  );
}
