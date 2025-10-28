import { InputHTMLAttributes, forwardRef, ReactNode } from "react";
import {
  field,
  label,
  inputWrapper,
  inputContainer,
  inputContainerError,
  inputContainerSuccess,
  icon,
  leftIcon as leftIconStyle,
  rightIcon as rightIconStyle,
  input,
  helperText,
  helperTextError,
  helperTextSuccess,
} from "./input.css";
import { cn } from "@/shared/lib/utils";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helperText?: string;
  error?: boolean;
  success?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size?: "sm" | "md" | "lg";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label: labelProp,
      helperText: helperTextProp,
      error,
      success,
      leftIcon,
      rightIcon,
      size = "md",
      className,
      ...props
    },
    ref
  ) => {
    const showHelper = !!helperTextProp;
    const helper = showHelper && (
      <div
        className={cn(
          helperText,
          error && helperTextError,
          success && helperTextSuccess
        )}
      >
        {helperTextProp}
      </div>
    );

    return (
      <div className={field}>
        {labelProp && <label className={label}>{labelProp}</label>}

        <div className={inputWrapper}>
          <div
            className={cn(
              inputContainer,
              error && inputContainerError,
              success && inputContainerSuccess
            )}
          >
            {leftIcon && (
              <div className={cn(icon, leftIconStyle)}>{leftIcon}</div>
            )}

            <input
              ref={ref}
              className={cn(input({ size }), className)}
              {...props}
            />

            {rightIcon && (
              <div className={cn(icon, rightIconStyle)}>{rightIcon}</div>
            )}
          </div>
        </div>

        {helper}
      </div>
    );
  }
);

Input.displayName = "Input";
