"use client";

import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { RegisterFormFields } from "@/features/auth/lib/use-register-form";
import { useAuthStore } from "@/features/auth/store/auth-store";
import { PublicOnlyRoute } from "@/features/auth/ui/protected-route/ProtectedRoute";
import { RegisterForm } from "@/features/auth/ui/register-form/RegisterForm";
import { AnimatedBackground } from "@/shared/ui/background/animated-background/AnimatedBackground";
import { Card, CardContent } from "@/shared/ui/card/Card";
import { Logo } from "@/shared/ui/logo/Logo";

import * as styles from "./page.css";

export default function RegisterPage() {
  const router = useRouter();
  const register = useAuthStore((state) => state.register);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleRegister = async (data: RegisterFormFields, role: string) => {
    setError(null);
    setSuccessMessage(null);

    try {
      const registerData = {
        email: data.email.trim(),
        password: data.password,
        role: role as "customer" | "performer" | "company",
      };

      if (role === "company") {
        Object.assign(registerData, {
          companyName: data.companyName?.trim(),
          inn: data.inn?.trim(),
        });
      }

      console.log("Register data:", registerData);

      await register(registerData);

      if (useAuthStore.getState().isAuthenticated) {
        router.push("/profile");
      } else {
        setSuccessMessage(
          "Регистрация успешна! Пожалуйста, проверьте вашу почту для подтверждения email."
        );
      }
    } catch (err: any) {
      console.error("Registration error:", err);
      setError(err.message || "Ошибка регистрации");
    }
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

              <h2 className={styles.title}>Создать аккаунт</h2>
              <p className={styles.description}>Выберите роль и заполните данные</p>

              {error && <div className={styles.errorMessage}>{error}</div>}

              {successMessage && <div className={styles.successMessage}>{successMessage}</div>}

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
    </PublicOnlyRoute>
  );
}
