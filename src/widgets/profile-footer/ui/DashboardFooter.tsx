import { Text } from "@/shared/ui/text/Text";

import * as styles from "./dashboardFooter.css";

export const DashboardFooter = () => {
  return (
    <footer className={styles.footer}>
      <Text className={styles.copyright}>
        © {new Date().getFullYear()} Бригада.ру. Все права защищены.
      </Text>
    </footer>
  );
};
