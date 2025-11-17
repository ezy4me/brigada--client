import { Card } from "@/shared/ui/card/Card";
import { Section } from "@/shared/ui/section/Section";
import { Heading } from "@/shared/ui/heading/Heading";
import { Text } from "@/shared/ui/text/Text";
import * as styles from "./whyChooseUs.css";
import { UserCheck, Mail, Reply } from "lucide-react";

const benefits = [
  {
    icon: <UserCheck size={32} />,
    text: "У нас нет случайных пользователей. Только реальные задачи от частных клиентов.",
  },
  {
    icon: <Mail size={32} />,
    text: "Вы не тратите деньги на рекламу – только получаете готовые обращения.",
  },
  {
    icon: <Reply size={32} />,
    text: "Система сама подбирает подходящие заявки, вы просто откликаетесь.",
  },
];

export const WhyChooseUs = () => {
  return (
    <Section className={styles.section}>
      <div className={styles.header}>
        <Heading as="h2" className={styles.title}>
          Гарантия заказов
        </Heading>
        <Text className={styles.subtitle}>
          Платформа Бригада.ру устроена так, чтобы заявки приходили именно вам: с
          учётом специализации, локации и загруженности
        </Text>
      </div>

      <div className={styles.benefitsList}>
        {benefits.map((item, index) => (
          <Card key={index} className={styles.benefitItem}>
            <div className={styles.shineElement} />
            <div className={styles.benefitIcon}>{item.icon}</div>
            <Text className={styles.benefitText}>{item.text}</Text>
          </Card>
        ))}
      </div>
    </Section>
  );
};