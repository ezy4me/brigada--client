// app/profile/account/page.tsx
"use client";

import { useAuth } from "@/features/auth/lib/use-auth";
import { AccountSwitcherCard } from "@/features/account-switcher/ui/AccountSwitcherCard";
import { ProfileForm } from "@/features/profile/ui/ProfileForm";
import { CompanyProfileForm } from "@/features/profile/ui/CompanyProfileForm";
import { Heading } from "@/shared/ui/heading/Heading";
import { Text } from "@/shared/ui/text/Text";

import * as styles from "./account.css";

export default function AccountPage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className={styles.container}>
        <Text>Пожалуйста, войдите в систему</Text>
      </div>
    );
  }

  const getFormComponent = () => {
    switch (user.role) {
      case "customer":
      case "performer":
        return <ProfileForm />;
      case "company":
        return <CompanyProfileForm />;
      default:
        return <Text>Роль не поддерживается</Text>;
    }
  };

  return (
    <div className={styles.container}>
      <Heading as="h1" className={styles.title}>
        Личный кабинет
      </Heading>
      <Text className={styles.description}>Управляйте своими данными и настройками</Text>

      {getFormComponent()}

      {(user.role === "performer" || user.role === "customer") && (
        <AccountSwitcherCard accounts={[]} />
      )}
    </div>
  );
}
