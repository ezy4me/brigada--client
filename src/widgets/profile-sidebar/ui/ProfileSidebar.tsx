"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Home, User, MapPin, Settings } from "lucide-react";

import { cn } from "@/shared/lib/utils";
import { Text } from "@/shared/ui/text/Text";

import * as styles from "./profileSidebar.css";

const navItems = [
  { href: "/profile", icon: Home, label: "Главная" },
  { href: "/profile/account", icon: User, label: "Учетная запись" },
  { href: "/profile/coverage", icon: MapPin, label: "Зоны охвата" },
  { href: "/profile/settings", icon: Settings, label: "Настройки" },
];

export const ProfileSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className={styles.navItem}>
                  <Link
                    href={item.href}
                    className={cn(styles.navLink, isActive && styles.activeNavLink)}
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
