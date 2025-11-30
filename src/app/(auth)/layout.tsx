import { AnimatedBackground } from "@/shared/ui/background/animated-background/AnimatedBackground";

import * as styles from "./layout.css";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.authLayout}>
      <AnimatedBackground intensity="high" />

      <div className={styles.authContainer}>{children}</div>
    </div>
  );
}
