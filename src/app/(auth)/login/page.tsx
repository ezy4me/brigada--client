// src/app/(auth)/login/page.tsx
"use client";

import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { LoginData } from "@/features/auth/lib/validation-schemas";
import { useAuthStore } from "@/features/auth/store/auth-store";
import { LoginForm } from "@/features/auth/ui/login-form/LoginForm";
import { PublicOnlyRoute } from "@/features/auth/ui/protected-route/ProtectedRoute";
import { AnimatedBackground } from "@/shared/ui/background/animated-background/AnimatedBackground";
import { Card, CardContent } from "@/shared/ui/card/Card";
import { Logo } from "@/shared/ui/logo/Logo";

import * as styles from "./page.css";

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: LoginData) => {
    setIsLoading(true);
    setError(null);

    try {
      const user = await login(data);
      router.push("/profile");
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.message || "Ошибка при входе");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    router.push("/forgot-password");
  };

  return (
    <PublicOnlyRoute>
      <div className={styles.page}>
        <AnimatedBackground intensity="high" />
        <div className={styles.formContainer}>
          <Card className={styles.card}>
            <CardContent>
              <div className={styles.logoWrapper}>
                <Logo href="/" />
              </div>

              <h2 className={styles.title}>Вход в аккаунт</h2>
              <p className={styles.description}>Пожалуйста, введите свои данные</p>

              {error && <div className={styles.errorMessage}>{error}</div>}

              <LoginForm
                onSubmit={handleSubmit}
                isLoading={isLoading}
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
    </PublicOnlyRoute>
  );
}
