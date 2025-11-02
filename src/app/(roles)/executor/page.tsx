import { HeroExecutor } from "@/widgets/hero-executor/ui/HeroExecutor";
import * as styles from "../role.css";
import { HowItWorks } from "@/widgets/how-it-works/ui/HowItWorks";
import { CallToAction } from "@/widgets/call-to-action/ui/CallToAction";
import { FAQSection } from "@/widgets/faq/ui/FaqSection";
import { Partners } from "@/widgets/partners/ui/Partners";
import { WhyChooseUs } from "@/widgets/why-choose-us/ui/WhyChooseUs";

export default function ExecutorPage() {
  return (
    <div className={styles.page}>
      <HeroExecutor />
      <HowItWorks />
      <CallToAction text="Работайте с клиентами — мы берём остальное на себя" />
      <WhyChooseUs/>
      <Partners/>
      <FAQSection/>
    </div>
  );
}
