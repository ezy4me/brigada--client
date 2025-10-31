"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/shared/ui/button/button";
import { DoorOpenIcon } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import * as styles from "./header.css";
import {
  RoleSelector,
  type Role,
} from "@/shared/ui/role-selector/RoleSelector";
import { Logo } from "@/shared/ui/logo/logo";

export interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  const pathname = usePathname();

  const getActiveRole = (): Role | undefined => {
    if (pathname?.startsWith("/executor")) return "executors";
    if (pathname?.startsWith("/customer")) return "customers";
    if (pathname?.startsWith("/company")) return "companies";
    return undefined;
  };

  const activeRole = getActiveRole();

  const handleRoleChange = (
    role: "executors" | "customers" | "companies"
  ) => {
    let path = "/";
    switch (role) {
      case "executors":
        path = "/executor";
        break;
      case "customers":
        path = "/customer";
        break;
      case "companies":
        path = "/company";
        break;
    }
    window.location.href = path;
  };

  return (
    <header className={cn(styles.header, className)}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Logo href="/" />

          <div className={styles.actions}>
            <RoleSelector
              activeRole={activeRole}
              onRoleChange={handleRoleChange}
            />
            <Link href="/login">
              <Button
                variant="white"
                size="md"
                rightIcon={<DoorOpenIcon size={24} />}
              >
                Войти
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
