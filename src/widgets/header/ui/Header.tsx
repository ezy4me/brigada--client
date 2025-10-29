"use client";

import { FC } from "react";
import Image from "next/image";
import { Button } from "@/shared/ui/button/button";
import { ArrowRight, ChevronDown, DoorOpenIcon } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import * as styles from "./header.css";
import { Dropdown } from "@/shared/ui/dropdown/dropdown";
import { RoleSelector } from "@/shared/ui/role-selector/RoleSelector";

export interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  const handleLogin = () => {
    console.log("Login clicked");
  };

  return (
    <header className={cn(styles.header, className)}>
      {/* <div className={styles.backgroundPattern} /> */}
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoWrapper}>
            <Image
              src="/logo.svg"
              alt="Бригада.ру"
              width={40}
              height={40}
              className={styles.logoImage}
              priority
            />
            <span className={styles.logoText}>Бригада.ру</span>
          </div>

          <div className={styles.actions}>
            {/* <Dropdown
              triggerVariant="white"
              triggerSize="sm"
              triggerRightIcon={<ChevronDown/>}
              triggerText="Роль"
              items={[
                {
                  label: "Для исполнителей",
                  value: "executors",
                  onSelect: () => console.log("For Executors"),
                },
                {
                  label: "Для заказчиков",
                  value: "customers",
                  onSelect: () => console.log("For Customers"),
                },
                {
                  label: "Для компаний",
                  value: "companies",
                  onSelect: () => console.log("For Companies"),
                },
              ]}
            /> */}
            <RoleSelector
              onRoleChange={(role) => console.log("Selected role:", role)}
            />
            <Button
              onClick={handleLogin}
              variant="white"
              size="md"
              rightIcon={<DoorOpenIcon size={24} />}
            >
              Войти
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
