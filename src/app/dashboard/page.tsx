"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/shared/ui/card/Card";
import { Button } from "@/shared/ui/button/Button";
import { Text } from "@/shared/ui/text/Text";
import { Heading } from "@/shared/ui/heading/Heading";
import { Section } from "@/shared/ui/section/Section";
import { RoleSelector } from "@/features/role-selector/ui/RoleSelector";
import { User, Briefcase, Building } from "lucide-react";
import * as styles from "./page.css";

type UserRole = "executors" | "customers" | "companies";

export default function DashboardPage() {
  const router = useRouter();
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      // const response = await fetch('/api/user/role');
      // const data = await response.json();
      // setUserRole(data.role);
      setUserRole("executors");
    };

    fetchUserRole();
  }, []);

  if (!userRole) {
    return (
      <Section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.selectRoleContainer}>
            <Heading as="h1" className={styles.title}>
              Добро пожаловать!
            </Heading>
            <Text className={styles.description}>
              Выберите, какую роль вы хотите использовать на платформе
            </Text>

            <div className={styles.roleSelectorWrapper}>
              <RoleSelector
                onRoleChange={(role) => setUserRole(role as UserRole)}
              />
            </div>

            <div className={styles.footer}>
              <Button
                variant="outline"
                size="md"
                onClick={() => router.push("/")}
              >
                На главную
              </Button>
            </div>
          </div>
        </div>
      </Section>
    );
  }

  let dashboardContent;
  let dashboardTitle = "Дашборд";

  switch (userRole) {
    case "executors":
      dashboardTitle = "Личный кабинет исполнителя";
      dashboardContent = (
        <>
          <div className={styles.statCard}>
            <User size={32} />
            <div>
              <Text>Ваши профили</Text>
              <Heading as="h3">1</Heading>
            </div>
          </div>
          <div className={styles.statCard}>
            <Briefcase size={32} />
            <div>
              <Text>Активные заказы</Text>
              <Heading as="h3">5</Heading>
            </div>
          </div>
          <div className={styles.statCard}>
            <Building size={32} />
            <div>
              <Text>Рейтинг</Text>
              <Heading as="h3">4.8</Heading>
            </div>
          </div>
        </>
      );
      break;

    case "customers":
      dashboardTitle = "Личный кабинет заказчика";
      dashboardContent = (
        <>
          <div className={styles.statCard}>
            <User size={32} />
            <div>
              <Text>Ваши профили</Text>
              <Heading as="h3">1</Heading>
            </div>
          </div>
          <div className={styles.statCard}>
            <Briefcase size={32} />
            <div>
              <Text>Активные заказы</Text>
              <Heading as="h3">3</Heading>
            </div>
          </div>
          <div className={styles.statCard}>
            <Building size={32} />
            <div>
              <Text>Отзывы</Text>
              <Heading as="h3">2</Heading>
            </div>
          </div>
        </>
      );
      break;

    case "companies":
      dashboardTitle = "Личный кабинет компании";
      dashboardContent = (
        <>
          <div className={styles.statCard}>
            <User size={32} />
            <div>
              <Text>Ваши профили</Text>
              <Heading as="h3">1</Heading>
            </div>
          </div>
          <div className={styles.statCard}>
            <Briefcase size={32} />
            <div>
              <Text>Активные заказы</Text>
              <Heading as="h3">12</Heading>
            </div>
          </div>
          <div className={styles.statCard}>
            <Building size={32} />
            <div>
              <Text>Команда</Text>
              <Heading as="h3">24</Heading>
            </div>
          </div>
        </>
      );
      break;

    default:
      dashboardContent = <Text>Неизвестная роль</Text>;
  }

  return (
    <Section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.roleSelectorWrapper}>
            <RoleSelector
              initialRole={userRole}
              onRoleChange={(role) => setUserRole(role as UserRole)}
            />
          </div>
          <Heading as="h1" className={styles.title}>
            {dashboardTitle}
          </Heading>
        </div>

        <div className={styles.statsGrid}>
          {dashboardContent}
        </div>

        <div className={styles.footer}>
          <Button
            variant="outline"
            size="md"
            onClick={() => router.push("/")}
          >
            На главную
          </Button>
          <Button
            variant="primary"
            size="md"
            onClick={() => console.log("Logout")}
          >
            Выйти
          </Button>
        </div>
      </div>
    </Section>
  );
}