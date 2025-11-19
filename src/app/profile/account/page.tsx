import { ProfileForm } from "@/features/profile/ui/ProfileForm";
import { Heading } from "@/shared/ui/heading/Heading";
import { Text } from "@/shared/ui/text/Text";
import * as styles from "./account.css";
import { AccountSwitcherCard } from "@/features/account-switcher/ui/AccountSwitcherCard";

const accounts = [
  {
    id: 1,
    name: "Иван Петров",
    role: "Исполнитель",
    avatar: "/user-avatar.jpg",
  },
  {
    id: 2,
    name: "Иван Петров",
    role: "Заказчик",
    avatar: "/user-avatar.jpg",
  },
];

export default async function AccountPage() {
  const role = "executor";

  return (
    <div className={styles.container}>
      <Heading as="h1" className={styles.title}>
        Личный кабинет
      </Heading>
      <Text className={styles.description}>
        Управляйте своими данными и настройками
      </Text>

      <ProfileForm
        initialData={{ firstName: "Иван", lastName: "Петров" }}
      />

      <AccountSwitcherCard accounts={accounts} />
    </div>
  );
}