"use client";

import { useState } from "react";
import { Card, CardContent } from "@/shared/ui/card/Card";
import { Logo } from "@/shared/ui/logo/Logo";
import { ForgotPasswordForm } from "@/features/auth/ui/forgot-password-form/ForgotPasswordForm";
import Link from "next/link";
import * as styles from "./page.css";
import { AnimatedBackground } from "@/shared/ui/animated-background/AnimatedBackground";

export default function ForgotPasswordPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleResetRequest = async (data: { email: string }) => {
    console.log("Password reset request:", data);
    setIsSubmitted(true);
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

            {isSubmitted ? (
              <>
                <h1 className={styles.title}>Проверьте почту</h1>
                <p className={styles.description}>
                  Мы отправили ссылку для сброса пароля на ваш email.
                </p>
                <div className={styles.footer}>
                  <p className={styles.footerText}>
                    <Link href="/login" className={styles.footerLink}>
                      Войти
                    </Link>
                  </p>
                </div>
              </>
            ) : (
              <>
                <h1 className={styles.title}>Забыли пароль?</h1>
                <p className={styles.description}>
                  Введите email, и мы вышлем вам ссылку для сброса
                </p>

                <ForgotPasswordForm onSubmit={handleResetRequest} />

                <div className={styles.footer}>
                  <p className={styles.footerText}>
                    <Link href="/login" className={styles.footerLink}>
                      Вспомнили? Войти
                    </Link>
                  </p>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
