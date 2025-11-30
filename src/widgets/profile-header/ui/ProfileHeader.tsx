"use client";

import { useState } from "react";

import { User, LogOut, Settings, Briefcase, Users } from "lucide-react";

import { Avatar } from "@/shared/ui/avatar/Avatar";
import { Dropdown } from "@/shared/ui/dropdown/Dropdown";
import { Logo } from "@/shared/ui/logo/Logo";
import { Text } from "@/shared/ui/text/Text";

import * as styles from "./profileHeader.css";

const userMenuItems = [
  { label: "Профиль", value: "profile", icon: User },
  { label: "Мои заказы", value: "orders", icon: Briefcase },
  { label: "Команда", value: "team", icon: Users },
  { label: "Настройки", value: "settings", icon: Settings },
  { label: "Выйти", value: "logout", icon: LogOut },
];

const userData = {
  name: "Иван Петров",
  email: "ivan@example.com",
};

export const ProfileHeader = () => {
  const [userRole, setUserRole] = useState<"executor" | "customer" | "company">("executor");

  const handleMenuItemSelect = (value: string) => {
    if (value === "logout") {
      console.log("Logout clicked");
    } else if (value === "profile") {
      console.log("Go to profile");
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoSection}>
            <Logo href="/" />
          </div>

          <div className={styles.userSection}>
            <div className={styles.userInfo}>
              {/* <Text className={styles.userName}>{userData.name}</Text> */}
              <Text className={styles.userEmail}>{userData.email}</Text>
            </div>
            <Dropdown
              trigger={
                <button className={styles.avatarTrigger}>
                  <Avatar src="/user-avatar.jpg" alt="Аватар" className={styles.avatar} />
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
