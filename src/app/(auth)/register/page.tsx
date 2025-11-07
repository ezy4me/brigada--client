"use client";

import { useState } from "react";
import { Card, CardContent } from "@/shared/ui/card/Card";
import { Logo } from "@/shared/ui/logo/Logo";
import { RegisterForm } from "@/features/auth/ui/register-form/RegisterForm";
import Link from "next/link";
import * as styles from "./page.css";
import { Role } from "@/features/role-selector/ui/RoleSelector";

export default function RegisterPage() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const handleRegister = async (data: {
    email: string;
    password: string;
    confirmPassword: string;
    fullName: string;
  }) => {
    console.log("Registration attempt:", { ...data, role: selectedRole });
  };

  return (
    <div className={styles.page}>
      <div className={styles.formContainer}>
        <Card className={styles.card}>
          <CardContent>
            <div className={styles.logoWrapper}>
              <Logo href="/" />
            </div>

            <h1 className={styles.title}>Создать аккаунт</h1>
            <p className={styles.description}>
              Выберите роль и заполните данные
            </p>

            <RegisterForm
              onSubmit={handleRegister}
              selectedRole={selectedRole}
              onRoleChange={setSelectedRole}
            />

            <div className={styles.footer}>
              <p className={styles.footerText}>
                Уже есть аккаунт?{" "}
                <Link href="/login" className={styles.footerLink}>
                  Войти
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}