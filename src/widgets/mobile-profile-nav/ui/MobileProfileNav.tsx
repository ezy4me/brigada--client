"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Home, User, MapPin, Settings } from "lucide-react";

import { cn } from "@/shared/lib/utils";
import { Text } from "@/shared/ui/text/Text";

import * as styles from "./mobileProfileNav.css";

const navItems = [
  { href: "/profile", icon: Home, label: "Главная" },
  { href: "/profile/account", icon: User, label: "Аккаунт" },
  { href: "/profile/coverage", icon: MapPin, label: "Зоны" },
  { href: "/profile/settings", icon: Settings, label: "Настройки" },
];

export const MobileProfileNav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.mobileNav}>
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(styles.navItem, isActive && styles.activeNavItem)}
          >
            <item.icon className={cn(styles.navIcon, isActive && styles.activeNavIcon)} size={20} />
            <p className={cn(styles.navText, isActive && styles.activeNavText)}>{item.label}</p>
          </Link>
        );
      })}
    </nav>
  );
};
