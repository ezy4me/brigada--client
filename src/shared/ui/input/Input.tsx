"use client";

import { InputHTMLAttributes, forwardRef, ReactNode, useRef, useEffect } from "react";

import IMask from "imask";

import { cn } from "@/shared/lib/utils";

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

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helperText?: string;
  error?: boolean;
  success?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size?: "sm" | "md" | "lg";
  mask?: string;
  maskOptions?: any;
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
      mask,
      maskOptions,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const maskRef = useRef<any>(null);

    useEffect(() => {
      if (mask && inputRef.current) {
        maskRef.current = IMask(inputRef.current, {
          mask,
          ...maskOptions,
        });

        return () => {
          if (maskRef.current) {
            maskRef.current.destroy();
          }
        };
      }
    }, [mask, maskOptions]);

    const handleRef = (element: HTMLInputElement) => {
      inputRef.current = element;

      if (typeof ref === "function") {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };

    const showHelper = !!helperTextProp;
    const helper = showHelper && (
      <div className={cn(helperText, error && helperTextError, success && helperTextSuccess)}>
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
            {leftIcon && <div className={cn(icon, leftIconStyle)}>{leftIcon}</div>}

            <input ref={handleRef} className={cn(input({ size }), className)} {...props} />

            {rightIcon && <div className={cn(icon, rightIconStyle)}>{rightIcon}</div>}
          </div>
        </div>

        {helper}
      </div>
    );
  }
);

Input.displayName = "Input";
