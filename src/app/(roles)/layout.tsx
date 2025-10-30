import * as styles from './layout.css';

export default function RolesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.rolesLayout}>
      <main className={styles.main}>{children}</main>
    </div>
  );
}