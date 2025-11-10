"use client";

import { ProfileExecutor } from "@/widgets/profile-executor/ui/ProfileExecutor";
import { ProfileCustomer } from "@/widgets/profile-customer/ui/ProfileCustomer";
import { ProfileCompany } from "@/widgets/profile-company/ui/ProfileCompany";
import { Section } from "@/shared/ui/section/Section";
import { Heading } from "@/shared/ui/heading/Heading";
import { Text } from "@/shared/ui/text/Text";
import * as styles from "./profile.css";

const useMockUserRole = () => {
  return {
    data: "executor",
    isLoading: false,
    isError: false,
    isSuccess: true,
  };
};

export default function ProfilePage() {
  const { data: userRole, isLoading, isError } = useMockUserRole();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !userRole) {
    return <Text>Ошибка загрузки профиля</Text>;
  }

  let profileContent;

  switch (userRole) {
    case "executor":
      profileContent = <ProfileExecutor />;
      break;
    case "customer":
      profileContent = <ProfileCustomer />;
      break;
    case "company":
      profileContent = <ProfileCompany />;
      break;
    default:
      profileContent = <div>Доступ запрещён</div>;
  }

  return <Section className={styles.section}>{profileContent}</Section>;
}
