import { ProfileExecutor } from "@/widgets/profile-executor/ui/ProfileExecutor";
import { ProfileCustomer } from "@/widgets/profile-customer/ui/ProfileCustomer";
import { ProfileCompany } from "@/widgets/profile-company/ui/ProfileCompany";
import { Text } from "@/shared/ui/text/Text";
import { Section } from "@/shared/ui/section/Section";
import * as styles from "./profile.css";

const useMockUserRole = () => {
  return {
    userRole: "executor",
    isLoading: false,
    isError: false,
    isSuccess: true,
  };
};

export default function ProfilePage() {
  const { userRole, isLoading, isError } = useMockUserRole();

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

  return (
    <div className={styles.section}>
      <div className={styles.container}>{profileContent}</div>
    </div>
  );
}
