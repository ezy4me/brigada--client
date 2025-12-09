// src/app/profile/page.tsx
"use client";

import { useAuth } from "@/features/auth/lib/use-auth";
import { ProtectedRoute } from "@/features/auth/ui/protected-route/ProtectedRoute";
import { Loader } from "@/shared/ui/loader/Loader";
import { Section } from "@/shared/ui/section/Section";
import { Text } from "@/shared/ui/text/Text";
import { ProfileHome } from "@/widgets/profile-home/ui/ProfileHome";

import * as styles from "./profile.css";

export default function ProfilePage() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <Loader size="lg" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className={styles.errorContainer}>
        <Text>Ошибка загрузки профиля</Text>
        <Text>Пожалуйста, войдите в систему</Text>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className={styles.section}>
        <div className={styles.container}>
          <ProfileHome />
        </div>
      </div>
    </ProtectedRoute>
  );
}