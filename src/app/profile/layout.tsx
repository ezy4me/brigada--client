import { ProfileHeader } from "@/widgets/profile-header/ui/ProfileHeader";
import { ProfileSidebar } from "@/widgets/profile-sidebar/ui/ProfileSidebar";
import { Footer } from "@/widgets/footer/ui/Footer";
import { Header } from "@/widgets/header/ui/Header";
import * as styles from "./layout.css";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.main}>
        <ProfileSidebar />
        <main className={styles.content}>{children}</main>
      </div>
      <Footer />
    </div>
  );
}