"use client";

import { FC } from 'react';
import { cn } from '@/shared/lib/utils';
import * as styles from './footer.css';

export interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn(styles.footer, className)}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Бригада.ру. Все права защищены.
        </p>
        <a href="/privacy" className={styles.link}>
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
};