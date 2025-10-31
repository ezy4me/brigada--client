import Link from "next/link";
import Image from "next/image";
import { LoginForm } from "@/features/auth/ui/login-form/LoginForm";
import * as styles from "./page.css";

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <Link href="/" className={styles.logoWrapper}>
        <Image
          src="/logo.svg"
          alt="Бригада.ру"
          width={40}
          height={40}
          className={styles.logoImage}
          priority
        />
        <span className={styles.logoText}>Бригада.ру</span>
      </Link>

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