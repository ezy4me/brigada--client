import { User, Briefcase, Building } from "lucide-react";
import * as styles from "./targetAudience.css";
import { Card, CardDescription, CardTitle } from "@/shared/ui/card/Card";

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
        {/* ✅ Заголовок секции */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Для кого предназначена наша система?
          </h2>
          <p className={styles.description}>
            Платформа Бригада.ру устроена так, чтобы заявки приходили
            именно вам: с учётом специализации, локации и загруженности
          </p>
        </div>

        {/* ✅ Сетка карточек */}
        <div className={styles.cardsGrid}>
          {audienceData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              // ✅ Используем Card из shared/ui
              <Card key={index} className={styles.card}>
                {/* ✅ Элемент блика */}
                <div className={styles.shineElement} />

                {/* ✅ Иконка */}
                <IconComponent className={styles.icon} size={64} />

                {/* ✅ Заголовок карточки */}
                <CardTitle className={styles.cardTitle}>
                  {item.title}
                </CardTitle>

                {/* ✅ Описание карточки */}
                <CardDescription className={styles.cardDescription}>
                  {item.description}
                </CardDescription>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};