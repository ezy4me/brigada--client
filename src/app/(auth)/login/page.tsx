import * as styles from './page.css';

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Страница авторизации</h1>
      <p className={styles.description}>Войдите в свой аккаунт</p>
    </div>
  );
}