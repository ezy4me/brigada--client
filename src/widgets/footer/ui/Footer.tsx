"use client";

import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { ArrowUp, Mail, Phone } from "lucide-react";

import { cn } from "@/shared/lib/utils";

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
            <h3 className={styles.sectionTitle}>Заказчикам</h3>
            <div className={styles.sectionDivider} />
            <Link href="/customer" className={styles.link}>
              Сайт для заказчика
            </Link>
            <Link href="/login" className={styles.link}>
              Вход для заказчика
            </Link>
            <Link href="/" className={styles.link}>
              Все исполнители
            </Link>
            <a href="/support" className={styles.link}>
              Поддержка
            </a>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Компаниям</h3>
            <div className={styles.sectionDivider} />
            <Link href="/company" className={styles.link}>
              Сайт для компании
            </Link>
            <Link href="/login" className={styles.link}>
              Вход для компании
            </Link>
            <Link href="/" className={styles.link}>
              Заказы
            </Link>
            <Link href="/support" className={styles.link}>
              Поддержка
            </Link>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Исполнителям</h3>
            <div className={styles.sectionDivider} />
            <Link href="/executors" className={styles.link}>
              Сайт для исполнителей
            </Link>
            <Link href="/login/executor" className={styles.link}>
              Вход для исполнителей
            </Link>
            <Link href="/orders" className={styles.link}>
              Заказы
            </Link>
            <Link href="/support" className={styles.link}>
              Поддержка
            </Link>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Бригада.ру</h3>
            <div className={styles.sectionDivider} />
            <Link href="/" className={styles.link}>
              О нас
            </Link>
            <Link href="/" className={styles.link}>
              Реклама на платформе
            </Link>
            <Link href="/" className={styles.link}>
              Правовые документы
            </Link>
          </div>

          <div className={styles.socialSection}>
            <h3 className={styles.sectionTitle}>Социальные сети</h3>
            <div className={styles.sectionDivider} />
            <div className={styles.socialLinks}>
              <a 
                href="https://vk.com/brigadaru_official" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="ВКонтакте"
              >
                <Image 
                  src="/social/vk.svg" 
                  alt="ВКонтакте" 
                  width={24} 
                  height={24}
                  className={styles.socialIcon}
                />
              </a>
              <a 
                href="https://t.me/brigadaru_official" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Telegram"
              >
                <Image 
                  src="/social/tg.svg" 
                  alt="Telegram" 
                  width={24} 
                  height={24}
                  className={styles.socialIcon}
                />
              </a>
              <a 
                href="https://dzen.ru/id/68a3844988f25a24853a3ef5" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Дзен"
              >
                <Image 
                  src="/social/dzen.svg" 
                  alt="Дзен" 
                  width={24} 
                  height={24}
                  className={styles.socialIcon}
                />
              </a>
            </div>

            <div className={styles.contactInfo}>
              <a href="mailto:brima@mybrigada.ru" className={styles.link}>
                <Mail size={16} /> brima@mybrigada.ru
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

          <button 
            onClick={scrollToTop} 
            className={styles.backToTopButton}
            aria-label="Наверх"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};