"use client";

import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/shared/lib/utils";

import { button, iconStyles } from "./button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "white" | "black";
  size?: "sm" | "md" | "lg";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  icon?: ReactNode;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, leftIcon, icon, rightIcon, children, asChild, ...props }, ref) => {
    const isIconOnly = Boolean(icon && !children && !leftIcon && !rightIcon);

    const baseClassName = button({
      variant: variant ?? "primary",
      size: size ?? "md",
      iconOnly: isIconOnly,
    });

    const content = (
      <>
        {leftIcon && <span className={cn(iconStyles.base, iconStyles.left)}>{leftIcon}</span>}
        {icon && isIconOnly ? (
          <span className={iconStyles.base}>{icon}</span>
        ) : (
          <>
            {icon && <span className={iconStyles.base}>{icon}</span>}
            {children}
          </>
        )}
        {rightIcon && <span className={cn(iconStyles.base, iconStyles.right)}>{rightIcon}</span>}
      </>
    );

    if (asChild) {
      return <Slot ref={ref} className={cn(baseClassName, className)} {...props} />;
    }

    return (
      <button ref={ref} className={cn(baseClassName, className)} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
