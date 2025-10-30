"use client";

import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { button, iconStyles } from "./button.css";
import { cn } from "@/shared/lib/utils";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "destructive" | "white";
  size?: "sm" | "md" | "lg";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      leftIcon,
      rightIcon,
      children,
      asChild,
      ...props
    },
    ref
  ) => {
    const baseClassName = button({
      variant: variant ?? "default",
      size: size ?? "md",
    });

    const content = (
      <>
        {leftIcon && (
          <span className={cn(iconStyles.base, iconStyles.left)}>
            {leftIcon}
          </span>
        )}
        {children}
        {rightIcon && (
          <span className={cn(iconStyles.base, iconStyles.right)}>
            {rightIcon}
          </span>
        )}
      </>
    );

    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={cn(baseClassName, className)}
          {...props}
        />
      );
    }

    return (
      <button
        ref={ref}
        className={cn(baseClassName, className)}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
