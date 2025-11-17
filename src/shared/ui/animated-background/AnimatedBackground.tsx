"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Hammer,
  Lightbulb,
  Briefcase,
  Settings,
  Zap,
  Home,
  PaintBucket,
  Cog,
} from "lucide-react";
import * as styles from "./animatedBackground.css";

const icons = [
  { Icon: Wrench, size: 24 },
  { Icon: Hammer, size: 28 },
  { Icon: Lightbulb, size: 22 },
  { Icon: Briefcase, size: 26 },
  { Icon: Settings, size: 24 },
  { Icon: Zap, size: 20 },
  { Icon: Home, size: 30 },
  { Icon: PaintBucket, size: 25 },
  { Icon: Cog, size: 23 },
];

interface AnimatedBackgroundProps {
  intensity?: "low" | "medium" | "high";
  className?: string;
}

export const AnimatedBackground = ({
  intensity = "medium",
  className,
}: AnimatedBackgroundProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getIconCount = () => {
    switch (intensity) {
      case "low":
        return 16;
      case "medium":
        return 24;
      case "high":
        return 32;
      default:
        return 16;
    }
  };

  if (!isClient) {
    return <div className={styles.container} />;
  }

  const iconCount = getIconCount();

  return (
    <div className={`${styles.container} ${className || ""}`}>
      {Array.from({ length: iconCount }).map((_, index) => {
        const icon = icons[index % icons.length];
        const IconComponent = icon.Icon;

        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const endX = Math.random() * 100;
        const endY = Math.random() * 100;

        const duration = 20 + Math.random() * 20;
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={index}
            className={styles.icon}
            initial={{ x: `${startX}vw`, y: `${startY}vh`, rotate: 0 }}
            animate={{
              x: `${endX}vw`,
              y: `${endY}vh`,
              rotate: 360,
            }}
            transition={{
              x: {
                duration,
                repeat: Infinity,
                ease: "linear",
                delay,
              },
              y: {
                duration,
                repeat: Infinity,
                ease: "linear",
                delay,
              },
              rotate: {
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{
              width: `${icon.size}px`,
              height: `${icon.size}px`,
              color: `hsl(${Math.random() * 360}, 50%, 70%)`,
            }}
          >
            <IconComponent size={icon.size} />
          </motion.div>
        );
      })}
    </div>
  );
};
