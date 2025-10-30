import Link from "next/link";
import Image from "next/image";

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

      <h1 className={styles.title}>Страница авторизации</h1>
      <p className={styles.description}>Войдите в свой аккаунт</p>
    </div>
  );
}
