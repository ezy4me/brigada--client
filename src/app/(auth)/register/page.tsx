"use client";

import { Card, CardContent } from "@/shared/ui/card/Card";
import { Logo } from "@/shared/ui/logo/Logo";
import { RegisterForm } from "@/features/auth/ui/register-form/RegisterForm";
import Link from "next/link";
import * as styles from "./page.css";
import { AnimatedBackground } from "@/shared/ui/animated-background/AnimatedBackground";
import { RegisterFormFields } from "@/features/auth/lib/use-register-form";
import { Role } from "@/features/role-selector/ui/RoleSelector";

export default function RegisterPage() {
  const handleRegister = async (data: RegisterFormFields, role: Role) => {
    console.log("Registration attempt:", { ...data, role });
  };

  return (
    <div className={styles.page}>
      <AnimatedBackground intensity="high" />

      <div className={styles.formContainer}>
        <Card className={styles.card}>
          <CardContent>
            <div className={styles.logoWrapper}>
              <Logo href="/" />
            </div>

            <h2 className={styles.title}>Создать аккаунт</h2>
            <p className={styles.description}>
              Выберите роль и заполните данные
            </p>

            <RegisterForm onSubmit={handleRegister} />

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