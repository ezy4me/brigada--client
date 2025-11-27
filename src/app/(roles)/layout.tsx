import { Footer } from '@/widgets/footer/ui/Footer';
import * as styles from './layout.css';
import { Header } from '@/widgets/header/ui/Header';
import { SearchProvider } from '@/features/hero-finder/lib/search-context';

export default function RolesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SearchProvider>
      <div className={styles.rolesLayout}>
        <Header/>
        <main className={styles.main}>{children}</main>
        <Footer/>
      </div>
    </SearchProvider>
  );
}