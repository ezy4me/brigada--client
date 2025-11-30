import { TextareaHTMLAttributes, forwardRef, ReactNode } from "react";

import { cn } from "@/shared/lib/utils";

import {
  field,
  label,
  textareaWrapper,
  textareaContainer,
  textareaContainerError,
  textareaContainerSuccess,
  icon,
  leftIcon as leftIconStyle,
  rightIcon as rightIconStyle,
  textarea,
  helperText,
  helperTextError,
  helperTextSuccess,
} from "./textarea.css";

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  label?: string;
  helperText?: string;
  error?: boolean;
  success?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size?: "sm" | "md" | "lg";
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
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
      <div className={cn(helperText, error && helperTextError, success && helperTextSuccess)}>
        {helperTextProp}
      </div>
    );

    return (
      <div className={field}>
        {labelProp && <label className={label}>{labelProp}</label>}

        <div className={textareaWrapper}>
          <div
            className={cn(
              textareaContainer,
              error && textareaContainerError,
              success && textareaContainerSuccess
            )}
          >
            {leftIcon && <div className={cn(icon, leftIconStyle)}>{leftIcon}</div>}

            <textarea ref={ref} className={textarea({ size })} {...props} />

            {rightIcon && <div className={cn(icon, rightIconStyle)}>{rightIcon}</div>}
          </div>
        </div>

        {helper}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
