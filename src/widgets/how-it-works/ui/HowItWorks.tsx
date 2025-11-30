import { User, FileText, MessageCircle, FileSignature } from "lucide-react";

import { Card } from "@/shared/ui/card/Card";
import { Heading } from "@/shared/ui/heading/Heading";
import { Section } from "@/shared/ui/section/Section";
import { Text } from "@/shared/ui/text/Text";

import * as styles from "./how-it-works.css";

const steps = [
  {
    icon: User,
    number: 1,
    title: "Создайте профиль и пройдите верификацию",
    description: "Мы проверим ваши документы, чтобы клиенту было спокойно",
  },
  {
    icon: FileText,
    number: 2,
    title: "Получайте подходящие заявки",
    description: "Сервис сам подбирает заказы по вашей специализации и региону",
  },
  {
    icon: MessageCircle,
    number: 3,
    title: "Общайтесь с исполнителями в чате",
    description: "Уточняйте детали и фиксируйте условия прямо на платформе",
  },
  {
    icon: FileSignature,
    number: 4,
    title: "Заключайте договор и выполняйте заказы",
    description: "Платформа обеспечивает прозрачность и защиту обеих сторон",
  },
];

export const HowItWorks = () => {
  return (
    <Section className={styles.section}>
      <div className={styles.header}>
        <Heading as="h2" className={styles.title}>
          Как это работает
        </Heading>
        <Text className={styles.subtitle}>Работайте спокойно — всё автоматизировано</Text>
      </div>

      <div className={styles.stepsGrid}>
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <Card key={index} className={styles.stepCard}>
              <div className={styles.shineElement} />

              <div className={styles.stepNumber}>{step.number}</div>

              {/* <IconComponent className={styles.stepIcon} size={40} /> */}

              <Heading as="h3" className={styles.stepTitle}>
                {step.title}
              </Heading>

              <Text className={styles.stepDescription}>{step.description}</Text>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
