import Link from "next/link";
import Image from "next/image";
import { cn } from "@/shared/lib/utils";
import { logoWrapper, logoImage, logoText } from "./logo.css";

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
      className={cn(logoWrapper({ orientation }), className)}
    >
      <Image
        src="/logo.svg"
        alt="Бригада.ру"
        width={40}
        height={40}
        className={logoImage}
      />
      <span className={logoText}>Бригада.ру</span>
    </Link>
  );
};
