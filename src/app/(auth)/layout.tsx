import * as styles from './layout.css';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.authLayout}>
      <div className={styles.authContainer}>
        {children}
      </div>
    </div>
  );
}