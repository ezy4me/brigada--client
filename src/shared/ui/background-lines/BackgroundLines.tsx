"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/shared/lib/utils";
import * as styles from "./backgroundLines.css";

const BackgroundLines = () => {
  const [lineCount, setLineCount] = useState(23);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setLineCount(12);
      } else {
        setLineCount(23);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const lines = new Array(lineCount).fill(null);

  return (
    <motion.div
      className={cn(styles.wrapper)}
      style={{ height: "100vh", width: "100vw" }}
    >
      {lines.map((_, index) => (
        <motion.div
          key={index}
          className={styles.line}
          initial={{ opacity: 0.05 }}
          animate={{ opacity: [0.05, 0.2, 0.05] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        />
      ))}
    </motion.div>
  );
};

export default BackgroundLines;
