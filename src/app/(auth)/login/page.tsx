"use client";

import { Card, CardContent } from "@/shared/ui/card/Card";
import { Logo } from "@/shared/ui/logo/Logo";
import { LoginForm } from "@/features/auth/ui/login-form/LoginForm";
import Link from "next/link";
import * as styles from "./page.css";
import { useRouter } from "next/navigation";
import { AnimatedBackground } from "@/shared/ui/animated-background/AnimatedBackground";
import { LoginData } from "@/features/auth/lib/validation-schemas";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (data: LoginData) => {
    console.log("Login attempt:", data);
    // await loginApi(data);
    router.push("/profile");
  };

  const handleForgotPassword = () => {
    router.push("/forgot-password");
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

            <h2 className={styles.title}>Вход в аккаунт</h2>
            <p className={styles.description}>
              Пожалуйста, введите свои данные
            </p>

            <LoginForm 
              onSubmit={handleLogin} 
              onForgotPassword={handleForgotPassword}
            />

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