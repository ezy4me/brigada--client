import { Card } from "@/shared/ui/card/card";
import { User, Briefcase, Building } from "lucide-react";
import * as styles from "./targetAudience.css";

const audienceData = [
  {
    icon: User,
    title: "Заказчик",
    description: "Публикуйте заказы и находите подходящих специалистов",
  },
  {
    icon: Briefcase,
    title: "Разнорабочий",
    description: "Находите подходящие заказы и выполняйте их",
  },
  {
    icon: Building,
    title: "Компания",
    description: "Находите подходящие заказы и выполняйте их",
  },
];

export const TargetAudience = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Для кого предназначена наша система?
          </h2>
          <p className={styles.description}>
            Платформа Бригада.ру устроена так, чтобы заявки приходили
            именно вам: с учётом специализации, локации и загруженности
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {audienceData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className={styles.card}>
                <div className={styles.shineElement} />
                
                <IconComponent className={styles.icon} size={64} />
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};