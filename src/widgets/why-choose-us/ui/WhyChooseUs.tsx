import { Card } from "@/shared/ui/card/card";
import * as styles from "./whyChooseUs.css";
import { UserCheck, Mail, Reply } from "lucide-react";

const benefits = [
  "У нас нет случайных пользователей. Только реальные задачи от частных клиентов.",
  "Вы не тратите деньги на рекламу – только получаете готовые обращения.",
  "Система сама подбирает подходящие заявки, вы просто откликаетесь.",
];

const icons = [
  <UserCheck size={32} />,
  <Mail size={32} />,
  <Reply size={32} />,
];

export const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className={styles.title}>Почему нас выбирают?</h2>
          <p className={styles.description}>
            Платформа Бригада.ру устроена так, чтобы заявки приходили
            именно вам: с учётом специализации, локации и загруженности
          </p>
        </div>

        <div className={styles.benefitsList}>
          {benefits.map((benefit, index) => (
            <Card key={index} className={styles.benefitItem}>
              <div className={styles.shineElement} />
              <div className={styles.benefitIcon}>{icons[index]}</div>
              <p className={styles.benefitText}>{benefit}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
