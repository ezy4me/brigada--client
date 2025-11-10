"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Briefcase,
  User,
  Settings,
  Users,
  FileText,
} from "lucide-react";
import { Card } from "@/shared/ui/card/Card";
import { Text } from "@/shared/ui/text/Text";
import * as styles from "./profileSidebar.css";
import { clsx } from "clsx";

const navItems = [
  { href: "/profile", icon: Home, label: "Главная" },
  { href: "/profile/orders", icon: Briefcase, label: "Мои заказы" },
  { href: "/profile/profile", icon: User, label: "Профиль" },
  { href: "/profile/team", icon: Users, label: "Команда" },
  { href: "/profile/documents", icon: FileText, label: "Документы" },
  { href: "/profile/settings", icon: Settings, label: "Настройки" },
];

export const ProfileSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.card}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className={styles.navItem}>
                  <Link
                    href={item.href}
                    className={clsx(styles.navLink, {
                      [styles.activeNavLink]: isActive,
                    })}
                  >
                    <item.icon className={styles.navIcon} size={20} />
                    <Text className={styles.navText}>{item.label}</Text>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
