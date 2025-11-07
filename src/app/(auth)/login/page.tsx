"use client";

import { Card, CardContent } from "@/shared/ui/card/Card";
import { Logo } from "@/shared/ui/logo/Logo";
import { LoginForm } from "@/features/auth/ui/login-form/LoginForm";
import Link from "next/link";
import * as styles from "./page.css";

export default function LoginPage() {
  const handleLogin = async (data: {
    email: string;
    password: string;
  }) => {
    console.log("Login attempt:", data);
  };

  return (
    <div className={styles.page}>
      <div className={styles.formContainer}>
        <Card className={styles.card}>
          <CardContent>
            <div className={styles.logoWrapper}>
              <Logo href="/" />
            </div>

            <h2 className={styles.title}>Вход в аккаунт</h2>
            <p className={styles.description}>
              Пожалуйста, введите свои данные
            </p>

            <LoginForm onSubmit={handleLogin} />

            <div className={styles.footer}>
              <p className={styles.footerText}>
                Нет аккаунта?{" "}
                <Link href="/register" className={styles.footerLink}>
                  Зарегистрироваться
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
