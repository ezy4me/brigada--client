"use client";

import { FC } from "react";
import Image from "next/image";
import { Button } from "@/shared/ui/button/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import * as styles from "./header.css";

export interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  const handleLogin = () => {
    console.log("Login clicked");
  };

  return (
    <header className={cn(styles.header, className)}>
      <div className={styles.backgroundPattern} />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoWrapper}>
            <Image
              src="/logo.svg"
              alt="Бригада.ру"
              width={40}
              height={40}
              className={styles.logoImage}
              priority
            />
            <span className={styles.logoText}>Бригада.ру</span>
          </div>

          <div className={styles.actions}>
            <Button
              onClick={handleLogin}
              variant="outline"
              size="sm"
              rightIcon={<ArrowRight size={24} />}
            >
              Войти
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
