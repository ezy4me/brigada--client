import { Loader } from "@/shared/ui/loader/Loader";
import { Section } from "@/shared/ui/section/Section";

import * as styles from "./loading.css";

export default function Loading() {
  return (
    <div className={styles.page}>
      <Section className={styles.section}>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.loaderContainer}>
              <Loader size="lg" />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
