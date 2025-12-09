// src/widgets/profile-home/ui/ProfileHome.tsx
"use client";

import { Briefcase, CheckCircle, Star } from "lucide-react";

import { useAuth } from "@/features/auth/lib/use-auth";
import { Heading } from "@/shared/ui/heading/Heading";
import { Text } from "@/shared/ui/text/Text";

import * as styles from "./profileHome.css";

export const ProfileHome = () => {
  const { user } = useAuth();

  const getRoleDisplayName = (role: string) => {
    switch (role) {
      case 'executor':
        return 'Исполнитель';
      case 'customer':
        return 'Заказчик';
      case 'company':
        return 'Компания';
      default:
        return role;
    }
  };

  const getStatsData = (role: string) => {
    switch (role) {
      case 'executor':
        return [
          { icon: <Briefcase />, value: "0", label: "Активных заказов" },
          { icon: <CheckCircle />, value: "0", label: "Выполнено" },
          { icon: <Star />, value: "0", label: "Рейтинг" },
        ];
      case 'customer':
        return [
          { icon: <Briefcase />, value: "0", label: "Текущих проектов" },
          { icon: <CheckCircle />, value: "0", label: "Завершено" },
          { icon: <Star />, value: "0", label: "Избранных" },
        ];
      case 'company':
        return [
          { icon: <Briefcase />, value: "0", label: "Активных заказов" },
          { icon: <CheckCircle />, value: "0", label: "Выполнено" },
          { icon: <Star />, value: "0", label: "Рейтинг компании" },
        ];
      default:
        return [
          { icon: <Briefcase />, value: "0", label: "Активных" },
          { icon: <CheckCircle />, value: "0", label: "Завершено" },
          { icon: <Star />, value: "0", label: "Рейтинг" },
        ];
    }
  };

  if (!user) return null;

  const statsData = getStatsData(user.role);

  return (
    <div className={styles.container}>
      <Heading as="h1" size="h2">
        Личный кабинет
      </Heading>
      
      <div className={styles.userInfo}>
        <Text size="body1" weight="bold">
          Добро пожаловать, {user.name || user.email.split('@')[0]}!
        </Text>
        <Text color="secondary" size="body2" style={{ marginTop: '4px' }}>
          Email: {user.email}
        </Text>
        <Text color="secondary" size="body2" style={{ marginTop: '4px' }}>
          Роль: {getRoleDisplayName(user.role)}
        </Text>
      </div>

      <div className={styles.stats}>
        {statsData.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <div style={{ 
              color: 'var(--color-brand-primary)',
              marginBottom: '12px'
            }}>
              {stat.icon}
            </div>
            <Heading size="h3" weight="bold" style={{ marginBottom: '4px' }}>
              {stat.value}
            </Heading>
            <Text color="secondary" size="body2">
              {stat.label}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};