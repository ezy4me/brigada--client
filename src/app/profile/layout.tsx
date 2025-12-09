import { Footer } from "@/widgets/footer/ui/Footer";
import { MobileProfileNav } from "@/widgets/mobile-profile-nav/ui/MobileProfileNav";
import { ProfileHeader } from "@/widgets/profile-header/ui/ProfileHeader";
import { ProfileSidebar } from "@/widgets/profile-sidebar/ui/ProfileSidebar";

import * as styles from "./layout.css";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.page}>
      <ProfileHeader />
      <div className={styles.main}>
        <ProfileSidebar />
        <main className={styles.content}>
          {children}
          <MobileProfileNav />
        </main>
      </div>
      <Footer />
    </div>
  );
}
