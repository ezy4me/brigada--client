import { ComponentPropsWithoutRef, forwardRef } from "react";
import Image from "next/image";
import { cn } from "@/shared/lib/utils";
import * as styles from "./avatar.css";

export interface AvatarProps
  extends Omit<ComponentPropsWithoutRef<typeof Image>, "src"> {
  src?: string;
  fallbackSrc?: string;
  className?: string;
}

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  (
    { src, fallbackSrc = "/avatar-placeholder.png", className, ...props },
    ref
  ) => {
    return (
      <Image
        ref={ref}
        src={src || fallbackSrc}
        // alt="Аватар пользователя"
        width={40}
        height={40}
        className={cn(styles.avatar, className)}
        onError={(e) => {
          if (
            src &&
            fallbackSrc &&
            (e.target as HTMLImageElement).src !== fallbackSrc
          ) {
            (e.target as HTMLImageElement).src = fallbackSrc;
          }
        }}
        {...props}
      />
    );
  }
);

Avatar.displayName = "Avatar";
