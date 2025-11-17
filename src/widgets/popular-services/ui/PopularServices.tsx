import { Card } from "@/shared/ui/card/Card";
import { Text } from "@/shared/ui/text/Text";
import { Heading } from "@/shared/ui/heading/Heading";
import { Section } from "@/shared/ui/section/Section";
import Image from "next/image";
import * as styles from "./popularServices.css";

const services = [
  {
    image: "/services/remont-santekhnika.png",
    title: "Ремонт ванных комнат",
    description:
      "Найдите мастера для ремонта санузла, замены плитки, установки сантехники и разводки коммуникаций. Работы под ключ с гарантией качества",
  },
  {
    image: "/services/elektromontazh.png",
    title: "Электро-монтажные работы",
    description:
      "Закажите услуги электрика: монтаж проводки, розеток, освещения и электрощитов. Быстро, безопасно, с оформлением договора",
  },
  {
    image: "/services/ustanovka-okon.png",
    title: "Установка окон и дверей",
    description:
      "Установка пластиковых окон, входных и межкомнатных дверей. Чистый монтаж, утепление, фурнитура — всё под контролем",
  },
  {
    image: "/services/otdelka-pomeshcheniy.png",
    title: "Отделка помещений",
    description:
      "Штукатурка, шпаклёвка, покраска стен и потолков, оклейка обоев. Подберите мастеров с опытом и отзывами",
  },
];

export const PopularServices = () => {
  return (
    <Section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Heading as="h2" className={styles.title}>
            Популярные услуги
          </Heading>
          <Text className={styles.subtitle}>
            Выберите подходящую услугу и найдите исполнителя
          </Text>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <Card key={index} className={styles.serviceCard}>
              <div className={styles.shineElement} />

              <Image
                src={service.image}
                alt={service.title}
                width={120}
                height={120}
                className={styles.serviceImage}
                priority={index < 4}
              />

              <Heading as="h3" className={styles.serviceTitle}>
                {service.title}
              </Heading>

              <Text className={styles.serviceDescription}>
                {service.description}
              </Text>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
