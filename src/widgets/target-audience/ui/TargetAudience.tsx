import * as styles from "./targetAudience.css";
import { Card } from "@/shared/ui/card/Card";
import { Section } from "@/shared/ui/section/Section";
import Link from "next/link";
import { data } from "../model/data";

export const TargetAudience = () => {
  return (
    <Section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Для кого предназначена наша система?
          </h2>
          <p className={styles.subtitle}>
            Платформа Бригада.ру устроена так, чтобы заявки приходили
            именно вам: с учётом специализации, локации и загруженности
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {data.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Link key={index} href={item.href} className={styles.cardLink}>
                <Card className={styles.card}>
                  <div className={styles.shineElement} />
                  <IconComponent className={styles.icon} size={64} />
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
};