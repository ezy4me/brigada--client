// shared/ui/logo/Logo.tsx
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/shared/lib/utils";
import * as styles from "./logo.css";

export type LogoOrientation = "vertical" | "horizontal";

interface LogoProps {
  href?: string;
  className?: string;
  orientation?: LogoOrientation;
}

export const Logo = ({
  href = "/",
  className,
  orientation = "horizontal",
}: LogoProps) => {
  return (
    <Link
      href={href}
      className={cn(styles.logoWrapper({ orientation }), className)}
    >
      <Image
        src="/logo.png"
        alt="Бригада.ру"
        width={40}
        height={40}
        className={styles.logoImage}
      />
      <span className={styles.logoText}>
        Бригада
        <span className={styles.logoTextSecondary}>.ру</span>
      </span>
    </Link>
  );
};