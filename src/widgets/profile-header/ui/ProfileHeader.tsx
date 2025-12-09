"use client";

import { useRouter } from "next/navigation";

import { User, LogOut, Settings, Briefcase, Users } from "lucide-react";

import { useAuth } from "@/features/auth/lib/use-auth";
import { Avatar } from "@/shared/ui/avatar/Avatar";
import { Dropdown } from "@/shared/ui/dropdown/Dropdown";
import { Logo } from "@/shared/ui/logo/Logo";
import { Text } from "@/shared/ui/text/Text";

import * as styles from "./profileHeader.css";

export const ProfileHeader = () => {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleMenuItemSelect = (value: string) => {
    if (value === "logout") {
      handleLogout();
    } else if (value === "profile") {
      router.push("/profile");
    } else if (value === "orders") {
      router.push("/profile/orders");
    } else if (value === "settings") {
      router.push("/profile/settings");
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const userMenuItems = [
    { label: "Профиль", value: "profile", icon: User },
    { label: "Мои заказы", value: "orders", icon: Briefcase },
    ...(user?.role === "company" ? [{ label: "Команда", value: "team", icon: Users }] : []),
    { label: "Настройки", value: "settings", icon: Settings },
    { label: "Выйти", value: "logout", icon: LogOut, variant: "danger" as const },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoSection}>
            <Logo href="/" />
          </div>

          <div className={styles.userSection}>
            {user && (
              <div className={styles.userInfo}>
                <Text className={styles.userName}>{user.name || user.email.split("@")[0]}</Text>
                <Text className={styles.userEmail}>{user.email}</Text>
              </div>
            )}
            <Dropdown
              trigger={
                <button className={styles.avatarTrigger}>
                  <Avatar
                    src={user?.avatar || "/user-avatar.jpg"}
                    alt="Аватар"
                    className={styles.avatar}
                  />
                </button>
              }
              items={userMenuItems.map((item) => ({
                ...item,
                icon: <item.icon size={16} />,
                onSelect: () => handleMenuItemSelect(item.value),
              }))}
              className={styles.dropdown}
              align="end"
              sideOffset={8}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
