import { Card } from "@/shared/ui/card/Card";
import { Heading } from "@/shared/ui/heading/Heading";
import { Section } from "@/shared/ui/section/Section";
import { Text } from "@/shared/ui/text/Text";

import { data } from "../model/data";

import * as styles from "./whyChooseUs.css";

export const WhyChooseUs = () => {
  return (
    <Section className={styles.section}>
      <div className={styles.header}>
        <Heading as="h2" className={styles.title}>
          Гарантия заказов
        </Heading>
        <Text className={styles.subtitle}>
          Платформа Бригада.ру устроена так, чтобы заявки приходили именно вам: с учётом
          специализации, локации и загруженности
        </Text>
      </div>

      <div className={styles.benefitsList}>
        {data.map((item, index) => (
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
