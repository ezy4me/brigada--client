import { LucideIcon } from "lucide-react";

import { Card } from "@/shared/ui/card/Card";
import { Heading } from "@/shared/ui/heading/Heading";
import { Text } from "@/shared/ui/text/Text";

import * as styles from "./profileStats.css";

export interface StatItem {
  icon: LucideIcon;
  label: string;
  value: string | number;
  description?: string;
}

interface ProfileStatsProps {
  stats: StatItem[];
  className?: string;
}

export const ProfileStats = ({ stats, className }: ProfileStatsProps) => {
  return (
    <div className={styles.statsGrid}>
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card key={index} className={styles.statCard}>
            <div className={styles.shineElement} />
            <IconComponent className={styles.statIcon} size={32} />
            <div className={styles.statContent}>
              <Text className={styles.statLabel}>{stat.label}</Text>
              <Heading as="h3" className={styles.statValue}>
                {stat.value}
              </Heading>
              {stat.description && (
                <Text className={styles.statDescription}>{stat.description}</Text>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
};
