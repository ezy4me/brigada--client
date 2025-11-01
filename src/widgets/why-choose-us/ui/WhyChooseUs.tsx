import * as styles from './whyChooseUs.css';

const benefits = [
  "У нас нет случайных пользователей. Только реальные задачи от частных клиентов.",
  "Вы не тратите деньги на рекламу – только получаете готовые обращения.",
  "Система сама подбирает подходящие заявки, вы просто откликаетесь.",
];

export const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className={styles.title}>Почему нас выбирают?</h2>
          <p className={styles.description}>
            Платформа Бригада.ру устроена так, чтобы заявки приходили именно вам: с учётом специализации, локации и загруженности
          </p>
        </div>

        <ul className={styles.benefitsList}>
          {benefits.map((benefit, index) => (
            <li key={index} className={styles.benefitItem}>
              <div className={styles.benefitIcon}>{index + 1}</div>
              <p className={styles.benefitText}>{benefit}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};