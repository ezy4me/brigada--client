import Link from "next/link";
import { LoginForm } from "@/features/auth/ui/login-form/LoginForm";
import * as styles from "./page.css";
import { Logo } from "@/shared/ui/logo/logo";

export default function LoginPage() {
  return (
    <div className={styles.page}>
     <Logo href="/" />

      <h1 className={styles.title}>Вход в аккаунт</h1>
      <p className={styles.description}>Пожалуйста, введите свои данные</p>

      <LoginForm />

      <div className={styles.footer}>
        <p className={styles.footerText}>
          Нет аккаунта?{" "}
          <Link href="/register" className={styles.footerLink}>
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
}