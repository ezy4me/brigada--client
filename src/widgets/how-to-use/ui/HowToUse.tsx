import Image from "next/image";

import { Card, CardContent } from "@/shared/ui/card/Card";
import { Heading } from "@/shared/ui/heading/Heading";
import { Section } from "@/shared/ui/section/Section";
import { Text } from "@/shared/ui/text/Text";

import * as styles from "./howToUse.css";

const steps = [
  {
    number: 1,
    image: "/howitworks/step1.png",
    title: "Укажите, какая услуга вам нужна",
    description:
      "Введите тип работ — ремонт квартиры, сантехника, отделка или что-то другое. Можно сформировать задачу вручную или с помощью AI",
  },
  {
    number: 2,
    image: "/howitworks/step2.png",
    title: "Выбор из надёжных подрядчиков",
    description:
      "Вы видите только исполнителей, которые прошли верификацию. Лицензии, документы и профиль — всё наглядно",
  },
  {
    number: 3,
    image: "/howitworks/step3.png",
    title: "Общайтесь и заключайте договор",
    description:
      "Уточняйте детали, согласовывайте стоимость, фиксируйте договорённости — всё прямо внутри платформы",
  },
];

export const HowToUse = () => {
  return (
    <Section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Heading as="h2" className={styles.title}>
            Как пользоваться
          </Heading>
          <Text className={styles.subtitle}>
            Бригада.ру — это сервис для быстрого подбора подрядчиков, с защитой сделки и прозрачными
            условиями
          </Text>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <Card key={index} className={styles.stepCard}>
              <div className={styles.shineElement} />
              <Image
                src={step.image}
                alt={step.title}
                width={400}
                height={240}
                className={styles.stepImage}
                priority={index < 4}
              />

              <CardContent>
                <Heading as="h3" className={styles.stepTitle}>
                  {step.title}
                </Heading>
                <Text className={styles.stepDescription}>{step.description}</Text>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
