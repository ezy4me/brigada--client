"use client";

import { FC } from "react";
import { cn } from "@/shared/lib/utils";
import {
  ArrowUp,
  Mail,
  Phone,
  Globe,
  LucidePlane,
  Users,
  Send,
} from "lucide-react";
import * as styles from "./footer.css";

export interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={cn(styles.footer, className)}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Клиентам</h3>
            <a href="/clients" className={styles.link}>
              Сайт для клиентов
            </a>
            <a href="/login/client" className={styles.link}>
              Вход для клиента
            </a>
            <a href="/executors" className={styles.link}>
              Все исполнители
            </a>
            <a href="/support" className={styles.link}>
              Поддержка
            </a>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Исполнителям</h3>
            <a href="/executors" className={styles.link}>
              Сайт для исполнителей
            </a>
            <a href="/login/executor" className={styles.link}>
              Вход для исполнителей
            </a>
            <a href="/orders" className={styles.link}>
              Заказы
            </a>
            <a href="/support" className={styles.link}>
              Поддержка
            </a>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Компания</h3>
            <a href="/about" className={styles.link}>
              О компании
            </a>
            <a href="/advertising" className={styles.link}>
              Реклама на Бригада.ру
            </a>
            <a href="/legal" className={styles.link}>
              Правовые документы
            </a>
          </div>

          <div className={styles.socialSection}>
            <h3 className={styles.sectionTitle}>Социальные сети</h3>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <Globe size={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Send size={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Users size={20} />
              </a>
            </div>

            <div className={styles.contactInfo}>
              <a href="mailto:brigada.ru_official@mail.ru" className={styles.link}>
                <Mail size={16} /> brigada.ru_official@mail.ru
              </a>
              <a href="tel:+71234567890" className={styles.link}>
                <Phone size={16} /> +7 987 416 61 32
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Бригада.ру. Все права защищены.
          </p>

          <div className={styles.bottomLinks}>
            <a href="/privacy" className={styles.bottomLink}>
              Политика конфиденциальности
            </a>
            <a href="/terms" className={styles.bottomLink}>
              Условия использования
            </a>
          </div>

          <button onClick={scrollToTop} className={styles.backToTopButton}>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
